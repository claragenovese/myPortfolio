import React from 'react'
import { aboutHeaderTextArr } from '../textContent';
import { motion, AnimatePresence } from "framer-motion";
import { item } from '../animationVariants';

const sectionVariants = {
    open: { 
      opacity: 1, 
      height: "auto", 
    },
    collapsed: { 
      opacity: 0, 
      height: 0,
    }
  }
  
  const divVariants = { 
    collapsed: { scale: 0.8 }, 
    open: { scale: 1 } 
  }

export default function EachAccordeon({ id, expandedId, setExpandedId }) {
    const isOpen = id === expandedId;
  
    return (
      <motion.div 
        className='max-w-xl m-auto'
        variants={item}
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={sectionVariants}
              transition= {{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <motion.div
                className='w-full py-4 px-3 text-[16px] leading-7'
                variants={divVariants}
                transition={{ duration: 0.8 }}
              >
                {aboutHeaderTextArr[id].answear}
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
        <motion.header
          className={`text-white p-3 rounded-md my-2 w-full uppercase tracking-[2px] text-[14px] font-bold ${isOpen ? "openHead" : "closeHead hover:scale-[1.03] transition-transform"}  cursor-pointer`}
          onClick={() => setExpandedId(isOpen ? false : id)}
        >
          {aboutHeaderTextArr[id].question}
        </motion.header>
      </motion.div>
    );
  };
