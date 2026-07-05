import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { Html } from '@react-three/drei'
import { ActuatorParams } from '../App'

interface ActuatorAssemblyProps {
  params: ActuatorParams
  exploded: boolean
  rotating: boolean
  showLabels: boolean
}

export default function ActuatorAssembly({ params, exploded, rotating, showLabels }: ActuatorAssemblyProps) {
  const rotorRef = useRef<Group>(null)
  const shaftRef = useRef<Group>(null)
  const encoderRef = useRef<Group>(null)

  const explosionFactor = exploded ? 1 : 0

  useFrame((_state, delta) => {
    if (rotating && rotorRef.current && shaftRef.current && encoderRef.current) {
      rotorRef.current.rotation.y += delta * 2
      shaftRef.current.rotation.y += delta * 2
      encoderRef.current.rotation.y += delta * 2
    }
  })

  const {
    outerDiameter,
    housingLength,
    shaftDiameter,
    shaftLength,
    motorThickness,
    rotorThickness,
    bearingSize,
    encoderDiameter,
    boltCircleDiameter,
    numBolts,
  } = params

  const housingRadius = outerDiameter / 2
  const shaftRadius = shaftDiameter / 2
  const encoderRadius = encoderDiameter / 2

  const Label = ({ text, position }: { text: string; position: [number, number, number] }) => {
    if (!showLabels) return null
    return (
      <Html position={position} center>
        <div style={{
          background: 'rgba(0, 0, 0, 0.7)',
          color: '#4a9eff',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          border: '1px solid #4a9eff'
        }}>
          {text}
        </div>
      </Html>
    )
  }

  return (
    <group>
      {/* Housing */}
      <group position={[0, 0, explosionFactor * -100]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[housingRadius, housingRadius, housingLength, 32]} />
          <meshStandardMaterial color="#606060" metalness={0.6} roughness={0.4} />
        </mesh>
        <Label text="Housing" position={[housingRadius + 20, 0, 0]} />
      </group>

      {/* Motor/Stator */}
      <group position={[0, housingLength / 2 - motorThickness / 2, explosionFactor * -50]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[housingRadius * 0.9, housingRadius * 0.9, motorThickness, 32]} />
          <meshStandardMaterial color="#8b4513" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Stator windings representation */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const windingRadius = housingRadius * 0.75
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * windingRadius,
                0,
                Math.sin(angle) * windingRadius
              ]}
              castShadow
            >
              <cylinderGeometry args={[3, 3, motorThickness * 0.8, 16]} />
              <meshStandardMaterial color="#CD7F32" metalness={0.9} roughness={0.2} />
            </mesh>
          )
        })}
        <Label text="Motor/Stator" position={[housingRadius + 20, 0, 0]} />
      </group>

      {/* Rotor */}
      <group ref={rotorRef} position={[0, 0, explosionFactor * 50]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[housingRadius * 0.7, housingRadius * 0.7, rotorThickness, 32]} />
          <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Rotor magnets */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const magnetRadius = housingRadius * 0.65
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * magnetRadius,
                0,
                Math.sin(angle) * magnetRadius
              ]}
              rotation={[0, angle, 0]}
              castShadow
            >
              <boxGeometry args={[8, rotorThickness * 0.6, 6]} />
              <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
            </mesh>
          )
        })}
        <Label text="Rotor" position={[housingRadius + 20, 0, 0]} />
      </group>

      {/* Front Bearing */}
      <group position={[0, housingLength / 2 - 10, explosionFactor * 20]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[shaftRadius + bearingSize, shaftRadius + bearingSize, 8, 32]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[shaftRadius + 1, shaftRadius + 1, 8, 32]} />
          <meshStandardMaterial color="#505050" metalness={0.8} roughness={0.2} />
        </mesh>
        <Label text="Front Bearing" position={[shaftRadius + bearingSize + 15, 0, 0]} />
      </group>

      {/* Rear Bearing */}
      <group position={[0, -housingLength / 2 + 10, explosionFactor * -20]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[shaftRadius + bearingSize, shaftRadius + bearingSize, 8, 32]} />
          <meshStandardMaterial color="#a0a0a0" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[shaftRadius + 1, shaftRadius + 1, 8, 32]} />
          <meshStandardMaterial color="#505050" metalness={0.8} roughness={0.2} />
        </mesh>
        <Label text="Rear Bearing" position={[shaftRadius + bearingSize + 15, 0, 0]} />
      </group>

      {/* Output Shaft */}
      <group ref={shaftRef} position={[0, 0, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[shaftRadius, shaftRadius, shaftLength, 32]} />
          <meshStandardMaterial color="#707070" metalness={0.9} roughness={0.2} />
        </mesh>
        <Label text="Output Shaft" position={[shaftRadius + 15, shaftLength / 2 + 10, 0]} />
      </group>

      {/* Encoder Disk */}
      <group ref={encoderRef} position={[0, -housingLength / 2 - 5, explosionFactor * 100]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[encoderRadius, encoderRadius, 3, 64]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Encoder pattern */}
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i / 32) * Math.PI * 2
          const patternRadius = encoderRadius * 0.8
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * patternRadius,
                1.6,
                Math.sin(angle) * patternRadius
              ]}
              castShadow
            >
              <boxGeometry args={[2, 0.2, 3]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
          )
        })}
        <Label text="Encoder Disk" position={[encoderRadius + 20, 0, 0]} />
      </group>

      {/* Front Mounting Plate with Bolt Pattern */}
      <group position={[0, housingLength / 2 + 2, explosionFactor * -30]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[housingRadius * 1.1, housingRadius * 1.1, 4, 64]} />
          <meshStandardMaterial color="#505050" metalness={0.7} roughness={0.4} />
        </mesh>
        {/* Center hole */}
        <mesh>
          <cylinderGeometry args={[shaftRadius + 5, shaftRadius + 5, 5, 32]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        {/* Bolt holes */}
        {Array.from({ length: numBolts }).map((_, i) => {
          const angle = (i / numBolts) * Math.PI * 2
          const boltRadius = boltCircleDiameter / 2
          return (
            <group key={i}>
              <mesh
                position={[
                  Math.cos(angle) * boltRadius,
                  0,
                  Math.sin(angle) * boltRadius
                ]}
                castShadow
              >
                <cylinderGeometry args={[3, 3, 5, 16]} />
                <meshStandardMaterial color="#2a2a2a" />
              </mesh>
              {/* Bolt */}
              <mesh
                position={[
                  Math.cos(angle) * boltRadius,
                  -1,
                  Math.sin(angle) * boltRadius
                ]}
                castShadow
              >
                <cylinderGeometry args={[2.5, 2.5, 3, 16]} />
                <meshStandardMaterial color="#8b8b8b" metalness={0.9} roughness={0.1} />
              </mesh>
              {/* Bolt head */}
              <mesh
                position={[
                  Math.cos(angle) * boltRadius,
                  1.5,
                  Math.sin(angle) * boltRadius
                ]}
                castShadow
              >
                <cylinderGeometry args={[4, 4, 2, 6]} />
                <meshStandardMaterial color="#7a7a7a" metalness={0.9} roughness={0.1} />
              </mesh>
            </group>
          )
        })}
        <Label text="Mounting Plate" position={[housingRadius * 1.1 + 20, 0, 0]} />
      </group>
    </group>
  )
}
