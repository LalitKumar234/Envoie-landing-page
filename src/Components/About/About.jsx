import React from 'react'
import './About.css'
import AboutLeft from '../../Assets/AboutLeft.svg'
import AboutRight from '../../Assets/AboutRight.svg'

const About = () => {
    return (
        <div className='aboutContainer'>
            <div className="about">
                <div className="aboutImg">
                    <img src={AboutLeft} alt="" />
                </div>
                <div className="aboutContent">
                    <h1 className="aboutHeading">What's an <span className='redColor'>AMP</span> email?</h1>
                    <p>AMP email is a technology that allows you to incorporate interactive elements like   buttons, quizzes, webinar forms, calendars etc. into your emails without needing to open a new tab to visit a website.</p>
                </div>
            </div>
            <div className="about" id="sndAbout">
                <div className="aboutContent" >
                    <h1 className="aboutHeading">Why does it AMP <span className='redColor'>matter?</span></h1>
                    <p>When you reduce friction and you reduce steps, <span className='redColor'>you increase conversion rates!</span></p>
                    <p>What if you could circumvent the steps that we have usually focused on which is a click through on an email, then a landing page visit and then a form fill or a booking request or a checkout. The new flow will be open email and fill the form, checkout or submit a booking request right in the email. No redirect to safari or chrome, no open a new tab, no waiting for a new page to load. How will this impact your conversion rates?</p>
                </div>
                <div className="aboutImg">
                    <img src={AboutRight} alt="" />
                </div>
            </div>

        </div>
    )
}

export default About