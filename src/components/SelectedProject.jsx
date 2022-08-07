import React, { useEffect, useRef } from 'react'
import { projectsContent } from '../textContent'
import { useIdContext } from '../Context';
import { motion, AnimatePresence } from 'framer-motion'
import ImageSliders from './ImageSliders';
import { FaLink, FaCode } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import useOutsideClick from '../hooks/useOutsideClick';
import SectionTitle from './SectionTitle';
import { firstContainer, secondContainer, item, item2, thirdContainer, subTitle } from '../animationVariants';

export default function SelectedProject() {
    const {selectedId, handleClick} = useIdContext()
    const wrapperRef = useRef(null)
    const isClickedOut = useOutsideClick(wrapperRef)

    useEffect(() => {
        handleClick(null)
    }, [isClickedOut])
    

    return (
        <AnimatePresence>
        {
            selectedId && !isClickedOut &&
            <motion.div  
                className='fixed top-0 left-0 z-50 
                w-screen h-screen flex justify-center items-center lg:items-baseline p-10
                overflow-x-hidden overflow-y-scroll
            bg-black/50'
            >
                <motion.div 
                    variants={firstContainer}
                    initial="hidden"
                    animate="visible"
                    layoutId={selectedId}
                    className='bg-neutral-200 p-10 max-w-2xl h-fit
                    rounded-xl'
                    ref={wrapperRef}
                >
                    <motion.div 
                        variants={firstContainer}
                        className='relative flex justify-center items-center mb-8'
                    >
                         
                    <button 
                        onClick={() => handleClick(null)}
                        className='absolute -top-8 -right-7 opacity-50 text-[25px] hover:opacity-100'   
                    > 
                        <AiOutlineCloseCircle />
                    </button>
                   
                        <SectionTitle sectionTitle={projectsContent[selectedId - 1].name} titleAnimation={subTitle}/>
                        <motion.div
                            className='ml-auto flex'
                            variants={secondContainer}
                        >
                            <motion.div 
                                variants={item2}
                                className='p-3 ml-auto mr-3 rounded-lg cursor-pointer curso icons-style bg-black/10'
                            >
                                <FaLink />
                            </motion.div>
                            <motion.div 
                                variants={item2}
                                className='p-3 rounded-lg cursor-pointer icons-style bg-black/10'
                            >
                                <FaCode />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <ImageSliders slidesArray={projectsContent[selectedId - 1].slideImgs} />
                    <motion.h2
                        variants={item}
                        className='p-5'
                    > 
                        {projectsContent[selectedId - 1].technoligies}
                    </motion.h2>
                    <motion.h2
                        variants={item}
                        className='p-2 text-left'
                    > 
                       {projectsContent[selectedId - 1].description}
                    </motion.h2>
                </motion.div>
            </motion.div>
        }
      </AnimatePresence>
    )
}
