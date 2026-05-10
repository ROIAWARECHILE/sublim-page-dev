export interface ServiceBenefit { title: string; desc: string; icon: string }
export interface ServiceStep    { num: string; title: string; desc: string }
export interface ServiceCase    { industry: string; result: string; metric: string }

export interface Service {
  slug:        string;
  num:         string;
  icon:        string;
  color:       string;
  title:       string;
  shortDesc:   string;
  heroTitle:   string;
  overview:    string;
  stats:       { value: string; label: string }[];
  benefits:    ServiceBenefit[];
  process:     ServiceStep[];
  technologies:string[];
  cases:       ServiceCase[];
  tags:        string[];
}

export const services: Service[] = [
  {
    slug:      "automatizacion-industrial",
    num:       "01",
    icon:      "⚙",
    color:     "#00c8d7",
    title:     "Automatización Industrial",
    shortDesc: "Diseño e implementación de sistemas de automatización con PLC, SCADA y DCS para maximizar la eficiencia operacional.",
    heroTitle: "Transformamos procesos manuales en sistemas inteligentes y autónomos",
    overview:  "La automatización industrial es el corazón de la industria moderna. En SUBLIM diseñamos e implementamos soluciones de automatización a medida que eliminan errores humanos, aumentan la producción y reducen costos operacionales. Desde una simple línea de producción hasta una planta completa, nuestra metodología garantiza resultados medibles en el menor tiempo posible.",
    stats: [
      { value: "80+",   label: "PLCs programados" },
      { value: "35%",   label: "Reducción promedio de costos" },
      { value: "99.8%", label: "Disponibilidad garantizada" },
      { value: "150+",  label: "Sitios automatizados" },
    ],
    benefits: [
      { icon: "📈", title: "Mayor productividad",     desc: "Incrementos de producción del 25% al 60% gracias a ciclos continuos y tiempos de ciclo optimizados." },
      { icon: "🎯", title: "Calidad consistente",     desc: "Eliminación de variabilidad humana. Producto uniforme en cada ciclo de producción, 24/7." },
      { icon: "🛡", title: "Seguridad operacional",   desc: "Reducción de accidentes en un 70%. Sistemas de paro de emergencia y enclavamientos automáticos." },
      { icon: "💰", title: "Reducción de costos",     desc: "ROI promedio de 18 meses. Menores costos de mano de obra, energía y material de desecho." },
      { icon: "🔄", title: "Flexibilidad total",      desc: "Sistemas reconfigurables para adaptarse a cambios en el mix de producción sin paros largos." },
      { icon: "📊", title: "Trazabilidad completa",   desc: "Registro automático de cada operación. Cumplimiento de normas GMP, FDA, ISO sin esfuerzo." },
    ],
    process: [
      { num: "01", title: "Diagnóstico y Auditoría",  desc: "Evaluamos tu proceso actual: cuellos de botella, ineficiencias y oportunidades de mejora." },
      { num: "02", title: "Ingeniería Básica",         desc: "Definimos la arquitectura del sistema: PLCs, instrumentos, actuadores y red de comunicación." },
      { num: "03", title: "Ingeniería de Detalle",     desc: "Diseño eléctrico completo, programación de PLCs, configuración de HMI/SCADA y documentación técnica." },
      { num: "04", title: "Implementación FAT",        desc: "Construcción e instalación. Pruebas de fábrica (Factory Acceptance Test) antes del montaje en campo." },
      { num: "05", title: "Puesta en Marcha SAT",      desc: "Commissioning en sitio, pruebas funcionales, ajuste de lazos y parámetros en condiciones reales." },
      { num: "06", title: "Capacitación y Soporte",    desc: "Formación de operadores y mantenedores. Soporte remoto 24/7 durante los primeros 6 meses." },
    ],
    technologies: ["Siemens S7-1500/1200", "Allen-Bradley CompactLogix", "Schneider Modicon", "ABB AC500", "Rockwell FactoryTalk", "Ignition SCADA", "Wonderware InTouch", "PROFINET", "EtherNet/IP", "Modbus TCP"],
    cases: [
      { industry: "Minería",      result: "Automatización de planta de chancado",  metric: "+42% throughput" },
      { industry: "Alimentos",    result: "Línea de envasado 100% automatizada",   metric: "-38% costos OPEX" },
      { industry: "Petroquímica", result: "Control de unidad de destilación",      metric: "99.9% uptime" },
    ],
    tags: ["PLC", "SCADA", "DCS", "HMI", "PROFINET", "EtherNet/IP"],
  },
  {
    slug:      "control-de-procesos",
    num:       "02",
    icon:      "🔬",
    color:     "#f97316",
    title:     "Control de Procesos",
    shortDesc: "Ingeniería de control avanzada con lazos PID, control predictivo y optimización en tiempo real para procesos continuos.",
    heroTitle: "Optimizamos cada variable de tu proceso para máxima eficiencia y calidad",
    overview:  "El control de procesos es la disciplina que convierte un proceso inestable en uno predecible, eficiente y rentable. En SUBLIM aplicamos desde control clásico PID hasta algoritmos de control predictivo multivariable (MPC) para industrias que no toleran variabilidad: petroquímica, alimentos, farmacéutica, pulpa y papel, y minería.",
    stats: [
      { value: "500+", label: "Lazos PID optimizados" },
      { value: "30%",  label: "Mejora en variabilidad" },
      { value: "20%",  label: "Ahorro energético promedio" },
      { value: "12",   label: "Tipos de industria atendidos" },
    ],
    benefits: [
      { icon: "🎯", title: "Producto en especificación",    desc: "Reducción de la variabilidad en hasta 50%. Menos reproceso, menos scrap, mejor calidad consistente." },
      { icon: "⚡", title: "Eficiencia energética",         desc: "Optimización del consumo energético con estrategias de control avanzado. Ahorros del 15-25%." },
      { icon: "📉", title: "Reducción de variabilidad",     desc: "Menor desviación estándar en variables críticas como temperatura, presión, flujo y nivel." },
      { icon: "🔧", title: "Diagnóstico de lazos",          desc: "Identificación de lazos pobremente sintonizados, válvulas pegadas y problemas de instrumentación." },
      { icon: "🤖", title: "Control avanzado MPC",          desc: "Control Predictivo Multivariable para procesos complejos con múltiples variables interactuantes." },
      { icon: "📊", title: "Monitoreo de rendimiento",      desc: "KPIs de control en tiempo real: IAE, ISE, índice de oscilación, saturación de salida." },
    ],
    process: [
      { num: "01", title: "Auditoría de Lazos",         desc: "Análisis de todos los lazos de control existentes: sintonía, rendimiento, válvulas y transmisores." },
      { num: "02", title: "Modelado del Proceso",        desc: "Identificación del modelo matemático del proceso mediante pruebas de step test o PRBS." },
      { num: "03", title: "Diseño de Estrategia",        desc: "Selección de la estrategia de control: PID, feedforward, cascada, ratio, MPC o APC." },
      { num: "04", title: "Implementación y Sintonía",   desc: "Configuración en el DCS/PLC, sintonía fina de parámetros con el proceso en operación." },
      { num: "05", title: "Validación y Documentación",  desc: "Pruebas de performance con métricas definidas. Documentación según ISA-5.1 y IEC 61511." },
      { num: "06", title: "Monitoreo Continuo",          desc: "Dashboard de KPIs de control. Alertas de degradación de rendimiento y plan de mantenimiento." },
    ],
    technologies: ["Honeywell Experion PKS", "ABB 800xA", "Emerson DeltaV", "Siemens PCS7", "AspenTech APC", "OSIsoft PI", "Matlab/Simulink", "Control PID avanzado", "Control Predictivo MPC"],
    cases: [
      { industry: "Refinería",    result: "Optimización unidad de crudo",           metric: "+18% rendimiento" },
      { industry: "Celulosa",     result: "Control de digestores batch",             metric: "-22% consumo vapor" },
      { industry: "Farmacéutica", result: "Control temperatura reactores GMP",      metric: "±0.2°C precisión" },
    ],
    tags: ["PID", "MPC", "Control Predictivo", "DCS", "APC", "Optimización"],
  },
  {
    slug:      "integracion-scada",
    num:       "03",
    icon:      "🌐",
    color:     "#22c55e",
    title:     "Integración SCADA",
    shortDesc: "Integración completa de sistemas SCADA con arquitecturas IoT industriales, conectividad cloud y edge computing.",
    heroTitle: "Visibilidad total de tu planta en tiempo real, desde cualquier lugar del mundo",
    overview:  "Un sistema SCADA moderno es mucho más que pantallas de supervisión. Es la plataforma que conecta cada sensor, cada actuador y cada subsistema de tu planta con los sistemas de gestión empresarial. En SUBLIM diseñamos arquitecturas SCADA de última generación que integran IIoT, edge computing y cloud analytics para darte visibilidad y control total de tus operaciones.",
    stats: [
      { value: "10K+", label: "Tags integrados por proyecto" },
      { value: "99.9%",label: "Uptime garantizado" },
      { value: "<1s",  label: "Latencia en tiempo real" },
      { value: "100%", label: "Proyectos con ISA/IEC 62443" },
    ],
    benefits: [
      { icon: "👁", title: "Visibilidad en tiempo real",    desc: "Monitoreo de toda la planta desde cualquier dispositivo, en cualquier lugar, con datos al segundo." },
      { icon: "📱", title: "Acceso móvil",                  desc: "Apps nativas iOS/Android para supervisión remota. Alertas push para eventos críticos." },
      { icon: "🔔", title: "Sistema de alarmas",            desc: "Gestión avanzada según EEMUA 191. Priorización, supresión y análisis de causa raíz." },
      { icon: "📈", title: "Históricos y tendencias",       desc: "Almacenamiento de millones de tags. Análisis de tendencias y correlaciones para optimización." },
      { icon: "🔒", title: "Ciberseguridad industrial",     desc: "Diseño bajo ISA/IEC 62443. Zonas de seguridad, DMZ industrial y monitoreo de anomalías." },
      { icon: "🔗", title: "Integración ERP/MES",           desc: "Conexión bidireccional con SAP, Oracle y sistemas MES para visibilidad end-to-end." },
    ],
    process: [
      { num: "01", title: "Definición de Arquitectura",  desc: "Diseño de la topología: servidores, redes OT/IT, protocolos, redundancia y ciberseguridad." },
      { num: "02", title: "Integración de Fuentes",      desc: "Conexión con PLCs, RTUs y dispositivos mediante OPC-UA, Modbus, PROFINET y más." },
      { num: "03", title: "Desarrollo HMI/SCADA",        desc: "Diseño de pantallas según ISA-101. Mímicos, P&IDs interactivos y dashboards operacionales." },
      { num: "04", title: "Gestión de Alarmas",          desc: "Filosofía de alarmas, racionalización y configuración según EEMUA 191 / ISA-18.2." },
      { num: "05", title: "Historian y Analytics",       desc: "Servidor de datos históricos. Reportes automáticos y dashboards de KPIs de producción." },
      { num: "06", title: "Ciberseguridad y Hardening",  desc: "Segmentación de redes, gestión de accesos y plan de respuesta a incidentes OT." },
    ],
    technologies: ["Ignition Inductive", "Wonderware System Platform", "FactoryTalk View", "Siemens WinCC", "OPC-UA / OPC-DA", "Azure IoT Hub", "AWS IoT Core", "MQTT / Sparkplug B", "OSIsoft PI System", "ISA/IEC 62443"],
    cases: [
      { industry: "Agua Potable", result: "SCADA red de distribución",            metric: "50 estaciones remotas" },
      { industry: "Energía",      result: "Supervisión parque eólico multi-sitio", metric: "Real-time 24/7" },
      { industry: "Manufactura",  result: "MES + SCADA integrado con SAP",        metric: "OEE +28%" },
    ],
    tags: ["SCADA", "IoT", "OPC-UA", "MQTT", "Cloud", "Historian", "ISA/IEC 62443"],
  },
  {
    slug:      "gestion-de-proyectos",
    num:       "04",
    icon:      "📊",
    color:     "#a855f7",
    title:     "Gestión de Proyectos",
    shortDesc: "Administración integral bajo metodologías PMI desde la ingeniería básica hasta la puesta en marcha y commissioning.",
    heroTitle: "Cada proyecto entregado a tiempo, en presupuesto y con la calidad que esperas",
    overview:  "La gestión de proyectos de ingeniería determina el éxito o fracaso de cualquier inversión industrial. En SUBLIM aportamos más de 15 años de experiencia en la administración de proyectos de automatización y control, aplicando las mejores prácticas PMI y metodologías ágiles que garantizan transparencia y resultados.",
    stats: [
      { value: "95%",   label: "Proyectos dentro de plazo" },
      { value: "15%",   label: "Ahorro promedio en presupuesto" },
      { value: "$50M+", label: "En proyectos gestionados" },
      { value: "0",     label: "Accidentes registrables (15 años)" },
    ],
    benefits: [
      { icon: "📅", title: "Cumplimiento de plazos",         desc: "Cronograma detallado con hitos críticos. CPM y seguimiento semanal con alertas tempranas." },
      { icon: "💰", title: "Control de presupuesto",         desc: "Monitoreo de earned value (EVM). Alertas de desviaciones y gestión de cambios formal." },
      { icon: "📋", title: "Gestión de riesgos",             desc: "Identificación, evaluación y mitigación proactiva de riesgos técnicos y operacionales." },
      { icon: "🤝", title: "Coordinación multidisciplinaria", desc: "Integración fluida con equipos de proceso, eléctrico, civil, mecánico y producción." },
      { icon: "📊", title: "Reportes ejecutivos",            desc: "Dashboard en tiempo real. Informes semanales al equipo directivo con KPIs del proyecto." },
      { icon: "✅", title: "Aseguramiento de calidad",       desc: "Plan de calidad con ITPs, lista de verificación y documentación conforme a ISO 9001." },
    ],
    process: [
      { num: "01", title: "Inicio y Definición",       desc: "Project charter, alcance técnico, stakeholder analysis y línea base del proyecto." },
      { num: "02", title: "Ingeniería Básica (FEED)",   desc: "Front End Engineering Design: conceptualización técnica y plan de ejecución del proyecto." },
      { num: "03", title: "Ingeniería de Detalle",      desc: "P&ID, planos eléctricos, especificaciones técnicas y datasheet de equipos completos." },
      { num: "04", title: "Adquisiciones y Logística",  desc: "Gestión de proveedores, inspección FAT, importaciones y gestión de bodega en campo." },
      { num: "05", title: "Construcción y Montaje",     desc: "Supervisión de obra, gestión HSE, control de avance y resolución de interferencias." },
      { num: "06", title: "Commissioning y Entrega",    desc: "Pre-commissioning, SAT, capacity test, handover y cierre de documentación as-built." },
    ],
    technologies: ["MS Project", "Primavera P6", "Procore", "Power BI Dashboards", "PMI PMBOK 7", "BIM Industrial", "Control de documentos ISO 9001"],
    cases: [
      { industry: "Minería",    result: "EPC planta flotación 8k tpd",       metric: "-12% vs presupuesto" },
      { industry: "Gas Natural",result: "Modernización SCADA compresoras",   metric: "0 días sin operar" },
      { industry: "Pulpa Papel",result: "Expansión línea de producción",     metric: "18 meses, $4.2M" },
    ],
    tags: ["PMI", "FEED", "EPC", "Commissioning", "Earned Value", "Risk Management"],
  },
  {
    slug:      "mantenimiento-predictivo",
    num:       "05",
    icon:      "🔧",
    color:     "#ec4899",
    title:     "Mantenimiento Predictivo",
    shortDesc: "Estrategias CBM basadas en análisis de vibraciones, termografía y monitoreo continuo de activos industriales.",
    heroTitle: "Anticipa las fallas antes de que ocurran y maximiza la vida útil de tus activos",
    overview:  "El mantenimiento reactivo cuesta entre 3 y 5 veces más que el predictivo. En SUBLIM implementamos programas de mantenimiento basado en condición (CBM) que utilizan análisis de vibraciones, termografía, ultrasonido y monitoreo continuo para predecir fallas con semanas de anticipación, permitiéndote planificar sin paros de emergencia.",
    stats: [
      { value: "60%",  label: "Reducción de fallas inesperadas" },
      { value: "300%", label: "ROI promedio del programa" },
      { value: "40%",  label: "Menos mantenimiento correctivo" },
      { value: "2.5x", label: "Extensión de vida útil de equipos" },
    ],
    benefits: [
      { icon: "🔮", title: "Predicción de fallas",          desc: "Detección de anomalías semanas antes de la falla. Planificación sin urgencia ni emergencias." },
      { icon: "💸", title: "Optimización de costos",        desc: "Solo se interviene cuando el equipo lo necesita. Elimina cambios innecesarios." },
      { icon: "⏱", title: "Maximizar disponibilidad",       desc: "Incremento del OEE. Eliminación de paros no programados y pérdidas de producción." },
      { icon: "📈", title: "Extensión de vida útil",        desc: "Equipos monitoreados duran en promedio 2.5 veces más. Diferimiento de inversiones." },
      { icon: "🎯", title: "Diagnóstico preciso",           desc: "Identificación del mecanismo de falla: desbalance, desalineamiento, holgura, rodamiento." },
      { icon: "📱", title: "Monitoreo remoto 24/7",         desc: "Sensores permanentes con alertas automáticas y dashboard en tiempo real con tendencias." },
    ],
    process: [
      { num: "01", title: "Inventario y Criticidad",     desc: "Listado de activos, clasificación ABC por criticidad y selección de tecnología de monitoreo." },
      { num: "02", title: "Diseño del Programa",         desc: "Plan de medición: frecuencias, puntos, parámetros y umbrales de alerta según ISO 10816." },
      { num: "03", title: "Instrumentación",             desc: "Instalación de sensores de vibración, temperatura y ultrasonido. Cableado o wireless." },
      { num: "04", title: "Línea Base y Análisis",       desc: "Establecimiento de valores de referencia. Análisis espectral y diagnóstico inicial de activos." },
      { num: "05", title: "Monitoreo Continuo",          desc: "Plataforma online 24/7 con tendencias, alertas y reportes automáticos de salud de activos." },
      { num: "06", title: "Gestión de Intervenciones",   desc: "Órdenes de trabajo basadas en condición. Retroalimentación al modelo predictivo." },
    ],
    technologies: ["SKF IMx Online", "Emerson CSI", "NI DAQ", "Sensores MEMS", "Análisis espectral FFT", "Machine Learning predictivo", "ISO 13373 / ISO 10816", "WirelessHART", "CMMS integración"],
    cases: [
      { industry: "Cemento",  result: "Monitoreo molinos y compresores",    metric: "-65% paros imprevistos" },
      { industry: "Acero",    result: "CBM en línea de laminación",         metric: "ROI 380% en 2 años" },
      { industry: "Papel",    result: "Programa vibraciones 120 equipos",   metric: "+12% disponibilidad" },
    ],
    tags: ["CBM", "Vibraciones", "Termografía", "Ultrasonido", "OEE", "IIoT", "Machine Learning"],
  },
  {
    slug:      "capacitacion-tecnica",
    num:       "06",
    icon:      "🎓",
    color:     "#eab308",
    title:     "Capacitación Técnica",
    shortDesc: "Programas de formación especializada para operadores, técnicos e ingenieros en automatización y control de procesos.",
    heroTitle: "Desarrollamos el capital humano que necesita la industria 4.0",
    overview:  "La tecnología más avanzada no sirve si el equipo humano no está preparado. En SUBLIM diseñamos programas de capacitación personalizados que van desde el operador de campo hasta el ingeniero de control, combinando teoría, simulación y práctica en planta real para asegurar transferencia efectiva del conocimiento.",
    stats: [
      { value: "1,200+", label: "Técnicos e ingenieros capacitados" },
      { value: "95%",    label: "Tasa de aprobación certificaciones" },
      { value: "12",     label: "Países con programas activos" },
      { value: "40+",    label: "Módulos de formación disponibles" },
    ],
    benefits: [
      { icon: "🧠", title: "Conocimiento práctico",         desc: "Simuladores de proceso y laboratorios virtuales. Aprendizaje hands-on sin riesgo para la producción." },
      { icon: "📜", title: "Certificación reconocida",       desc: "Certificados con validez internacional respaldados por SUBLIM y nuestros partners tecnológicos." },
      { icon: "🎯", title: "Contenido personalizado",        desc: "Programas 100% adaptados a tus equipos reales, tu proceso específico y tu nivel." },
      { icon: "💻", title: "E-Learning + Presencial",        desc: "Modalidad híbrida: plataforma online 24/7 + sesiones presenciales en tus instalaciones." },
      { icon: "📈", title: "Métricas de aprendizaje",        desc: "Evaluaciones pre/post, KPIs de transferencia al puesto y seguimiento del desempeño." },
      { icon: "🔄", title: "Actualización continua",         desc: "Acceso permanente a contenido actualizado. Formación continua ante nuevas tecnologías." },
    ],
    process: [
      { num: "01", title: "Diagnóstico de Brechas",      desc: "Evaluación del nivel actual. Identificación de brechas versus el perfil de competencias requerido." },
      { num: "02", title: "Diseño Instruccional",         desc: "Objetivos de aprendizaje, contenidos, metodología y sistema de evaluación adaptado." },
      { num: "03", title: "Desarrollo de Materiales",     desc: "Manual técnico, videos, simulaciones interactivas y laboratorios específicos para tu proceso." },
      { num: "04", title: "Ejecución del Programa",       desc: "Clases teóricas, talleres prácticos, simulación en panel de entrenamiento y práctica en planta." },
      { num: "05", title: "Evaluación y Certificación",   desc: "Exámenes teórico-prácticos. Emisión de certificado con validez nacional e internacional." },
      { num: "06", title: "Seguimiento Post-Formación",   desc: "Coaching en planta a 30 y 90 días. Indicadores de impacto: reducción de errores, mejora de KPIs." },
    ],
    technologies: ["Simuladores DCS/PLC (Siemens, Rockwell)", "Realidad Virtual VR Industrial", "LMS Canvas/Moodle", "Laboratorios físicos de automatización", "Panel de entrenamiento PLC+HMI", "Certificaciones Siemens SITRAIN", "Certificaciones Rockwell Automation"],
    cases: [
      { industry: "Petroquímica", result: "Programa para 200 operadores DCS",    metric: "-45% errores de operación" },
      { industry: "Agua",         result: "Certificación técnicos instrumentación", metric: "100% plantilla calificada" },
      { industry: "Alimentos",    result: "GMP + SCADA para 80 técnicos",        metric: "0 no conformidades FDA" },
    ],
    tags: ["PLC", "DCS", "SCADA", "Simulación", "E-Learning", "Certificación", "VR Industrial"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
