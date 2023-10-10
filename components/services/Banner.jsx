import React from 'react'
import Navbar from '../home/Navbar'

function Banner() {
    return (
        <section className='service-banner'>
            <Navbar />
            <div className='container'>
                <div className='banner-text '>

                    <div className='banner-ser col-lg-7 col-sm-12 text-center mb-5'>
                        <h3 className='mb-3'>The World Class Interior Designers From<br />  The Highest Rated Interior Design Company</h3>
                        <button className='bannerbtn'>View projects</button>
                        <button className='bannerbtn'>Get Expert's Advice</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner
