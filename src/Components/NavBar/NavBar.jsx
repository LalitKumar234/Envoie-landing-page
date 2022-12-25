import React, { useState } from 'react'
import './NavBar.css'
import Logo from '../../Assets/Logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const NavBar = () => {
  const [nav, showNav] = useState(true)

  const handleNav = () =>{
    if(!nav){
      showNav(true)
    }
    else{
      showNav(false)
    }
  }

  return (
    <>
      <nav className="NavContainer">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="menus">
            <li className='menu active'>Home</li>
            <li className='menu'>FAQs</li>
            <li className='menu'>Pricing</li>
          </ul>
          <div className="loginBtn">
            <button className='login'>Log in</button>
            <button className='signUp'>Sign Up</button>
          </div>
          <div className="hamburgerIcon" onClick={handleNav}>
            <GiHamburgerMenu style={{color:"#FB5F65"}} size={30} />
          </div>
        </div>

        {/* Responsive navbar */}

        {
          !nav ? <div className="responsive-navbar">
          <div className="res-logo">
            <img src={Logo} alt="" />
            <IoMdClose size={30} style={{color:"#FB5F65"}}onClick={handleNav}/>
          </div>
          <ul className="responsive-menus">
            <li className='menu active'>Home</li>
            <li className='menu'>FAQs</li>
            <li className='menu'>Pricing</li>
          </ul>
          <div className="responsive-loginBtn">
            <button className='login'>Log in</button>
            <button className='responsive-signUp'>Sign Up</button>
          </div>
        </div> : null
        }
  


      </nav>
    </>
  )
}

export default NavBar