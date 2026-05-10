"use client";
import { motion } from "motion/react";
import styles from "./About.module.css";

const cards = [
  {
    accent: "#00c8d7",
    tag: "01 — Identidad",
    icon: "🏢",
    title: "Quiénes Somos",
    text: "SUBLIM es una empresa especializada en la gestión, control e integración de procesos industriales. Con más de 15 años en el mercado, hemos desarrollado soluciones integrales que transforman operaciones complejas en sistemas eficientes, seguros y rentables para nuestros clientes.",
  },
  {
    accent: "#f97316",
    tag: "02 — Propósito",
    icon: "🎯",
    title: "Misión",
    text: "Brindar soluciones integrales de ingeniería que generen eficiencia, seguridad y valor en los procesos industriales de nuestros clientes, a través de un equipo altamente calificado, tecnología de vanguardia y un compromiso permanente con la excelencia técnica y la sostenibilidad.",
  },
  {
    accent: "#22c55e",
    tag: "03 — Horizonte",
    icon: "🔭",
    title: "Visión",
    text: "Ser reconocidos como el socio tecnológico más confiable en control e integración de procesos industriales a nivel latinoamericano, destacándonos por nuestra innovación, calidad y compromiso con la seguridad operacional en cada proyecto que ejecutamos.",
  },
];

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.topLine} />
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className="container">
        <motion.div className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}>
          <span className="section-tag">La empresa</span>
          <h2 className="section-title">
            Sobre <span>SUBLIM</span>
          </h2>
          <p className="section-subtitle">
            Un equipo multidisciplinario de ingenieros y técnicos especializados en la
            gestión e integración de procesos industriales para industrias exigentes.
          </p>
        </motion.div>

        <div className={styles.cards}>
          {cards.map((c, i) => (
            <motion.div key={c.title} className={styles.card}
              style={{ "--a": c.accent } as React.CSSProperties}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ x: 8, transition: { duration: 0.25 } }}>
              <div className={styles.cardAccent} />
              <div className={styles.cardInner}>
                <div className={styles.cardHead}>
                  <span className={styles.cardTag}>{c.tag}</span>
                  <span className={styles.cardIcon}>{c.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardText}>{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
