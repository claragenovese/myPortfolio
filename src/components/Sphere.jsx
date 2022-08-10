import React from 'react'
import { motion } from 'framer-motion'
// import { Canvas } from '@react-three/fiber' 
import { GradientTexture, Edges, Octahedron, Dodecahedron } from '@react-three/drei'
import { Icosahedron, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { LineBasicMaterial } from 'three';


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
                stops={[0, 1]} // As many stops as you want
                colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
              />
            </meshToonMaterial>
          </Octahedron>
        </Canvas>
      
      </motion.div>
  )
}

export default Sphere