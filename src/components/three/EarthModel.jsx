import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

const EarthModel = () => {
  const earthRef = useRef()
  const atmosphereRef = useRef()
  const markersRef = useRef()

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  const markerPositions = [
    [0.8, 0.5, 0.6],
    [-0.6, 0.3, 0.8],
    [0.2, -0.7, 0.6],
    [-0.4, -0.4, -0.8],
    [0.7, -0.2, -0.5],
  ]

  return (
    <group>
      {/* Earth */}
      <Sphere ref={earthRef} args={[1, 64, 64]}>
        <meshStandardMaterial
          color="#1a237e"
          metalness={0.3}
          roughness={0.7}
          emissive="#0d1b4a"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Continents simulation with wireframe overlay */}
      <Sphere args={[1.01, 32, 32]}>
        <meshBasicMaterial
          color="#6C63FF"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Atmosphere */}
      <Sphere ref={atmosphereRef} args={[1.15, 32, 32]}>
        <meshBasicMaterial
          color="#6C63FF"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Floating markers */}
      <group ref={markersRef}>
        {markerPositions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#00E5FF" />
          </mesh>
        ))}
      </group>

      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.01, 16, 100]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

export default EarthModel
