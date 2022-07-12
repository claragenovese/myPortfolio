import React from 'react'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className='text-center'>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
