import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlogAuthor() {

    const [name, setName] = useState("");
    const [flag, setFlag] = useState(false);
    const [designation, setDesignation] = useState("");
    const [description, setDescription] = useState("");
    const [linkdin, setlinkdin] = useState("");
    const [facebook, setfacebook] = useState("");
    const [twitter, settwitter] = useState("");
    const [year, setYear] = useState("");
    const [bottomBlock, setBottomBlock] = useState([]);
    const [internalBlock, setInternalBlock] = useState([]);
    const [bottomBlockTitle, setBottomBlockTitle] = useState("");
    const [bottomBlockValue, setBottomBlockValue] = useState("");
    const [internalBlockTitle, setinternalBlockTitle] = useState("");
    const [internalBlockValue, setInternalBlockValue] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleAdd = () => {
        const newBlock = { title: bottomBlockTitle, value: bottomBlockTitle };
        setBottomBlock([...bottomBlock, newBlock,]);

    };
    const handleInternalAdd = () => {
        const newBlock = { title: internalBlockTitle, value: internalBlockValue };
        setInternalBlock([...internalBlock, newBlock]);
    };

    const handleClear = (id) => {
        switch (id) {
            case 1:
                setInternalBlock("")
                break;
            case 2:
                setBottomBlock("")
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (name === '' || designation === '' || description === '') {
            setFlag(true);
        } else {
            setFlag(false);
        }
    }, [name, designation, description, bottomBlock, internalBlock]);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('designation', designation);
        formData.append('description', description);
        formData.append('linkdin', linkdin);
        formData.append('facebook', facebook);
        formData.append('twitter', twitter);
        formData.append('bottomBlock', JSON.stringify(bottomBlock));
        formData.append('internalBlock', JSON.stringify(internalBlock));
        formData.append('photo', image);
        formData.append('since_year', year);

        // Make API call to submit data
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog-author`, formData)

        if (res.data.success) {
            console.log(res.data)
            navigate("../manage-authors")
        }

    };

    return (
        <div className="category-blog-component container my-5 py-5">
            <div className="d-flex align-item-center my-4">
                <button className="btn btn-secondary btn-sm" onClick={() => navigate('../manage-authors')}>Back</button>
            </div>
            <h2 className="text-decoration-underline">Add New Author : </h2>

            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />

            <label>
                Designation:
                <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            </label>
            <br />

            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>

            <label>
                Linkdin:
                <input type="text" value={linkdin} onChange={(e) => setlinkdin(e.target.value)} />
            </label>

            <label>
                FaceBook:
                <input type="text" value={facebook} onChange={(e) => setfacebook(e.target.value)} />
            </label>

            <label>
                Twitter:
                <input type="text" value={twitter} onChange={(e) => settwitter(e.target.value)} />
            </label>

            <label>
                Since Year:
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </label>

            <label>
                Image:
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
            </label>

            <br />
            <h2>Bottom Block</h2>

            <label>
                Title:
                <input
                    type="text"
                    value={bottomBlockTitle}
                    onChange={(e) => setBottomBlockTitle(e.target.value)}
                />
            </label>
            <br />

            <label>
                Value:
                <input
                    type="text"
                    value={bottomBlockValue}
                    onChange={(e) => setBottomBlockValue(e.target.value)}
                />
            </label>
            <br />

            <div className="d-flex align-items-center">
                <button disabled={bottomBlock.length > 0 ? true : false} onClick={handleAdd}>Add Block</button>
                <button className="danger mx-2" disabled={bottomBlock.length <= 0 ? true : false} onClick={() => handleClear(2)}>Clear</button>
            </div>
            <br />

            <h2>Current Bottom Block:</h2>
            {
                bottomBlock && bottomBlock.map((block, index) => (
                    <div key={index}>
                        <h4>{block.title}</h4>
                        <p>{block.value}</p>
                    </div>
                ))
            }
            <br />

            <hr />
            <h2>Internal Block</h2>
            <label>
                Title:
                <input
                    type="text"
                    value={internalBlockTitle}
                    onChange={(e) => setinternalBlockTitle(e.target.value)}
                />
            </label>
            <br />

            <label>
                Value:
                <input
                    type="text"
                    value={internalBlockValue}
                    onChange={(e) => setInternalBlockValue(e.target.value)}
                />
            </label>
            <br />

            <div className="d-flex align-items-center">
                <button disabled={internalBlock.length > 0 ? true : false} onClick={handleInternalAdd}>Add Block</button>
                <button className="danger mx-2" disabled={internalBlock.length <= 0 ? true : false} onClick={() => handleClear(1)}>Clear</button>
            </div>
            <br />

            <h2>Current internal Block:</h2>

            {
                internalBlock && internalBlock.map((block, index) => (
                    <div key={index}>
                        <p><span className="h5">Title:</span> {block.title}</p>
                        <p>content: {block.value}</p>
                    </div>
                ))
            }

            <br />

            <button disabled={flag} onClick={handleSubmit}>Create Author</button>

        </div>
    );
}

export default CreateBlogAuthor
