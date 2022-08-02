import React from 'react'
import { motion } from 'framer-motion'
import { title, span } from '../animationVariants'

export default function SectionTitle({sectionTitle, titleAnimation}) {
  return (
    <motion.div  
        className='relative overflow-hidden inline-block justify-center items-center'
    >
        <motion.h1 
        variants={titleAnimation ?? title}
        className='text-[14px] md:text-[26px] tracking-[5px] border-b-2 uppercase'
        >{sectionTitle}</motion.h1>
        <motion.span 
        variants={span}
        className='absolute w-full h-full bg-slate-600 top-0'>
        </motion.span>
    </motion.div>
  )
}
