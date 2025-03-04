import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default navbar
