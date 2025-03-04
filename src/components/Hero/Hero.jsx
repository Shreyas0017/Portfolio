import React from 'react'
import './Hero.css'
import Profile from '../../assets/profile_photo.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={Profile} alt="" />
      <h1>I am Shreyas Saha, a random debugger</h1>
      <p>Description</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
