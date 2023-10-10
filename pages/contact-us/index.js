
import Section1 from '@/components/Contactus/Section1'
import Banner from '@/components/home/Banner'
import Bottom from '@/components/home/Bottom'
import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import Ourdesigners from '@/components/home/Ourdesigners'
import Ourprocess from '@/components/home/Ourprocess'
import Head from 'next/head'
import React from 'react'



export default function index() {
    return (
        <>
                <Head >
                <script src="http://localhost:8097"></script>
                <meta name="google-site-verification" content="IfTwZa2ngritnv69sct6tmPmMtuO9EEgmYXsefwmNOg" />
                <title>Contact Us | Let's Bring Your Vision to Life | ArtFull Interiors</title>
                <meta name="description" content="Make your space beautiful and functional with our interior design services. We offer customized solutions for all your interior design needs with 5 year warranty. ✔Contact Us" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Banner />
            <Ourdesigners />
            <Section1 />
            <Ourprocess />
            <Bottom />
            <Footer />
        </>
    )
}
