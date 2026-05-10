"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Servicios",  href: "#servicios" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Proyectos",  href: "#proyectos" },
  { label: "Nosotros",   href: "#sobre" },
  { label: "Contacto",   href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [open, setOpen]         = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y    = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 60);
      setProgress(docH > 0 ? y / docH : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids  = links.map(l => l.href.slice(1));
    const obs  = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive("#" + id); },
        { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach(o => o?.disconnect());
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.progressBar} style={{ transform: `scaleX(${progress})` }} />
      <div className={styles.inner}>
        <a href="#" className={styles.logo} data-cursor="expand">
          <span className={styles.logoMark}>S</span>
          <span className={styles.logoText}>SUBLIM</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className={`${styles.link} ${active === l.href ? styles.linkActive : ""}`}
                onClick={() => setOpen(false)}>
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
