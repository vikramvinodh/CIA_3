import React from 'react'
import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'


function Presence() {
    return (
        <section className='presence'>
            <div className="presence-bg ">
                <div className='container'>
                    <h1><b>Our</b><i> Presence</i></h1>
                    <div className='presence-locations   flex-column flex-lg-row   justify-content-around'>
                        <div >
                            <div className='d-flex justify-content-start align-items-center mx-5'>
                                <FaLocationDot fill="white" size={30} className='me-3' />
                                <Link href='/bangalore'>Bangalore</Link>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mx-5'>
                                <FaLocationDot fill="white" size={30} className='me-3' />
                                <Link href='/kochi'>Kochi</Link>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mx-5'>
                                <FaLocationDot fill="white" size={30} className='me-3' />
                                <Link href='/coimbatore'>Coimbatore</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Presence