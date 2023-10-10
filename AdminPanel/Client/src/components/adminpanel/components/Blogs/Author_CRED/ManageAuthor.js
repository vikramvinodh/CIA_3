import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import * as bi from 'react-icons/bi';
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../../../../alert/Loading';
import { DeletBlog, DeletBlogAuthor, fetchBlogAuthor, FetchAuthblogs } from '../../functions';
import { EditSwitch } from '../../Switch';

function ManageBlogs() {
    const navigate = useNavigate();
    const increment = 10; // load 10 blogs at a time
    const [numBlogs, setNumBlogs] = useState(9);
    const [data, setData] = useState([]);
    const [blog, setBlog] = useState([]);
    const [cat_id, setId] = useState('');
    const [modal_id, setModalId] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermblog, setSearchTermblog] = useState('');


     /**
     * Fetch initally Author and show in the list 
     */
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetchBlogAuthor();
            setData(fetchedData);
        };
        fetchData();
        if (data) {
            setLoading(false)
        }
    }, []);

     /**
     * function for searching the category
     */
    const filteredData = data?.filter((ele) => {
        return ele.name?.toLowerCase().includes(searchTerm?.toLowerCase() ?? '');
    });

     /**
     * function for search the blogs 
     */
    const filteredBlog = blog?.filter((ele) =>
        ele.title?.toLowerCase().includes(searchTermblog?.toLowerCase() ?? '')
    );

    /**
     * this button is showed when there are more then 9 blogs and when loadmore is clicked this function is called
     */
    async function handleFetchBlogs(id) {
        setId(id)
        const data = await FetchAuthblogs(id, numBlogs);
        setBlog(data);
    }

    // this increas the number of blogs fetching 
    async function handleInc() {
        setNumBlogs(numBlogs + increment);
        await handleFetchBlogs(cat_id);
    }

    // function to close the modal to delete the blog or categry
    const handleClose = () => setShow(false);
    const handleShow = (e, id, modalid) => {
        setShow(true);
        setDeleteId(id);
        setModalId(modalid)
    };

    /**
     * Function to delete the categor or the blogs this calls the api to delete and sends the id
     */
    const handleDelete = (e) => {
        e.preventDefault();
        switch (modal_id) {
            case 1:
                console.log(":land")
                DeletBlogAuthor(deleteId);
                setData(data.filter((ele) => ele._id !== deleteId));
                setShow(false);
                break;

            case 2:
                DeletBlog(deleteId);
                // setData(blog.filter((ele) => ele._id !== deleteId));
                window.location.reload();
                setShow(false);
                break;

            default:
                break;
        }

    };

    if (loading) return (<Loading />)

    return (
        <section className='manage-blogs container p-5 mt-5'>
            <h2 className='blog-heading'>Manage Author</h2>
            <div className='d-flex justify-content-around align-items-center'>
                <div className='blog-panel-category'>
                    <div className='d-flex justify-content-between align-items-center p-3'>
                        <b>Author</b>
                        <button className='blog-panel-btn' onClick={() => navigate('../create-author')}>
                            <p className='m-1 px-2'>Create</p>
                            <AiOutlinePlusCircle className='mx-2' />
                        </button>
                    </div>
                    <div className='d-flex align-items-center flex-column'>
                        <input
                            type='search'
                            placeholder='Search.....'
                            className='search-input'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <hr width='200px' />
                    </div>
                    <div className='blog-panel-category-body'>
                        {filteredData.map((ele) => (
                            <div className='blog-panel-list' key={ele._id}>

                                <div type='button' onClick={() => handleFetchBlogs(ele._id)}>
                                    <small className='px-2'>{ele.name} <small className='text-secondary'>&lt; {ele.updatedAt} &gt;</small></small>
                                </div>

                                <div className='d-flex'>
                                    <Link to={`../edit-author/${ele._id}`}>
                                        <EditSwitch />
                                    </Link>
                                    <bi.BiTrash
                                        className='text-danger mx-3 my-1'
                                        cursor='pointer'
                                        data-toggle='tooltip'
                                        data-placement='bottom'
                                        title='Delete'
                                        onClick={(e) => handleShow(e, ele._id, 1)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='blog-panel-content blog-panel-category pt-0'>
                    <div className='d-flex justify-content-center align-items-center py-2'>
                        <button className='blog-panel-btn' onClick={() => navigate('../create-blog/author')}>
                            <p className='m-1 px-2'>Add Blog</p>
                            <AiOutlinePlusCircle className='mx-2' />
                        </button>
                    </div>
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <input
                            type='search'
                            placeholder='Search.....'
                            className='search-input'
                            value={searchTermblog}
                            onChange={(e) => setSearchTermblog(e.target.value)}
                        />
                        <hr className='mb-1' width='400px' />
                    </div>
                    <div className='blog-panel-container'>
                        <div className='row'>
                            {filteredBlog && filteredBlog.length > 0 ? (
                                filteredBlog.map((ele, index) => (
                                    <div className='col-3 blog-panel-item' key={index}>
                                        <div className='text-center'>
                                            <p className='small m-0'>{ele.title}</p>
                                            <p className='small m-0'>{ele.author.name}</p>
                                        </div>
                                        <div className='blog-panel-actions'>
                                            <Link to={`../edit-blog/${ele._id}`}>
                                                <EditSwitch />
                                            </Link>
                                            <bi.BiTrash
                                                className='text-danger my-2'
                                                cursor='pointer'
                                                data-toggle='tooltip'
                                                title='Delete'
                                                onClick={(e) => handleShow(e, ele._id, 2)}
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No blogs available</div>
                            )}
                        </div>
                        {blog.length > 8 ?
                            <div className="d-flex justify-content-center align-items-end">
                                <button className="btn btn-success btn-sm" onClick={() => handleInc()}>Load More</button>
                            </div>
                            :
                            ""
                        }
                    </div>
                </div>

            </div>

            {/* Delete Modal */}
            <Modal show={show} backdrop="static" animation={true} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Delete Modal end */}

        </section >
    )
}

export default ManageBlogs
