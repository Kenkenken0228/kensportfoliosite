import { Suspense, useEffect, useState } from 'react'

import { Canvas, events } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const Computer = useGLTF('./ship_in_clouds/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={Computer.scene}
        scale={isMobile ? 3 : 20}
        position={isMobile ? [0, -3, -2.2] : [0, -15, 55]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('max-width: 500px')

    setIsMobile(mediaQuery.matches)

    const handlemediaQueryChange = (events) => {
      setIsMobile(events.matches)
    }
      mediaQuery.addEventListener('change', handlemediaQueryChange)

      return () => {
        mediaQuery.removeEventListener('change', handlemediaQueryChange)
      }
  }, []) 

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [-50, 50, 65], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas