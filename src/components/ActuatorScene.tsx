import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import ActuatorAssembly from './ActuatorAssembly'
import { ActuatorParams } from '../App'

interface ActuatorSceneProps {
  params: ActuatorParams
  exploded: boolean
  rotating: boolean
  showLabels: boolean
}

export default function ActuatorScene({ params, exploded, rotating, showLabels }: ActuatorSceneProps) {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[200, 150, 200]} fov={50} />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={100}
        maxDistance={500}
      />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />

      <Environment preset="studio" />

      <ActuatorAssembly
        params={params}
        exploded={exploded}
        rotating={rotating}
        showLabels={showLabels}
      />

      <gridHelper args={[400, 40, '#444444', '#222222']} position={[0, -params.housingLength / 2 - 20, 0]} />
    </Canvas>
  )
}
