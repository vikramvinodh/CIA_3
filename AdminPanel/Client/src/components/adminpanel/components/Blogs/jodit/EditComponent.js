import React, { Component } from 'react'
import { Jodit } from 'jodit'
import JoditReact from "jodit-react";
import { FileUpload } from './Service';
import upload from "./icons/upload-image.png"
import code from "./icons/coding.png"
import Faqs from './Faqs';
import { fetchOneBlog, fetchBlogAuthor, fetchBlogCategory } from '../../functions';
import withRouter from './withRouter';
import { Link } from 'react-router-dom';
import Internal from './Internal';
import Bottom from './Bottom';

class EditComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editorContent: '',
            values: '',
            title: '',
            author: '',
            category: '',
            // faqs: [],
            // Faq_question: '',
            // Faq_answer: '',
            BlogCategories: [],
            BlogAuthor: [],
            slug: '',
            flag: false,
            // readTime: '',
            // interested: '',
            // view: '',
            smalldesc: '',
            // share: '',

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
        const id = this.props.params.id;
        this.uploadImageButton();
        this.codeBlockButton();
        this.fetch(id);
    }

    fetch = async (id) => {
        const blog = await fetchOneBlog(id);
        this.setState({
            editorContent: blog.body,
            title: blog.title,
            author: blog.author.name,
            category: blog.category.name,
            // faqs: blog.faqs,
            slug: blog.slug,
            // readTime: blog.readTime,
            // interested: blog.interested,
            // view: blog.view,
            smalldesc: blog.smalldesc,
            // share: blog.share,
            bottom_section: blog.bottom_section,
            internal_section: blog.internal_section,
            // meta_key: blog.meta_key,
            meta_title: blog.meta_title,
            meta_description: blog.meta_description,
            meta_robots: blog.meta_robots
        })

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
        const { values, title, author, category, faqs, slug, readTime, interested, view, smalldesc, share, bottom_section, internal_section, meta_key, meta_description, meta_title, meta_robots } = this.state

        if (!values || !title || !author || !category || !slug) {
            window.alert("All the fields should be filled")
            return
        }

        const data = {
            body: values,
            title: title,
            // faqs: faqs,
            slug: slug,
            // readTime: readTime,
            // interested: interested,
            // view: view,
            smalldesc: smalldesc,
            // share: share,
            bottom_section: bottom_section,
            internal_section: internal_section,
            // meta_key: meta_key,
            meta_title: meta_title,
            meta_description: meta_description,
            meta_robots: meta_robots
        }

        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/blog/${this.props.params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response = await res.json();

        if (response.success) {
            const show = window.location.href;

            if (show.includes('list'))
                return window.location = "../../blog-list"

            window.location = "../manage-blogs"
        }
    }
    setContent = () => { }

    render() {
        return (
            <React.Fragment>
                <div className='container  jodit-edit-component'>

                    <div className="d-flex justify-content-center my-4 text-decoration-underline">
                        <h3>Edit Blog</h3>
                    </div>

                    <div className="d-flex align-item-center my-4">
                        <Link to={`${(window.location.href).includes('list') ? "../blog-list" : "../manage-blogs"}`} className="btn btn-danger btn-sm">Back</Link>
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
                    </div>

                    <div className="row mt-4">
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


                    <div className="row mt-4 jodit-body">
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

                    <div className="row mt-4 author">
                        <label className="col-2 form-label">Author : </label>
                        <input type="text" className='input-text col-9  text-center' id="title" value={this.state.author} disabled /> <br />
                    </div>

                    <div className="row mt-4">
                        <label className="col-2 form-label">Category:</label>
                        <input type="text" className='input-text col-9 text-center' id="title" value={this.state.category} disabled /> <br />
                    </div>

                    {/* <div className="row mt-4">
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

                    <div className="row mt-4">
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

                    </div>

                    <div className="d-flex align-items-center justify-content-center mt-5">
                        <button disabled={this.state.flag && this.state.flag ? true : false} className='btn btn-success btn-sm' onClick={this.handleSubmite}>Save</button>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(EditComponent)