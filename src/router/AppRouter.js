import React from 'react'
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Home from "../pages/home/Home"
import Projects from "../pages/projects/Projects"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/contact" element= {<Contact/>} />
      <Route path="/projects" element= {<Projects/>} />

     
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter