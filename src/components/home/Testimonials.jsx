import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    name: "Ali Raza",
    role: "Real Estate Client",
    avatar: "AR",
    rating: 5,
    text: "Nexa built a clean and modern real estate website for our business. The design looks professional, works smoothly, and our clients love the experience.",
  },
  {
    name: "Ahmed Khan",
    role: "Dashboard Client",
    avatar: "AK",
    rating: 5,
    text: "The analytics dashboard was exactly what we needed. It is fast, easy to use, and presents our data in a clear and professional way.",
  },
  {
    name: "Usman Malik",
    role: "Business Website Client",
    avatar: "UM",
    rating: 5,
    text: "The team delivered our business website on time with excellent quality. Communication was smooth, and the final result exceeded our expectations.",
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
