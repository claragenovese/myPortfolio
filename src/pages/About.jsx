import React from 'react'
import { about } from '../textContent';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Accordion = ({ id, expanded, setExpanded }) => {
  const isOpen = id === expanded;

  useEffect(() => {
    setTimeout(() => {
      if(id === 0){
        setExpanded(id)
      }
    }, [1000])
  }, [])

  return (
    <motion.div 
      className='max-w-xl m-auto'
      variants={item}
    >
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              className='w-full py-4'
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              {about[id].answear}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
      <motion.header
        className={`text-white p-3 rounded-md my-2 w-full uppercase tracking-[2px] text-[14px] font-bold ${isOpen ? "openHead" : "closeHead hover:scale-[1.03] transition-transform"}  cursor-pointer`}
        onClick={() => setExpanded(isOpen ? false : id)}
      >
        {about[id].question}
      </motion.header>
    </motion.div>
  );
};

export default function About(){
  const [expanded, setExpanded] = useState(false);

  return (
    <div id='about' className='w-screen min-h-screen p-12'>
      <motion.div className='max-w-[600px] m-auto'>
        <div className='flex justify-center'>
          <motion.h1 
            className='text-[14px] md:text-[26px] tracking-[5px] mb-6 border-b-2'
          >ABOUT ME</motion.h1>
        </div>
        <motion.div 
          className='bg-slate-400/10 p-5 w-full inline-block rounded-md'
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {accordionIds.map((id) => (
          <Accordion id={id} key={id} expanded={expanded} setExpanded={setExpanded} />
        ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const accordionIds = [0, 1, 2];