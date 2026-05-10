"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#tecnologia" },
  { label: "Nosotros", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>⚙</span>
          <span className={styles.logoText}>SUBLIM</span>
        </a>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.label}>
              <button onClick={() => handleLink(l.href)} className={styles.link}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => handleLink("#contacto")} className={styles.cta}>
          Cotizar Reunión
        </button>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? styles.burgerOpen : ""} />
          <span className={menuOpen ? styles.burgerOpen : ""} />
          <span className={menuOpen ? styles.burgerOpen : ""} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                onClick={() => handleLink(l.href)}
                className={styles.mobileLink}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {l.label}
              </motion.button>
            ))}
            <button onClick={() => handleLink("#contacto")} className={styles.mobileCta}>
              Cotizar Reunión
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
