import Sphere from '../components/Sphere'
import React from 'react'
import { animate, motion } from 'framer-motion'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-scroll';

const subTitleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition:{
      delayChildren: 2,
      staggerChildren: 0.07,
    }
  }
}

// const eachLetterVariants = {
//   hidden: { 
//     opacity: 0,
//     y: "100%"
//   },
//   visible: {
//     opacity:1,
//     y: "0%",
//     transition: {
//       ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
//   }
// }

const eachLetterVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
  }
};

function Home() {
  const title = "CLARA GENOVESE"
  const subTitle = "FRONT-END DEVELOPER"
  const lol = subTitle.split('')
  return (
    <div id="home" className='relative w-screen h-screen flex flex-col items-center justify-center' >
      {/* <Sphere /> */}
      <div 
        className='relative z-10 w-full center-element text-slate-400'
      >
        <div className='overflow-y-hidden'>
          <motion.h1 
            initial={{y: "200%"}}
            animate={{y: '0%'}}
            transition={{duration: 0.8, delay: 0.5}}
            className='mx-5 gradientText font-bold tracking-[10px] text-[30px] lg:text-[50px] text-center'
          >
            {title}
          </motion.h1>
        </div>
        <motion.h3 
          variants= {subTitleVariants}
          initial='hidden'
          animate='visible'
          className='mx-5 mt-3 text-[15px] lg:text-[25px] tracking-[7px] text-shadow'
        >
          {lol.map((item, idx) => (
            <motion.span
              key={idx}
              variants= {eachLetterVariants}
            >{item}</motion.span>
          ))}
        </motion.h3>
      </div>
      <div className='absolute bottom-10 animate-arrow '>
        <Link to='about' smooth={true} offset={-30} duration={500}>
          <MdOutlineArrowForwardIos className='rotate-90 scale-[2] hover:scale-[3]'/>
        </Link>
      </div>
    </div>
  )
}

export default Home