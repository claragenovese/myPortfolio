import React from 'react'
import {Routes} from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className='background-style text-center'>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
