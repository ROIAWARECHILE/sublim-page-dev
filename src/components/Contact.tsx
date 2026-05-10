"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import styles from "./Contact.module.css";

const info = [
  { icon: "📧", label: "Email", value: "contacto@sublim-group.com" },
  { icon: "📞", label: "Teléfono", value: "+56 2 2345 6789" },
  { icon: "📍", label: "Ubicación", value: "Santiago, Chile" },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    formRef.current?.reset();
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={styles.gridBg} />

      <div className="container">
        <div className={styles.layout}>
          <motion.div className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-60px" }}>
            <span className="section-tag">Contacto</span>
            <h2 className="section-title">
              Hablemos de<br /><span>tu Proyecto</span>
            </h2>
            <p className="section-subtitle">
              Cuéntanos sobre tu desafío industrial. Nuestro equipo está
              listo para diseñar la solución perfecta para tus necesidades.
            </p>

            <div className={styles.infoCards}>
              {info.map((item, i) => (
                <motion.div key={item.label} className={styles.infoCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.right}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-60px" }}>
            <div className={styles.formCard}>
              {sent ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✓</span>
                  <p>¡Mensaje enviado! Te contactaremos pronto.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>Nombre</label>
                      <input className={styles.input} type="text" placeholder="Tu nombre" required />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email</label>
                      <input className={styles.input} type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Empresa</label>
                    <input className={styles.input} type="text" placeholder="Nombre de tu empresa" />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Proyecto</label>
                    <textarea className={styles.textarea} placeholder="Describe brevemente tu proyecto..." rows={5} required />
                  </div>
                  <button type="submit" className={styles.submit} data-cursor="expand">
                    Enviar Mensaje
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
