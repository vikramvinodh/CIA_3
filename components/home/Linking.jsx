import React from 'react'
import parse from 'html-react-parser'

function Linking({ bottom, internal, areabottom, arealinking }) {

    return (
        <section className='bottom-linking container mt-3 mb-5 pt-3'>
            <div className="accordion" id="faqacc">
                {
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq11">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqans11" aria-expanded="true" aria-controls="faqans11">
                                <h4>{
                                    bottom ?
                                        bottom.title
                                        :
                                        areabottom ?
                                            areabottom.title
                                            :
                                            "About ArtFull Interiors"
                                }
                                </h4>
                            </button>
                        </h2>
                        <div id="faqans11" className="accordion-collapse collapse show" aria-labelledby="faq11" data-bs-parent="#faqacc">
                            <div className="accordion-body">
                                {
                                    bottom ?
                                        parse(bottom.desc)
                                        :
                                        areabottom ?
                                            parse(areabottom.desc)
                                            :
                                            parse(`<b>Transform Your Space with Top Interior Design Services in India</b><br/>
                                            When it comes to transforming your space, it's essential to work with an expert interior design company in India. At ArtFull Interiors, we have a team of skilled and experienced interior designers who have honed their craft over the years. With a deep understanding of design principles, trends, and materials, our designers bring their expertise to every project. From conceptualization to execution, we ensure that your space reflects your vision while incorporating the best design practices.<br/><br/>
                                            
                                            <b>Tailored Interior Design Solutions for Every Space</b><br/>
                                            We understand that each space has its unique characteristics and requirements. That's why we offer tailored interior design solutions for every space. Whether you have a small apartment or a spacious villa, our interior designers in India will work closely with you to understand your lifestyle, preferences, and functional needs. By customizing our designs, we create spaces that optimize functionality, maximize comfort, and align with your personal style.
                                            <br/><br/>
                                            <b>Customer Satisfaction: Our Top Priority</b><br/>
                                            At ArtFull Interiors, customer satisfaction is at the forefront of everything we do. We prioritize your happiness and strive to exceed your expectations. Our interior designers in India are dedicated to delivering exceptional service, professionalism, and attention to detail. From the initial consultation to the final installation, we go the extra mile to ensure that you are delighted with the outcome. Your satisfaction is a testament to our success.<br/><br/>
                                            
                                            <b>Affordable Interior Design Services in India</b><br/>
                                            We believe that great design should be accessible to everyone, regardless of budget. Our interior design services in India are tailored to offer affordability without compromising on quality or creativity. We work closely with you to understand your budgetary constraints and find cost-effective solutions that meet your needs. Our aim is to deliver exceptional value by maximizing the impact of your investment while maintaining the highest standards of design.
                                            <br/><br/>
                                            <b>Bringing Innovation and Creativity to Interior Design</b><br/>
                                            As trends evolve, we stay ahead of the curve by constantly exploring innovative design concepts and incorporating creative solutions. Our interior designers in India are passionate about design and strive to bring a fresh perspective to every project. By blending innovation, functionality, and aesthetics, we create spaces that are not only visually appealing but also unique and inspiring. Our goal is to create timeless designs that stand out from the crowd.<br/><br/>
                                            
                                            <b>Extensive Portfolio of Successful Projects</b><br/>
                                            With years of experience in the industry, we have built an extensive portfolio of successful interior design projects in India. Our diverse range of projects includes residential homes, apartments, offices, retail spaces, and more. Each project showcases our commitment to excellence and attention to detail. We invite you to explore our portfolio to gain inspiration and confidence in our ability to bring your vision to life.
                                            `)
                                }
                            </div>
                        </div>
                    </div>
                }
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faq22">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqans22" aria-expanded="false" aria-controls="faqans22">
                            <h4>Related Links</h4>
                        </button>
                    </h2>
                    <div id="faqans22" className="accordion-collapse collapse" aria-labelledby="faq22" data-bs-parent="#faqacc">
                        <div className="accordion-body">
                            {
                                internal ?
                                    parse(internal.links)
                                    : areabottom ?
                                        parse(arealinking.body)
                                        :
                                        "Default Title"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Linking