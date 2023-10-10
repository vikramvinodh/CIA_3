import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from './logo.webp'
import Alert from '../../../alert/Alert';
import Loading from "../../../alert/Loading";

function Login() {
  const [state, setState] = useState("");
  const [check, setCheck] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const navigate = useNavigate();
  const rememberRef = useRef(null);

  useEffect(() => {
    setisLoading(true)

    if (sessionStorage.getItem('token') || localStorage.getItem('token'))
      navigate("/dashboard/home");

    setTimeout(() => {
      setisLoading(false)
    }, 500)
  }, [])

  const handleSubmit = async (e) => {
    setisLoading(true);
    e.preventDefault();
    setState({ ...state, error: "" });

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: state.email, password: state.password }),
    });

    const json = await response.json();

    if (json.success) {

      if (check)
        localStorage.setItem("token", json.Token);
      else
        sessionStorage.setItem("token", json.Token);

      const time = setTimeout(() => {
        navigate("/dashboard/home");
      }, 300)
      return () => { clearTimeout(time); }

    } else {
      setState({ ...state, error: json.error });
      setisLoading(false);
    }
  };

  const handleRememberChange = () => {
    setCheck(rememberRef.current.checked);
  }

  if (isLoading)
    return (<Loading />)

  return (
    <>
      <div className="container mt-5 justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6 offset-md-3">
           
            <div className="logincard">
              <h5 className="login-header border-0 bg-white m-3 fw-bold text-center mb-4">
               ArtFull Interiors Admin panel
              </h5>
              <div className="card-body mt-4">
                {state.error ? <Alert props={state.error} /> : ''}
                <form>
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control mt-2 mb-3 "
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                  />
                  <br />
                  <div className="d-flex mb-2 justify-content-between">
                    <label htmlFor="exampleInputPassword1">Password</label>
                  </div>
                  <input
                    type="password"
                    className="form-control mt-2"
                    name="password"
                    autoComplete="current-password"
                    onChange={(e) => setState({ ...state, password: e.target.value })}
                  />
                  <br />
                  <input type="checkbox" name='remember' ref={rememberRef} onChange={handleRememberChange} />
                  <label className="form-check-label mx-2">Remember Me</label>
                  <div className="mt-2">
                    <button type="submit" className="loginbtn" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );

}

export default Login
