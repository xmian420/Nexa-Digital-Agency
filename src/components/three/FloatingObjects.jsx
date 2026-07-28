import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Box } from '@react-three/drei'

const FloatingObjects = () => {
  const group = useRef()

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.15, 32, 32]} position={[2.5, 1.5, 0]}>
          <MeshDistortMaterial
            color="#6C63FF"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <Box args={[0.25, 0.25, 0.25]} position={[-2.2, 0.8, 1]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            color="#00E5FF"
            metalness={0.9}
            roughness={0.1}
            emissive="#00E5FF"
            emissiveIntensity={0.2}
          />
        </Box>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <Sphere args={[0.1, 32, 32]} position={[1.8, -1, 1.5]}>
          <meshStandardMaterial
            color="#8B5CF6"
            metalness={0.7}
            roughness={0.2}
            emissive="#8B5CF6"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={2.2}>
        <Box args={[0.18, 0.18, 0.18]} position={[-1.5, -0.5, -1]} rotation={[0.3, 0.8, 0.2]}>
          <meshStandardMaterial
            color="#6C63FF"
            metalness={0.8}
            roughness={0.15}
            wireframe
          />
        </Box>
      </Float>

      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.3}>
        <Sphere args={[0.08, 16, 16]} position={[0.5, 2, -1]}>
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.7} />
        </Sphere>
      </Float>

      <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.6}>
        <Box args={[0.12, 0.12, 0.12]} position={[-2.5, 1.8, -0.5]}>
          <meshStandardMaterial
            color="#8B5CF6"
            metalness={0.9}
            roughness={0.1}
            emissive="#8B5CF6"
            emissiveIntensity={0.4}
          />
        </Box>
      </Float>
    </group>
  )
}

export default FloatingObjects
