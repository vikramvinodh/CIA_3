import React from 'react'
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Link from 'next/link';
import { GalleryData1 } from './GalleryData';

function Galleryimages() {
    const [index, setIndex] = React.useState(-1);

    return (
        <section className='property-gallery container mt-5' id='gallery'>
            <h2>Our Recent Projects.</h2>

            <div className="gallery-container">

                <PhotoAlbum
                    layout="masonry"
                    photos={GalleryData1}
                    targetRowHeight={250}
                    breakpoints={[300, 600, 1200]}
                    // columns={[1, 2, 3]}
                    onClick={({ index }) => setIndex(index)}
                />

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={GalleryData1}
                />
            </div>

            <Link href='https://www.instagram.com/ArtFullinteriors/?hl=en ' target='_blank' >
                <button className='light-button mt-5' >
                    View on Instagram
                </button>
            </Link>

        </section>
    )
}

export default Galleryimages