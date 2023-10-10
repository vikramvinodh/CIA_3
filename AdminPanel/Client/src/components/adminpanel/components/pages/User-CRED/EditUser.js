import React, { useState, useEffect, useCallback, useContext } from "react";
import Progress from "../../../../alert/Progress";
import { useParams, useNavigate } from "react-router-dom";
import UserContext from '../../.././context/UserContext'

function Edit() {
  const navigate = useNavigate();
  const params = useParams()
  const { isAdmin } = useContext(UserContext)
  const [Loading, setLoading] = useState({ loading: '', loading1: '' })
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    isadmin: '',
    userStatus: ''
  });


  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/userdata/${params.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
    });
    const data = await response.json();

    setFormState({
      username: data.user.username,
      email: data.user.email,
      isadmin: data.user.isadmin,
      userStatus: data.user.userStatus
    });
    setLoading(false);
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);



  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading({ loading: 10 })

    const { id, username, isadmin, userStatus } = formState;

    const respons = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/updateprofile/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ id, username, isadmin, userStatus })
    });
    setLoading({ loading: 90 })
    const data = await respons.json();

    if (data.success) {
      setLoading(100)

      const timer = setTimeout(() => {
        navigate('../users')
      }, 500);
      return () => clearInterval(timer);

    } else {
      setLoading({ loading: 100 })
      return alert('no')
    }
  }


  if (formState.username === '' || formState.email === '' || formState.isadmin === '' || formState.UserStatus === '') {
    return (<> <Progress props={Loading.loading1} /></>)
  }

  return (
    <>
      <Progress props={Loading.loading} />
      <div className="container d-flex mt-3 justify-content-center my-5 py-5">
        <div className="row-sm-1 px-5">
          <div className="edituser p-3">
            <h5 className="card-header text-center fw-bold bg-white mb-3 pb-3 ">
              Edit User
            </h5>


            <div className="card-body">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <label htmlFor="exampleInputEmail1">Full name<span className="text-danger">*</span></label>
                    <input type="name" className="form-control mt-2 mb-4" name="username" onChange={handleChange} value={formState.username} />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="exampleInputEmail1">Email<span className="text-danger">*</span></label>
                    <input disabled type="email" className="form-control mt-2 mb-4" name="email" onChange={handleChange} value={formState.email} />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="exampleInputEmail1">Is Admin<span className="text-danger">*</span></label>
                    <select className="form-control mt-2 mb-4" name="isadmin" onChange={handleChange} value={formState.isadmin} >
                      {isAdmin.isadmin === 0 || isAdmin.isadmin === 2 ?
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
                    <select className="form-control mt-2 mb-4" name="userStatus" onChange={handleChange} value={formState.userStatus} >
                      <option value="active" >Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="text-center ">
                  <button type="submit" className="btn btn-primary loginbtn" disabled={isAdmin.isadmin === 2 ? true : false} onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Edit;
