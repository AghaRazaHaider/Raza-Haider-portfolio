import React from 'react'
import './hero.css'
import { FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='section'>
      <div className="section-center">
        <div className="hero-items">
        <h1>I am a Creative, Fresh React JS developer.</h1>
        <h1>Raza Haider</h1>
        </div>
        <div className="hero-links">
          <ul>
            <li><FaGithub /></li>
            <li><TbBrandFiverr /></li>
            <li><FaLinkedin /></li>
            <li><FaInstagram /></li>
          </ul>
        </div>
        </div>
    </section>
  )
}

export default Hero
