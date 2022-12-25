import React from 'react'
import './Hero.css'
import HeroImage from '../../Assets/Hero.svg'


const Hero = () => {
    return (
        <div className='heroContainer'>
            <h1 className="heading">
                The <span>Future </span>Of Email
            </h1>
            <p className="subheading">
                What if someone could add to <span>cart, checkout, schedule a meeting or register</span> invoice distribution register for a webinar right from their email?
            </p>
            <button className="btn-primary">Try for free</button>
            <div className="heroImage">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    )
}

export default Hero