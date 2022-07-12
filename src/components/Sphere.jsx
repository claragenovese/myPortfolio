import React from 'react'
import { Canvas } from '@react-three/fiber' 
import { OrbitControls, GradientTexture, Edges } from '@react-three/drei'

function Sphere() {
  return (
    <div className='md:w-1/2 h-full'>
        <Canvas>
          <mesh scale={0.9}>
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
          {/* <ambientLight intensity={0.5} /> */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8}/>
        </Canvas>
      </div>
  )
}

export default Sphere