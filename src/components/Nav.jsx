import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { motion } from 'framer-motion'
import { secondContainer, item } from '../animationVariants'
import { navTopics } from '../textContent'

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const navItemsOffset = [-30, -30, -75, -150]

  const navItems = navTopics.map((navItem, idx) => (
    <Link to={navItem} smooth={true} duration={500} offset={navItemsOffset[idx]}>
      <motion.li 
        variants={item}
        className='uppercase tracking-[3px] font-extralight text-xl lg:text-sm cursor-pointer
        navItemBg py-1 px-3 rounded-md border-2 border-slate-400/20 
        hover:border-slate-50/0'
      >{navItem}</motion.li>
    </Link>
  ))





  return (
    <nav className='fixed w-full z-50 px-8 py-3 flex justify-between items-center bg-slate-600/[.05] backdrop-blur-md'>
      
      <div>CG</div>
      <motion.ul 
        className="hidden lg:flex ml-auto gap-5 text-[14px]"
        variants={secondContainer}
        initial="hidden"
        animate="visible"
      >
        {navItems}
      </motion.ul>

      <div onClick={() => setIsNavOpen(prev => !prev)}>
        {isNavOpen ?
          <IoIosClose className='lg:hidden text-3xl z-50'/> : 
          <FaBars className='lg:hidden text-3xl z-50'/>}
      </div>

      {/* Mobile ul starts here */}
      <div 
        className={`block lg:hidden absolute -z-10 top-0 right-[-110%] w-screen h-screen sm:w-[400px]  
        bg-black/[.85] transition-all 
            ${isNavOpen ? "right-[0%]" : ""} `}
      > 
        <motion.ul 
          className="flex flex-col mt-[50%] -translate-y-1/2 gap-8 font-bold"
        >
          {navItems}
        </motion.ul>
      </div>
    </nav>
  )
}

export default Nav          