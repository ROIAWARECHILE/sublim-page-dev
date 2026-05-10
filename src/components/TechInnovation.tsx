"use client";
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import styles from "./TechInnovation.module.css";

gsap.registerPlugin(ScrollTrigger);

const TechModel = dynamic(() => import("./TechModel"), { ssr: false });

const techs = [
  { label: "Siemens TIA Portal", color: "#00c8d7" },
  { label: "Allen Bradley", color: "#f97316" },
  { label: "Wonderware SCADA", color: "#22c55e" },
  { label: "OSIsoft PI", color: "#a855f7" },
  { label: "Modbus / Profibus", color: "#00c8d7" },
  { label: "OPC-UA / MQTT", color: "#f97316" },
  { label: "Azure IoT Hub", color: "#22c55e" },
  { label: "Machine Learning", color: "#ec4899" },
];

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "200+", label: "Proyectos ejecutados" },
  { value: "50+", label: "Clientes satisfechos" },
];

export default function TechInnovation() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const tagsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current?.querySelectorAll(`.${styles.stat}`) || [], {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 75%", once: true },
      });

      gsap.from(tagsRef.current?.querySelectorAll(`.${styles.techTag}`) || [], {
        scale: 0.7, opacity: 0, duration: 0.5, stagger: 0.06, ease: "back.out(1.7)",
        scrollTrigger: { trigger: tagsRef.current, start: "top 80%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tecnologia" className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <div className="container">
        <motion.div className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}>
          <span className="section-tag">Tecnología</span>
          <h2 className="section-title">
            Innovación <span>Tecnológica</span>
          </h2>
          <p className="section-subtitle">
            Integramos las plataformas líderes de la industria con soluciones
            personalizadas para cada desafío industrial.
          </p>
        </motion.div>

        <div className={styles.body}>
          {/* Left stats */}
          <div ref={leftRef} className={styles.leftCol}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
            <div className={styles.divider} />
            <p className={styles.leftText}>
              Adoptamos tecnologías emergentes para mantener a nuestros clientes
              a la vanguardia de la eficiencia industrial. Cada proyecto incorpora
              las mejores prácticas y herramientas del mercado global.
            </p>
          </div>

          {/* Center model */}
          <div className={styles.modelWrap}>
            <div className={styles.modelCanvas}>
              <TechModel />
            </div>
            <div className={styles.modelRing} />
          </div>

          {/* Right tags */}
          <div ref={tagsRef} className={styles.rightCol}>
            <p className={styles.tagsLabel}>Stack Tecnológico</p>
            <div className={styles.tagGrid}>
              {techs.map(t => (
                <span key={t.label} className={styles.techTag}
                  style={{ "--tc": t.color } as React.CSSProperties}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
