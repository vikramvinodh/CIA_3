import React, { useRef } from 'react'
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';

function Residentialtours() {
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
        lazyLoad: true,
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
        <section className='residentialtours' id='residentialtours'>
            <div className="container">
                <h1 className='heading-type'>Residential Tours</h1>
                <p>Take a tour of our residential interior design projects and get inspired by the beautiful spaces we've
                    created for our clients. From stunning living rooms to cozy bedrooms and functional kitchens, our
                    designs reflect the unique personalities and lifestyles of our clients. To create environments that are
                    both lovely and useful, our skilled designers combine creativity and functionality. Whether you're
                    looking for a classic, modern, or eclectic design, we'll work with you to create a space that meets
                    your unique needs and preferences. Our gorgeous domestic interior design concepts will surely
                    inspire you!</p>
                <Slider ref={sliderRef} {...settings}>

                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Apartment Interior<br /> Design Services</h2>
                            <div className="apartment-interior-sprite sprite"></div>
                            <p>Transform your apartment into a stunning and functional space with our expert interior design
                                services. From maximizing storage to creating a cohesive design scheme, we have years of
                                experience creating beautiful apartment interiors.</p>
                            <Link href='/apartment'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Villa Interior<br /> Design Services</h2>
                            <div className="villa-interior-sprite sprite"></div>
                            <p>Elevate your villa's interior design with our expert design services. From luxurious finishes to custom-
                                made furniture, our designers will create a space that reflects your unique style and personality.</p>
                            <Link href='/villa-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>2BHK Interior<br /> Design Services</h2>
                            <div className="twobhk-sprite sprite"></div>
                            <p>An interior for a two-bedroom home must carefully strike a balance between efficiency and flair. Let
                                us assist you in designing a room that makes the most of your living space while yet incorporating
                                your individual flair.</p>
                            <Link href='/bhk'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>3BHK Interior<br /> Design Services</h2>
                            <div className="threebhk-sprite sprite"></div>
                            <p>An interior for a three-bedroom home must carefully strike a balance between efficiency and flair.
                                Our designers will develop a special solution that fits your particular requirements and makes the
                                most of your available space.</p>
                            <Link href='/bhk'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>4BHK Interior<br /> Design Services</h2>
                            <div className="fourbhk-sprite sprite"></div>
                            <p>Planning the layout of a 4 BHK interior and taking into account its usability and aesthetic appeal are
                                both important. Let us assist you in designing a room that makes the most of your living space while
                                yet incorporating your personal style.</p>
                            <Link href='/bhk'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Flat Interior<br /> Design Services</h2>
                            <div className="flat-interior-sprite sprite"></div>
                            <p>Elevate your villa's interior design with our expert design services. From luxurious finishes to custom-
                                made furniture, our designers will create a space that reflects your unique style and personality. We
                                specialize in creating beautiful living spaces that maximize your villa's potential.</p>
                            <Link href='flat-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Full Homes Interior<br /> Design Services</h2>
                            <div className="full-homes-sprite sprite"></div>
                            <p>The 2bhk room is often considered the heart of a home, a space where family and friends come together to relax, socialize, and entertain. When it comes to interior design, the living room is a perfect canvas for creativity and self-expression.</p>
                            <Link href='/full-home-interior-design-services'>View more </Link>
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

export default Residentialtours
