import { motion } from "framer-motion";
import styles from "./Process.module.scss";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business goals, audience, and market to define the perfect strategy.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Beautiful, user-centric interfaces crafted with precision and modern design principles.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, scalable code using the latest technologies for optimal performance.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Rigorous QA across devices and browsers to ensure flawless experiences.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Smooth deployment with ongoing support to keep your digital presence thriving.",
  },
];

const Process = () => {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Process</h2>
          <p className={styles.sectionsubtitle}>
            A proven methodology that turns ideas into exceptional digital
            products.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={styles.number}>{step.number}</div>
              <div className={styles.line} />
              <div className={`glass ${styles.content}`}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
