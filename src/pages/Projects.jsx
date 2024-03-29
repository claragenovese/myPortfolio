import React from 'react'
import {projectsContent} from '../textContent'
import { motion } from 'framer-motion'
import EachProjectComponent from '../components/EachProjectComponent'
import SectionTitle from '../components/SectionTitle'
import { secondContainer } from '../animationVariants'

function Projects() {
  const allProjects = projectsContent.map(project =>(
    <EachProjectComponent key={project.id} project={project}/>
  ))

  return (
    <div className={`w-screen min-h-screen p-8 sm:p-10 lg:p-12`}>
      <motion.div id='projects' 
          variants={secondContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.1}}
        >
        
        <SectionTitle sectionTitle={"My projects"} />
        
        <motion.div
          variants={secondContainer}
        >
          <div id='projects-container'
            className='flex items-center justify-center flex-col md:flex-row relative'
          >
            {allProjects}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects