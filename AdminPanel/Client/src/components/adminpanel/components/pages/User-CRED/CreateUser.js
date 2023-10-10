import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Progress from '../../../../alert/Progress';
import UserContext from '../../../context/UserContext';
import Loading from '../../../../alert/Loading';

const CreateUser = () => {
    const [loading, setLoading] = useState(false)
    const { isAdmin } = useContext(UserContext)
    const [formState, setformState] = useState({ isadmin: '', userStatus: '' })
    const navigate = useNavigate();

    const handleChange = event => {
        setformState({ ...formState, [event.target.name]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true)

        const { email, password, username, isadmin, userStatus } = formState;

        const respons = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ email, password, username, isadmin, userStatus })
        });
        const data = await respons.json();

        if (data.success === 'true') {
            const timer = setTimeout(() => {
                navigate('../users')
            }, 500);
            return () => clearInterval(timer);

        } else {
            setLoading(false)
            return alert("'There was a problem creating User'")
        }
    }

    if (loading) {
        return (<Loading />)
    }

    return (
        <div className='pt-5 mt-5'>
            {/* <Progress props={Loading} /> */}
            <div className="container d-flex justify-content-center">
                <div className="row-sm-1 px-5">
                    <div className="edituser p-3">
                        <h5 className="card-header text-center fw-bold bg-white mb-3 pb-3 ">
                            Create User
                        </h5>
                        <div className="card-body">
                            <form>
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <label htmlFor="exampleInputEmail1">Full name<span className="text-danger">*</span></label>
                                        <input type="name" className="form-control mt-2 mb-4" name="username" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="exampleInputEmail1">Email<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control mt-2 mb-4" name="email" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="exampleInputEmail1">Password<span className="text-danger">*</span></label>
                                        <input type="password" className="form-control mt-2 mb-4" name="password" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="exampleInputEmail1">Is Admin<span className="text-danger">*</span></label>
                                        <select className="form-control mt-2 mb-4" value={formState.isadmin} name="isadmin" onChange={handleChange}  >
                                            {isAdmin.isadmin === 0 ?
                                                <>
                                                    <option value="" disabled >Select option</option>
                                                    <option value="0" >Super Admin</option>
                                                    <option value="1" >editor admin</option>
                                                    <option value="2" >viewer</option>
                                                    <option value="3" >Sales</option>
                                                    <option value="4">Publisher</option>
                                                </>
                                                : isAdmin.isadmin === 1 ?
                                                    <>
                                                        <option value="" disabled >Select option</option>

                                                        <option value="2" >viewer</option>
                                                        <option value="3" >Sales</option>
                                                        <option value="4">Publisher</option>
                                                    </>
                                                    : ''}
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="exampleInputEmail1">Status<span className="text-danger">*</span></label>
                                        <select className="form-control mt-2 mb-4" defaultValue="active" value={formState.userStatus} name="userStatus" onChange={handleChange} >
                                            <option value="" disabled >Select option</option>
                                            <option value="active" >Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="text-center ">
                                    <button type="submit" disabled={isAdmin.isadmin === 2 ? true : false} className="btn btn-primary loginbtn" onClick={handleSubmit}>
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser
