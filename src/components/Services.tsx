"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    icon: "⚙",
    color: "#00c8d7",
    slug: "automatizacion-industrial",
    title: "Automatización Industrial",
    desc: "Diseño e implementación de sistemas de automatización con PLC, SCADA y DCS para maximizar la eficiencia operacional y reducir costos de producción.",
    tags: ["PLC", "SCADA", "DCS", "HMI"],
  },
  {
    num: "02",
    icon: "🔬",
    color: "#f97316",
    slug: "control-de-procesos",
    title: "Control de Procesos",
    desc: "Ingeniería de control avanzada con lazos PID, control predictivo y optimización en tiempo real para procesos continuos y batch.",
    tags: ["PID", "MPC", "Control Predictivo"],
  },
  {
    num: "03",
    icon: "🌐",
    color: "#22c55e",
    slug: "integracion-scada",
    title: "Integración SCADA",
    desc: "Integración completa de sistemas de supervisión y adquisición de datos. Arquitecturas IoT industriales con conectividad cloud y edge computing.",
    tags: ["SCADA", "IoT", "OPC-UA", "Cloud"],
  },
  {
    num: "04",
    icon: "📊",
    color: "#a855f7",
    slug: "gestion-de-proyectos",
    title: "Gestión de Proyectos",
    desc: "Administración integral de proyectos bajo metodologías PMI y estándares internacionales. Desde la ingeniería básica hasta la puesta en marcha.",
    tags: ["PMI", "FEED", "EPC", "Commissioning"],
  },
  {
    num: "05",
    icon: "🔧",
    color: "#ec4899",
    slug: "mantenimiento-predictivo",
    title: "Mantenimiento Predictivo",
    desc: "Estrategias CBM basadas en análisis de vibraciones, termografía y monitoreo continuo para predecir fallas y maximizar la disponibilidad.",
    tags: ["CBM", "Vibraciones", "Termografía"],
  },
  {
    num: "06",
    icon: "🎓",
    color: "#eab308",
    slug: "capacitacion-tecnica",
    title: "Capacitación Técnica",
    desc: "Programas de formación especializada para operadores, técnicos e ingenieros. Modalidad presencial, e-learning y simulación en planta.",
    tags: ["Simulación", "E-Learning", "Certificación"],
  },
];

export default function Services() {
  const sectionRef  = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section  = sectionRef.current;
    const track    = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track || !progress) return;

    const getAmount = () => -(track.scrollWidth - window.innerWidth + 96);

    const tween = gsap.to(track, {
      x: getAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${Math.abs(getAmount())}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progress) progress.style.transform = `scaleX(${self.progress})`;
        },
      },
    });

    return () => { tween.scrollTrigger?.kill(); };
  }, []);

  return (
    <section ref={sectionRef} id="servicios" className={styles.section}>
      <div className={styles.header}>
        <span className="section-tag">Soluciones</span>
        <h2 className={`section-title ${styles.headerTitle}`}>
          Nuestros<br /><span>Servicios</span>
        </h2>
        <p className={styles.headerDesc}>
          Soluciones integrales de ingeniería adaptadas<br />a las necesidades de cada industria.
        </p>
        <div className={styles.progressWrap}>
          <div ref={progressRef} className={styles.progressBar} />
        </div>
        <span className={styles.hint}>← desliza →</span>
      </div>

      <div className={styles.trackWrap}>
        <div ref={trackRef} className={styles.track}>
          {services.map((s) => (
            <div key={s.num} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>{s.num}</span>
                <span className={styles.cardIcon} style={{ color: s.color }}>{s.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardTags}>
                {s.tags.map(t => (
                  <span key={t} className={styles.tag} style={{ "--c": s.color } as React.CSSProperties}>{t}</span>
                ))}
              </div>
              <Link href={`/servicios/${s.slug}`} className={styles.cardLink}
                style={{ "--c": s.color } as React.CSSProperties}>
                Ver detalle
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
              <div className={styles.cardBar} style={{ background: s.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
