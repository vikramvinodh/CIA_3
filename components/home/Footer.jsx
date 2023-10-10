import React from 'react'
import Link from 'next/link'
import { IoMdMail } from 'react-icons/io'
import { BiPhoneCall } from 'react-icons/bi'

function Footer() {
    return (
        <section className='footer'>

            <div className='d-flex row'>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className='img-logo d-flex flex-column align-items-center text-center'>
                        <div className="logo-sprite"></div>
                        <a href='https://kandradigital.com/' target='_blank'>
                            <p >Designed and developed by<br />
                                KandraDigital</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <h5>GET STARTED</h5>
                    <div className='footer-links'>
                        <Link href="/contact-us">Contact Us</Link>
                        <Link href="/service">Services</Link>
                        <Link href="/renovations">Renovations</Link>

                        <Link href="/blog" target='_blank'>Blog</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <h5>ABOUT US</h5>
                    <div className='footer-links'>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/about-us">About Us</Link>


                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <h5>CONTACT US</h5>
                    <div className='footer-form'>
                        <Link href='mailto:ArtFullinteriors.com'>
                            <div className='d-flex'>
                                <IoMdMail fill='white' size={30} className='me-3' />
                                <p>ArtFullinteriors.com@gmail.com</p>
                            </div>
                        </Link>
                        <Link href='tel:8553023688'>
                            <div className='d-flex align-items-center mx-4 p-2'>
                                <BiPhoneCall fill='white' size={30} className='me-3' />
                                <p className='mx-4 m-0'>91-8553023688</p>
                            </div>
                        </Link>
                        <div className='d-flex align-items-center  mt-3'>
                            <Link href="https://www.instagram.com/ArtFullinteriors/?hl=en" target="_blank"><div className="instagram-sprite mx-4"></div></Link>
                            <Link href="https://www.facebook.com/ArtFullinteriors" target="_blank"><div className="facebook-sprite me-4"></div></Link>
                            <Link href="https://www.houzz.in/professionals/interior-designers-and-decorators/ArtFull-interiors-trends-and-designs-pfvwin-pf~1865685172" target="_blank"><div className="houz-sprite"></div></Link>
                        </div>
                    </div>
                </div>
            </div>




            <div className="d-flex justify-content-center mt-5 pt-3">
                <hr width="200px" />
                <span className='mx-2'>2023 All rights reserved</span>
                <hr width="200px" />
            </div>
        </section>


    )
}

export default Footer
