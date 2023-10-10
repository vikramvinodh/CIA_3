import React from 'react';
import Link from 'next/link';
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'
import { AiOutlineWhatsApp } from 'react-icons/ai';


function Stickyhead() {
  return (
    <div className="sticky-wrapper">
      <section className="sticky-head ">
        <div className="sticky-stick container">
          <div className="head1 d-flex">
            <div className="d-flex">
              <p className='red'>Call us Now!</p>
            </div>
            <div className="d-flex">
              <div className="call mx-3">
                <Link href="https://api.whatsapp.com/send?phone=+918553023688&text=Hi" >
                  <p className='d-flex justify-content-center align-items-center'>
                    <AiOutlineWhatsApp fill='white' className='mx-2' />Whatsapp
                  </p>
                </Link>
              </div>
              <div className="call mx-3">
                <Link href="tel:8553023688">
                  <p className='d-flex justify-content-center align-items-center'>
                    <BiSolidPhoneCall fill='white' className='mx-2' />8553023688
                  </p>
                </Link>
              </div>
              <div className="mail">
                <Link href="mailto:ArtFullinteriors.com@gmail.com">
                  <p className='d-flex justify-content-center align-items-center'>
                    <IoMdMail fill='white' className='mx-2' />ArtFullinteriors.com@gmail.com
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stickyhead;
