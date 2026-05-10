"use client";
import { motion } from "motion/react";
import styles from "./Values.module.css";

const values = [
  {
    icon: "🛡",
    title: "Compromiso con la Seguridad",
    description:
      "La seguridad es nuestra prioridad absoluta. Aplicamos estándares internacionales HSE en cada proyecto, protegiendo a nuestro equipo y a nuestros clientes.",
  },
  {
    icon: "⭐",
    title: "Compromiso con la Calidad",
    description:
      "Entregamos trabajo de excelencia que supera las expectativas. Nuestros procesos están certificados bajo normas ISO y auditados continuamente.",
  },
  {
    icon: "💡",
    title: "Innovación Constante",
    description:
      "Adoptamos tecnologías emergentes para mantener a nuestros clientes a la vanguardia de la eficiencia industrial y la competitividad.",
  },
  {
    icon: "📋",
    title: "Información Honesta y Útil",
    description:
      "Comunicación transparente en cada etapa del proyecto. Reportes claros, métricas precisas y visibilidad total del avance.",
  },
  {
    icon: "🤝",
    title: "Transparencia y Ética Profesional",
    description:
      "Actuamos con integridad en cada decisión. Construimos relaciones duraderas basadas en la confianza mutua y el respeto profesional.",
  },
];

export default function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} />
      <div className={styles.bgGlow} />
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="section-tag">Nuestra cultura</span>
          <h2 className="section-title">
            Valores <span>Corporativos</span>
          </h2>
          <p className="section-subtitle">
            Los principios que guían cada decisión, proyecto y relación con nuestros clientes
            y equipos de trabajo.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{v.icon}</span>
              </div>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.desc}>{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
