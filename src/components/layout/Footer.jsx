import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaDribbble,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoIcon}>N</span>
              <span>
                Nexa <span className={styles.highlight}>Digital</span>
              </span>
            </Link>
            <p>
              Building premium digital experiences that transform businesses and
              captivate audiences worldwide.
            </p>
            <div className={styles.socials}>
              <a
                href="https://wa.me/923154276530"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/tnexadigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
              >
                <FaDribbble />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.links}>
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services">Website Development</Link>
              </li>
              <li>
                <Link to="/services">React Development</Link>
              </li>
              <li>
                <Link to="/services">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services">SEO Optimization</Link>
              </li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h4>Newsletter</h4>
            <p>Stay updated with the latest insights and offers.</p>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Nexa Digital Studio. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
