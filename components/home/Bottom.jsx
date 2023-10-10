import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { BiPhoneCall } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'


function Bottom() {
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
        <section className='bottom  my-5 py-3'>
            <div className="contact-form">
                <div className='container'>
                    <h1 className='heading-type'>Want more information?</h1>
                    <div className='row '>
                        <div className="col-lg-6 col-sm-12 contact-fields">
                            <div className="d-flex align-items-center my-5">
                                <BiPhoneCall fill='white' size={30} className='me-3' />
                                <Link href='tel:8553023688'>
                                    <h4 className='m-0'>91 8553023688</h4>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center my-5">
                                <FaLocationDot fill="white" size={30} className='me-3' />
                                <h4 className='m-0'>Bangalore,Coimbatore,NCR,Cochin<br />
                                    Gurgaon,Chennai,Hyderabad,Vizag</h4>
                            </div>
                            <div className="d-flex align-items-center mt-5">
                                <IoMdMail fill='white' size={30} className='me-3' />
                                <Link href='mailto:ArtFullinteriors.com@gmail.com'>
                                    <h4 className='m-0'>ArtFullinteriors.com@gmail.com</h4>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 p-4 align-self-center">
                            <form id='enquireform' onSubmit={submitEmail}>
                                <div className="d-flex flex-column flex-lg-row justify-content-between">
                                    <input type="text" placeholder='First Name'
                                        className='input-text mx-2 '
                                        name='name'
                                        required onChange={handleStateChange}
                                        value={mailstate.name} />
                                    <input type="number" placeholder='Phone'
                                        className='input-text ms-2'
                                        name='phone'
                                        required onChange={handleStateChange}
                                        value={mailstate.phone}
                                    />
                                </div>
                                <div className=' mx-1'>
                                    <input type="text" placeholder='Email'
                                        name='email'
                                        required onChange={handleStateChange}
                                        value={mailstate.email}
                                        className='input-text mt-4 mx-1' />
                                    <input type="text" placeholder='Type of Property' className='input-text my-4 mx-1'
                                        name='message'
                                        onChange={handleStateChange}
                                        value={mailstate.message} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className='dark-button' type='submit' >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </section>

    )
}

export default Bottom