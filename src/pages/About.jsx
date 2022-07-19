import React from 'react'
import { about } from '../textContent';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const Accordion = ({ id, expanded, setExpanded }) => {
  const isOpen = id === expanded;

  const isOpenColor = "linear-gradient(90deg, #C292DE 11.26%, #67B3E4 90.04%)"

  useEffect(() => {
    if(id === 0){
      setExpanded(id)
    }
  }, [])

  return (
    <div className='max-w-xl m-auto'>
      <motion.header
        className={isOpen ? 'p-3 rounded-md m-2 w-full openHead' : 'p-3 rounded-md m-2 w-full closeHead'}
        // initial={false}
        // animate={{ background: isOpen ? isOpenColor : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : id)}
      >
        {about[id].question}
      </motion.header>
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
              className=' px-5 sm:px-8 py-4 md:px-10'
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              {about[id].answear}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function About(){
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(false);

  return (
    <div id='about' className='w-screen h-screen p-8 md:p-16'>
      <div className='flex'>
        <h1 className='text-[24px] md:text-[36px] mb-6 border-b-4'>About Me</h1>
      </div>
      {accordionIds.map((id) => (
        <Accordion id={id} key={id} expanded={expanded} setExpanded={setExpanded} />
      ))}
    </div>
  );
};

const accordionIds = [0, 1, 2];