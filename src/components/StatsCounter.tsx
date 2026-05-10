"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StatsCounter.module.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15,   suffix: "+", label: "Años de experiencia",       icon: "🏆", desc: "Líderes en control industrial" },
  { value: 200,  suffix: "+", label: "Proyectos ejecutados",       icon: "⚙",  desc: "En 12 países de Latinoamérica" },
  { value: 50,   suffix: "+", label: "Clientes activos",           icon: "🤝", desc: "Industrias de todo el mundo" },
  { value: 99,   suffix: "%", label: "Satisfacción del cliente",   icon: "⭐", desc: "Net Promoter Score certificado" },
  { value: 1200, suffix: "+", label: "Técnicos capacitados",       icon: "🎓", desc: "En automatización y control" },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const numsRef    = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numsRef.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        gsap.fromTo(el,
          { textContent: "0" },
          {
            textContent: String(target),
            duration: 2.2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        );
      });

      gsap.from(`.${styles.card}`, {
        y: 50, opacity: 0, duration: 0.8,
        stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.topAccent} />
      <div className={styles.bgGlow} />

      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={s.label} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <div className={styles.num}>
                <span ref={el => { numsRef.current[i] = el; }} className={styles.value}>0</span>
                <span className={styles.suffix}>{s.suffix}</span>
              </div>
              <p className={styles.label}>{s.label}</p>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
