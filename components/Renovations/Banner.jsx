import React from 'react';

function Banner({ city }) {
    let h1Text = "";

    if (city === "bangalore") {
        h1Text = "The World Class Interior Designers From The Highest Rated Interior Design Company in Bangalore";
    } else if (city === "kochi") {
        h1Text = "The World Class Interior Designers From The Highest Rated Interior Design Company in Kochi";
    } else if (city === "coimbatore") {
        h1Text = "The World Class Interior Designers From The Highest Rated Interior Design Company in Coimbatore";
    } else {
        h1Text = "The World Class Interior Designers From The Highest Rated Interior Design Company";
    }

    return (
        <section className='ren-banner'>
            <div className='container-fluid'>
                <div className='banner-text '>
                    <div className='banner-gal col-lg-5 col-sm-12 text-center '>
                        <h1 className='mb-3'>{h1Text}</h1>

                        <div className='d-flex justify-content-center'>
                            <button className='bannerbtn me-3'>View projects</button>
                            <button className='bannerbtn' data-bs-toggle="modal" data-bs-target="#popupmodal">Get Expert's Advice</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
