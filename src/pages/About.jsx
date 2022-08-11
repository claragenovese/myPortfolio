import React, { useEffect, useState } from 'react'
import EachAccordeon from '../components/AboutAccordeons';
import { aboutHeadTextArr } from '../textContent';
import { motion } from "framer-motion";
import SectionTitle from '../components/SectionTitle';
import { aboutContainer, aboutTitle, secondContainer } from '../animationVariants';
 
export default function About(){
  const [expandedId, setExpandedId] = useState(false);
  const [headTextDelay, setHeadTextDelay] = useState(1.6)

  useEffect(() => {
    if(expandedId) setHeadTextDelay(0.3)
  }, [expandedId])

  return (
    <div id='about' className='w-screen min-h-screen p-12'>
      <motion.div 
        variants={aboutContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 1}}
        className='max-w-[600px] m-auto'
      >
        <SectionTitle sectionTitle={"About me"} titleAnimation={aboutTitle}/>
        
        <motion.div
          id= 'head-text'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{delay: headTextDelay}}
          className='p-8 text-[20px] tracking-wide'
        > 
          {aboutHeadTextArr.map((item, idx) => <h2 key={idx}>{item}</h2>)} 
        </motion.div>
        
        <motion.div 
          id='accordeons'
          className='p-5 w-full inline-block rounded-md'
          variants={secondContainer}
        >
          {accordionIds.map((id) => (
            <EachAccordeon 
              id={id} 
              key={id} 
              expandedId={expandedId} 
              setExpandedId={setExpandedId} 
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const accordionIds = [0, 1, 2];