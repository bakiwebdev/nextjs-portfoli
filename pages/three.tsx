import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import Nav from '../components/nav'
const three = () => {
  return (
    <>
      <div className='absolute w-full h-full top-0 left-0'>
        <div className='absolute max-w-7xl w-full  mx-auto px-10'>
          <Nav />
        </div>
        <Canvas shadows={true}>
          {/* add light */}
          <ambientLight intensity={0.6} />
          {/* <directionalLight castShadow color='red' position={[0, 0, 5]} /> */}
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

          <motion.mesh whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <boxGeometry args={[1, 1, 1]} />
            <MeshWobbleMaterial color='red' />
          </motion.mesh>
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}>
              <planeBufferGeometry attach='geometry' args={[100, 100]} />
              <shadowMaterial attach='material' opacity={0.5} />
            </mesh>
          </group>
          <OrbitControls
            // minPolarAngle={Math.PI / 2}
            // maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            enablePan={false}
          />
        </Canvas>
      </div>
    </>
  )
}

export default three
