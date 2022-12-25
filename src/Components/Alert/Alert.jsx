import React, { useEffect, useState } from 'react'
import './Alert.css'

const Alert = () => {
    const [alert, setAlert] = useState(false)


    useEffect(() => {
        setTimeout(function () {
            setAlert(true)
            
        }, 3000);
        
    }, []);



    const handleClose = () => {
        setAlert(false)
        
    }


    return (
        <>
            {
                alert ? <div className='AlertContainer'>
                    <div className="alertBox">
                        <h2>Alert</h2>
                        <p style={{ fontSize: "3rem" }}>😊</p>
                        <p>The entire website was created by me alone, without any assistance from any other resources. It is my hope that you will like my work and the effort I put into it.</p>
                        <p>This is a responsive website, and every dropdowns, checkboxes, and input range on the "Customize your plan" page works and also the FAQ section. <span className='redColor'><strong>Thanks for giving me such an oppurtunity to create this.</strong></span></p>
                        <a href="https://lalitkumarportfolio.netlify.app/" target="_blank"><strong><i>Visit my Portfolio to know more about me</i></strong></a>
                        <button className='btn-primary-long' onClick={handleClose}>Ok</button>
                    </div>
                </div> : null
            }

        </>
    )
}

export default Alert