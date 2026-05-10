"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import styles from "./Values.module.css";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: "🛡", num: "01", title: "Seguridad Primero", desc: "Aplicamos estándares internacionales HSE en cada proyecto, protegiendo a nuestro equipo y a nuestros clientes en todo momento." },
  { icon: "⭐", num: "02", title: "Excelencia Total", desc: "Entregamos trabajo de primera calidad que supera expectativas. Nuestros procesos están certificados bajo normas ISO." },
  { icon: "💡", num: "03", title: "Innovación Constante", desc: "Adoptamos tecnologías emergentes para mantener a nuestros clientes a la vanguardia de la eficiencia industrial." },
  { icon: "📋", num: "04", title: "Transparencia Total", desc: "Comunicación honesta en cada etapa. Reportes claros, métricas precisas y visibilidad completa del avance." },
  { icon: "🤝", num: "05", title: "Ética Profesional", desc: "Actuamos con integridad en cada decisión. Construimos relaciones duraderas basadas en confianza y respeto mutuo." },
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.card}`, {
        y: 60, opacity: 0, duration: 0.7,
        stagger: { amount: 0.5, from: "start" },
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="valores" className={styles.section}>
      <div className={styles.bgDots} />

      <div className="container">
        <motion.div className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}>
          <span className="section-tag" style={{ color: "#0f172a" } as React.CSSProperties}>Nuestra cultura</span>
          <h2 className={`section-title section-title--light`}>
            Valores <span>Corporativos</span>
          </h2>
          <p className="section-subtitle section-subtitle--light">
            Los principios que guían cada decisión, proyecto y relación con
            nuestros clientes y equipos de trabajo.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.num} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.num}>{v.num}</span>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{v.icon}</span>
                </div>
              </div>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.desc}>{v.desc}</p>
              <div className={styles.hoverLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
