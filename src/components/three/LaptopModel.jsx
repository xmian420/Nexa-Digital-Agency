import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const LaptopModel = () => {
  const groupRef = useRef()
  const screenRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
    if (screenRef.current) {
      screenRef.current.material.emissiveIntensity =
        0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={1.2}>
      {/* Base */}
      <RoundedBox args={[3.2, 0.12, 2.2]} radius={0.05} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Keyboard area */}
      <RoundedBox args={[2.8, 0.02, 1.6]} radius={0.02} position={[0, -0.42, 0.1]}>
        <meshStandardMaterial color="#0f0f1a" metalness={0.5} roughness={0.4} />
      </RoundedBox>

      {/* Screen hinge */}
      <mesh position={[0, -0.3, -0.95]}>
        <cylinderGeometry args={[0.06, 0.06, 2.8, 16]} />
        <meshStandardMaterial color="#2a2a3e" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen back */}
      <RoundedBox
        args={[3, 2, 0.08]}
        radius={0.05}
        position={[0, 0.6, -1.0]}
        rotation={[-0.15, 0, 0]}
      >
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Screen display */}
      <mesh
        ref={screenRef}
        position={[0, 0.6, -0.95]}
        rotation={[-0.15, 0, 0]}
      >
        <planeGeometry args={[2.7, 1.7]} />
        <meshStandardMaterial
          color="#6C63FF"
          emissive="#6C63FF"
          emissiveIntensity={0.4}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Screen content simulation */}
      <mesh position={[0, 0.7, -0.94]} rotation={[-0.15, 0, 0]}>
        <planeGeometry args={[2.2, 0.15]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0.4, -0.94]} rotation={[-0.15, 0, 0]}>
        <planeGeometry args={[1.8, 0.08]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, 0.25, -0.94]} rotation={[-0.15, 0, 0]}>
        <planeGeometry args={[1.5, 0.08]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

export default LaptopModel
