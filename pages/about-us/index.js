import Aboutuspage from '@/components/about-us/Aboutuspage'
import Banner from '@/components/about-us/Banner'
import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import Head from 'next/head'

import React from 'react'

export default function index() {
    return (
        <>
            <Head >
                <script src="http://localhost:8097"></script>
                <meta name="google-site-verification" content="IfTwZa2ngritnv69sct6tmPmMtuO9EEgmYXsefwmNOg" />
                <title>About Us | Creating Timeless Elegance | ArtFull Interiors</title>
                <meta name="description" content="Make your space beautiful and functional with our interior design services. We offer customized solutions for all your interior design needs with 5 year warranty. ✔Contact Us" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Banner />
            <Aboutuspage />
            <Footer />
        </>
    )
}
