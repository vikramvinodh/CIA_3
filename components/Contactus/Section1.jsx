import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'
import Link from 'next/link'

function Section1() {
    return (
        <section className='belowbanner'>
            <div className='contact-banner d-flex flex-column' >

                <div className='d-flex align-items-center justify-content-center'>
                    <IoMdMail size='30px' />
                    <p>ArtFullinteriors.com@gmail.com</p>
                </div>


                <div className='d-flex align-items-center justify-content-center'>
                    <BiPhoneCall size='30px' />
                    <Link href='tel:8553023688'>
                        <p>91-8553023688</p>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Section1