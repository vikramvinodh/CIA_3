import React, { useRef } from 'react';
import { Jodit } from 'jodit'
import JoditReact from "jodit-react";
import { FileUpload } from './Service';
import upload from "./icons/upload-image.png"
import code from "./icons/coding.png"
import Faqs from './Faqs';
import Select2 from 'react-select2-wrapper';
import { fetchBlogCategory } from '../../functions';


class JoditEditor extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            editorContent: '',
            values: '',
            title: '',
            author: '',
            category: '',
            faqs: [],
            Faq_question: '',
            Faq_answer: '',
            BlogCategories: []
        }

        this.editorConfig = {
            readonly: false,
            autofocus: true,
            tabIndex: 1,

            askBeforePasteHTML: false,
            askBeforePasteFromWord: false,
            defaultActionOnPaste: 'insert_clear_html',

            placeholder: 'Write something awesome ...',
            beautyHTML: true,
            toolbarButtonSize: "large",
            buttons: [
                'source',
                '|', 'bold', 'italic',
                '|', 'ul', 'ol',
                '|', 'font', 'fontsize', 'brush', 'paragraph',
                '|', 'table', 'link', 'image',
                '|', 'left', 'center', 'right', 'justify',
                '|', 'undo', 'redo',
                '|', 'hr', 'eraser', 'fullsize',
                '|'
            ],
            extraButtons: ["uploadImage", "codeBlock", "|"]
        }
    }

    componentDidMount() {
        this.uploadImageButton();
        this.codeBlockButton();
        this.fetch();
    }

    fetch = async () => {
        const data = await fetchBlogCategory();
        this.setState({ BlogCategories: data })
    }

    uploadImageButton = () => {
        Jodit.defaultOptions.controls.uploadImage = {
            name: 'Upload image to Cloudinary',
            iconURL: upload,
            exec: (async (editor) => {
                await this.imageUpload(editor);
            })
        };
    }

    codeBlockButton = () => {
        Jodit.defaultOptions.controls.codeBlock = {
            name: 'Code Block',
            iconURL: code,
            exec: (async (editor) => {
                const pre = editor.selection.j.createInside.element('pre');
                pre.style = 'background-color:#F0F0F0; text-align:left; padding:10px'
                pre.innerHTML = `${editor.selection.html}`;
                editor.selection.insertNode(pre);
            }),
        };
    }

    imageUpload = (editor) => {

        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async function () {

            const imageFile = input.files[0];

            if (!imageFile) {
                return;
            }

            if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
                return;
            }

            const imageInfo = await FileUpload(imageFile);;

            this.insertImage(editor, imageInfo.url);

        }.bind(this);
    }

    insertImage = (editor, url) => {
        const image = editor.selection.j.createInside.element('img');
        image.setAttribute('src', url);
        editor.selection.insertNode(image);
    }
    onChange = (value) => {
        this.setState({ values: value });
        console.log(this.state)
    }

    handleFaqQuestionChange = (event) => {
        this.setState({ Faq_question: event.target.value });
    };

    handleFaqAnswerChange = (event) => {
        this.setState({ Faq_answer: event.target.value });
    };

    addFaqs = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                faqs: [
                    ...prevState.faqs,
                    { title: prevState.Faq_question, value: prevState.Faq_answer },
                ],
                Faq_question: '',
                Faq_answer: '',
            };
        });
    };

    clearFaqs = () => {
        this.setState({ faqs: [] });
    };

    transformOptions(options) {
        return options.map(option => ({ id: option._id, text: option.name }));
    }

    removeFaq = (index) => {
        const newFaqs = [...this.state.faqs];
        newFaqs.splice(index, 1);
        this.setState({ faqs: newFaqs });
    };

    setContent = (newContent) => { }

    render() {
        return (
            <React.Fragment>

                <div className="row">
                    <label className="col-2 form-label">Title : </label>
                    <input type="text" className='input-text col-9' id="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} /> <br />
                </div>

                <div className="row mt-4">
                    <label className="col-2 form-label">Body : </label>
                    <div className='input-text col-9 p-0 m' style={{ border: 0 }}>
                        <JoditReact
                            value={this.state.editorContent}
                            config={this.editorConfig}
                            onChange={this.onChange.bind(this)}
                            onBlur={newContent => this.setContent(newContent)}
                        />
                    </div>
                </div>

                <div className="row mt-4">
                    <label className="col-2 form-label">Author : </label>
                    <input type="text" className='input-text col-9' id="author" value={this.state.author} onChange={(e) => this.setState({ author: e.target.value })} /> <br />
                </div>
                <div className="row mt-4">
                    <label className="col-2 form-label">Category:</label>
                    <div className="col-9">
                        <Select2
                            className="form-control"
                            value={this.state.category || ''}
                            onSelect={(value) => this.setState({ category: value })}
                            data={this.transformOptions(this.state.BlogCategories)}
                        />
                    </div>
                </div>


                <div className="row mt-4">
                    <div className='input-text col-12 p-0 me-5' style={{ border: 0 }}>

                        <Faqs
                            Faq_question={this.state.Faq_question}
                            Faq_answer={this.state.Faq_answer}
                            onFaqQuestionChange={this.handleFaqQuestionChange}
                            onFaqAnswerChange={this.handleFaqAnswerChange}
                            onAddFaqs={this.addFaqs}
                            onClearFaqs={this.clearFaqs}
                            faqs={this.state.faqs}
                            onRemoveFaq={this.removeFaq}
                        />
                    </div>
                </div>
                {/* 
                <br />
                <div>
                    title: {JSON.stringify(this.state.title)}
                    <br />
                    editor:{JSON.stringify(this.state.values)}
                    <br />
                    Author:{JSON.stringify(this.state.author)}
                    <br />
                    category:{JSON.stringify(this.state.category)}
                    <br />
                    faqs:{JSON.stringify(this.state.faqs)}
                </div> */}

            </React.Fragment>
        )
    }
}

export default JoditEditor;
