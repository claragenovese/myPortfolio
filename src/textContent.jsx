import { ShowAboutSkills } from './components/ShowAboutSkills'

//import all images from the projects section
import netflixBanner from './assets/netflix-banner.jpg'
import netImg1 from './assets/netflix-img1.jpg'
import netImg2 from './assets/netflix-img2.jpg'
import netImg3 from './assets/netflix-img3.jpg'
import netImg4 from './assets/netflix-img4.jpg'

import wappBanner from './assets/wapp-banner.jpg'
import wappImg1 from './assets/wapp-img1.jpg'
import wappImg2 from './assets/wapp-img2.jpg'

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

const iconsStyle = 'text-[40px]'
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

const softSkillsText = 'I strive to increase the value I can bring to work by constantly improving these core personal skills'

export const aboutHeadTextArr = [
    "Hi! I'm Clara, a front-end developer from Argentina!",
    "I really enjoy creating responsive, scalable and optimized websites that look amazing, and my main motivation is to see them get better and better as I improve my skills as a developer."
]

export const aboutHeaderTextArr = [
    {
        question: "How did I get here?",
        answear: `I learned the basics of programming in high school, and then merged it with electronics, creating awesome projects like a CNC Laser and an Automated Composter using arduino one. But I felt that my true passion was programming, so I enrolled in college to study systems engineering, and decided to specialize in the world of web development`
    },
    {
        question: "Technical Skills",
        answear: <ShowAboutSkills skillsArr={techSkillsArr} />
    },
    {
        question: "Soft Skills",
        answear: <ShowAboutSkills skillsArr={softSkillsArr} describeSkills={softSkillsText} />
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
        technoligies: "<React.js, Firebase Auth, React Router, React Context, Swiper />",
        description: "A clone of the netflix user interface, with login authentication that allows the user to save their favorite movies, and get detailed information about them when clicked.",
        bannerImg: netflixBanner,
        slideImgs: [
            netImg1,
            netImg2, 
            netImg3,
            netImg4
        ],
        deployUrl: "https://netflix-clone-optimized.vercel.app/",
        repoUrl: "https://github.com/claragenovese/Netflix-Clone",
        id: 1,
    },
    {
        name: "Weather App",
        technoligies: "<React.js, React Context, Chart.js, Geoplugin, Frammer-Motion />",
        description: "Web application that based on the geolocation of the user, shows the weather dependencies of the day, with a chart for the hourly forecast and predictions for the next two days. It is also possible to enter any desired place in the world, and according to the current temperature, the interface colors will change.",
        bannerImg: wappBanner,
        slideImgs: [
            wappImg1, 
            wappImg2
        ],
        deployUrl: "https://weather-app-1-raip4yx2v-claragenovese.vercel.app/",
        repoUrl: "https://github.com/claragenovese/Weather-App",
        id: 2,
    },
]

// END PROJECTS CONTENT

// CONTACT CONTENT

export const contactIconsArray = [
    {
        icon: <BsGithub />,
        name: "GitHub",
        src: "https://github.com/claragenovese"
    },
    {
        icon: <AiFillLinkedin />,
        name: "Linkedin",
        src: "https://www.linkedin.com/in/clara-genovese-071627239/"
    },
    {
        icon: <FaWhatsapp />,
        name: "WhatsApp",
        src: "https://wa.link/k5c5kz"
    },
    {
        icon: <AiOutlineIdcard />,
        name:  "Resume",
        src: "https://drive.google.com/file/d/1IxuUJOi7X_bMmAfdtlSykFlvhqRFQ7BK/view?usp=sharing"
    },
]

// END CONTACT CONTENT