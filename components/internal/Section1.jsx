import React, { useRef } from 'react'
import Image from 'next/image';
import Slider from "react-slick";


function Section1({ title, desc, gallery }) {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='property-section1 container' id='trending'>
            <h1 className='heading-type'>Discover Inspiring Ideas and
                Designs for Your Perfect Interior Design</h1>

            <div className="property-tours">
                <h1 className='heading-type'>{title}</h1>
                <p>"{desc}"</p>

                <div className='d-flex justify-content-center'>
                    <button className='btn prev-btn' onClick={previous}>
                        <div className="left-sprite"></div>
                    </button>
                    <div className='col-lg-7 col-sm-12 '>
                        <Slider ref={sliderRef} {...settings}>

                            {
                                gallery.map((value, index) => {
                                    return (
                                        <div className="slickimage-card" key={index}>
                                            <Image src={value.src} alt='-' width='600' height='400' />
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>
                    <button className='btn next-btn' onClick={next}>
                        <div className="right-sprite"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section1
