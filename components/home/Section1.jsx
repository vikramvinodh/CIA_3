import React from 'react'
import img from '../../public/images/home.png'
import img2 from '../../public/images/home2.jpg'
import img3 from '../../public/images/home3.jpg'
import img4 from '../../public/images/comm2.jpg'
import img5 from '../../public/images/comm1.png'
import img6 from '../../public/images/comm3.jpg'
import svg from '../../public/images/icons/Ribs.svg'
import svg2 from '../../public/images/icons/svg2.svg';
import Link from 'next/link'
import Image from 'next/image'

function Section1() {
 
    return (
        <section className='container home-section1'>
            <div className='bannerdown d-flex justify-content-between flex-column flex-lg-row'>
                <div>
                    <h3><b>ArtFull Interiors</b> Trends and Designs<br /></h3>
                    <h3>"Interior Design doesn't have to be expensive or complicated!<br />
                        It should be smart & user friendly"</h3>
                </div>
                <h1 ><i>Since 1995</i></h1>
            </div>
            <div className=' row my-5 home-interior'>
                <div className="col-lg-6 col-sm-12 ">
                    <div className="home-card">
                        <h2>Home Interiors</h2>
                        <div className='container justify-content-center'>
                            <div id="homeimg1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#homeimg1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#homeimg1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#homeimg1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner ">
                                    <div className="carousel-item active">
                                        <Image src={img} alt="-" />
                                    </div>
                                    <div className="carousel-item">
                                        <Image src={img2} alt="-" />
                                    </div>
                                    <div className="carousel-item">
                                        <Image src={img3} alt="-" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#homeimg1" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#homeimg1" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        {/* <Link className='link-type' to='/livingroom'>Read more</Link> */}
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className='ribbon1'>
                            
                        <Image src={svg} className="image-fluid ribs" alt={svg} />
                        <div className='ribbon-text'>
                            <h5><b>100+</b> Projects</h5>
                            <h5><b>10+</b> Designers</h5>
                            <h5><b>70+</b> Clients</h5>
                            <Link href='/home-tours'>
                            View more
                            </Link>
                        </div>
                    </div>

                </div>
            </div>



            <div className='row my-5 comm-interior'>
                <div className="col-lg-6 col-sm-12">

                    <div className='ribbon2'>
                        <div className='leftarrow'>
                        </div>
                        <Image src={svg2} className="image-fluid ribs" alt='-' />
                        <div className='ribbon-text'>
                            <h5><b>100+</b> Projects</h5>
                            <h5><b>10+</b> Designers</h5>
                            <h5><b>70+</b> Clients</h5>
                            <Link href='/commercial-interior-design-services'>
                                  View more 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="home-card">
                        <h2>Commercial Interiors</h2>
                        <div className='container justify-content-center'>
                            <div id="homeimg2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#homeimg2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#homeimg2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#homeimg2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner ">
                                    <div className="carousel-item active">
                                        <Image src={img4} className="image-fluid" alt={img} />
                                    </div>
                                    <div className="carousel-item">
                                        <Image src={img5} className="image-fluid" alt={img} />
                                    </div>
                                    <div className="carousel-item">
                                        <Image src={img6} className="image-fluid" alt={img} />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#homeimg2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#homeimg2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                       
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Section1
