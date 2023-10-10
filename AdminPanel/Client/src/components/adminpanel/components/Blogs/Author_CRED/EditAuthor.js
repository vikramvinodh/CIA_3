import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../../alert/Loading";

export default function EditAuthor() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [linkdin, setlinkdin] = useState("");
  const [facebook, setfacebook] = useState("");
  const [twitter, settwitter] = useState("");
  const [bottomBlock, setBottomBlock] = useState([]);
  const [internalBlock, setInternalBlock] = useState([]);
  const [bottomBlockTitle, setBottomBlockTitle] = useState("");
  const [bottomBlockValue, setBottomBlockValue] = useState("");
  const [internalBlockTitle, setInternalBlockTitle] = useState("");
  const [internalBlockValue, setInternalBlockValue] = useState("");
  const [image, setImage] = useState(null);
  const [year, setYear] = useState("");

  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchApiData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog-author/get-one/${id}`);
      const data = response.data.data;
      setName(data.name);
      setDesignation(data.designation);
      setDescription(data.description);
      setlinkdin(data.linkdin);
      setfacebook(data.facebook);
      settwitter(data.twitter);
      setBottomBlock(data.bottomBlock);
      setInternalBlock(data.internalBlock);
      setImage(data.photo);
      setYear(data.since_year);

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

    try {
      const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/blog-author/${id}`, formData);
      if (response.data.success) {
        navigate('../manage-authors')
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
        <button className="btn btn-secondary btn-sm" onClick={() => navigate('../manage-authors')}>Back</button>
      </div>
      <h2 className="text-decoration-underline">Edit Author : </h2>

      <div className="d-flex justify-content-center">
        <img src={process.env.REACT_APP_SERVER_URL + image} alt="-" style={{borderRadius:"60%"}} width='150px' />
      </div>

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
        Change Image:
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