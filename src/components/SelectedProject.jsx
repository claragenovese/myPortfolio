import React, { useEffect, useMemo, useRef } from 'react'
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
    const {selectedProjectId, setSelectedProjectId} = useIdContext()
    const wrapperRef = useRef(null)
    const isClickedOut = useOutsideClick(wrapperRef)

    useEffect(() => {
        setSelectedProjectId(null)
    }, [isClickedOut])
    
    function redirectToLinkIcon(src){
        window.location.href = src
    }

    const selectedProject = projectsContent[selectedProjectId - 1]

    return (
        <AnimatePresence>
        {
            selectedProjectId && !isClickedOut &&
            <motion.div  
                className='fixed top-0 left-0 z-50 
                w-screen h-screen flex justify-center items-center lg:items-baseline p-10
                overflow-x-hidden overflow-y-scroll
              bg-black/50'
            >
                <motion.div 
                    id='contentWrapper'
                    variants={firstContainer}
                    initial="hidden"
                    animate="visible"
                    layoutId={selectedProjectId}
                    className='bg-neutral-200 p-10 max-w-2xl h-fit
                    rounded-xl'
                    ref={wrapperRef}
                >
                    <motion.div 
                        id='head-content'
                        variants={firstContainer}
                        className='relative flex justify-center items-center mb-8'
                    >
                         
                        <button 
                            onClick={() => setSelectedProjectId(null)}
                            className='absolute -top-8 -right-7 opacity-50 text-[25px] hover:opacity-100'   
                        > 
                            <AiOutlineCloseCircle />
                        </button>
                   
                        <SectionTitle sectionTitle={selectedProject.name} titleAnimation={subTitle}/>
                        
                        <motion.div
                            id='projectLinksContainer'
                            className='ml-auto flex'
                            variants={secondContainer}
                        >
                            <motion.div 
                                onClick={() => redirectToLinkIcon(selectedProject.deployUrl)}
                                variants={item2}
                                className='p-3 ml-auto mr-3 rounded-lg cursor-pointer curso icons-style bg-black/10'
                            >
                                <FaLink />
                            </motion.div>
                            <motion.div
                                onClick={() => redirectToLinkIcon(selectedProject.repoUrl)} 
                                variants={item2}
                                className='p-3 rounded-lg cursor-pointer icons-style bg-black/10'
                            >
                                <FaCode />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                    <ImageSliders slidesArray={selectedProject.slideImgs} />
                    
                    <motion.h2
                        variants={item}
                        className='p-5'
                    > 
                        {selectedProject.technoligies}
                    </motion.h2>
                    <motion.h2
                        variants={item}
                        className='p-2 text-left'
                    > 
                       {selectedProject.description}
                    </motion.h2>
                </motion.div>
            </motion.div>
        }
      </AnimatePresence>
    )
}
