import React, { useRef } from 'react'
import Slider from 'react-slick'
import Link from 'next/link'



function section1() {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };


    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className='ren-tour container my-5 pt-3' id='section1'>
            <h1 className='heading-type'>Renovations</h1>
            <p >Take a tour of our Renovation interior design projects that meet client requirements by understanding their business vision and goals. Our expert designers use a combination of creativity and functionality to create spaces that are both beautiful and practical.</p>

            <div className='container my-5'>
                <Slider ref={sliderRef} {...settings}>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Bathrooms Renovation<br /> Design Services</h2>
                            <div className="bathroom-ren-sprite sprite"></div>
                            <p>Are you looking to give your bathroom a stylish makeover? Look no further than ArtFull Interiors Trends & Designs! Our bathroom renovation services combine functionality with elegant design.</p>
                            <Link href='/bathroom-renovation-service'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Kitchen Renovation<br /> Design Services</h2>
                            <div className="kitchen-ren-sprite sprite"></div>
                            <p>Transform your kitchen into a stunning and functional space with the help of ArtFull Interiors Trends & Designs. Our team of experienced designers and craftsmen will work with you to create a custom kitchen that fits your unique style</p>
                            <Link href='/kitchen-renovation-service'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Balcony and utility <br /> area Renovation</h2>
                            <div className="balcony-ren-sprite sprite"></div>
                            <p>Don't let a small space go to waste – transform your balcony and utility area with ArtFull Interiors Trends & Designs. Our team of experts can help you create a functional and stylish outdoor space that maximizes your living area.</p>
                            <Link href='/balcony-and-uitility-renovation-service'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Complete home interior<br />Renovation</h2>
                            <div className="complete-home-ren-sprite sprite"></div>
                            <p>Is it time for a complete home renovation?  Our team of designers and craftsmen can help you create the perfect interior space that reflects your unique style and personality.</p>
                            <Link href='/complete-home-interior-renovation-service'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Renovation and replacement <br />of flooring of tiles</h2>
                            <div className="tiles-sprite sprite"></div>
                            <p>Looking to update your home's flooring? Trust ArtFull Interiors Trends & Designs for all your renovation and replacement needs. We offer a wide variety of flooring options, from traditional hardwood to modern tile and everything in between.</p>
                            <Link href='/flooring-of-tiles-renovation-service'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Painting Renovation<br /> Design Services</h2>
                            <div className="painting-ren-sprite sprite"></div>
                            <p>Add a fresh new look to your home with professional painting services from ArtFull Interiors Trends & Designs. Our team of skilled painters will work with you to choose the perfect colors and finishes to match your style and taste.
                            </p>
                            <Link href='/painting-renovation-service'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Renovation of exterior<br />  Plumbing</h2>
                            <div className="plumber-ren-sprite sprite"></div>
                            <p>Keep your home's exterior plumbing in top shape with the help of ArtFull Interiors Trends & Designs. We offer a range of renovation services for your outdoor plumbing, including repairs, replacements, and upgrades.</p>
                            <Link href='/exterior-plumbing-renovation-service'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Renovation of Electrical<br />  Works</h2>
                            <div className="electric-ren-sprite sprite"></div>
                            <p>Ensure the safety and functionality of your home's electrical system with the help of ArtFull Interiors Trends & Designs. Our team of skilled electricians can handle any electrical renovation needs you may have, from minor repairs to complete system overhauls.</p>
                            <Link href='/electrical-renovation-service'>View more </Link>
                        </div>
                    </div>

                </Slider>
                <button className='btn prev-btn' onClick={previous}>
                    <div className="left-sprite"></div>
                </button>
                <button className='btn next-btn' onClick={next}>
                    <div className="right-sprite"></div>
                </button>
            </div>
        </section>
    )
}

export default section1
