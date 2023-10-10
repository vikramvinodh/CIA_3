import React from 'react';
import { Jodit } from 'jodit'
import JoditReact from "jodit-react";
import { FileUpload } from './Service';
import upload from "./icons/upload-image.png"
import code from "./icons/coding.png"
import Faqs from './Faqs';
import Select2 from 'react-select2-wrapper';
import { fetchBlogAuthor, fetchBlogCategory } from '../../functions';
import Internal from './Internal';
import Bottom from './Bottom';

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
            BlogCategories: [],
            BlogAuthor: [],
            slug: '',
            flag: false,
            readTime: "",
            interested: "",
            view: "",
            smalldesc: '',
            share: '',

            bottom_section: [],
            Bot_content: '',
            Bot_value: '',
            internal_section: [],
            Int_content: '',
            Int_value: '',
            meta_key: "",
            meta_title: "",
            meta_description: "",
            meta_robots: ""

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

        this.bindMethods();
    }


    bindMethods() {
        this.fetch = this.fetch.bind(this);
        this.uploadImageButton = this.uploadImageButton.bind(this);
        this.codeBlockButton = this.codeBlockButton.bind(this);
        this.imageUpload = this.imageUpload.bind(this);
        this.insertImage = this.insertImage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleFaqQuestionChange = this.handleFaqQuestionChange.bind(this);
        this.handleFaqAnswerChange = this.handleFaqAnswerChange.bind(this);
        this.addFaqs = this.addFaqs.bind(this);
        this.clearFaqs = this.clearFaqs.bind(this);
        this.transformOptions = this.transformOptions.bind(this);
        this.removeFaq = this.removeFaq.bind(this);
        this.handleSubmite = this.handleSubmite.bind(this);
        this.setContent = this.setContent.bind(this);
    }

    componentDidMount() {
        this.uploadImageButton();
        this.codeBlockButton();
        this.fetch();
    }

    fetch = async () => {
        const data = await fetchBlogCategory();
        this.setState({ BlogCategories: data })
        const author = await fetchBlogAuthor();
        this.setState({ BlogAuthor: author })
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


    handleBotcontentChange = (event) => {
        this.setState({ Bot_content: event.target.value });
    };

    handleBotvalueChange = (event) => {
        this.setState({ Bot_value: event.target.value });
    };

    addBot = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                bottom_section: [
                    ...prevState.bottom_section,
                    { title: prevState.Bot_content, value: prevState.Bot_value },
                ],
                Bot_content: '',
                Bot_value: '',
            };
        });
    };

    handleIntvalueChange = (event) => {
        this.setState({ Int_value: event.target.value });
    };

    handleIntcontentChange = (event) => {
        this.setState({ Int_content: event.target.value });
    };

    addInt = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                internal_section: [
                    ...prevState.internal_section,
                    { title: prevState.Int_content, value: prevState.Int_value },
                ],
                Int_content: '',
                Int_value: '',
            };
        });
    };

    clearFaqs = () => {
        this.setState({ faqs: [] });
    };

    clearBottom = () => {
        this.setState({ bottom_section: [] });
    };

    clearInternal = () => {
        this.setState({ internal_section: [] });
    };

    transformOptions(options) {
        return options.map(option => ({ id: option._id, text: option.name }));
    }

    removeFaq = (index) => {
        const newFaqs = [...this.state.faqs];
        newFaqs.splice(index, 1);
        this.setState({ faqs: newFaqs });
    };

    removeBottom = (index) => {
        const newFaqs = [...this.state.bottom_section];
        newFaqs.splice(index, 1);
        this.setState({ bottom_section: newFaqs });
    };

    removeInternal = (index) => {
        const newFaqs = [...this.state.internal_section];
        newFaqs.splice(index, 1);
        this.setState({ internal_section: newFaqs });
    };

    async handleSubmite(e) {
        e.preventDefault();
        const {
            values,
            title,
            author,
            category,
            slug,
            // faqs,
            // share,
            // readTime,
            // interested,
            // view,
            // meta_key,
            smalldesc,
            bottom_section,
            internal_section,
            meta_description,
            meta_title,
            meta_robots
        } = this.state

        if (!values || !title || !author || !category || !slug) {
            window.alert("All the fields should be filled")
            return
        }

        const data = {
            body: values,
            title: title,
            author: author,
            category: category,
            slug: slug,
            smalldesc: smalldesc,
            // faqs: faqs,
            // readTime: readTime,
            // interested: interested,
            // view: view,
            // share: share,
            // meta_key: meta_key,
            bottom_section: bottom_section,
            internal_section: internal_section,
            meta_title: meta_title,
            meta_description: meta_description,
            meta_robots: meta_robots
        }

        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/blog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response = await res.json();

        // on submite it lands on the page from where this add blog page is open
        const urlMap = {
            'list': '../blog-list',
            'category': '../manage-blogs',
            'author': '../manage-authors'
        };

        if (response.success) {
            const top = window.location.href;
            const key = Object.keys(urlMap).find(key => top.includes(key));
            window.location = urlMap[key] || '../blog-list';
        }

    }

    setContent = () => { }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex align-item-center my-4">
                    <button className="btn btn-secondary btn-sm" onClick={() => window.location.href='../manage-blogs'}>Back</button>
                </div>
                <div className="row">
                    <label className="col-2 form-label">Title : </label>
                    <input type="text" className='input-text col-9' id="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} /> <br />
                </div>

                <div className="row mt-4">
                    <label className="col-2 form-label">Page Slug : </label>
                    <input type="text" className='input-text col-9' id="title" value={this.state.slug} onChange={(e) => this.setState({ slug: e.target.value })} /> <br />
                </div>

                {/* <div className="row mt-4">
                    <label className="col-2 form-label">meta_key : </label>
                    <input type="text" className='input-text col-9' id="title" value={this.state.meta_key} onChange={(e) => this.setState({ meta_key: e.target.value })} /> <br />
                </div> */}

                <div className="row mt-4">
                    <label className="col-2 form-label">meta_title : </label>
                    <input type="text" className='input-text col-9' id="title" value={this.state.meta_title} onChange={(e) => this.setState({ meta_title: e.target.value })} /> <br />
                </div>

                <div className="row mt-4">
                    <label className="col-2 form-label">meta_description : </label>
                    <input type="text" className='input-text col-9' id="title" value={this.state.meta_description} onChange={(e) => this.setState({ meta_description: e.target.value })} /> <br />
                </div>

                <div className="row mt-4">
                    <label className="col-2 form-label">meta_robots : </label>
                    <input type="text" className='input-text col-9' id="title" value='index,follow' onChange={(e) => this.setState({ meta_robots: e.target.value })} /> <br />
                </div>

                {/* <div className="row mt-4">
                    <label className="col-2 form-label">readTime : </label>
                    <input type="number" className='input-text col-9' id="title" value={this.state.readTime} onChange={(e) => this.setState({ readTime: e.target.value })} /> <br />
                </div>

                <div className="row mt-4">
                    <label className="col-2 form-label">interested : </label>
                    <input type="number" className='input-text col-9' id="title" value={this.state.interested} onChange={(e) => this.setState({ interested: e.target.value })} /> <br />
                </div> */}

                {/* <div className="row mt-4">
                    <label className="col-2 form-label">view : </label>
                    <input type="number" className='input-text col-9' id="title" value={this.state.view} onChange={(e) => this.setState({ view: e.target.value })} /> <br />
                </div> */}

                <div className="row mt-4">
                    <label className="col-2 form-label">Small Description: </label>
                    <input type="text" className='input-text col-9' id="title" value={this.state.smalldesc} onChange={(e) => this.setState({ smalldesc: e.target.value })} /> <br />
                </div>

                {/* <div className="row mt-4">
                    <label className="col-2 form-label">share: </label>
                    <input type="number" className='input-text col-9' id="title" value={this.state.share} onChange={(e) => this.setState({ share: e.target.value })} /> <br />
                </div> */}

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
                    <div className="col-9">
                        <Select2
                            className="form-control"
                            value={this.state.author || ''}
                            onChange={(e) => this.setState({ author: e.target.value })}
                            data={this.transformOptions(this.state.BlogAuthor)}
                            placeholder="select"
                        />
                    </div>
                </div>

                <div className="row mt-4">
                    <label className="col-2 form-label">Category:</label>
                    <div className="col-9">
                        <Select2
                            className="form-control"
                            value={this.state.category || ''}
                            onChange={(e) => this.setState({ category: e.target.value })}
                            data={this.transformOptions(this.state.BlogCategories)}
                            placeholder="select"
                        />
                    </div>
                </div>

                {/* <div className="row mt-4">
                    <label className="text-center">FAQS:</label>
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

                </div> */}

                {/* <div className="row mt-4">
                    <label className="text-center">Internal Block:</label>
                    <div className='input-text col-12 p-0 me-5' style={{ border: 0 }}>

                        <Internal
                            Int_content={this.state.Int_content}
                            Int_answer={this.state.Int_value}
                            onIntcontentChange={this.handleIntcontentChange}
                            onIntvalueChange={this.handleIntvalueChange}
                            onAddInt={this.addInt}
                            onClearInt={this.clearInternal}
                            internal_section={this.state.internal_section}
                            onRemoveInt={this.removeInternal}
                        />
                    </div>

                </div>

                <div className="row mt-4">
                    <label className="text-center">Bottom Block:</label>
                    <div className='input-text col-12 p-0 me-5' style={{ border: 0 }}>

                        <Bottom
                            Faq_question={this.state.Bot_content}
                            Faq_answer={this.state.Bot_value}
                            onFaqQuestionChange={this.handleBotcontentChange}
                            onFaqAnswerChange={this.handleBotvalueChange}
                            onAddFaqs={this.addBot}
                            onClearFaqs={this.clearBottom}
                            bottom_section={this.state.bottom_section}
                            onRemoveFaq={this.removeBottom}
                        />
                    </div>

                </div> */}

                <div className="d-flex align-items-center justify-content-center mt-5">
                    <button disabled={this.state.flag && this.state.flag ? true : false} className='btn btn-success btn-sm' onClick={this.handleSubmite}>Add Block</button>
                </div>

                <br />

            </React.Fragment>
        )
    }
}

export default JoditEditor;
