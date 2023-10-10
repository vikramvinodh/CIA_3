import React, { useState, useEffect } from 'react'


function Sticky() {

    const [activeSection, setActiveSection] = useState(null);



    const scrollto = (ele, offset = 0) => {
        const item = document.getElementById(ele);
        const offsetTop = item.getBoundingClientRect().top + window.pageYOffset - offset - 50;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const sectionIds = ['trending', 'ourprocess', 'faq'];
        const sections = sectionIds.map(id => document.getElementById(id));
        const activeIndex = sections.findIndex(section => {
            const rect = section.getBoundingClientRect();

            return rect.top <= 100 && rect.bottom > 0;
        });
        setActiveSection(activeIndex >= 0 ? sectionIds[activeIndex] : null);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section className='sticky-nav mb-5'>
            <div className="container">
                <div className="sticky-nav-items">
                    <div className="sticky-nav-item">
                        <p className={`${activeSection === 'trending' && 'active'}`} onClick={() => scrollto('trending', 0)}>Trending</p>
                    </div>


                    <div className="sticky-nav-item">
                        <p className={`${activeSection === 'ourprocess' && 'active'}`} onClick={() => scrollto('ourprocess', 0)}>Our process</p>
                    </div>
                    <div className="sticky-nav-item">
                        <p className={`${activeSection === 'faq' && 'active'}`} onClick={() => scrollto('faq', 0)}>FAQ's</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <button className='bannerbtn py-0 fs-6 m-1' data-bs-toggle="modal" data-bs-target="#popupmodal">Get a Custom quote</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Sticky
