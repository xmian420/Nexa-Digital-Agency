import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiCode,
  HiTemplate,
  HiServer,
  HiChartBar,
  HiSearch,
  HiCog,
  HiCloud,
  HiDesktopComputer,
  HiDatabase,
  HiColorSwatch,
} from "react-icons/hi";

import { FaSearchengin } from "react-icons/fa";
import styles from "./Services.module.scss";

const allServices = [
  {
    icon: <HiCode />,
    title: "Website Development",
    description:
      "Custom websites built with React, Next.js, and modern frameworks. Fully responsive, SEO-optimized, and blazing fast.",
    features: [
      "Custom Design",
      "Responsive Layout",
      "CMS Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: <HiDesktopComputer />,
    title: "React Development",
    description:
      "Expert React applications with clean architecture, reusable components, and state-of-the-art patterns.",
    features: [
      "React 19",
      "TypeScript",
      "State Management",
      "Component Libraries",
    ],
  },
  {
    icon: <HiServer />,
    title: "Backend Development",
    description:
      "Robust server-side solutions with Node.js and Laravel. Secure APIs and scalable infrastructure.",
    features: [
      "REST & GraphQL APIs",
      "Authentication",
      "Database Design",
      "Microservices",
    ],
  },
  {
    icon: <HiDatabase />,
    title: "Node.js APIs",
    description:
      "High-performance APIs built with Express, NestJS, and modern Node.js tooling.",
    features: [
      "Real-time Features",
      "Caching",
      "Rate Limiting",
      "Documentation",
    ],
  },
  {
    icon: <HiTemplate />,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive conversions.",
    features: [
      "A/B Testing Ready",
      "Fast Loading",
      "Analytics Integration",
      "Mobile First",
    ],
  },
  {
    icon: <HiChartBar />,
    title: "Dashboard Development",
    description:
      "Beautiful, data-rich dashboards and admin panels for businesses of any size.",
    features: [
      "Real-time Data",
      "Charts & Graphs",
      "Role-based Access",
      "Export Features",
    ],
  },
  {
    icon: <HiColorSwatch />,
    title: "UI/UX Design",
    description:
      "User-centered design that delights users and achieves business goals.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: <FaSearchengin />,
    title: "SEO & Performance",
    description:
      "Technical SEO, content strategy, and performance optimization for maximum visibility.",
    features: [
      "Technical SEO",
      "Core Web Vitals",
      "Content Strategy",
      "Link Building",
    ],
  },
];

const Services = () => {
  return (
    <main className={styles.servicesPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Our Services</h1>
            <p className={styles.sectionsubtitle}>
              Comprehensive digital solutions tailored to elevate your business
              and deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.list}`}>
        <div className="container">
          <div className={styles.grid}>
            {allServices.map((service, i) => (
              <motion.div
                key={i}
                className={`glass-card ${styles.card}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline">
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
