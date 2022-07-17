import React from 'react'
import { about } from '../textContent';

// function About() {
//   return (
//     <div className='w-screen h-screen p-8'>
//       <div className='ma max-w-5xl h-full bg-slate-300 mx-auto'></div>
//     </div>
//   )
// }

// export default About

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from 'react';

const Accordion = ({ id, expanded, setExpanded }) => {
  const isOpen = id === expanded;

  useEffect(() => {
    if(id === 0){
      setExpanded(id)
    }
  }, [])

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className='max-w-xl m-auto'>
      <motion.header
        className='p-3 rounded-md m-2 w-full'
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
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
    <div className='w-screen h-screen p-8 md:p-16'>
      <h1 className='text-[24px] md:text-[36px] mb-6'>About Me</h1>
      {accordionIds.map((id) => (
        <Accordion id={id} expanded={expanded} setExpanded={setExpanded} />
      ))}
    </div>
  );
};

const accordionIds = [0, 1, 2];