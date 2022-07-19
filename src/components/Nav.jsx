import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return (
    <nav className='fixed w-full z-50 px-8 py-4 flex justify-between items-center'>
      <img 
        className='w-[100px] aspect-{1.3}'
        src='../src/assets/Claralogo.png' 
        alt='Clara Logo'/>
      
      <motion.ul 
        className="nav-list hidden lg:flex ml-auto gap-10 text-md	"
        variants={variants}
      >
        <Link to="home" smooth={true} duration={500} offset={-30}><li>Home</li></Link>
        <Link to="about" smooth={true} duration={500} offset={-30}><li>About</li></Link>
        <Link to="projects" smooth={true} duration={500} offset={-30}><li>Projects</li></Link>
        <Link to="contact" smooth={true} duration={500} offset={-30}><li>Contact</li></Link>
      </motion.ul>
      <div onClick={() => setIsNavOpen(prev => !prev)}>
        {isNavOpen ?
          <IoIosClose className='lg:hidden text-3xl z-50'/> : 
          <FaBars className='lg:hidden text-3xl z-50'/>}
      </div>

      {/* Mobile ul starts here */}
      <div className={`block lg:hidden absolute -z-10 top-0 right-[-100%] w-screen sm:w-[400px] h-screen bg-slate-500 transition-all 
      ${isNavOpen ? "right-0" : ""}
      
      `}> 
        <motion.ul 
          className="flex flex-col mt-[25%] gap-[15px]"
          variants={variants}
        >
          <Link to="home" smooth={true} duration={500}><li>Home</li></Link>
          <Link to="about" smooth={true} duration={500}><li>About</li></Link>
          <Link to="projects" smooth={true} duration={500}><li>Projects</li></Link>
          <Link to="contact" smooth={true} duration={500}><li>Contact</li></Link>
        </motion.ul>
      </div>
    </nav>
  )
}

export default Nav          