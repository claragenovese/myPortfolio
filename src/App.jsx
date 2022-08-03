import React, { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import FixedIcons from './components/FixedIcons'
import SelectedProject from './components/SelectedProject';
import Footer from './components/Footer';


function App() {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    function getScroll(){
      if(window.scrollY > 400) setIsScroll(true)
      else setIsScroll(false)
    }
    
    window.addEventListener('scroll', getScroll)

    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  })

  
  return (
    <div className={`background-style text-center relative`}>
      {isScroll && <Nav />}
      <Home />
      <About />
      <Projects />
      <Contact /> 
      <Footer />
      {isScroll && <FixedIcons />}
      <SelectedProject />
    </div>
  )
}

export default App
