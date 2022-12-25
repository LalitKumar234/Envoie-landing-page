import React, { useState } from 'react'
import './FAQ.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const FAQ = () => {
    const [show, setShow] = useState(true)

    const handleShow = () => {
        if (!show) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }

    return (
        <div className='faqSection'>
            <h1>Frequently <span className='redColor'>Asked</span>  Questions</h1>
            <div className='faq' onClick={handleShow}>
                <div className="faqHeader">
                    <h3>What if the email provider doesn’t open AMP emails ?</h3>
                    {
                        show ? <GrClose size={20} /> : <AiOutlinePlus size={25} />
                    }

                </div>
                {
                    show ? <p className='faqContent'>We have an HTML fallback that you can configure. Gmail and Yahoo will allow AMP emails to open, for other email clients that  don’t support AMP, an HTML version will open instead.</p> : null
                }

            </div>
            <div className='faq'>
                <div className="faqHeader">
                    <h3>How do I send AMP emails ?</h3>
                    <AiOutlinePlus size={25} />

                </div>

            </div>
        </div>
    )
}

export default FAQ