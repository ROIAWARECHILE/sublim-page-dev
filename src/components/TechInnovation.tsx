"use client";
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./TechInnovation.module.css";

gsap.registerPlugin(ScrollTrigger);

const TechModel = dynamic(() => import("./TechModel"), { ssr: false });

const techs = [
  {
    icon: "📊",
    title: "Analítica Predictiva",
    description: "Modelos de machine learning que anticipan fallas, optimizan procesos y reducen costos operativos antes de que los problemas ocurran.",
    tags: ["Python", "TensorFlow", "Power BI"],
    color: "#00c8d7",
  },
  {
    icon: "🔒",
    title: "Ciberseguridad Industrial",
    description: "Protección de infraestructura crítica OT/IT con monitoreo continuo, detección de amenazas y respuesta a incidentes en tiempo real.",
    tags: ["ISA/IEC 62443", "Zero Trust", "SIEM"],
    color: "#f97316",
  },
  {
    icon: "⚡",
    title: "Edge Computing",
    description: "Procesamiento de datos en el borde de la red para decisiones en tiempo real, reduciendo latencia y dependencia de conectividad.",
    tags: ["PLC", "SCADA", "OPC-UA"],
    color: "#22c55e",
  },
];

export default function TechInnovation() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-card-item", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".tech-tag-item", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 65%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.5)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tecnologia" ref={sectionRef} className={styles.section}>
      <div className={styles.bgTop} />
      <div className={styles.glow} />

      <div className="container">
        <div className={styles.layout}>
          {/* Columna izquierda: texto + modelo 3D */}
          <div className={styles.leftCol}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="section-tag">Capacidades</span>
              <h2 className="section-title">
                Innovación <span>Tecnológica</span>
              </h2>
              <p className="section-subtitle">
                Incorporamos tecnologías avanzadas para revolucionar la gestión e integración
                de procesos industriales con soluciones escalables y robustas.
              </p>
            </motion.div>

            <motion.div
              className={styles.modelWrapper}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className={styles.modelBg} />
              <div className={styles.modelCanvas}>
                <TechModel />
              </div>
              <div className={styles.modelLabel}>
                <span>Sistema de Integración SUBLIM</span>
              </div>
              <div className={styles.modelOrbitLabel} style={{ top: "18%", right: "10%" }}>SCADA</div>
              <div className={styles.modelOrbitLabel} style={{ top: "55%", right: "5%" }}>IoT</div>
              <div className={styles.modelOrbitLabel} style={{ bottom: "15%", left: "15%" }}>Cloud</div>
            </motion.div>
          </div>

          {/* Columna derecha: tech cards */}
          <div className={styles.rightCol} ref={cardsRef}>
            {techs.map((t, i) => (
              <div key={t.title} className={`${styles.techCard} tech-card-item`}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap} style={{ background: `${t.color}18`, borderColor: `${t.color}30` }}>
                    <span className={styles.techIcon}>{t.icon}</span>
                  </div>
                  <div className={styles.cardNumber}>0{i + 1}</div>
                </div>
                <h4 className={styles.techTitle}>{t.title}</h4>
                <p className={styles.techDesc}>{t.description}</p>
                <div className={styles.tags}>
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${styles.tag} tech-tag-item`}
                      style={{ color: t.color, background: `${t.color}12`, borderColor: `${t.color}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.cardBar} style={{ background: t.color }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
