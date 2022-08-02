import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber' 
import { OrbitControls, GradientTexture, Edges } from '@react-three/drei'


function Sphere() {
  return (
    <motion.div 
      className='w-full lg:w-1/2 h-full center-element z-0'
      // initial={{ scale: 0.3,}}
      // animate={{ scale: 1, rotate: 360}}
      // transition={{ ease: "easeOut", duration: 0.2, delay: 1 }}
    >
      <Canvas
        
      >
        <mesh scale={0.95} castShadow='true'>
          <sphereGeometry args={[2.5, 11, 6]}/>
          <meshBasicMaterial wireframe>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
          {/* <Edges
            scale={1.1}
            threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
            color="gray"
          /> */}
        </mesh>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1}/>
      </Canvas>
    </motion.div>
  )
}

export default Sphere