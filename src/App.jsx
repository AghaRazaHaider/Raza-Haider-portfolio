import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Aboutme from './components/Aboutme/Aboutme'
import './app.css'
import Footer from './components/Footer/Footer'
import Homepage from "./pages/Homepage/Homepage";
import Seemoreprojects from "./pages/Seemoreprojects";
import Notfound from "./pages/Notfound/Notfound";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      < Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/seemoreprojects" element={<Seemoreprojects/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  )
}

export default App
