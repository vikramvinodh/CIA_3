import Gallery from '@/components/Gallery/Gallery'
import Head from 'next/head'
import React from 'react'

function index() {
    return (
        <div>
            <Head >
                <script src="http://localhost:8097"></script>
                <meta name="google-site-verification" content="IfTwZa2ngritnv69sct6tmPmMtuO9EEgmYXsefwmNOg" />
                <title>Gallery | Inspiring Designs to Enchant | ArtFull Interiors</title>
                <meta name="description" content="Make your space beautiful and functional with our interior design services. We offer customized solutions for all your interior design needs with 5 year warranty. ✔Contact Us" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Gallery />
        </div>
    )
}

export default index
