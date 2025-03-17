import React from 'react'
import Hero from '../../components/Hero/Hero'
import Aboutme from '../../components/Aboutme/Aboutme'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='home-page-body'>
      <Hero />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  )
}

export default Homepage
