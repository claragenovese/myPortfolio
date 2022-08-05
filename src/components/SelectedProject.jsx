import React, { useEffect, useRef } from 'react'
import { projectsContent } from '../textContent'
import { useIdContext } from '../Context';
import { motion, AnimatePresence } from 'framer-motion'
import ImageSliders from './ImageSliders';
import { FaLink, FaCode } from 'react-icons/fa'
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
                w-screen h-screen flex justify-center p-10
                overflow-x-hidden overflow-y-scroll
            bg-black/50'
            >
                <motion.div 
                    variants={firstContainer}
                    initial="hidden"
                    animate="visible"
                    layoutId={selectedId}
                    className=' bg-neutral-200 p-10 max-w-2xl h-fit
                    rounded-xl'
                    ref={wrapperRef}
                >
                    <motion.div 
                        variants={firstContainer}
                        className='flex justify-center items-center mb-8'
                    >
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
                    > Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error et numquam placeat dicta amet cupiditate eligendi quis. Reprehenderit nulla eum optio ipsum quis tenetur omnis consequatur facere aliquam nam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta debitis voluptatum quos repellat distinctio iste quis aliquid repudiandae a corrupti ducimus obcaecati id quam fuga, consequuntur libero ratione nulla!
                    </motion.h2>
                    <button onClick={() => handleClick(null)}> lala </button>
                    </motion.div>
            </motion.div>
        }
      </AnimatePresence>
    )
}
