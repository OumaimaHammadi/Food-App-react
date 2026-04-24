import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.jpg'
import navProfile from '../../assets/nav-profile.svg' 


export const Navbar = () => {
  return (
    <div className='navbar'>

          <div className="nav-logo">
                <img src={navlogo} alt=""  className='navbar-icon'/> 
              </div>
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}
 