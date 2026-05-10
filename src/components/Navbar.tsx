"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Servicios",   href: "#servicios" },
  { label: "Tecnología",  href: "#tecnologia" },
  { label: "Nosotros",    href: "#sobre" },
  { label: "Valores",     href: "#valores" },
  { label: "Contacto",    href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} data-cursor="expand">
          <span className={styles.logoMark}>S</span>
          <span className={styles.logoText}>SUBLIM</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className={`${styles.cta} btn btn-primary`} data-cursor="expand">
          Cotizar Proyecto
        </a>

        <button className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen(v => !v)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
