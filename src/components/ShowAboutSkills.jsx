import { motion } from 'framer-motion'
import { fourthContainer, item } from '../animationVariants'


export function ShowAboutSkills({skillsArr, describeSkills}){
    return (
        <motion.div 
            variants={fourthContainer}
            initial="hidden"
            animate="visible"
            className='w-full flex justify-center gap-10 flex-wrap p-5'
        >
            {describeSkills && <h3>{describeSkills}</h3>}
            {
                skillsArr.map((eachIcon, idx) => (
                    <div 
                        key={idx}
                        className='flex flex-col items-center'
                    >
                        <motion.div
                            variants={item}
                            whileHover={{rotate: 360}}
                            whileTap={{rotate: 360}}
                            className='flex p-3 bg-slate-100 rounded-[35%]'
                        >
                            {eachIcon.logo}
                        </motion.div>
                        <motion.h4 
                            variants={item}
                            className='text-[14px] max-w-[150px] tracking-wide font-bold'
                        >{eachIcon.name}</motion.h4>
                    </div>
                ))
            }
        </motion.div>
    )   
}
