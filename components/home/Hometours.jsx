import React, { useRef } from 'react'
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';

function Hometours() {
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
        lazyLoad: true,
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
        <section className='hometour' id='hometour'>
            <div className='d-flex align-items-center flex-column '>
                <p className='heading-type'>Home Tours</p>
                <p className='hometour-desc w-75'>Home interiors refer to the design and decoration of the interior spaces of a house or dwelling, including living rooms, bedrooms, kitchens, bathrooms, and other areas. The goal of home interiors is to create a cohesive and harmonious look</p>
            </div>
            <div className='container my-5'>
                <Slider ref={sliderRef} {...settings}>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Living Room Interior<br /> Design Services</h2>
                            <div className="living-room-sprite sprite"></div>
                            <p>A space where you relax, entertain and make memories with your loved ones, your living room is the heart of your home. We create a warm and inviting atmosphere that's both stylish and comfortable.</p>
                            <Link href='/living-room-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Bedrooms Interior<br /> Design Services</h2>
                            <div className="bedroom-sprite sprite"></div>
                            <p>Your bedroom is your sanctuary, a space where you can unwind, relax and rejuvenate. We can help you transform your bedroom into a peaceful oasis that reflects your personal style and preferences. </p>
                            <Link href='/bedroom-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Kitchen Interior<br /> Design Services</h2>
                            <div className="kitchen-interior-sprite sprite"></div>
                            <p>The kitchen is the heart of your home, where you cook, eat, and spend time with family and friends. We incorporate the latest trends and technologies that maximize your storage in less space.</p>
                            <Link href='/kitchen-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Washrooms Interior<br /> Design Services</h2>
                            <div className="washroom-sprite sprite"></div>
                            <p>Your bathroom is your personal area where you relax and unwind after a long day. We create a spa-like environment with perfect fixtures, finishes, and accessories..</p>
                            <Link href='/bathroom-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Dining Rooms Interior<br /> Design Services</h2>
                            <div className="dining-sprite sprite"></div>
                            <p>The dining room is a space to gather and share meals with family and friends that makes every meal a special occasion. We create a cozy and intimate dining area that's perfect for entertaining.</p>
                            <Link href='/dining-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Televison Units Interior<br /> Design Services</h2>
                            <div className="tv-unit-sprite sprite"></div>
                            <p>Enhance your viewing experience and complement your style with the best TV unit. Our design team works with you to create a custom solution that seamlessly integrates your TV with your decor.
                            </p>
                            <Link href='/tv-unit-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Wardrobe Designs Interior<br /> Design Services</h2>
                            <div className="wardrobe-unit-sprite sprite"></div>
                            <p>Say goodbye to a cluttered wardrobe and keep your clothes organized and easily accessible. We design a beautiful wardrobe that's not only practical but also stylish with excellent finishes.</p>
                            <Link href='/wardrobe-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Balcony Designs Interior<br /> Design Services</h2>
                            <div className="balcony-sprite sprite"></div>
                            <p>Enjoy the outdoors while relaxing in the comfort of your home. We create designs that maximize your views and enhance your outdoor experience. Enjoy your private oasis with a customized balcony design!</p>
                            <Link href='/balcony-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Kitchen & Livingroom Interior<br /> Design Services</h2>
                            <div className="kitchen-living-sprite sprite"></div>
                            <p>Modern kitchen and living room designs are popular choices. We create a space that blends the two areas, making your home feel spacious and inviting.</p>
                            <Link href='/kitchen-with-living-room-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Kitchen & Diningroom Interior<br /> Design Services</h2>
                            <div className="kitchen-dining-sprite sprite"></div>
                            <p>Your kitchen and dining room are two spaces that go hand in hand, making it essential to design a layout that seamlessly blends the two areas. We create priceless memories that match your needs</p>
                            <Link href='/kitchen-with-dining-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Living & Diningroom Interior<br /> Design Services</h2>
                            <div className="living-dining-sprite sprite"></div>
                            <p>We design a place that harmoniously combines the two spaces while preserving their distinct functionalities. Our designers collaborate to develop a unique solution that makes the most of your available space.
                            </p>
                            <Link href='/living-room-with-dining-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Hall Interior<br /> Design Services</h2>
                            <div className="hall-sprite sprite"></div>
                            <p>We design a place that harmoniously combines the two spaces while preserving their distinct functionalities. Our designers collaborate to develop a unique solution that makes the most of your available space.
                            </p>
                            <Link href='/hall-interior-design-services'>View more </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="carousel-cards">
                            <h2>Home Office Interior<br /> Design Services</h2>
                            <div className="home-office-sprite sprite"></div>
                            <p>We design a place that harmoniously combines the two spaces while preserving their distinct functionalities. Our designers collaborate to develop a unique solution that makes the most of your available space.
                            </p>
                            <Link href='/home-office-interior-service'>View more </Link>
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

export default Hometours