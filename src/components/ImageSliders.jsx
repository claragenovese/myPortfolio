import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { secondContainer, item } from "../animationVariants";

export default function ImageSliders({slidesArray}) {
  const [idxSlide, setIdxSlide] = useState(0)
   
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
      {/* <AnimatePresence > */}
        <motion.img 
          // initial={{ opacity: 0}}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // transition={{delay:0.1, duration: 5}}
          // variants={item}
          src={slidesArray[idxSlide]} 
          className={`w-full h-[300px] rounded-lg opacity-25`}
        />
      {/* </AnimatePresence> */}

      <motion.div
        variants={item}
        onClick={() => increaseSlide()}
      >
        <FiChevronRight className={btnStyles}/>
      </motion.div>

    </motion.div>
  );
}
