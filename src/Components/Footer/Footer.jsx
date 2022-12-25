import React from 'react'
import './Footer.css'
import Logo from '../../Assets/Logo.svg'
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footerSection'>
      <div className="footerContent">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footerText">
          <p className='border-right'>Terms & Conditions</p>
          <p className='border-right'>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <p className='email'>questions@envoie.email</p>
      </div>
      <p className='footer-end'>2022 Envoie © All Rights Reserved</p>
      <p>Developed with ❤️ by 👉 <a href="https://lalitkumarportfolio.netlify.app/" target="_blank"><strong>Lalit Kumar</strong></a></p>
      <p className='github'><AiFillGithub size={25}/> <a href="https://lalitkumarportfolio.netlify.app/" target="_blank"><strong>Source Code</strong></a></p>
    </footer>
  )
}

export default Footer