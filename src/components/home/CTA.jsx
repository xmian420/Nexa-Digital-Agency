import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import styles from './CTA.module.scss'

const CTA = () => {
  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <motion.div
          className={`glass ${styles.box}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Ready to Build Something{' '}
            <span className="text-gradient">Extraordinary?</span>
          </h2>
          <p>
            Let's turn your vision into a premium digital experience that
            captivates and converts.
          </p>
          <div className={styles.actions}>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project <HiArrowRight />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
