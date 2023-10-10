import React, { useState } from 'react'
import img1 from '../../public/images/commercial/img1.png'
import img2 from '../../public/images/commercial/img2.png'
import img3 from '../../public/images/commercial/img3.png'
import Link from 'next/link'
import Image from 'next/image'

function Commercialtours() {
    const [loadmore, setLoadmore] = useState(false)

    const handleLoadmore = () => {
        {
            !loadmore ? setLoadmore(true) : setLoadmore(false)
        }
    }

    return (
        <section className='commercialtours container my-5 pt-3' id='commercialtours'>
            <h1 className='heading-type'>Commercial Tours</h1>
            <p>Take a tour of our commercial interior design projects that meet client requirements by understanding their business vision and goals. Our expert designers use a combination of creativity and functionality to create spaces that are both beautiful and practical.</p>
            <div className="hospital-tour">
                <div className="col-lg-7 col-sm-12">
                    <Image src={img1} alt="-" />
                </div>
                <div className="col-lg-5 col-sm-12 commtour-points">
                    <h3>Hospitals</h3>
                    <div className='d-flex justify-content-center'>
                        <ul>
                            <li>15+ Hospitals designed</li>
                            <li>10+ Designers</li>
                            <li>5+ years exp</li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center call-to-btn ">
                        <button className='light-button mx-2' data-bs-toggle="modal" data-bs-target="#popupmodal">Get a custom Quote</button>
                        <Link href='/hospitals'><button className='light-button mx-2'>View Details</button></Link>

                    </div>

                </div>
            </div>

            <div className="restaurant-tour">
                <div className="col-lg-5 col-sm-12 commtour-points">
                    <h3>Restaurants</h3>
                    <div className='d-flex justify-content-center'>
                        <ul>
                            <li>15+ Restaurants designed</li>
                            <li>10+ Designers</li>
                            <li>5+ years exp</li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center call-to-btn ">
                        <button className='light-button mx-2' data-bs-toggle="modal" data-bs-target="#popupmodal">Get a custom Quote</button>
                        <Link href='/restaurant-interior-design-services'><button className='light-button mx-2'>View Details</button></Link>
                    </div>

                </div>
                <div className="col-lg-7 col-sm-12">
                    <div className='d-flex justify-content-end'>
                        <Image src={img2} alt="-" />
                    </div>
                </div>
            </div>

            <div className="school-tour">
                <div className="col-lg-7 col-sm-12">
                    <Image src={img3} alt="-" />
                </div>
                <div className="col-lg-5 col-sm-12 commtour-points">
                    <h3>School</h3>
                    <div className='d-flex justify-content-center'>
                        <ul>
                            <li>15+ School designed</li>
                            <li>10+ Designers</li>
                            <li>5+ years exp</li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center call-to-btn ">
                        <button className='light-button mx-2' data-bs-toggle="modal" data-bs-target="#popupmodal">Get a custom Quote</button>
                        <Link href='/school'><button className='light-button mx-2'>View Details</button></Link>
                    </div>

                </div>
            </div>


            <div style={{ display: loadmore ? 'block' : 'none' }}>
                <div className="restaurant-tour">
                    <div className="col-lg-5 col-sm-12 commtour-points">
                        <h3> Spa</h3>
                        <div className='d-flex justify-content-center'>
                            <ul>
                                <li>15+ s & Spa designed</li>
                                <li>10+ Designers</li>
                                <li>5+ years exp</li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center call-to-btn ">
                            <button className='light-button mx-2' data-bs-toggle="modal" data-bs-target="#popupmodal">Get a custom Quote</button>
                            <Link href='/spa'><button className='light-button mx-2'>View Details</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <div className='d-flex justify-content-end'>
                            <Image src={img2} alt="-" />
                        </div>
                    </div>
                </div>
                <div className="hospital-tour">
                    <div className="col-lg-7 col-sm-12">
                        <Image src={img1} alt="-" />
                    </div>
                    <div className="col-lg-5 col-sm-12 commtour-points">
                        <h3>Bars</h3>
                        <div className='d-flex justify-content-center'>
                            <ul>
                                <li>15+ Bars designed</li>
                                <li>10+ Designers</li>
                                <li>5+ years exp</li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center call-to-btn ">
                            <button className='light-button mx-2' data-bs-toggle="modal" data-bs-target="#popupmodal">Get a custom Quote</button>
                            <Link href='/bar-interior-design-services'><button className='light-button mx-2'>View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="restaurant-tour">
                    <div className="col-lg-5 col-sm-12 commtour-points">
                        <h3>Studios</h3>
                        <div className='d-flex justify-content-center'>
                            <ul>
                                <li>15+ Studios designed</li>
                                <li>10+ Designers</li>
                                <li>5+ years exp</li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center call-to-btn ">
                            <button className='light-button mx-2' data-bs-toggle="modal" data-bs-target="#popupmodal">Get a custom Quote</button>
                            <Link href='/studio-interior-design-services'><button className='light-button mx-2'>View Details</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <div className='d-flex justify-content-end'>
                            <Image src={img2} alt="-" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='d-flex justify-content-center'><button className="light-button" onClick={handleLoadmore}>{loadmore ? 'Show less' : 'Load more'}</button></div>

        </section>
    )
}

export default Commercialtours
