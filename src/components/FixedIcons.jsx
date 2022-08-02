import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineIdcard } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

function FixedIcons() {
    const iconsArray = [<BsGithub />, <AiFillLinkedin />, <FaWhatsapp />, <AiOutlineIdcard />]
    const iconsNamesArray = ["GitHub", "Linkedin", "WhatsApp", "Resume"]

    const [isHover, setIsHover] = useState(null)

    return (
        <div className='fixed bottom-0 left-0 
                        hidden md:flex flex-col gap-3 p-2 pl-2
                        text-3xl bg-black/[.15] rounded-tr-xl'
        >
            {iconsArray.map((item, id)=>(
                <EachIcon key={id} icon={item} iconName={iconsNamesArray[id]} />
            ))}
        </div>
    )
}

function EachIcon({icon, iconName}){
    const [isHover, setIsHover] = useState(false)
    return(
        <div className='icons-style bg-none text-white p-2 rounded-xl flex justify-between transition ease-in group hover:opacity-100 hover:shadow-lg cursor-pointer'>
            {icon}
            <span className='absolute left-[130%]
            text-[10px] bg-slate-400 text-white px-3 rounded-lg uppercase tracking-widest font-bold
            scale-0 group-hover:scale-100 
            transition ease-linear duration-200'>{iconName}</span>
        </div>
    )
}

export default FixedIcons