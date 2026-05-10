"use client";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

const featured = {
  tag: "Plataforma Destacada",
  title: "Safety X",
  description:
    "Plataforma HSE para la gestión inteligente de seguridad, salud y medioambiente. Anticipa riesgos, digitaliza procesos y cumple con normativas internacionales.",
  points: [
    "Gestión de incidentes en tiempo real",
    "Reportes automáticos de seguridad",
    "Panel de control centralizado",
    "Integración con sistemas SCADA",
  ],
  cta: "Conocer Safety X →",
};

const services = [
  {
    icon: "👷",
    title: "Servicios Profesionales",
    description:
      "Consultoría especializada en control, automatización y gestión de procesos industriales con estándares internacionales.",
    points: [
      "Auditorías de sistemas de control",
      "Capacitación técnica especializada",
      "Soporte 24/7 en campo",
    ],
  },
  {
    icon: "🏗",
    title: "Ingeniería & Construcción",
    description:
      "Diseño, ingeniería de detalle y construcción de instalaciones industriales con altos estándares de calidad.",
    points: [
      "Ingeniería de detalle y básica",
      "Gestión integral de proyectos EPC",
      "Montaje electromecánico",
    ],
  },
  {
    icon: "⚙️",
    title: "Equipos y Oil & Gas",
    description:
      "Suministro y mantenimiento de equipos especializados para industrias Oil & Gas, minería y energía.",
    points: [
      "Instrumentación de campo certificada",
      "Sistemas de medición fiscal",
      "Mantenimiento predictivo",
    ],
  },
  {
    icon: "🏢",
    title: "Infraestructura Modular Inteligente",
    description:
      "Soluciones de infraestructura modular prefabricada con integración tecnológica para operaciones remotas.",
    points: [
      "Módulos habitacionales industriales",
      "Salas eléctricas prefabricadas",
      "Control ambiental integrado",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        y: 70,
        opacity: 0,
        duration: 0.65,
        stagger: { amount: 0.4, from: "start" },
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="section-tag">Lo que hacemos</span>
          <h2 className="section-title">
            Nuestros <span>Servicios</span>
          </h2>
          <p className="section-subtitle">
            En SUBLIM ofrecemos un portafolio de servicios diseñado para controlar, integrar y
            optimizar cada aspecto de sus operaciones industriales.
          </p>
        </motion.div>

        <motion.div
          className={styles.featured}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className={styles.featuredLeft}>
            <span className={styles.featuredTag}>{featured.tag}</span>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredDesc}>{featured.description}</p>
            <ul className={styles.featuredPoints}>
              {featured.points.map((p) => (
                <li key={p}>
                  <span className={styles.check}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <button className={styles.featuredCta}>{featured.cta}</button>
          </div>
          <div className={styles.featuredRight}>
            <div className={styles.featuredVisual}>
              <div className={styles.visualRing} />
              <div className={styles.visualCenter}>
                <span>🛡</span>
                <span className={styles.visualLabel}>Safety X</span>
              </div>
              <div className={styles.visualDot} style={{ top: "20%", right: "10%" }} />
              <div className={styles.visualDot} style={{ bottom: "25%", left: "8%" }} />
              <div className={styles.visualDot} style={{ top: "60%", right: "15%" }} />
            </div>
          </div>
        </motion.div>

        <div className={styles.grid} ref={gridRef}>
          {services.map((s) => (
            <div
              key={s.title}
              className={`${styles.card} service-card`}
            >
              <div className={styles.cardIconWrap}>
                <span className={styles.cardIcon}>{s.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
              <ul className={styles.cardPoints}>
                {s.points.map((p) => (
                  <li key={p}>
                    <span className={styles.bullet} />
                    {p}
                  </li>
                ))}
              </ul>
              <button className={styles.cardLink}>Más Información →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
