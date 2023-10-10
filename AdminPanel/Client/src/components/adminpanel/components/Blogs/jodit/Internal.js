import React from 'react'

function Faqs(props) {
    const faqItems = props.internal_section?.map((faq, index) => (
        <li key={index}>
            <strong>Q:{faq.title} </strong> <br /> A: {faq.value} <br />
            <button className='btn btn-danger btn-sm m-0 mt-2' onClick={() => props.onRemoveInt(index)}>Remove</button>
        </li>
    ));

    return (
        <div>
            <div className="d-flex mx-5">
                <div className="col-10">
                    <div className="row">
                        <label className="col-2 form-label">Title : </label>
                        <input
                            type="text"
                            className='input-text col-9 pr-4'
                            value={props.Int_content}
                            onChange={props.onIntcontentChange}
                            placeholder="Question"
                        />
                    </div>
                    <div className="row mt-4">
                        <label className="col-2 form-label">Value : </label>
                        <textarea
                            type="text"
                            className='input-text col-9'
                            value={props.Int_answer}
                            onChange={props.onIntvalueChange}
                            placeholder="Answer"
                        />
                    </div>
                </div>
                <div className="row align-items-center">
                    <button className='btn btn-success btn-sm p-1' onClick={props.onAddInt}>Add FAQ</button>
                    <button className='btn btn-danger btn-sm p-1' onClick={props.onClearInt}>Clear FAQs</button>
                </div>
            </div>

            {
                faqItems && faqItems.length === 0
                    ?
                    ""
                    :
                    <div className="row mt-5">
                        <label className="col-2 form-label">Output : </label>
                        <div className=" blog-faq-list col-9">
                            <ul>{faqItems}</ul>
                        </div>
                    </div>
            }

        </div>
    );
}
export default Faqs
