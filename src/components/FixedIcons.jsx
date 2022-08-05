import React, { useState } from 'react'
import { contactIconsArray } from '../textContent'
import { motion } from 'framer-motion'
import { secondContainer, item2 } from '../animationVariants'

function FixedIcons() {
    
    const [isHover, setIsHover] = useState(null)

    return (
        <motion.div 
            variants={secondContainer}
            initial="hidden"
            animate="visible"
            className='fixed bottom-0 left-0 
            hidden md:flex flex-col gap-3 p-2 pl-2
            text-3xl bg-black/[.15] rounded-tr-xl'
        >
            {contactIconsArray.map((item, id)=>(
                <EachIcon key={id} icon={item.icon} iconName={item.name} />
            ))}
        </motion.div>
    )
}

function EachIcon({icon, iconName}){
    return(
        <motion.div 
            variants={item2}
            className='icons-style bg-none text-white p-2 rounded-xl flex justify-between transition ease-in group hover:opacity-100 hover:shadow-lg cursor-pointer'>
            {icon}
            <span className='absolute left-[130%]
            text-[10px] bg-slate-400 text-white px-3 rounded-lg uppercase tracking-widest font-bold
            scale-0 group-hover:scale-100 
            transition ease-linear duration-200'>{iconName}</span>
        </motion.div>
    )
}

export default FixedIcons