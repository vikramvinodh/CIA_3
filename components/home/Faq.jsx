import React from 'react'
import { NextSeo, FAQPageJsonLd } from 'next-seo';

function Faq({ faq }) {
    const faqData = [
        {
            q: 'What is residential interior design?',
            a: 'Residential interior design is the art and science of enhancing the interior of a home to achieve a more aesthetically pleasing and functional space. It involves the selection and placement of furniture, colors, lighting, and other elements to create a comfortable and stylish environment that meets the needs and preferences of the homeowner.',
        },
        {
            q: 'Why should I hire a residential interior designer?',
            a: 'A residential interior designer can help you achieve your vision for your home by providing expert guidance on color schemes, furniture placement, lighting design, and other key elements of interior design. They can help you create a cohesive and stylish look for your home while also maximizing functionality and comfort.',
        },
        {
            q: ' How much does a residential interior designer cost?',
            a: "The cost of a residential interior designing can vary widely depending on factors such as the size of the project, the complexity of the design, the experience of the designer and the materials used. It is important to discuss pricing with your designer before beginning the project to ensure that it fits within your budget."
        },
        {
            q: '  How long does a residential interior design project take?',
            a: ' The timeline for a residential interior design project can vary depending on the scope andcomplexity of the project. Some projects may take only a few weeks to complete, while others may take several months. Your designer can provide you with an estimated timeline based on the specifics of your project.',
        },
        {
            q: '   What is the process for working with a residential interior designer?',
            a: '  Residential interior designing typically begins with an initial consultation to discuss your vision for the project and your budget. The designer will then develop a design plan that includes concepts,sketches, and material recommendations. Once the plan is approved, the designer will oversee the implementation of the design, including ordering materials and overseeing the work of contractors and other professionals.',
        },
        {
            q: '   How can I choose the right residential interior designer for my project?',
            a: '   Choosing the right residential interior designer for your project involves researching potential  designers, reviewing their portfolios and client testimonials, and scheduling consultations to discuss your vision for the project.',
        }
        // Add more question-answer pairs as needed
    ];

    const faqArray = faq ? faq : faqData;


    const faqEntities = faqData.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: a,
        },
    }));

    return (
        <>
            <section className='faq container mt-5 pt-3' id='faq'>
                <h4 className='text-center d-flex align-items-center justify-content-center my-4'>
                    <hr />
                    Frequently Asked Questions
                    <hr />
                </h4>

                {faqArray.map((value, index) => (
                    <div key={index}>
                        <div className="accordion" id="faqacc">
                            <div className="accordion-item">
                                <h4 className="accordion-header" id={`faq1${index}`}>
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#faqans1${index}`}
                                        aria-expanded="true"
                                        aria-controls={`faqans1${index}`}
                                    >
                                        <h4>{value.q}</h4>
                                    </button>
                                </h4>
                            </div>
                            <div
                                id={`faqans1${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`faq1${index}`}
                                data-bs-parent="#faqacc"
                            >
                                <div className="accordion-body">
                                    <p>{value.a}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </section>

            {/* Generate FAQ schema */}
            < FAQPageJsonLd
                mainEntity={faqEntities}
                schema={{
                    '@type': 'FAQPage',
                    mainEntity: faqEntities,
                }}
            />
        </>
    );
}

export default Faq;