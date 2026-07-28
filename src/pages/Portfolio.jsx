import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Portfolio.module.scss";

const categories = [
  "All",
  "Business",
  "Dashboard",
  "Landing Page",
  "Ecommerce",
  "Education",
  "Healthcare",
  "Real Estate",
  "CRM",
  "ERP",
];

const projects = [
  {
    id: 1,
    title: "ELuxury Real Estate Platform",
    category: "Real Estate",
    desc: "Enterprise-grade real estate platform engineered with React, featuring premium property listings, intelligent search, interactive galleries, elegant UI animations, and a fully responsive luxury user experience. ",
    color: "#22C55E",
    image: "/portfolio/realestate.jpg",
    url: "https://6a67f6230035f021397963c7--resplendent-mousse-f08734.netlify.app/",
  },
  {
    id: 2,
    title: "Nimbus - Premium Ecommerce Store",
    category: "Dashboard",
    desc: "A sophisticated eCommerce solution crafted with modern web technologies, combining premium aesthetics, lightning-fast performance, responsive design, and an exceptional digital shopping experience. ",
    color: "#22C55E",
    image: "/portfolio/nimbus.jpg",
    url: "https://6a67b53fa8b035e74201737b--spontaneous-kataifi-0d67cd.netlify.app/",
  },
  {
    id: 3,
    title: "Nishat Clone Store",
    category: "Ecommerce",
    desc: "Modern ecommerce website with premium UI, product listings and responsive shopping experience.",
    color: "#6C63FF",
    image: "/portfolio/nishat.jpg",
    url: "https://nishat-front.vercel.app/",
  },
  {
    id: 4,
    title: "Car Detailing",
    category: "Business",
    desc: "Professional car detailing website with premium landing page and service showcase.",
    color: "#00E5FF",
    image: "/portfolio/car-detailing.jpg",
    url: "https://car-detailing-eight.vercel.app/",
  },
  {
    id: 5,
    title: "Doctor Appointment",
    category: "Healthcare",
    desc: "Doctor website with appointment booking, departments and responsive design.",
    color: "#8B5CF6",
    image: "/portfolio/doctor.jpg",
    url: "https://single-doc.vercel.app/",
  },
  {
    id: 6,
    title: "Hospital & Clinic",
    category: "Healthcare",
    desc: "Modern hospital management and clinic website with clean medical UI.",
    color: "#22C55E",
    image: "/portfolio/hospital.jpg",
    url: "https://medical-iota-kohl.vercel.app/",
  },
  {
    id: 7,
    title: "fintail-equatic",
    category: "Business",
    desc: "Vibrant Neocaridina Shrimp Collection",
    color: "#22C55E",
    image: "/portfolio/fintail.jpg",
    url: "https://fintail-equatic-frontend.vercel.app/",
  },

  {
    id: 8,
    title: "Construct-Estimation",
    category: "Landing Page",
    desc: "Modern 3d Landing page website for Construct Estimators with clean  UI ",
    color: "#22C55E",
    image: "/portfolio/construct-estimation.jpg",
    url: "https://6883a0cfa522e200080b9a5a--global-estimation.netlify.app/",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className={styles.portfolioPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title">Our Portfolio</h1>
            <p className={styles.subtitle}>
              Discover a portfolio of premium websites and web applications,
              thoughtfully engineered to deliver outstanding performance, modern
              design, and memorable user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.gallery}`}>
        <div className="container">
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div className={styles.grid} layout>
            {filtered.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                <motion.div
                  className={`glass-card ${styles.card}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                >
                  <div className={styles.preview}>
                    <img src={project.image} alt={project.title} />

                    <span>{project.category}</span>

                    <div className={styles.overlay}>
                      <h4>Live Preview</h4>
                    </div>
                  </div>

                  <div className={styles.info}>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
