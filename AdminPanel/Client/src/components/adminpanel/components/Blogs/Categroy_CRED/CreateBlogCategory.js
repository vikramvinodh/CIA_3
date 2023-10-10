import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBlogCategory } from "../../functions";

const BlogCategory = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bottomBlock, setBottomBlock] = useState([]);
  const [internalBlock, setInternalBlock] = useState([]);
  const [flag, setFlag] = useState(false);
  const [bottomBlockTitle, setBottomBlockTitle] = useState("");
  const [bottomBlockValue, setBottomBlockValue] = useState("");
  const [internalBlockTitle, setinternalBlockTitle] = useState("");
  const [internalBlockValue, setInternalBlockValue] = useState("");
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
    if (name === '' || title === '' || description === '') {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [name, title, description, bottomBlock, internalBlock]);

  const handleSubmit = async () => {
    const data = {
      name,
      title,
      description,
      bottomBlock,
      internalBlock
    };

    // Make API call to submit data
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/blog-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const respone = await res.json();

    if (respone.success) {
      navigate('../manage-blogs')
    } else {
      window.alert(respone.message)
    }

  };

  return (
    <div className="category-blog-component container my-5 py-5">
      <div className="d-flex align-item-center my-4">
        <button className="btn btn-secondary btn-sm" onClick={() => navigate('../manage-blogs')}>Back</button>
      </div>
      <h2 className="text-decoration-underline">Add New Category : </h2>

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

      <button disabled={flag} onClick={handleSubmit}>Create Category</button>

    </div>
  );
};

export default BlogCategory;
