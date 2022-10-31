import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Box(props) {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  const colorMap1 = useLoader(TextureLoader, 'images/amelye.jpg')
  const colorMap2 = useLoader(TextureLoader, 'images/founder.jpg')
  const colorMap3 = useLoader(TextureLoader, 'images/amelye.jpg')
  const colorMap4 = useLoader(TextureLoader, 'images/blank.jpg')
  const colorMap5 = useLoader(TextureLoader, 'images/blank.jpg')
  const colorMap6 = useLoader(TextureLoader, 'images/amelye.jpg')

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach="material-1" map={colorMap1} />
      <meshStandardMaterial attach="material-2" map={props.colorMap ? props.colorMap1 : colorMap2 } />
      <meshStandardMaterial attach="material-3" map={colorMap3} />
      <meshStandardMaterial attach="material-4" map={colorMap4} />
      <meshStandardMaterial attach="material-5" map={colorMap5} />
      <meshStandardMaterial attach="material-6" map={colorMap6} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} colorMap={useLoader(TextureLoader, 'images/blank.jpg')} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}