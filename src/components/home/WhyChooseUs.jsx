import { motion } from 'framer-motion'
import { HiLightningBolt, HiShieldCheck, HiUserGroup, HiTrendingUp } from 'react-icons/hi'
import styles from './WhyChooseUs.module.scss'

const features = [
  {
    icon: <HiLightningBolt />,
    title: 'Lightning Fast',
    description: 'Performance-first development ensuring blazing-fast load times and smooth interactions.',
  },
  {
    icon: <HiShieldCheck />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security practices and rock-solid infrastructure for peace of mind.',
  },
  {
    icon: <HiUserGroup />,
    title: 'Dedicated Team',
    description: 'A passionate team of designers, developers, and strategists focused on your success.',
  },
  {
    icon: <HiTrendingUp />,
    title: 'Results Driven',
    description: 'Every project is measured by real business outcomes and measurable growth metrics.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className={`section ${styles.why}`}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose Nexa</h2>
            <p className="section-subtitle">
              We don't just build websites — we craft digital experiences that
              drive growth, engage audiences, and set brands apart.
            </p>
            <div className={styles.features}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className={styles.feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={`glass ${styles.card1}`}>
              <span className={styles.number}>01</span>
              <h3>Strategy</h3>
              <p>Deep research & planning</p>
            </div>
            <div className={`glass ${styles.card2}`}>
              <span className={styles.number}>02</span>
              <h3>Design</h3>
              <p>Pixel-perfect interfaces</p>
            </div>
            <div className={`glass ${styles.card3}`}>
              <span className={styles.number}>03</span>
              <h3>Develop</h3>
              <p>Clean, scalable code</p>
            </div>
            <div className={`glass ${styles.card4}`}>
              <span className={styles.number}>04</span>
              <h3>Launch</h3>
              <p>Seamless deployment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
