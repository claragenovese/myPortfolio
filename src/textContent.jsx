import { ShowSkillsComponent } from './components/AboutFunctions'

// import all icons from the page 
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineIdcard } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import {FaReact, FaCss3Alt, FaBootstrap, FaHtml5} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss, SiSass} from 'react-icons/si'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BiUserVoice, BiListCheck } from 'react-icons/bi'
import { FaPeopleCarry, FaHandHoldingHeart } from 'react-icons/fa'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { BsShieldFillPlus } from 'react-icons/bs'
import { GrUserSettings } from 'react-icons/gr'


export const navTopics = ["home", "about", "projects", "contact"]

// ABOUT CONTENT 

const iconsStyle = 'text-[20px]'
const techSkillsArr = [
    {
        logo: <FaReact className={`${iconsStyle} text-cyan-500 `}/>,
        name: "React"
    },
    {
        logo: <IoLogoJavascript className={`${iconsStyle} text-yellow-400`}/>,
        name: "JavaScript"
    },
    {
        logo: <FaCss3Alt className={`${iconsStyle} text-cyan-500`} />,
        name: "CSS3"
    },
    {
        logo: <FaBootstrap className={`${iconsStyle} text-indigo-500`}/>,
        name: "Bootstrap"
    },
    {
        logo: <SiTailwindcss className={`${iconsStyle} text-sky-400`}/>,
        name: "Tailwind"
    },
    {
        logo: <SiSass className={`${iconsStyle} text-pink-500`}/>,
        name: "Sass"
    },
    {
        logo: <FaHtml5 className={`${iconsStyle} text-orange-600`}/>,
        name: "HTML5"
    },
]

const softSkillsArr = [
    {
        logo: <FaHandHoldingHeart className={`${iconsStyle} text-red-500`}/>,
        name: "Empathy"
    },
    {
        logo: <BiUserVoice className={`${iconsStyle} text-yellow-600`}/>,
        name: "Communication"
    },
    {
        logo: <FaPeopleCarry className={`${iconsStyle} text-cyan-500`} />,
        name: "Team Work"
    },
    {
        logo: <BiListCheck className={`${iconsStyle} text-indigo-500`}/>,
        name: "Accountability"
    },
    {
        logo: <RiLightbulbFlashLine className={`${iconsStyle} text-yellow-500`}/>,
        name: "Creativity"
    },
    {
        logo: <BsShieldFillPlus className={`${iconsStyle} text-pink-500`}/>,
        name: "Positive Mindset"
    },
    {
        logo: <GrUserSettings className={`${iconsStyle} text-orange-600`}/>,
        name: "Turn mistakes into learning opportunities"
    },
]
// const softSkillsTitle = 'These are the main personal skills in wich i strive to improve daily'
const softSkillsTitle = 'I strive to increase the value I can bring to work by constantly improving these core personal skills'

export const aboutHeadArr = [
    "Hi! I'm Clara, a front-end developer from Argentina!",
    "I really enjoy creating responsive, scalable and optimized websites that look amazing, and my main motivation is to see them get better and better as I improve my skills as a developer."
]

export const about = [
    {
        question: "How did I get here?",
        answear: `I learned the basics of programming in high school, and then merged it with electronics, creating awesome projects like a CNC Laser and an Automated Composter using arduino one. But I felt that my true passion was programming, so I enrolled in college to study systems engineering, and decided to specialize in the world of web development`
    },
    {
        question: "Technical Skills",
        answear: <ShowSkillsComponent skillsArr={techSkillsArr} />
    },
    {
        question: "Soft Skills",
        answear: <ShowSkillsComponent skillsArr={softSkillsArr} title={softSkillsTitle} />
    }
]

//END ABOUT CONTENT




export const mensajeCallToAction = "Join me to this travel. Who told you tah dreams can't be true"
export const mensajeCallToActionDesclaimer = "Dreams: have awesome smooth scalable optimized web sites"
export const mensajeCallToAction2 = "You are at just one message of became your project expectations a fact"


// PROJECTS CONTENT

export const projectsContent = [
    {
        name: "Netflix Clone",
        description: "lalalalalal",
        bannerImg: "/src/assets/netflix-banner.jpg",
        slideImgs: [
            "/assets/netflix-img1.jpg", 
            "../assets/netflix-img2.jpg", 
            "../../assets/netflix-img3.jpg",
            "/assets/netflix-img4.jpg"
        ],
        deployUrl: "fir-netflix-970a4.web.app/",
        repo: "https://github.com/claragenovese/Netflix-Clone",
        id: 1,
    },
    {
        name: "Weather App",
        description: "lalalalalal",
        bannerImg: "./assets/wapp-banner.jpg",
        slideImgs: [
            "./assets/wapp-img1.jpg", 
            "./assets/wapp-img2.jpg"
        ],
        deployUrl: "fir-netflix-970a4.web.app/",
        repo: "https://github.com/claragenovese/Netflix-Clone",
        id: 2,
    },
]

// PROJECTS CONTENT

// CONTACT CONTENT

export const contactIconsArray = [
    {
        icon: <BsGithub />,
        name: "GitHub",
    },
    {
        icon: <AiFillLinkedin />,
        name: "Linkedin",
    },
    {
        icon: <FaWhatsapp />,
        name: "WhatsApp",
    },
    {
        icon: <AiOutlineIdcard />,
        name:  "Resume"
    },
]

// CONTACT CONTENT