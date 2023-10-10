import React from 'react'
import img1 from '../../public/images/homebanner.jpg'

function Banner({ img, title, city }) {
    function scrollToSection(event) {
        event.preventDefault();
        const sectionId = event.target.getAttribute('data-scroll-to');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className='home-banner' style={{
                backgroundImage: img ? `url(${img.src})` : `url(${img1.src})`
            }}>
                <div className='container'>
                    <div className='banner-text d-flex justify-content-center align-items-center'>
                        <div className='banner-blur col-lg-7 col-sm-12 col-md-12 text-center mb-5'>
                            {
                                title ?
                                    <h1 className='mb-3'>
                                        {title}
                                    </h1>
                                    :
                                    <h1 className='mb-3'>
                                        The World Class Interior Designers From  <br />  The Highest Rated Interior Design Company {city ? "in " + city:""}
            
                                    </h1>
                            }
                            <div className='banner-btns'>
                                {
                                    title ?
                                        <button className='bannerbtn' onClick={scrollToSection} data-scroll-to='trending'>View projects</button>
                                        :
                                        <button className='bannerbtn' onClick={scrollToSection} data-scroll-to='hometour'>View projects</button>
                                }
                                <button className='bannerbtn' data-bs-toggle="modal" data-bs-target="#popupmodal">Get Expert's Advice</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner
