import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../../alert/Loading";

export default function EditBlogCategory() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const [bottomBlock, setBottomBlock] = useState([]);
    const [internalBlock, setInternalBlock] = useState([]);
    const [bottomBlockTitle, setBottomBlockTitle] = useState("");
    const [bottomBlockValue, setBottomBlockValue] = useState("");
    const [internalBlockTitle, setInternalBlockTitle] = useState("");
    const [internalBlockValue, setInternalBlockValue] = useState("");
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchApiData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog-category/get-one/${id}`);
            const data = response.data.data;
            setName(data.name);
            setTitle(data.title);
            setDescription(data.description);
            setOrderBy(data.orderBy);
            setBottomBlock(data.bottomBlock);
            setInternalBlock(data.internalBlock);
            if (response.data.success) {
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
        }
    };

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
        fetchApiData();
    }, []);

    const handleUpdate = async () => {
        const data = {
            name,
            title,
            description,
            orderBy,
            bottomBlock,
            internalBlock
        };

        try {
            const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/blog-category/${id}`, data);
            if (response.data.success) {
                navigate('../manage-blogs')
            } else {
                window.alert(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) return (<Loading />)
    return (
        <div className="category-blog-component container my-5 py-5">

            <div className="d-flex align-item-center my-4">
                <button className="btn btn-secondary btn-sm" onClick={() => navigate('../manage-blogs')}>Back</button>
            </div>

            <h2 className="text-decoration-underline">Edit Category : </h2>

            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />

            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />

            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
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
                    onChange={(e) => setInternalBlockTitle(e.target.value)}
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

            <button onClick={handleUpdate}>Save</button>

        </div>
    );
}        