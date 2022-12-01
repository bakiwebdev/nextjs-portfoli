import React, { useRef } from 'react'
import Nav from '../nav/index'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from '@react-three/drei'
import { motion } from 'framer-motion'

softShadows()

const Cube = ({ position, args, color }: any) => {
  const mesh = useRef(null)
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        attach='material'
        color={color}
        speed={10}
        factor={1}
      />
    </mesh>
  )
}

const ThreePage = () => {
  return (
    <>
      <Nav />
      <div className='absolute top-0 left-0 flex-1 flex h-full w-full justify-center items-center bg-green-50'>
        {/* add canvas to the div */}
        <Canvas
          shadows={true}
          camera={{
            fov: 60,
            position: [0, 0, 10],
          }}>
          {/* mesh */}
          {/* <mesh> */}
          {/* geometry */}
          {/* <boxBufferGeometry attach='geometry' args={[1, 1, 1]} /> */}
          {/* material */}
          {/* <meshStandardMaterial attach='material' /> */}
          {/* </mesh> */}
          {/* ambient Light that affect every object */}
          <ambientLight intensity={0.3} />
          {/* pointer light  */}
          <pointLight position={[-10, 0, 3]} intensity={0.3} />
          <pointLight position={[0, -10, 0]} intensity={0.3} />

          {/* directional light */}
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <Cube position={[-3, 0, -1]} color='lightgreen' />
          <Cube position={[0, -1, 0]} color='lightyellow' args={[2, 3, 1]} />
          <Cube position={[3, 0, 0]} color='red' />

          {/* add plane and shadow  */}
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}>
              <planeBufferGeometry attach='geometry' args={[100, 100]} />
              <shadowMaterial attach='material' opacity={0.5} />
            </mesh>
          </group>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}

export default ThreePage
