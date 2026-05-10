import styles from "./Marquee.module.css";

const items = [
  "15+ Años de Experiencia",
  "200+ Proyectos Completados",
  "50+ Clientes Activos",
  "12+ Países de Presencia",
  "99% Satisfacción del Cliente",
  "Certificación ISO 9001",
  "Certificación ISO 45001",
  "ISA / IEC 62443",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>◆</span>
          </span>
        ))}
      </div>
      <div className={styles.track} aria-hidden style={{ animationDirection: "reverse" }}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
