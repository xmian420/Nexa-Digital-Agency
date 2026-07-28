import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./PortfolioPreview.module.scss";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Dashboard",
    color: "#6C63FF",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Ecommerce",
    color: "#00E5FF",
  },
  {
    id: 3,
    title: "Healthcare Portal",
    category: "Healthcare",
    color: "#8B5CF6",
  },
  { id: 4, title: "Real Estate CRM", category: "CRM", color: "#6C63FF" },
  { id: 5, title: "Education LMS", category: "Education", color: "#00E5FF" },
  {
    id: 6,
    title: "SaaS Landing Page",
    category: "Landing Page",
    color: "#8B5CF6",
  },
];

const PortfolioPreview = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={`section ${styles.portfolio}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Work</h2>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio" className="btn btn-primary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
