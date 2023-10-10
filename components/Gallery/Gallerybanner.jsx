import React from 'react'

function Gallerybanner() {
  return (
    <section className='Gallery-Banner'>

      <div className='container-fluid'>
        <div className='banner-text '>

          <div className='banner-gal col-lg-5 col-sm-12 text-center '>
            <h3 className='mb-3'>The World Class Interior Designers From<br />  The Highest Rated Interior Design Company</h3>
            <button className='bannerbtn'>View projects</button>            <button className='bannerbtn' data-bs-toggle="modal" data-bs-target="#popupmodal">Get Expert's Advice</button>          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallerybanner

