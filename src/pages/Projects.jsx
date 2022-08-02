import React, {useState} from 'react'
import {projectsContent} from '../textContent'
import {motion, AnimatePresence} from 'framer-motion'
import EachProjectComponent from '../components/EachProjectComponent'
import SectionTitle from '../components/SectionTitle'
import { secondContainer } from '../animationVariants'

const firstContainer = {
  hidden: {},
  visible: {
    transition: {
      // delayChildren: 0.5,
      staggerChildren: 1
    }
  }
}

function Projects() {

  const allProjects = projectsContent.map(project =>(
    <EachProjectComponent key={project.id} project={project}/>
  ))

  return (
    <motion.div id='projects' 
        variants={firstContainer}
        initial="hidden"
        animate="visible"
      className={`w-screen h-screen p-8 md:p-16`}>
      <SectionTitle sectionTitle={"My projects"} />
      <motion.div
        variants={secondContainer}
      >
        <div id='prjects-container'
          className='flex items-center justify-center flex-col md:flex-row relative'
        >
          {allProjects}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects