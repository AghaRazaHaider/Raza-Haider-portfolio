import { Link } from "react-router-dom";
import React from 'react'
import { IoIosSunny } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import './header.css'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <Link to="/"><h2>Raza</h2></Link>
        <Link to="/about">
        <button>Available for projects <MdArrowOutward /></button>
        </Link>
        <h2 onClick={() => setDarkMode(!darkMode)}><IoIosSunny /></h2>
    </header>
  )
}

export default Header
