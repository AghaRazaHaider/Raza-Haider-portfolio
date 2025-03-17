import React from 'react'
import './aboutme.css'
import aboutmepicture from '../../assest/about-me.jpg'

const Aboutme = () => {
  return (
    <div>
      <h1 className='about-me-heading'>About me</h1>
      <div className='about-me-card'>
        <div className='about-me-card-image'>
          <img src={aboutmepicture}/>
        </div>
        <div className='about-me-card-items'>
          <h1>Front-end Developer based in Karachi, Pakistan. 📍</h1>
          <p>I specialize in crafting responsive ,user-friendly websites using React. I focus on delivering seamless web experiences with attention to detail and a strong sense of design.</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
