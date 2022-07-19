import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineIdcard } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

function SocialMediaIcons() {
  return (
    <div className='fixed top-full left-10 text-3xl block'>
        <BsGithub />
        <AiFillLinkedin />
        <FaWhatsapp />
        <AiOutlineIdcard />
    </div>
  )
}

export default SocialMediaIcons