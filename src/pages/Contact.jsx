import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import EarthModel from "../components/three/EarthModel";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", budget: "", message: "" });
  };

  return (
    <main className={styles.contactPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title">Get In Touch</h1>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className="container">
          <div className={styles.grid}>
            <motion.div
              className={styles.earthWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Canvas
                camera={{ position: [0, 0, 3.5], fov: 45 }}
                dpr={[1, 1.5]}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.3} />
                  <directionalLight position={[5, 3, 5]} intensity={1.2} />
                  <pointLight
                    position={[-5, -3, -5]}
                    intensity={0.4}
                    color="#6C63FF"
                  />
                  <Stars radius={30} depth={40} count={800} factor={2} fade />
                  <EarthModel />
                  <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.8}
                    enablePan={false}
                  />
                </Suspense>
              </Canvas>
            </motion.div>

            <motion.div
              className={`glass ${styles.contactCard}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Let's Build Something Amazing </h2>

              <p>
                Have an idea for your next website, dashboard, or digital
                product? We'd love to hear about it. Reach out through email or
                connect with us on social media.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.item}>
                  <h4>Email</h4>
                  <a href="mailto:yourcompany@gmail.com">
                    smian6644@gmail.com <br />
                  </a>
                </div>

                <div className={styles.item}>
                  <h4>Instagram</h4>
                  <a
                    href="https://instagram.com/yourcompany"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @yourcompany
                  </a>
                </div>

                <div className={styles.item}>
                  <h4>LinkedIn</h4>
                  <a
                    href="https://linkedin.com/company/yourcompany"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/company/yourcompany
                  </a>
                </div>

                <div className={styles.item}>
                  <h4>WhatsApp</h4>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>

              <a
                href="mailto:yourcompany@gmail.com"
                className="btn btn-primary"
              >
                Send Email
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
