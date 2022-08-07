import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { AnimatePresence, motion } from 'framer-motion'
import { secondContainer, fourthContainer, navMobContainer, item2 } from '../animationVariants'
import { navTopics } from '../textContent'
import useOutsideClick from '../hooks/useOutsideClick'

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const navItemsOffset = [-30, -30, -75, -230]
  const navMobRef = useRef()
  const removeNavMobile = useOutsideClick(navMobRef)

  useEffect(() => {
    isNavOpen && setIsNavOpen(false)
  }, [removeNavMobile])

  const navItems = navTopics.map((navItem, idx) => (
    <Link 
      key={idx}
      to={navItem} 
      smooth={true} 
      duration={500} 
      offset={navItemsOffset[idx]}
    >
      <motion.li 
        whileHover={{scale: 1.1}}
        variants={item2}
        onClick={() => setIsNavOpen(false)}
        className='uppercase tracking-[3px] font-extralight text-xl lg:text-sm cursor-pointer
        py-1 px-3 rounded-md border-2 border-slate-400/20 
        hover:border-slate-50/0
        transition-all'
      >{navItem}</motion.li>
    </Link>
  ))





  return (
    <nav ref={navMobRef} className='fixed w-full z-50 px-8 py-3 flex justify-between items-center bg-slate-600/[.05] backdrop-blur-md'>
      
      <div>CG</div>
      <motion.ul 
        className="hidden lg:flex ml-auto gap-5 text-[14px]"
        variants={secondContainer}
        initial="hidden"
        animate="visible"
      >
        {navItems}
      </motion.ul>

      {/* Mobile part starts here */} 

      <div 
      onClick={() => setIsNavOpen(prev => !prev)}>
        {isNavOpen ?
          <IoIosClose className='lg:hidden text-3xl z-50'/> : 
          <FaBars className='lg:hidden text-3xl z-50'/>}
      </div>
      <AnimatePresence>
      { isNavOpen && 
        <motion.div 
          variants={navMobContainer}
          initial= "hidden"
          animate="visible"
          exit= "hidden"
          transition={{duration: 0.05}}
          className={`block lg:hidden absolute -z-10 top-0 right-[-110%] w-screen h-screen sm:w-[400px]  
        p-4 transition-all bg-slate-100/[.97] 
              ${isNavOpen ? "right-[0%]" : ""} `}
        > 
          <motion.ul 
            variants={fourthContainer}
            className="flex flex-col max-w-[250px] mx-auto mt-20 gap-8 font-bold"
          >
            {navItems}
          </motion.ul>
        </motion.div>
      }
      </AnimatePresence>
    </nav>
  )
}

export default Nav          