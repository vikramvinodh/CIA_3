import React from 'react'
import Navbar from '../home/Navbar'
import Gallerybanner from './Gallerybanner'
import Ourdesigners from '../home/Ourdesigners'
import Ourprocess from '../home/Ourprocess'
import Faq from '../home/Faq'
import Footer from '../home/Footer'
import Bottom from '../home/Bottom'
import Galleryimages from './Galleryimages'



function Gallery() {
    return (
        <>
            <Navbar />
            <Gallerybanner />
            <Galleryimages />
            <Ourdesigners />
            <Ourprocess />
            <Faq />
            <Bottom />
            <Footer />
        </>
    )

}

export default Gallery