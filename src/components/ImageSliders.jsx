import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ImageSliders({slidesArray}) {
  const [idxSlide, setIdxSlide] = useState(0)
   
  const btnStyles = 'text-[35px] hover:scale-125 active:scale-95 transition-all'

  function increaseSlide(){
    if(idxSlide === slidesArray.length - 1) return setIdxSlide(0)
    setIdxSlide(prev => prev + 1)
  }
  function decreaseSlide(){
    if(idxSlide === 0) return setIdxSlide(slidesArray.length - 1)
    setIdxSlide(prev => prev - 1)
  }
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={btnStyles}
        onClick={() => decreaseSlide()}
      >
        <FiChevronLeft />
      </div>
      <motion.img 
        src={slidesArray[idxSlide]} 
        className="w-full h-fit rounded-lg"
      ></motion.img>
      <div
        className={btnStyles}
        onClick={() => increaseSlide()}
      >
        <FiChevronRight />
      </div>
    </div>
  );
}
