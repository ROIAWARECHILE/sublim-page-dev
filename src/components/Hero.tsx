"use client";
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "motion/react";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const certs = ["ISO 9001", "ISO 45001", "ISA/IEC 62443", "NFPA 72"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const btnsRef    = useRef<HTMLDivElement>(null);
  const certsRef   = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY       = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY  = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity   = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const h1 = titleRef.current;
    if (!h1) return;

    const lines = h1.querySelectorAll(`.${styles.line}`);
    const words: Element[] = [];

    lines.forEach(line => {
      const text = line.textContent || "";
      line.innerHTML = text
        .split(" ")
        .map(w => `<span class="${styles.wordWrap}"><span class="${styles.word}">${w}</span></span>`)
        .join(" ");
      line.querySelectorAll(`.${styles.word}`).forEach(w => words.push(w));
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(words, {
        y: "110%",
        duration: 1,
        stagger: 0.06,
        ease: "power4.out",
      })
      .from(subRef.current, { y: 24, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .from(btnsRef.current, { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .from(certsRef.current, { y: 16, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background layers */}
      <motion.div className={styles.bgLayer} style={{ y: bgY }}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
        <div className={styles.noise} />
      </motion.div>

      {/* 3D Canvas */}
      <div className={styles.canvas3d}>
        <HeroScene />
      </div>

      {/* Content */}
      <motion.div className={`${styles.content} container`} style={{ y: contentY, opacity }}>
        <span className={`section-tag ${styles.tag}`}>SUBLIM INDUSTRIAL GROUP</span>

        <h1 ref={titleRef} className={styles.title}>
          <span className={styles.line}>CONTROL E</span>
          <span className={styles.line}>INTEGRACIÓN</span>
          <span className={styles.line}>DE PROCESOS</span>
          <span className={`${styles.line} ${styles.lineAccent}`}>INDUSTRIALES</span>
        </h1>

        <p ref={subRef} className={styles.subtitle}>
          Más de 15 años transformando operaciones complejas en sistemas eficientes,<br />
          seguros y rentables para la industria latinoamericana.
        </p>

        <div ref={btnsRef} className={styles.buttons}>
          <a href="#servicios" className="btn btn-primary" data-cursor="expand">
            Nuestros Servicios
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
          <a href="#sobre" className="btn btn-outline" data-cursor="expand">
            Conocer SUBLIM
          </a>
        </div>

        <div ref={certsRef} className={styles.certs}>
          {certs.map(c => (
            <span key={c} className={styles.cert}>{c}</span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLabel}>scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
