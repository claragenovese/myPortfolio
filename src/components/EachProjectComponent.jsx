import React from 'react'
import { motion } from 'framer-motion'
import { useIdContext } from '../Context'

function EachProjectComponent({project}) {
  const {handleClick} = useIdContext()
  return (
    <motion.div 
      className="w-[300px] h-[170px] md:h-[180px] m-6 md:m-14 
                relative flex justify-center items-center
                group"  
      onClick={() => handleClick(project.id)}    
      layoutId={project.id} 
    >
      <img src={project.bannerImg} alt={project.name} 
        className="absolute -z-5 h-full w-full object-cover
        rounded-md
        group-hover:-translate-y-1 group-hover:brightness-[1.1] group-hover:shadow-3xl transition-all
        transform-transition"
      />
    </motion.div>
  )
}

export default EachProjectComponent