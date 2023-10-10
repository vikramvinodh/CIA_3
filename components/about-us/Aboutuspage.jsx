import React from 'react'
import img from '../../public/images/story.png'
import Image from 'next/image'

function Aboutuspage() {
    return (
        <section className='aboutuspage container'>
            <div className='bannertextb d-flex justify-content-between '>
                <h2>ArtFull Interiors</h2>
                <h2>Since 1995</h2>
            </div>
            <h1 className='heading-type'>Our Story</h1>
            <div className='aboutcontent row'>
                <div className='col-lg-6 col-sm-12 p-5 d-flex flex-column align-items-center'>
                    <Image className='imgstory' src={img} alt='' width='625px' height='330px' />
                    <button className="light-button" data-bs-toggle="modal" data-bs-target="#popupmodal">Consult now</button>
                </div>
                <div className='col-lg-6 col-sm-12 p-5 d-flex flex-column align-items-center'>
                    <p >We live in interesting times defined by exponential change. We have increasingly learned to adapt to this change. It combines the creative, the aesthetic, the innovative, and the practical to create the important stages upon which people live their lives. Interior design is about so much more than ‘what looks right’. It is about taking a holistic view of the way that individuals enjoy and use the spaces that they inhabit. We take pride in being the best interior designers in Bangalore. 25 years of interior design journey starting with the introduction of Glulam from New Zealand, exciting and creative designing of homes & offices in India, fulfilling relations with our happy and satisfied customers. The journey continues as we turn the buildings into homes.</p>
                    <button className="light-button" data-bs-toggle="modal" data-bs-target="#popupmodal">Get Custom Quote</button>
                </div>
            </div>
            <div className="ourstyle">
                <h1 className='heading-type'>Our Style</h1>
                <div className='aboutcontent row'>
                    <div className=' mt-5 p-5 '>
                        <p >We live in interesting times defined by exponential change. We have increasingly learned to adapt to this change. It combines the creative, the aesthetic, the innovative, and the practical to create the important stages upon which people live their lives. Interior design is about so much more than ‘what looks right’. It is about taking a holistic view of the way that individuals enjoy and use the spaces that they inhabit. We take pride in being the best interior designers in Bangalore. 25 years of interior design journey starting with the introduction of Glulam from New Zealand, exciting and creative designing of homes & offices in India, fulfilling relations with our happy and satisfied customers. The journey continues as we turn the buildings into homes.</p>
                    </div>
                    <div className='veed   '>
                        <iframe className='veedvideo' width="100%" height="380" src="https://www.youtube.com/embed/EPARApuehiA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutuspage