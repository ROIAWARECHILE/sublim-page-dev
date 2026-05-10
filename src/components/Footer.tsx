import styles from "./Footer.module.css";

const partners = ["Astec", "Shell", "Repsol", "Siemens", "ABB", "Emerson"];

const cols = [
  {
    title: "Sublim",
    links: ["Quiénes Somos", "Misión y Visión", "Valores", "Trabaja con Nosotros"],
  },
  {
    title: "Servicios",
    links: ["Servicios Profesionales", "Ingeniería & Construcción", "Equipos Oil & Gas", "Infraestructura Modular"],
  },
  {
    title: "Industrias",
    links: ["Minería", "Oil & Gas", "Energía", "Petroquímica", "Agua y Saneamiento"],
  },
  {
    title: "Contacto Rápido",
    links: ["+56 9 1234 5678", "contacto@sublim-group.com", "Santiago, Chile"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.partners}>
        <div className="container">
          <p className={styles.partnersLabel}>Partners & Clientes</p>
          <div className={styles.partnersList}>
            {partners.map((p) => (
              <span key={p} className={styles.partner}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>⚙</span>
                <span className={styles.logoText}>SUBLIM</span>
              </div>
              <p className={styles.brandDesc}>
                Control e Integración de Procesos Industriales. Soluciones de ingeniería
                de clase mundial para industrias exigentes.
              </p>
              <div className={styles.socials}>
                <a href="#" className={styles.social} aria-label="LinkedIn">in</a>
                <a href="#" className={styles.social} aria-label="Twitter">𝕏</a>
                <a href="#" className={styles.social} aria-label="YouTube">▶</a>
              </div>
            </div>

            {cols.map((col) => (
              <div key={col.title} className={styles.col}>
                <h4 className={styles.colTitle}>{col.title}</h4>
                <ul className={styles.colLinks}>
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className={styles.colLink}>{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.bottom}>
            <p>© {new Date().getFullYear()} SUBLIM Group. Todos los derechos reservados.</p>
            <div className={styles.bottomLinks}>
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
