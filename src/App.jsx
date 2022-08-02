import React, { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import FixedIcons from './components/FixedIcons'
import { projectsContent } from './textContent'
import { useIdContext } from './Context';
import { motion, AnimatePresence } from 'framer-motion'
import ImageSliders from './components/ImageSliders';
import { FaLink, FaCode } from 'react-icons/fa'
import useOutsideClick from './hooks/useOutsideClick';

function App() {
  const {selectedId, handleClick} = useIdContext()
  const [isScroll, setIsScroll] = useState(false)
  const wrapperRef = useRef(null)
  const isClickedOut = useOutsideClick(wrapperRef)

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

  isClickedOut && handleClick(null)
  
  return (
    <div className={`background-style text-center relative`}>
      {isScroll && <Nav />}
      <Home />
      <About />
      <Projects />
      <Contact /> 
      {isScroll && <FixedIcons />}
      <AnimatePresence>
        {selectedId && !isClickedOut &&
          <motion.div  
            className='fixed top-0 left-0 z-50 
            w-screen max-h-screen flex justify-center p-10
            overflow-x-hidden overflow-y-scroll
          bg-black/50'
          >
            <motion.div 
              layoutId={selectedId}
              className=' bg-neutral-200 p-10 max-w-2xl h-fit
              rounded-xl'
              ref={wrapperRef}
            >
              <div className='flex justify-center mb-8'>
                <motion.h5 className='uppercase tracking-widest text-[20px]'>{projectsContent[selectedId-1].name}</motion.h5>
                <div className='p-3 ml-auto mr-3 rounded-lg icons-style bg-black/10'><FaLink className=' '/></div>
                <div className='p-3 rounded-lg icons-style bg-black/10'><FaCode /></div>
              </div>
              <ImageSliders slidesArray={projectsContent[selectedId-1].slideImgs} />
              <motion.h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error et numquam placeat dicta amet cupiditate eligendi quis. Reprehenderit nulla eum optio ipsum quis tenetur omnis consequatur facere aliquam nam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta debitis voluptatum quos repellat distinctio iste quis aliquid repudiandae a corrupti ducimus obcaecati id quam fuga, consequuntur libero ratione nulla!
              </motion.h2>
              <button onClick={() => handleClick(null)}> lala </button>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default App
