import Bottom from '@/components/home/Bottom'
import Footer from '@/components/home/Footer'
import Ourdesigners from '@/components/home/Ourdesigners'
import Ourprocess from '@/components/home/Ourprocess'
import WhyUs from '@/components/home/WhyUs'
import Services from '@/components/services/Services'
import React from 'react'
import Head from 'next/head'

function index() {
    return (
        <>
            <Head >
                <script src="http://localhost:8097"></script>
                <meta name="google-site-verification" content="IfTwZa2ngritnv69sct6tmPmMtuO9EEgmYXsefwmNOg" />
                <title>Services | Transforming Spaces with Expertise | ArtFull Interiors</title>
                <meta name="description" content="Make your space beautiful and functional with our interior design services. We offer customized solutions for all your interior design needs with 5 year warranty. ✔Contact Us" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Services />
            <WhyUs />
            <Ourprocess />
            <Ourdesigners />
            <Bottom />
            <Footer />

        </> 
    )
}

export default index