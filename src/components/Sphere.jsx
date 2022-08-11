import React from 'react'
import { motion } from 'framer-motion'
import { GradientTexture, Octahedron} from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


function Sphere() {
  return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3}}
        className='center-element w-full h-screen'
      >

        <Canvas>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 15, 10]} angle={0.3} color='black' />
          <OrbitControls autoRotate enableRotate={false} enableZoom={false} autoRotateSpeed={0.8} />
          <Octahedron  args={[4, 3]} smoothness={10} scale={2}>
            <meshToonMaterial wireframe>
              <GradientTexture
                stops={[0, 1]} 
                colors={['aquamarine', 'hotpink']} 
                size={1024} 
              />
            </meshToonMaterial>
          </Octahedron>
        </Canvas>
      
      </motion.div>
  )
}

export default Sphere