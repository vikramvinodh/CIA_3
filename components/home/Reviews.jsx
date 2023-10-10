import React, { useRef } from 'react'
import Slider from "react-slick";
import Link from 'next/link';


function Reviews() {
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
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='reviews container'>
            <h1> Reviews.</h1>
            <hr />
            <div className='button-review d-flex justify-content-end'>
                <Link href='https://www.google.com/search?q=ArtFull+interiors&rlz=1C1CHBF_enIN1051IN1051&ei=2SkkZNTVFt_m4-EP0e6hmA0&oq=ArtFull+i&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUILhCABDILCC4QrwEQxwEQgAQyCAguEIAEENQCMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDoPCAAQigUQ6gIQtAIQQxgBOhUILhCKBRDHARDRAxDqAhC0AhBDGAE6DQgAEI8BEOoCELQCGAI6DQguEI8BEOoCELQCGAI6EwguEIMBEMcBELEDENEDEIoFEEM6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoOCC4QgwEQ1AIQsQMQgAQ6BwgAEIoFEEM6DgguEIoFEMcBENEDEJECOg0IABCKBRCxAxCDARBDOgsIABCKBRCxAxCDAToKCAAQigUQsQMQQzoICAAQgAQQsQM6CwgAEIoFELEDEJECOggIABCABBDJAzoICAAQigUQkgM6DggAEIoFELEDEMkDEJECOg0ILhCKBRCxAxCDARBDOgcILhCKBRBDOgoILhCKBRCxAxBDOggILhCABBCxAzoOCC4QigUQxwEQrwEQkQI6EAguEIoFELEDEIMBENQCEEM6CwguEIAEEMcBENEDOhAILhCDARDUAhCxAxCKBRBDOhEILhCABBCxAxCDARDHARCvAToICC4QsQMQgAQ6CwguEIAEEMcBEK8BOggILhDUAhCABDoKCAAQgAQQRhD5AUoECEEYAFAAWIVOYKBiaAFwAXgAgAGsAYgB6QuSAQQwLjEymAEAoAEBsAEUuAEDwAEB2gEECAEYB9oBBggCEAEYCg&sclient=gws-wiz-serp#' target='__blank' className='my-3'><button className='light-button'>Write your review</button></Link>
            </div>
            <Slider ref={sliderRef} {...settings}>

                <div className='d-flex justify-content-center '>
                    <div className="review-card-bg">
                        <div className="review-card">
                            <div className='d-flex justify-content-between align-items-center m-3 review-profile'>
                                <div className='mt-4'>
                                    <h2 className='m-0'>nitin kumar</h2>
                                    <hr />

                                </div>

                            </div>
                            <p>We recently got our 2bhk renovated, thanks to ArtFull Interiors. The charges were reasonable and the work done was pretty impressive.
                                Suvesh takes the extra effort of listening to your thoughts and ideas, and brings a lot of innovation through his experience.
                                Highly recommended!  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    <div className="review-card-bg">
                        <div className="review-card">
                            <div className='d-flex justify-content-between align-items-center m-3 review-profile'>
                                <div className='mt-4'>
                                    <h2 className='m-0'>Rahul Pandey</h2>
                                    <hr />

                                </div>

                            </div>
                            <p>No one ready to do small project like creating loft bed. But they took the project and executed very nicely. They made frame reusable so in future if we want to take the out the loft bed it will converted into a floor bed.
                                And also tv unit done by ArtFull  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    <div className="review-card-bg">
                        <div className="review-card">
                            <div className='d-flex justify-content-between align-items-center m-3 review-profile'>
                                <div className='mt-4'>
                                    <h2 className='m-0'>Soni Shankar Rai</h2>
                                    <hr />

                                </div>

                            </div>
                            <p>We did our new villas interior works like modular kitchen,wardrobes,false ceiling, bedrooms cots and many mores good designs value for money and strongly we can recommend our frnds to contact 'ArtFull interiors😊  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    <div className="review-card-bg">
                        <div className="review-card">
                            <div className='d-flex justify-content-between align-items-center m-3 review-profile'>
                                <div className='mt-4'>
                                    <h2 className='m-0'>Twinkl Gupta</h2>
                                    <hr />

                                </div>

                            </div>
                            <p>We appreciate their efforts, good job. My dream kitchen. Amazing professional team and thanks to ArtFull interiors for doing our job.  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    <div className="review-card-bg">
                        <div className="review-card">
                            <div className='d-flex justify-content-between align-items-center m-3 review-profile'>
                                <div className='mt-4'>
                                    <h2 className='m-0'>Simran Singh</h2>
                                    <hr />

                                </div>

                            </div>
                            <p>We appreciate their efforts, good job. My dream kitchen. Amazing professional team and thanks to ArtFull interiors for doing our job.  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    <div className="review-card-bg">
                        <div className="review-card">
                            <div className='d-flex justify-content-between align-items-center m-3 review-profile'>
                                <div className='mt-4'>
                                    <h2 className='m-0'>kavita bhardwaj</h2>
                                    <hr />

                                </div>

                            </div>
                            <p>We got our kitchen interiors done by them and it was really nice...the payment terms were very impressive...the next work for them will be our childrens bedroom and kitchen...  </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    <div className="review-card-bg">
                        <div className="review-card">
                            <div className='d-flex justify-content-between align-items-center m-3 review-profile'>
                                <div className='mt-4'>
                                    <h2 className='m-0'>Chirag Bharani</h2>
                                    <hr />

                                </div>

                            </div>
                            <p>Very professional and trustworthy people to work with. They provide in detail solution for the requirements at effective costs and the best quality  </p>
                        </div>
                    </div>
                </div>
            </Slider>

            <button className='btn prev-btn' onClick={previous}>
                <div className="left-sprite"></div>
            </button>
            <button className='btn next-btn' onClick={next}>
                <div className="right-sprite"></div>
            </button>
            <div className='button-review d-flex justify-content-center mt-5'>
                <Link href='https://www.google.com/search?q=ArtFull+interiors&rlz=1C1CHBF_enIN1051IN1051&ei=2SkkZNTVFt_m4-EP0e6hmA0&oq=ArtFull+i&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUILhCABDILCC4QrwEQxwEQgAQyCAguEIAEENQCMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDoPCAAQigUQ6gIQtAIQQxgBOhUILhCKBRDHARDRAxDqAhC0AhBDGAE6DQgAEI8BEOoCELQCGAI6DQguEI8BEOoCELQCGAI6EwguEIMBEMcBELEDENEDEIoFEEM6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoOCC4QgwEQ1AIQsQMQgAQ6BwgAEIoFEEM6DgguEIoFEMcBENEDEJECOg0IABCKBRCxAxCDARBDOgsIABCKBRCxAxCDAToKCAAQigUQsQMQQzoICAAQgAQQsQM6CwgAEIoFELEDEJECOggIABCABBDJAzoICAAQigUQkgM6DggAEIoFELEDEMkDEJECOg0ILhCKBRCxAxCDARBDOgcILhCKBRBDOgoILhCKBRCxAxBDOggILhCABBCxAzoOCC4QigUQxwEQrwEQkQI6EAguEIoFELEDEIMBENQCEEM6CwguEIAEEMcBENEDOhAILhCDARDUAhCxAxCKBRBDOhEILhCABBCxAxCDARDHARCvAToICC4QsQMQgAQ6CwguEIAEEMcBEK8BOggILhDUAhCABDoKCAAQgAQQRhD5AUoECEEYAFAAWIVOYKBiaAFwAXgAgAGsAYgB6QuSAQQwLjEymAEAoAEBsAEUuAEDwAEB2gEECAEYB9oBBggCEAEYCg&sclient=gws-wiz-serp#' target='__blank'><button className='light-button'>Read reviews on Google</button></Link>
            </div>
        </section>
    )
}

export default Reviews
