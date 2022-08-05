import { motion } from 'framer-motion'
import { fourthContainer, item } from '../animationVariants'


export function ShowSkillsComponent({skillsArr, title}){
    return (
        <motion.div 
            variants={fourthContainer}
            initial="hidden"
            animate="visible"
            className='w-full flex justify-center gap-12 flex-wrap
            p-5 '
        >
            {title && <h3>{title}</h3>}
            {
                skillsArr.map( (eachIcon, idx) => (
                    <div 
                        key={idx}
                        className='flex flex-col items-center'
                    >
                        <motion.div
                            variants={item}
                            whileHover={{rotate: 360}}
                            whileTap={{rotate: 360}}
                            className='flex p-3 bg-slate-300 rounded-[35%]'
                        >
                            {eachIcon.logo}
                        </motion.div>
                        <motion.h4 
                            variants={item}
                            className='text-[14px] max-w-[150px] tracking-wide font-semibold'
                        >{eachIcon.name}</motion.h4>
                    </div>
                ))
            }
        </motion.div>
    )   
}
