"use client";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./StatsBar.module.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15, suffix: "+", label: "Años de Experiencia", icon: "🏆" },
  { value: 200, suffix: "+", label: "Proyectos Ejecutados", icon: "⚙️" },
  { value: 50, suffix: "+", label: "Clientes Activos", icon: "🤝" },
  { value: 99, suffix: "%", label: "Satisfacción del Cliente", icon: "⭐" },
  { value: 12, suffix: "+", label: "Países con Presencia", icon: "🌎" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => { el.textContent = Math.floor(obj.val) + suffix; },
        });
      },
    });
    return () => st.kill();
  }, [value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function StatsBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: { trigger: barRef.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, barRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={barRef}>
      <div className={styles.bg} />
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={`${styles.card} stat-card`}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{s.icon}</span>
              </div>
              <div className={styles.value}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className={styles.label}>{s.label}</div>
              <div className={styles.line} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
