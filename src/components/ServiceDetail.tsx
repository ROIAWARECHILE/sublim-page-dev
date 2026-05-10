"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import type { Service } from "@/lib/services";
import styles from "./ServiceDetail.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail({ service }: { service: Service }) {
  const heroRef     = useRef<HTMLElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const processRef  = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats count-up
      statsRef.current?.querySelectorAll(`.${styles.statValue}`).forEach(el => {
        const raw = el.textContent || "0";
        const num = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
        const prefix = raw.match(/^[^0-9]*/)?.[0] || "";
        const suffix = raw.replace(/^[^0-9]*[0-9.,]*/, "");
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: num > 10 ? 1 : 0.1 },
          scrollTrigger: { trigger: statsRef.current, start: "top 80%", once: true },
          onUpdate() {
            const v = parseFloat((this as gsap.TweenVars).targets()[0].textContent);
            (this as gsap.TweenVars).targets()[0].textContent =
              prefix + (num > 10 ? Math.round(v) : v.toFixed(1)) + suffix;
          },
        });
      });

      // Process steps
      gsap.from(`.${styles.step}`, {
        x: -40, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: processRef.current, start: "top 75%", once: true },
      });
    });
    return () => ctx.revert();
  }, []);

  const accentRgb = service.color.replace("#", "");
  const r = parseInt(accentRgb.substring(0,2),16);
  const g = parseInt(accentRgb.substring(2,4),16);
  const b = parseInt(accentRgb.substring(4,6),16);

  return (
    <div className={styles.page} style={{ "--accent": service.color, "--accent-rgb": `${r},${g},${b}` } as React.CSSProperties}>
      {/* ── HERO ──────────────────────────────────────── */}
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className="container">
          <Link href="/#servicios" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Volver a Servicios
          </Link>

          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <span className={styles.heroNum}>{service.num}</span>
              <span className={styles.heroIcon}>{service.icon}</span>
              <p className={styles.heroTag}>Servicio SUBLIM</p>
              <h1 className={styles.heroTitle}>{service.title}</h1>
              <p className={styles.heroSubtitle}>{service.heroTitle}</p>
            </motion.div>

            <motion.div className={styles.heroTags}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}>
              {service.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </motion.div>

            <motion.div className={styles.heroCtas}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}>
              <Link href="/#contacto" className={styles.ctaPrimary}>
                Cotizar este servicio
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link href="/#servicios" className={styles.ctaOutline}>Ver otros servicios</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <div ref={statsRef} className={styles.statsStrip}>
        {service.stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── OVERVIEW ──────────────────────────────────── */}
      <section className={styles.overview}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <span className="section-tag">Descripción</span>
              <h2 className={`section-title ${styles.overviewTitle}`}>
                ¿Qué incluye este<br /><span>servicio?</span>
              </h2>
            </motion.div>
            <motion.p className={styles.overviewText}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              {service.overview}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────── */}
      <section className={styles.benefits}>
        <div className="container">
          <motion.div className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            <span className="section-tag">Beneficios</span>
            <h2 className="section-title">¿Por qué elegir SUBLIM<br />para este <span>servicio</span>?</h2>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {service.benefits.map((b, i) => (
              <motion.div key={b.title} className={styles.benefitCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-40px" }}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
                <div className={styles.benefitLine} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────── */}
      <section ref={processRef} className={styles.process}>
        <div className="container">
          <motion.div className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            <span className="section-tag">Metodología</span>
            <h2 className="section-title">Nuestro proceso<br /><span>paso a paso</span></h2>
          </motion.div>

          <div className={styles.steps}>
            {service.process.map((step, i) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepLine} />
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
                {i < service.process.length - 1 && <div className={styles.stepConnector} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ──────────────────────────────── */}
      <section className={styles.tech}>
        <div className="container">
          <motion.div className={styles.techInner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            <div className={styles.techLeft}>
              <span className="section-tag">Tecnología</span>
              <h2 className="section-title">Plataformas y<br /><span>herramientas</span></h2>
              <p className="section-subtitle">
                Trabajamos con las plataformas líderes de la industria para garantizar
                compatibilidad, soporte y evolución a largo plazo.
              </p>
            </div>
            <div className={styles.techRight}>
              {service.technologies.map((t, i) => (
                <motion.span key={t} className={styles.techTag}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}>
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CASES ─────────────────────────────────────── */}
      <section className={styles.cases}>
        <div className="container">
          <motion.div className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            <span className="section-tag">Casos de Éxito</span>
            <h2 className="section-title">Resultados que<br /><span>hablan por sí solos</span></h2>
          </motion.div>

          <div className={styles.casesGrid}>
            {service.cases.map((c, i) => (
              <motion.div key={i} className={styles.caseCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}>
                <span className={styles.caseIndustry}>{c.industry}</span>
                <p className={styles.caseResult}>{c.result}</p>
                <span className={styles.caseMetric}>{c.metric}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div className={styles.ctaBox}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            <p className={styles.ctaTag}>¿Listo para empezar?</p>
            <h2 className={styles.ctaTitle}>
              Hablemos de tu<br />proyecto de <span>{service.title}</span>
            </h2>
            <p className={styles.ctaText}>
              Nuestro equipo de expertos está listo para analizar tu caso y diseñar
              la solución más eficiente para tu industria.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/#contacto" className={styles.ctaPrimary}>
                Solicitar cotización gratuita
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link href="/" className={styles.ctaOutline}>Ir al inicio</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
