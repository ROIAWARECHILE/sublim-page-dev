"use client";
import { motion } from "motion/react";
import styles from "./About.module.css";

const cards = [
  {
    color: "teal",
    icon: "🏢",
    title: "Quiénes Somos",
    text: "SUBLIM es una empresa especializada en la gestión, control e integración de procesos industriales. Con más de 15 años en el mercado, hemos desarrollado soluciones integrales que transforman operaciones complejas en sistemas eficientes, seguros y rentables para nuestros clientes.",
  },
  {
    color: "orange",
    icon: "🎯",
    title: "Misión",
    text: "Brindar soluciones integrales de ingeniería que generen eficiencia, seguridad y valor en los procesos industriales de nuestros clientes, a través de un equipo altamente calificado, tecnología de vanguardia y un compromiso permanente con la excelencia técnica y la sostenibilidad.",
  },
  {
    color: "green",
    icon: "🔭",
    title: "Visión",
    text: "Ser reconocidos como el socio tecnológico más confiable en control e integración de procesos industriales a nivel latinoamericano, destacándonos por nuestra innovación, calidad y compromiso con la seguridad operacional en cada proyecto que ejecutamos.",
  },
];

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.glowBg} />
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="section-tag">La empresa</span>
          <h2 className="section-title">
            Sobre <span>SUBLIM</span>
          </h2>
          <p className="section-subtitle">
            Un equipo multidisciplinario de ingenieros y técnicos especializados en la gestión
            e integración de procesos industriales para industrias exigentes.
          </p>
        </motion.div>

        <div className={styles.cards}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className={`${styles.card} ${styles[c.color]}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{c.icon}</span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>
              <p className={styles.cardText}>{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
