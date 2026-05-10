import styles from "./Clients.module.css";

const partners = [
  { name: "Siemens",           role: "Partner Certificado" },
  { name: "Rockwell Automation",role: "Solution Partner" },
  { name: "Honeywell",         role: "System Integrator" },
  { name: "ABB",               role: "Partner Certificado" },
  { name: "Emerson",           role: "Solution Provider" },
  { name: "Schneider Electric",role: "System Integrator" },
  { name: "OSIsoft",           role: "Partner PI System" },
  { name: "Inductive Automation",role: "Ignition Gold" },
];

const industries = [
  { icon: "⛏", label: "Minería" },
  { icon: "🛢", label: "Petroquímica" },
  { icon: "💧", label: "Agua y Saneamiento" },
  { icon: "🏭", label: "Manufactura" },
  { icon: "🌾", label: "Agroindustria" },
  { icon: "⚡", label: "Energía y Gas" },
  { icon: "🌊", label: "Celulosa y Papel" },
  { icon: "💊", label: "Farmacéutica" },
  { icon: "🏗", label: "Cemento y Materiales" },
  { icon: "🍔", label: "Alimentos y Bebidas" },
];

export default function Clients() {
  return (
    <section className={styles.section}>
      <div className={styles.topLine} />

      <div className="container">
        <div className={styles.header}>
          <span className="section-tag" style={{ color: "#0f172a" }}>Ecosistema</span>
          <h2 className="section-title section-title--light">
            Partners y <span>sectores</span> que<br />confían en SUBLIM
          </h2>
        </div>

        {/* Partners grid */}
        <div className={styles.partnersLabel}>Fabricantes y plataformas tecnológicas</div>
        <div className={styles.partnersGrid}>
          {partners.map(p => (
            <div key={p.name} className={styles.partnerCard}>
              <span className={styles.partnerName}>{p.name}</span>
              <span className={styles.partnerRole}>{p.role}</span>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className={styles.industriesLabel}>Industrias atendidas</div>
        <div className={styles.industriesGrid}>
          {industries.map(ind => (
            <div key={ind.label} className={styles.industryItem}>
              <span className={styles.industryIcon}>{ind.icon}</span>
              <span className={styles.industryLabel}>{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
