import React, {useState} from 'react'
import {projectsContent} from '../textContent'
import {motion, AnimatePresence} from 'framer-motion'
import EachProjectComponent from '../components/EachProjectComponent'

function Projects() {

  const allProjects = projectsContent.map(project =>(
    <EachProjectComponent key={project.id} project={project}/>
  ))


  return (
    <div id='projects' 
      className={`w-screen h-screen p-8 md:p-16`}>
      
      <div className='flex justify-center'>
        <h1 className='text-[14px] md:text-[26px] tracking-[5px] mb-6 border-b-2'>MY PROJECTS</h1>
      </div>
      <div>
        <div id='prjects-container'
          className='flex items-center justify-center flex-col md:flex-row relative'
        >
          {allProjects}
        </div>
      </div>
    </div>
  )
}

export default Projects