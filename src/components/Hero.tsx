"use client";
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const categories = [
  { icon: "⚡", label: "Energía & Gestión" },
  { icon: "🏗", label: "Ingeniería & Construcción" },
  { icon: "🔧", label: "Servicios Profesionales" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-12%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: { trigger: ref.current, start: "top top", end: "40% top", scrub: 1 },
        y: 0,
        filter: "blur(0px)",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.hero}>
      {/* Fondo animado */}
      <motion.div className={styles.bg} style={{ y: bgY }}>
        <div className={styles.gridLines} />
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
        <div className={styles.noise} />
      </motion.div>

      {/* Modelo 3D */}
      <div className={styles.canvas3d}>
        <HeroScene />
      </div>

      {/* Contenido principal */}
      <motion.div className={styles.content} style={{ opacity: contentOpacity, y: contentY }}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.dot} />
          Control e Integración Industrial
          <span className={styles.badgeLine} />
        </motion.div>

        <motion.h1
          ref={titleRef}
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          Control e Integración de{" "}
          <span className={styles.highlight}>
            Procesos
            <svg className={styles.underlineSvg} viewBox="0 0 300 12" preserveAspectRatio="none">
              <path d="M0,8 Q75,0 150,8 Q225,16 300,8" stroke="#00c8d7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </span>{" "}
          Industriales
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Soluciones avanzadas de automatización, seguridad industrial y construcción modular,
          respaldadas por décadas de experiencia y tecnología de vanguardia.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button
            className={styles.btnPrimary}
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Cotizar Reunión</span>
            <span className={styles.btnArrow}>→</span>
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className={styles.btnPlay}>▶</span>
            Ver Servicios
          </button>
        </motion.div>

        <motion.div
          className={styles.trustRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
        >
          <span className={styles.trustLabel}>Certificados en</span>
          {["ISO 9001", "ISO 45001", "ISA/IEC 62443", "NFPA"].map((c) => (
            <span key={c} className={styles.cert}>{c}</span>
          ))}
        </motion.div>
      </motion.div>

      {/* Barra de categorías */}
      <div className={styles.categoriesBar}>
        {categories.map((c, i) => (
          <motion.div
            key={c.label}
            className={styles.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.1 }}
          >
            <span className={styles.categoryIcon}>{c.icon}</span>
            <span>{c.label}</span>
            <span className={styles.categoryArrow}>→</span>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
