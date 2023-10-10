import React, { useState, useEffect } from 'react'
import img from '../../public/images/Popup.png'
import BounceLoader from "react-spinners/BounceLoader";
import Image from 'next/image';

import { RiCloseCircleFill } from 'react-icons/ri'


function Popup() {
  const [submit, Setsubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mailstate, Setmailstate] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })

  function handleStateChange(e) {
    Setmailstate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleCLear(e) {
    Setsubmit(!submit)
    Setmailstate({
      name: "",
      phone: "",
      email: "",
      message: ""
    })
  }



  const submitEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ mailstate });
    const response = await fetch('/api/sendmail', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailstate }),
    })
      .then((res) => res.json())
      .then(() => {
        Setmailstate({
          email: "",
          name: "",
          phone: "",
          message: ""
        });
        Setsubmit(!submit);
        setLoading(false);
      });
    // setTimeout(() => {
    // }, 1200);
  };
  return (
    <section className='popup' >
      <div className="modal fade" id="popupmodal" tabIndex="-1" aria-labelledby="popupmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="popup-form">
              {loading && <div className="pop-loading">
                <BounceLoader color="black" loading={true} size={100} />
              </div>}
              <div style={{ display: submit || loading ? "none" : "block" }}>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <Image src={img} alt='-' width="450" height="548" />
                  </div>
                  <div className="col-lg-6 col-sm-12 popup-body">
                    <button className="close-popup" data-bs-dismiss="modal">
                      <RiCloseCircleFill color="black" className='popup-closebtn' />
                    </button>
                    <div className='popup-header'>
                      <h1>Get to us</h1>
                      <hr />
                    </div>
                    <form className="popup-inputs" onSubmit={submitEmail} id='#contactform'>
                      <input type="text" placeholder='Name'
                        className='input-borderless'
                        name='name'
                        required onChange={handleStateChange}
                        value={mailstate.name} />
                      <input type="email" placeholder='Email'
                        className='input-borderless'
                        name='email'
                        required onChange={handleStateChange}
                        value={mailstate.email} />
                      <input type="number" placeholder='Phone Number'
                        className='input-borderless'
                        name='phone'
                        required onChange={handleStateChange}
                        value={mailstate.phone} />
                      <textarea type="text" placeholder='Message'
                        className='input-borderless'
                        name='message'
                        onChange={handleStateChange}
                        value={mailstate.message} />
                      <div className='d-flex justify-content-center'>
                        <button className='light-button' type='submit' >Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div style={{ display: submit ? "block" : "none" }}>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <Image src={img} alt='-' width="450px" height="548px" />
                  </div>
                  <div className="col-lg-6 col-sm-12 popup-body">
                    <button className="close-popup" data-bs-dismiss="modal">
                      <RiCloseCircleFill color="black" className='popup-closebtn' onClick={handleCLear} />
                    </button>
                    <div className='popup-header p-1 m-2'>
                      <h1>Thank You!</h1>
                      <h4>We've received your message and will respond within 24 hours.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popup