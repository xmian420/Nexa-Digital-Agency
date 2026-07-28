import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import LaptopModel from '../three/LaptopModel'
import FloatingObjects from '../three/FloatingObjects'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Digital Marketing & Web Development Agency
          </motion.span>

          <h1 className={styles.title}>
            Build Premium{' '}
            <span className="text-gradient">Digital Experiences</span>
          </h1>

          <p className={styles.description}>
            We craft cutting-edge websites, powerful applications, and
            immersive digital solutions that elevate brands and drive
            measurable growth for businesses worldwide.
          </p>

          <div className={styles.actions}>
            <Link to="/contact" className="btn btn-primary">
              Start Project <HiArrowRight />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              <HiPlay /> View Portfolio
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>100+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className={styles.stat}>
              <strong>95%</strong>
              <span>Client Satisfaction</span>
            </div>
            <div className={styles.stat}>
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.canvasWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1} color="#6C63FF" />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00E5FF" />
              <spotLight
                position={[0, 5, 0]}
                intensity={0.8}
                color="#8B5CF6"
                angle={0.3}
              />
              <Stars radius={50} depth={50} count={1000} factor={3} fade speed={1} />
              <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
                <LaptopModel />
              </Float>
              <FloatingObjects />
              <Environment preset="night" />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={Math.PI / 3}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>

      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
    </section>
  )
}

export default Hero
