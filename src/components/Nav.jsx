import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { motion } from 'framer-motion'
import { secondContainer, item } from '../animationVariants'

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return (
    <nav className='fixed w-full z-50 px-8 py-4 flex justify-between items-center'>
      
      <div>CG</div>
      <motion.ul 
        className="nav-list hidden lg:flex ml-auto gap-10 text-[14px]"
        variants={secondContainer}
        initial="hidden"
        animate="visible"
      >
        <Link to="home" smooth={true} duration={500} offset={-30}><motion.li variants={item}>Home</motion.li></Link>
        <Link to="about" smooth={true} duration={500} offset={-30}><motion.li variants={item}>About</motion.li></Link>
        <Link to="projects" smooth={true} duration={500} offset={-30}><motion.li variants={item}>Projects</motion.li></Link>
        <Link to="contact" smooth={true} duration={500} offset={-30}><motion.li variants={item}>Contact</motion.li></Link>
      </motion.ul>
      <div onClick={() => setIsNavOpen(prev => !prev)}>
        {isNavOpen ?
          <IoIosClose className='lg:hidden text-3xl z-50'/> : 
          <FaBars className='lg:hidden text-3xl z-50'/>}
      </div>

      {/* Mobile ul starts here */}
      <div className={`block lg:hidden absolute -z-10 top-0 right-[-110%] w-screen sm:w-[400px] h-screen bg-slate-500 transition-all 
      ${isNavOpen ? "right-[0%]" : ""}
      
      `}> 
        <motion.ul 
          className="flex flex-col mt-[25%] gap-[15px]"
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