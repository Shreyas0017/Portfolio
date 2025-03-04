import React from 'react'
import './Hero.css'
import Profile from '../../assets/profile_photo.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={Profile} alt="" />
      <h1><span>I am Shreyas Saha, </span>a random debugger.</h1>
      <p>I am a passionate and skilled web and app developer, currently in my second year of Computer Science and Engineering. With hands-on experience in modern development technologies, I have worked on projects ranging from full-stack web applications to AI-powered tools.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
