import React from 'react'
import './aboutme.css'
import aboutmepicture from '../../assest/about-me.jpg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";

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
          <div className="skills-logo">
            <span><FaHtml5 /></span>
            <span><FaCss3Alt /></span>
            <span><FaJsSquare /></span>
            <span><FaReact /></span>
            <span><FaGitAlt /></span>
            <span><SiReactrouter /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
