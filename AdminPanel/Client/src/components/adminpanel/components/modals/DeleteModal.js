import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


const DeleteModal = ({ showModal, setShowModal, message, modal_id, _id, id, admin }) => {
    const handleclick = async (event) => {
        let url;
        let method = 'DELETE';
        let body;


        switch (modal_id) {
            case 1:
                url = `${process.env.REACT_APP_SERVER_URL}/auth/user-delete/${_id}`;
                break;
            case 2:
                url = `${process.env.REACT_APP_SERVER_URL}/category/delete-course`;
                body = JSON.stringify({ category_id: id, courseId: _id });
                break;
            case 3:
                url = `${process.env.REACT_APP_SERVER_URL}/trainer/${_id}`;
                body = JSON.stringify({ category_id: id, courseId: _id });
                break;
            case 4:
                url = `${process.env.REACT_APP_SERVER_URL}/course/delete/${_id}`;
                break;
            case 5:
                url = `${process.env.REACT_APP_SERVER_URL}/api/testimonials/${_id}`;
                break;
            case 6:
                url = `${process.env.REACT_APP_SERVER_URL}/blog/${_id}`;
                break;
            default:
                return;
        }

        let response;
        if (body) {
            response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            });
            response = await response.json();
        } else {
            response = await axios.delete(url);
            response = response.data;
        }

        if (response.success) {
            setShowModal(false);
            window.location.reload();
        }
    }

    return (
        <React.Fragment>
            {
                admin > 0 ?
                    <Modal backdrop="static" animation={false} centered show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header>
                            <Modal.Title> <span className="text-danger"> Delete</span></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You Cannot Delete</Modal.Body>
                        <Modal.Footer>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowModal(false)}
                            >
                                Ok
                            </button>
                        </Modal.Footer>
                    </Modal>
                    :
                    <Modal backdrop="static" animation={false} centered show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header>
                            <Modal.Title> <span className="text-danger"> Delete</span></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{message}</Modal.Body>
                        <Modal.Footer>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowModal(false)}
                            >
                                No
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={(e) => handleclick()}
                            >
                                Yes
                            </button>
                        </Modal.Footer>
                    </Modal>




            }
        </React.Fragment>
    );
}


export default DeleteModal;

