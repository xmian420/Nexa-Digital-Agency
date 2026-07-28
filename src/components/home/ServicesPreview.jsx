import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiCode,
  HiTemplate,
  HiServer,
  HiChartBar,
  HiSearch,
  HiSpeakerphone,
  HiCog,
  HiCloud,
} from "react-icons/hi";

import styles from "./ServicesPreview.module.scss";

const services = [
  {
    icon: <HiCode />,
    title: "Website Development",
    description:
      "Custom, high-performance websites built with modern technologies.",
  },
  {
    icon: <HiTemplate />,
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages that turn visitors into customers.",
  },
  {
    icon: <HiServer />,
    title: "Backend Development",
    description:
      "Scalable APIs and server-side solutions with Node.js & Laravel.",
  },
  {
    icon: <HiChartBar />,
    title: "Dashboard Development",
    description:
      "Powerful admin panels, CRM and ERP systems for your business.",
  },
  {
    icon: <HiSearch />,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to dominate search rankings.",
  },
  {
    icon: <HiSpeakerphone />,
    title: "Digital Marketing",
    description: "Full-funnel marketing campaigns that deliver real ROI.",
  },
  {
    icon: <HiCog />,
    title: "Website Maintenance",
    description: "Proactive website maintenance and continuous improvements.",
  },
  {
    icon: <HiCloud />,
    title: "Cloud Hosting",
    description:
      "Reliable, secure, and high-speed hosting solutions tailored for performance.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServicesPreview = () => {
  return (
    <section className={`section ${styles.services}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>

          <p className={styles.sectionsubtitle}>
            End-to-end digital solutions designed to elevate your business,
            increase conversions, and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`glass-card ${styles.card}`}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <div className={styles.icon}>{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/services" className="btn btn-primary">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
