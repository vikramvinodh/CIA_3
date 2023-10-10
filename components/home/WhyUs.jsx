import React from 'react'

function WhyUs() {
    return (
        <section className='whyus container'>
            <h1 className='heading-type'>Why ArtFull Interiors?</h1>
            <div className="whyus-stats">
                <h3 className='text-center'>
                    <b>280+</b><br />
                    <i>Projects</i>
                </h3>
                <h3 className='text-center'>
                    <b>30+ years</b><br />
                    <i>Experience</i>
                </h3>
                <h3 className='text-center'>
                    <b>12+</b><br />
                    <i>Cities</i>
                </h3>
                <h3 className='text-center'>
                    <b>49+</b><br />
                    <i>Experts</i>
                </h3>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className='why-card d-flex justify-content-center'>
                        <div className="dark-bg">
                            <div className="white-card">
                                <ul>
                                    <li>20+ years in industry</li>
                                    <li>Trending designs</li>
                                    <li>100+ projects</li>
                                    <li>Expert Designer Team</li>
                                    <li>Customised designs</li>
                                    <li>Professional Execution</li>
                                    <li>On time project delivery</li>
                                    <li>Genuine Certified materials</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='light-button ' data-bs-toggle="modal" data-bs-target="#popupmodal">Consult Now</button>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 ">
                    <div className="whyus-rating">
                        <div className="google-sprite"></div>
                        <p>“It was a great experience working with Suvesh and Liji, both thorough professionals. Suvesh worked
                            on the project very passionately and with utmost commitment, often going out of his way to deliver. It
                            was evident in every minute detail of the work that was undertaken, with full accountability and top-
                            notch quality. Keep up the great work, ArtFull :)”<br /><br />
                            <br />
                            “ArtFull interiors have rich Knowledge in interior and exterior both and the main thing is Mr Suvesh
                            has experience is amazing 25+ years of experience ask anything name it he will explain like anything
                            everything is in his mind and finger tips his custom selections are unique and lighting design amazing
                            living room n bed room designs he got his own designs along with customer test he will club the both
                            and deliver you the best.”</p>
                        <button className='light-button' data-bs-toggle="modal" data-bs-target="#popupmodal">Get a custom Quote</button>
                    </div>

                </div>
            </div>

        </section>

    )
}

export default WhyUs