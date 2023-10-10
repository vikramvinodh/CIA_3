import React, { useContext, useState } from 'react'
import Progress from '../../../../alert/Progress'
import UserContext from '../../../context/UserContext';
import SuccessModal from '../../modals/DeleteModal';
import Loading from '../../../../alert/Loading'
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [state, setState] = useState({ oldpassword: '', newpassword: '', confpassword: '', response: '' });
    const [alert, setAlert] = useState({ show: false, show1: false, show2: false, show3: false });
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false); // Add state variable and setter function
    const context = useContext(UserContext)
    const navigate = useNavigate();

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true)

        if (state.oldpassword === '') {
            setAlert({ show1: true })
            return
        }
        if (state.newpassword === '') {
            setAlert({ show2: true })
            return
        }
        if (state.confpassword === '') {
            setAlert({ show3: true })
            return
        }

        if (state.newpassword !== state.confpassword) {
            setAlert({ show: true });
            return
        }

        const respons = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/change-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ id: context.isAdmin._id, currentPassword: state.oldpassword, newPassword: state.newpassword })
        });

        const res = await respons.json();
        setState({ ...state, oldpassword: '', newpassword: '', confpassword: '', response: res.message })
        if (res) {
            setLoading(false)
            setShowModal(true); // Update showModal to true
            setTimeout(() => {
                navigate('../home')
            }, 5000);
            return
        }
    }

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Progress props={Loading} />
            <div className="container d-flex mt-3 justify-content-center">
                <div className="row-sm-1 px-5">
                    <div className="edituser p-3">
                        <h5 className="card-header text-center fw-bold bg-white mb-3 pb-3 ">
                            Change Password
                        </h5>
                        <div className="card-body">
                            <form>
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <label htmlFor="exampleInputEmail1">
                                            Old Password
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control mt-2 mb-3"
                                            name="oldpassword"
                                            value={state.oldpassword}

                                            onChange={handleChange}
                                        />
                                        {alert.show1 ? (
                                            <label className="text-danger mb-4">Required !</label>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="exampleInputEmail1">
                                            New Password
                                            <span className="text-danger"></span>
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control mt-2 mb-3"
                                            name="newpassword"
                                            value={state.newpassword}
                                            onChange={handleChange}
                                        />
                                        {alert.show2 ? (
                                            <label className="text-danger mb-4">Required !</label>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="exampleInputEmail1">
                                            Confirm Password
                                            <span className="text-danger"></span>
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control mt-2 mb-3"
                                            name="confpassword"
                                            value={state.confpassword}
                                            onChange={handleChange}
                                        />
                                        {alert.show3 ? (
                                            <label className="text-danger mb-4">Required !</label>
                                        ) : (
                                            ''
                                        )}
                                        {alert.show ? (
                                            <label className="text-danger ">Password does not match !</label>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                                <div className="text-center ">
                                    <button type="submit" className="btn btn-primary loginbtn" onClick={handleSubmit}>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <SuccessModal showModal={showModal} setShowModal={setShowModal} message={state.response} />}
            {/* Pass showModal and setShowModal as props to SuccessModal component */}
        </>
    );
};

export default ChangePassword;
