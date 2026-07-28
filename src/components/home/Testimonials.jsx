import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "SC",
    rating: 5,
    text: "Nexa transformed our online presence completely. The attention to detail and technical excellence exceeded all expectations.",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, GrowthLab",
    avatar: "MJ",
    rating: 5,
    text: "Working with Nexa was seamless. They delivered a stunning dashboard that our entire team loves using every day.",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, Bloom",
    avatar: "ER",
    rating: 5,
    text: "Their SEO and marketing strategies increased our organic traffic by 300% in just six months. Incredible results.",
  },
];

const Testimonials = () => {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Clients Say</h2>
          <p className={styles.sectionsubtitle}>
            Trusted by innovative companies around the world.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={styles.rating}>
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
