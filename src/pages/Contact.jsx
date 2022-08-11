import React from 'react'
import SectionTitle from '../components/SectionTitle'
import {motion} from 'framer-motion'
import { secondContainer, fourthContainer, item } from '../animationVariants'
import { contactIconsArray } from '../textContent'

function Contact() {

  const textStyle = "w-full bg-gray-800/20 rounded border focus:bg-gray-800/30 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

  function redirectToLinkIcon(src){
    window.location.href = src
  }

  function printEmailOrName(type, inputType){
      return (<motion.div 
        variants={item}
        className="relative mb-4"
      >
        <label htmlFor={type} className="leading-7 text-sm text-gray-400">
          {type}
        </label>
        <input
          type={inputType}
          id={type}
          name={type}
          className={textStyle}
        />
      </motion.div>)
  }

  const contactIconst = contactIconsArray.map((iconObject, idx) => (
    <motion.div
      key={idx}
      variants={item}
      whileHover={{scale: 1.05}}
      onClick={() => redirectToLinkIcon(iconObject.src)}
      className='p-2 bg-slate-400 rounded-md cursor-pointer text-[30px] text-slate-100 hover:brightness-110'
    >
      {iconObject.icon}
    </motion.div>
  ))

  return (
    <div className='w-screen h-screen p-8 sm:p-10 lg:p-12'>
      <motion.div 
        variants={secondContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className='flex justify-center flex-col items-center max-w-[600px] mx-auto'
      >
        <SectionTitle sectionTitle={"contact"} />
       
        <motion.div
          variants={fourthContainer}
          className='flex w-full mt-10 justify-evenly '
        >
          {contactIconst}
        </motion.div>
        
        <form
          name="contact"
          className="w-full flex flex-col mt-4 mx-10 md:mt-8"
          >
            {printEmailOrName("name", "text")}
            {printEmailOrName("email", "email")}
           
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
                className={`${textStyle} h-32 resize-none leading-6 `}
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