"use client";
import { useState } from "react";
import { motion } from "motion/react";
import styles from "./Contact.module.css";

const contactInfo = [
  { icon: "📞", label: "Teléfono", value: "+56 9 1234 5678" },
  { icon: "📧", label: "Email", value: "contacto@sublim-group.com" },
  { icon: "📍", label: "Ubicación", value: "Santiago, Chile" },
  { icon: "🕐", label: "Horario", value: "Lun–Vie 08:00 – 18:00" },
];

export default function Contact() {
  const [form, setForm] = useState({ tipo: "", nombre: "", telefono: "", pais: "", detalles: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="section-tag">Contacto</span>
            <h2 className={styles.title}>
              Hablemos de su <span>Proyecto</span>
            </h2>
            <p className={styles.subtitle}>
              Cuéntenos cómo podemos ayudarle a transformar sus procesos industriales. Nos
              pondremos en contacto en menos de 24 horas.
            </p>

            {sent ? (
              <motion.div
                className={styles.success}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className={styles.successIcon}>✓</span>
                <div>
                  <strong>¡Mensaje enviado!</strong>
                  <p>Nos contactaremos a la brevedad.</p>
                </div>
              </motion.div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Tipo de Proyecto</label>
                    <select name="tipo" value={form.tipo} onChange={handleChange} required>
                      <option value="">Seleccionar...</option>
                      <option>Automatización Industrial</option>
                      <option>Ingeniería & Construcción</option>
                      <option>Seguridad HSE</option>
                      <option>Ciberseguridad OT</option>
                      <option>Infraestructura Modular</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Nombre y Apellido</label>
                    <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Juan García" required />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Teléfono</label>
                    <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+56 9 0000 0000" />
                  </div>
                  <div className={styles.field}>
                    <label>País del Proyecto</label>
                    <select name="pais" value={form.pais} onChange={handleChange}>
                      <option value="">Seleccionar...</option>
                      <option>Chile</option>
                      <option>Argentina</option>
                      <option>Perú</option>
                      <option>Colombia</option>
                      <option>Brasil</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Detalles del Proyecto</label>
                  <textarea name="detalles" value={form.detalles} onChange={handleChange} placeholder="Describa brevemente su proyecto y sus necesidades..." rows={5} />
                </div>
                <button type="submit" className={styles.submit}>
                  Solicitar Reunión →
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Información de Contacto</h3>
              <div className={styles.infoList}>
                {contactInfo.map((item) => (
                  <div key={item.label} className={styles.infoItem}>
                    <div className={styles.infoIcon}>{item.icon}</div>
                    <div>
                      <span className={styles.infoLabel}>{item.label}</span>
                      <span className={styles.infoValue}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.mapPlaceholder}>
                <span>📍 Santiago, Chile</span>
              </div>
              <div className={styles.cta}>
                <p>¿Necesita información urgente?</p>
                <a href="tel:+56912345678" className={styles.ctaBtn}>
                  📞 Llamar ahora
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
