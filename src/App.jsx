import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SocialMediaIcons from './components/socialMediaIcons';

function App() {
  return (
    <div className='background-style text-center'>
      <Nav />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Home />} />
      </Routes> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      <SocialMediaIcons />
    </div>
  )
}

export default App
