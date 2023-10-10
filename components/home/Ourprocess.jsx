import React from 'react'
import flo from '../../public/images/flo.png'
import Link from 'next/link'
import Image from 'next/image'

function Ourprocess() {
    return (
        <section className='ourprocess container my-5 pt-5' id='ourprocess'>
            <h1 className='heading-type'>Our Process</h1>
            <p><i>Our Interior designing process can vary from project to project. Here are some general factors that we consider before for the seamless execution of projects.
            </i></p>
            <div className='d-flex justify-content-between flex-column flex-lg-row align-items-center'>
                <div className="process-card ">
                    <div className="processone-sprite"></div>
                    <h4>Client requirements </h4>
                </div>
                <div className="process-card ">
                    <div className="processtwo-sprite"></div>
                    <h4>Space planning</h4>
                </div>
                <div className="process-card ">
                    <div className="processthree-sprite"></div>
                    <h4>Materials and Finishes</h4>
                </div>
            </div>
            <div className='d-flex justify-content-between  flex-column flex-lg-row align-items-center'>
                <div className="process-card ">
                    <div className="processfour-sprite"></div>
                    <h4>Lighting and color scheme
                    </h4>
                </div>
                <div className="process-card ">
                    <div className="processfive-sprite"></div>
                    <h4>Furniture and Fixtures</h4>
                </div>
                <div className="process-card ">
                    <div className="processsix-sprite"></div>
                    <h4>Budget</h4>
                </div>
            </div>
            <div className='mt-5'>
                <p>We use environment friendly & ISI certified
                    products & we use eco friendly sustainable
                    products. We recommend plantation grown
                    products & we discard forest timbers</p>
            </div>
            <div className="ratio ratio-21x9 mt-5">
                <Link href='https://www.youtube.com/embed/EPARApuehiA' target='_blank'>
                    <Image src={flo} alt='-'  />
                </Link>
            </div>
        </section>
    )
}

export default Ourprocess
