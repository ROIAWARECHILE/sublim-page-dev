import styles from "./Footer.module.css";

const links = {
  Servicios: ["Automatización Industrial", "Control de Procesos", "Integración SCADA", "Gestión de Proyectos", "Mantenimiento Predictivo"],
  Empresa:   ["Sobre SUBLIM", "Nuestros Valores", "Certificaciones", "Proyectos", "Blog"],
  Legal:     ["Política de Privacidad", "Términos de Uso", "Cookies"],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <span className={styles.logoMark}>S</span>
              <span className={styles.logoText}>SUBLIM</span>
            </div>
            <p className={styles.tagline}>
              Control e Integración de<br />Procesos Industriales
            </p>
            <div className={styles.certs}>
              {["ISO 9001", "ISO 45001", "ISA/IEC 62443"].map(c => (
                <span key={c} className={styles.cert}>{c}</span>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section} className={styles.col}>
              <h4 className={styles.colTitle}>{section}</h4>
              <ul className={styles.colLinks}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className={styles.colLink}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} SUBLIM S.A. Todos los derechos reservados.
          </span>
          <span className={styles.made}>
            Hecho con precisión industrial en Santiago, Chile
          </span>
        </div>
      </div>
    </footer>
  );
}
