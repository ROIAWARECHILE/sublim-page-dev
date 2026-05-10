"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import styles from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    gradient: "linear-gradient(135deg, #0a2a3d 0%, #0d3a52 100%)",
    accent: "#00c8d7",
    industry: "Minería",
    client: "Compañía Minera del Pacífico",
    title: "Automatización Planta Procesamiento Mineral",
    desc: "Diseño e implementación completo del sistema de control para planta de flotación de cobre con capacidad de 8,000 toneladas diarias. Integración de 12 PLCs Siemens S7-1500 con SCADA centralizado.",
    services: ["Automatización Industrial", "Integración SCADA"],
    results: ["+42% throughput", "99.8% disponibilidad", "ROI 14 meses"],
    year: "2023",
  },
  {
    num: "02",
    gradient: "linear-gradient(135deg, #2d1200 0%, #3d1a00 100%)",
    accent: "#f97316",
    industry: "Petroquímica",
    client: "Refinería Nacional S.A.",
    title: "Modernización Sistema DCS Unidad de Crudo",
    desc: "Migración de sistema DCS obsoleto a plataforma Honeywell Experion PKS. Implementación de control avanzado MPC para optimización de rendimiento en unidad de destilación de crudo.",
    services: ["Control de Procesos", "Gestión de Proyectos"],
    results: ["+18% rendimiento", "-22% consumo energético", "0 días sin operar"],
    year: "2023",
  },
  {
    num: "03",
    gradient: "linear-gradient(135deg, #061e10 0%, #092818 100%)",
    accent: "#22c55e",
    industry: "Agua Potable",
    client: "ESSAL S.A.",
    title: "SCADA Regional Red de Distribución",
    desc: "Implementación de sistema SCADA para supervisión de 50 estaciones de bombeo y 200+ puntos de medición distribuidos en red regional de agua potable. Telemetría via radio y fibra óptica.",
    services: ["Integración SCADA", "Mantenimiento Predictivo"],
    results: ["50 estaciones remotas", "Real-time 24/7", "-35% pérdidas en red"],
    year: "2022",
  },
  {
    num: "04",
    gradient: "linear-gradient(135deg, #160a2d 0%, #1f1040 100%)",
    accent: "#a855f7",
    industry: "Manufactura",
    client: "Cementos Pacasmayo",
    title: "EPC Planta de Molienda de Cemento",
    desc: "Gestión integral EPC de proyecto de ampliación de capacidad. Automatización de 3 molinos de bolas, sistema de transporte y clasificación, integrado con ERP SAP vía OPC-UA.",
    services: ["Gestión de Proyectos", "Automatización Industrial"],
    results: ["+60% capacidad", "Plazo cumplido 100%", "-12% vs presupuesto"],
    year: "2022",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.card}`, {
        y: 60, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="proyectos" className={styles.section}>
      <div className={styles.bgPattern} />

      <div className="container">
        <motion.div className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}>
          <span className="section-tag">Casos de Éxito</span>
          <h2 className="section-title">
            Proyectos que<br /><span>transforman industrias</span>
          </h2>
          <p className="section-subtitle">
            Más de 200 proyectos exitosos en minería, petroquímica, manufactura,
            agua y energía en Latinoamérica.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.num} className={styles.card}
              style={{ "--bg": p.gradient, "--a": p.accent } as React.CSSProperties}>
              <div className={styles.cardBg} />
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>{p.num}</span>
                <span className={styles.cardYear}>{p.year}</span>
              </div>
              <span className={styles.cardIndustry}>{p.industry}</span>
              <p className={styles.cardClient}>{p.client}</p>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <div className={styles.cardServices}>
                {p.services.map(s => (
                  <span key={s} className={styles.serviceTag}>{s}</span>
                ))}
              </div>

              <div className={styles.cardResults}>
                {p.results.map(r => (
                  <span key={r} className={styles.result}>{r}</span>
                ))}
              </div>

              <div className={styles.cardAccent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
