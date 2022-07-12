import Sphere from '../components/Sphere'
import React from 'react'
import Typed from 'react-typed';

//si tengo mas de una animación 3d puedo hacer del canvas un componente 

function Home() {
  return (
    <div className='w-screen h-screen flex flex-row items-center justify-between p-10'>
      <div className='text-red'>
        <h1 className='text-white font-normal text-[50px] text-center md:ml-[100px]'>
          Hi, I'm <span className=' text-purple-300 font-semibold subpixel-antialiased'>Clara Genovese</span>
          <br />
          <Typed
              strings={["Front-End Developer"]}
              typeSpeed={70}
          />
        </h1>
      </div>
      <Sphere />
    </div>
  )
}

export default Home