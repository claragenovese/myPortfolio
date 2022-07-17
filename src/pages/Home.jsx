import Sphere from '../components/Sphere'
import React from 'react'
import Typed from 'react-typed';
import { motion } from 'framer-motion'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

//si tengo mas de una animación 3d puedo hacer del canvas un componente 

function Home() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center p-10' >
      <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 3, delay: 0.3 }}
        className='text-red relative z-10'
      >
        <h1 className='text-white font-normal text-[50px] text-center'>
          Hi, I'm <span className=' text-purple-300 font-semibold subpixel-antialiased'>Clara Genovese</span>
          <br />
          <Typed
              strings={["Front-End Developer"]}
              typeSpeed={70}
          />
        </h1>
      </motion.div>
      {/* <Sphere /> */}
      <div className='absolute  bottom-10 animate-arrow'>
        <MdOutlineArrowForwardIos className='rotate-90 scale-[2]'/>
      </div>
    </div>
  )
}

export default Home