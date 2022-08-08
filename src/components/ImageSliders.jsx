import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { secondContainer, item, item2 } from "../animationVariants";

export default function ImageSliders({slidesArray}) {
  const [idxSlide, setIdxSlide] = useState(0)
  const [opacity, setOpacity] = useState(false) 

  const btnStyles = 'text-[35px] cursor-pointer hover:scale-125 active:scale-95 transition-all'
  

  function increaseSlide(){ 
    if(idxSlide === slidesArray.length - 1) return setIdxSlide(0)
    setIdxSlide(prev => prev + 1)
  }

  function decreaseSlide(){
    if(idxSlide === 0) return setIdxSlide(slidesArray.length - 1)
    setIdxSlide(prev => prev - 1)
  }



  return (
    <motion.div 
      variants={secondContainer}
      className="w-full flex items-center justify-center"
    >

      <motion.div
        variants={item}
        onClick={() => decreaseSlide()}
      >
        <FiChevronLeft className={btnStyles}/>
      </motion.div>
      <motion.img 
        variants={item2}
        src={slidesArray[idxSlide]} 
        className={`w-full aspect-[5/3] rounded-lg ${opacity ? 'opacity-0' : 'opacity-100'} transition-all`}
      />
      <motion.div
        variants={item}
        onClick={() => increaseSlide()}
      >
        <FiChevronRight className={btnStyles}/>
      </motion.div>

    </motion.div>
  );
}
