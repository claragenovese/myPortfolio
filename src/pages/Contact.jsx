import React from 'react'
import SectionTitle from '../components/SectionTitle'
import {motion} from 'framer-motion'
import { secondContainer, item } from '../animationVariants'
import FixedIcons from '../components/FixedIcons'

function Contact() {
  return (
    <div className='w-screen h-screen p-10'>
      <motion.div 
        variants={secondContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
      >
        <SectionTitle sectionTitle={"contact"} />
        <form
          name="contact"
          className="max-w-[600px] m-auto flex flex-col mt-4 md:mt-8"
          >
            <motion.div 
              variants={item}
              className="relative mb-4"
            >
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800/20 rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div 
              variants={item}
              className="relative mb-4"
            >
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800/20 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div 
              variants={item}
              className="relative mb-4"
            >
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800/20 rounded border focus:bg-black h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
            <motion.button
              variants={item}
              whileHover={{ scale: 1.03}}
              whileTap={{ scale: 0.9}}
              type="submit"
              className="text-white openHead border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              Submit
            </motion.button>
          </form>
      </motion.div>
    </div>
  )
}

export default Contact