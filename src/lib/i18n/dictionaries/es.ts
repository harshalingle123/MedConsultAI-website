import type { Dictionary } from "../dictionary";

const es: Dictionary = {
  common: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
    logIn: "Iniciar sesión",
    bookDemo: "Reservar una demo",
  },
  languageSwitcher: {
    label: "Seleccionar idioma",
    current: "Idioma actual",
  },
  nav: {
    links: [
      { label: "Agentes", href: "#agents" },
      { label: "Plataforma", href: "#platform" },
      { label: "Cómo funciona", href: "#workflow" },
      { label: "Seguridad y confianza en IA", href: "#security" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Agentes de IA creados para la salud",
    headlineLine1: "Asistente clínico con IA para",
    headlineRotatingPhrases: [
      "Cada consulta",
      "Cada paciente",
      "Cada cita",
      "Cada diagnóstico",
    ],
    subtitlePrefix:
      "MedConverse AI escucha cada consulta, crea automáticamente la documentación clínica, genera resúmenes con IA, respalda los flujos de recetas, sugiere códigos médicos, identifica posibles interacciones farmacológicas y agiliza el seguimiento — para que ",
    subtitleSuffix: " puedan concentrarse en los pacientes, no en el papeleo.",
    rotatingWords: ["los médicos", "las clínicas", "los hospitales", "los grupos hospitalarios"],
    trustStrip: ["Asistido por IA, aprobado por clínicos", "Funciona sin conexión", "Se integra en tu HMS"],
    seeHowItWorks: "Ver cómo funciona",
    mock: {
      recording: "Grabando",
      liveTranscriptLabel: "Transcripción en vivo · Identificación de hablante",
      liveBadge: "En vivo",
      quote: "«Dr. Rao: ¿Cuánto tiempo llevan los síntomas?»",
      aiScribeLabel: "Escriba médico con IA",
      generatingSummary: "Generando resumen · Sugerencias CIE-10 · verificación de interacciones",
      summaryReady: "Resumen listo para revisión",
      soapNote: "Nota SOAP redactada · pendiente de aprobación clínica",
      review: "Revisar",
      speakerIdLabel: "Hablante",
      speakerName: "Dr. Rao",
      segmentsLabel: "Segmentos",
      segmentsValue: "18",
      statusLabel: "Estado",
      statusValue: "Seguro sin conexión",
      offlineBadge: "Funciona sin conexión",
      clinicianApprovedBadge: "Aprobado por clínicos",
    },
  },
  capabilityRowA: [
    "Escriba médico con IA",
    "Transcripción en vivo e identificación de hablante",
    "Grabación con prioridad offline",
    "Sugerencias de codificación CIE-10",
    "Verificación de interacciones farmacológicas",
    "Asistente de IA Pulse",
    "Automatización de seguimiento",
  ],
  capabilityRowB: [
    "Integración con HMS vía API",
    "Gestión de pacientes y citas",
    "Administración multiempresa y RBAC",
    "Informes y exportación a PDF",
    "Perfiles de voz de hablantes",
    "Apps web y Android",
    "Asistencia en recetas",
  ],
  productOverview: {
    eyebrow: "Visión general del producto",
    title: "Una plataforma para toda la consulta.",
    subtitle: "Desde la cita hasta la documentación y el seguimiento, todo conectado de extremo a extremo.",
    steps: [
      {
        icon: "Mic",
        title: "Grabar",
        description: "Captura la consulta en vivo o sin conexión — nada se pierde jamás.",
      },
      {
        icon: "Sparkles",
        title: "Comprender",
        description: "La IA transcribe, identifica a los hablantes y analiza la conversación.",
      },
      {
        icon: "ClipboardCheck",
        title: "Actuar",
        description: "El clínico revisa el resumen, los códigos y el seguimiento, y luego aprueba.",
      },
    ],
  },
  demo: {
    eyebrow: "Véalo en acción",
    title: "Vea cómo una consulta se convierte en un registro clínico",
    subtitle:
      "Este es un recorrido ilustrativo del Escriba médico con IA — desde la transcripción en vivo con identificación de hablante hasta un resumen estructurado listo para la revisión clínica.",
    cardTitle: "Escriba médico con IA",
    transcribingLive: "Transcribiendo en vivo",
    replayAria: "Repetir demo",
    transcribingAria: "Transcribiendo",
    patientSrLabel: "Paciente: ",
    doctorSrLabel: "Dr. Rao: ",
    highlights: [
      {
        label: "Identificación de hablante en tiempo real",
        detail: "«Dr. Rao» frente a «Paciente», etiquetados automáticamente",
      },
      {
        label: "Resumen clínico estructurado",
        detail: "Documentación estilo SOAP redactada para revisión",
      },
      {
        label: "Codificación y verificaciones de seguridad",
        detail: "Incluye sugerencias CIE-10 y alertas de interacción farmacológica",
      },
    ],
    script: [
      { from: "patient", text: "He tenido fiebre leve y tos seca los últimos tres días." },
      { from: "doctor", text: "¿Alguna dificultad para respirar o dolor al inhalar?" },
      { from: "patient", text: "No hay dolor, solo algo de opresión en el pecho y me he sentido cansado." },
      {
        from: "doctor",
        text: "Vamos a revisar sus niveles de oxígeno y hacer una radiografía de tórax para estar seguros. También le recetaré algo para la fiebre.",
      },
      { from: "system", text: "Hablantes identificados: Dr. Rao · Paciente — 4 segmentos transcritos" },
      {
        from: "system",
        text: "Escriba médico con IA: resumen generado · sugerencias CIE-10 listas · no se detectaron interacciones farmacológicas",
      },
    ],
  },
  agents: {
    eyebrow: "Conoce al equipo",
    title: "Seis agentes especializados, un flujo de trabajo conectado",
    subtitle:
      "Cada agente domina una parte de la consulta — desde la primera conversación hasta la llamada de seguimiento — para que la documentación, la codificación y la coordinación del cuidado ocurran sin clics adicionales.",
    items: [
      {
        icon: "Mic",
        name: "Agente Escriba Médico con IA",
        tagline: "Revisa la nota. No la escribas.",
        description:
          "Graba consultas, realiza transcripción en tiempo real, identifica a los hablantes y genera notas clínicas estructuradas — incluida la documentación SOAP — automáticamente.",
      },
      {
        icon: "Bot",
        name: "Agente Médico Virtual con IA",
        tagline: "Conversaciones guiadas antes de la visita",
        description:
          "Realiza conversaciones inteligentes con el paciente, recopila síntomas e historial médico, efectúa una evaluación clínica preliminar y guía a los pacientes antes de las consultas — con soporte multilingüe.",
      },
      {
        icon: "Pill",
        name: "Agente de Recetas con IA",
        tagline: "Un segundo par de ojos en cada medicamento",
        description:
          "Redacta recetas, recomienda medicamentos, verifica interacciones farmacológicas, detecta conflictos de alergias y sugiere ajustes de dosis para revisión clínica.",
      },
      {
        icon: "ScanLine",
        name: "Agente de Imagenología Médica",
        tagline: "Una primera lectura, antes de la lectura del clínico",
        description:
          "Analiza radiografías, revisa tomografías y resonancias, asiste en la interpretación diagnóstica y genera hallazgos preliminares para revisión clínica.",
      },
      {
        icon: "Languages",
        name: "Agente de Comunicación Multilingüe",
        tagline: "Atención en más de 30 idiomas de la India",
        description:
          "Traduce conversaciones en tiempo real, admite más de 30 idiomas de la India, genera resúmenes multilingües y permite la comunicación médico-paciente entre idiomas.",
      },
      {
        icon: "CalendarCheck",
        name: "Agente de Cuidado de Seguimiento",
        tagline: "Los pacientes que deben volver, vuelven",
        description:
          "Programa seguimientos, envía recordatorios de medicación, monitorea la adherencia al tratamiento y notifica a los pacientes sobre próximas consultas.",
      },
    ],
  },
  platform: {
    eyebrow: "Módulos del producto",
    title: "Todo lo que una clínica necesita, en un solo sistema",
    subtitle:
      "Más allá del escriba, MedConverse AI gestiona pacientes, citas, seguimientos e informes en un espacio de trabajo multiempresa basado en roles — y se integra directamente en tu HMS actual.",
    tablistAria: "Capacidades de la plataforma",
    items: [
      {
        icon: "Mic",
        title: "Flujo de consulta y escriba con IA",
        description:
          "El ciclo central del producto: iniciar, grabar, transcribir, analizar, revisar y hacer seguimiento — con inicio de un toque desde la agenda del día y persistencia automática de sesión.",
        points: [
          "Captura en vivo o sin conexión, sin pérdida de datos",
          "Transcripciones editables con hablantes identificados",
          "Resumen generado por IA — el clínico revisa y aprueba",
        ],
      },
      {
        icon: "FileCheck2",
        title: "Suite de análisis clínico",
        description:
          "Después de cada consulta, la IA realiza un análisis clínico frente a una base de conocimiento médico — la codificación, la medicación y las señales de seguridad llegan junto con el resumen.",
        points: [
          "Sugerencias de codificación CIE-10 / causal",
          "Extracción y enriquecimiento de medicación",
          "Verificación de interacciones entre medicamentos",
        ],
      },
      {
        icon: "MessageSquareHeart",
        title: "Pulse — Asistente de IA agéntico",
        description:
          "Un copiloto conversacional de IA que lee y actúa sobre los datos de la clínica mediante llamadas a herramientas seguras y con permisos definidos — condensando flujos administrativos de varios clics en una sola frase.",
        points: [
          "Acceso de lectura y escritura en lenguaje natural a los datos de la clínica",
          "Aislamiento por organización aplicado en SQL, no en el prompt",
          "Toda acción de escritura requiere confirmación explícita",
        ],
      },
      {
        icon: "CalendarClock",
        title: "Pacientes, citas y seguimientos",
        description:
          "Un registro clínico completo — historiales de pacientes, programación y colas de seguimiento — vinculado directamente a cada grabación y su análisis.",
        points: [
          "Registro de pacientes con detección de duplicados",
          "Calendario y programación de citas por médico",
          "Cola de seguimiento sugerida automáticamente con seguimiento de conversión",
        ],
      },
      {
        icon: "Waypoints",
        title: "Integración con HMS",
        description:
          "Los hospitales integran MedConverse AI directamente en su Sistema de Gestión Hospitalaria existente — sin necesidad de reemplazarlo por completo.",
        points: [
          "API REST versionada con gestión de claves de API",
          "Envío de webhooks al finalizar la sesión",
          "Widget integrable con tokens firmados de corta duración",
        ],
      },
      {
        icon: "UserCheck",
        title: "Administración, informes y análisis",
        description:
          "Administración de organizaciones y usuarios en una jerarquía de cinco niveles de roles, con registros de actividad, supervisión de sesiones e informes.",
        points: [
          "Gestión de organizaciones con indicadores de módulos por organización",
          "Registros de actividad y auditoría para acciones administrativas",
          "Estadísticas de panel, exportación a PDF y seguimiento de uso",
        ],
      },
    ],
  },
  workflow: {
    eyebrow: "Cómo funciona",
    title: "De «Iniciar» a firmado, en cinco pasos",
    subtitle:
      "La documentación no es un solo momento, es un flujo de trabajo. MedConverse AI automatiza cada paso sin sacar al clínico de la ecuación.",
    items: [
      {
        step: "01",
        title: "Iniciar",
        description:
          "El médico toca Iniciar en la cita. El panel de grabación se abre con un medidor de nivel en vivo y un cronómetro.",
      },
      {
        step: "02",
        title: "Grabar",
        description:
          "En línea, el audio se transmite en vivo para su transcripción. Sin conexión, se captura localmente y se sube automáticamente en cuanto vuelve la conectividad — nada se pierde jamás.",
      },
      {
        step: "03",
        title: "Transcribir",
        description:
          "La conversión de voz a texto en tiempo real con diarización automática de hablantes etiqueta la conversación al instante — «Dr. Smith» frente a «Paciente» — con identificación por perfil de voz.",
      },
      {
        step: "04",
        title: "Analizar",
        description:
          "La IA genera un resumen de la consulta, sugerencias de codificación CIE-10 / causal, análisis de medicación y alertas de interacción farmacológica — etiquetadas como generadas por IA, para revisión clínica.",
      },
      {
        step: "05",
        title: "Seguimiento",
        description:
          "El análisis (o el médico) recomienda un seguimiento. El personal lo convierte en una cita o lo descarta — en cualquier caso, nada se pierde.",
      },
    ],
  },
  benefits: {
    eyebrow: "Por qué MedConverse",
    title: "La carga de documentación, resuelta — no trasladada",
    subtitle:
      "MedConverse AI elimina la documentación fuera de horario sin sacar al clínico de la decisión. Todos los que participan en una consulta se benefician.",
    items: [
      {
        icon: "Clock3",
        title: "Los médicos recuperan su tiempo",
        description:
          "Recupera tiempo de documentación y termina con el papeleo fuera de horario. La atención se mantiene en el paciente — el registro se escribe solo, y las sugerencias de codificación y las alertas de interacción reducen la carga cognitiva mientras tú mantienes el control de cada decisión.",
      },
      {
        icon: "Blocks",
        title: "Las clínicas funcionan con un solo sistema",
        description:
          "Recepción, consultorio y seguimiento en una sola plataforma — menos software, menos capacitación y mayor rendimiento de consultas por médico y día. La automatización de seguimiento recupera visitas repetidas que de otro modo se perderían.",
      },
      {
        icon: "Waypoints",
        title: "Los hospitales adoptan sin desmontar nada",
        description:
          "Intégralo en tu HMS actual y ponlo en marcha en días mediante claves de API y un widget listo para usar. Administración multiempresa entre departamentos y sucursales, con roles granulares, indicadores de módulos y supervisión central.",
      },
      {
        icon: "Users",
        title: "Recepción y equipos de cuidado trabajan más rápido",
        description:
          "El personal de enfermería obtiene acceso instantáneo a los resúmenes de consulta y las colas de seguimiento, con menos pérdida de información en las transferencias verbales. Recepción registra pacientes más rápido gracias a la detección de duplicados, y Pulse gestiona las búsquedas en lenguaje sencillo.",
      },
    ],
  },
  languagesSection: {
    eyebrow: "Cada paciente, comprendido",
    title: "Atención en más de 30 idiomas de la India",
    subtitle:
      "El Agente de Comunicación Multilingüe traduce las conversaciones en tiempo real y genera resúmenes multilingües — permitiendo la comunicación médico-paciente entre idiomas sin necesidad de un intérprete en la sala.",
    moreLabel: "+ 30 idiomas compatibles",
    note: "Lista representativa — la cobertura completa de idiomas se confirma durante la incorporación.",
  },
  security: {
    eyebrow: "Seguridad y confianza en IA",
    title: "Seguridad primero, con una IA que conoce su lugar",
    subtitle:
      "Cada consulta involucra información de salud protegida, y cada salida de la IA es una sugerencia. Cada decisión sigue siendo del clínico.",
    items: [
      {
        icon: "ServerCog",
        title: "Aislamiento de datos multiempresa",
        description:
          "El aislamiento de datos por organización se aplica en el servidor en cada solicitud — no solo en la capa de aplicación.",
      },
      {
        icon: "UserCheck",
        title: "Jerarquía de roles de cinco niveles",
        description:
          "Autorización granular en el servidor, desde el administrador global hasta el personal del día a día, con visibilidad limitada por médico cuando es necesario.",
      },
      {
        icon: "Lock",
        title: "Tokens firmados de corta duración",
        description:
          "Autenticación con token JWT más tokens de widget firmados para sesiones de HMS integradas, con autorización en el servidor en cada endpoint.",
      },
      {
        icon: "FileCheck2",
        title: "Registro de actividad y errores",
        description:
          "Las acciones administrativas se registran y son revisables; el seguimiento centralizado de errores y las verificaciones de estado se ejecutan en toda la plataforma.",
      },
      {
        icon: "BadgeCheck",
        title: "IA con supervisión humana",
        description:
          "Toda salida clínica de la IA — resúmenes, códigos, alertas de medicación — es consultiva. Los clínicos revisan y aprueban antes de que algo ingrese al registro.",
      },
      {
        icon: "ShieldCheck",
        title: "Las acciones de la IA requieren confirmación",
        description:
          "El aislamiento por organización de Pulse se aplica en SQL, no en el prompt, y toda acción de escritura de la IA requiere confirmación explícita del usuario antes de ejecutarse.",
      },
    ],
    complianceNote:
      "Nuestra arquitectura de seguridad es multiempresa y basada en roles por diseño. La certificación de cumplimiento (HIPAA, SOC 2) está en curso — aún no estamos certificados.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas, respondidas",
    subtitle: "Todo lo que los líderes de clínicas y hospitales preguntan antes de llevar la IA al consultorio.",
    items: [
      {
        q: "¿La IA redacta el registro médico final?",
        a: "No. Cada resumen, código y alerta es una sugerencia. El clínico revisa, edita y aprueba antes de que algo ingrese al registro.",
      },
      {
        q: "¿Qué pasa si se pierde internet a mitad de la consulta?",
        a: "La grabación continúa localmente en el dispositivo y se sube automáticamente cuando vuelve la conectividad — con protección contra duplicados, para que nada se pierda ni se duplique.",
      },
      {
        q: "¿Cómo sabe quién está hablando?",
        a: "Los clínicos registran un breve perfil de voz una sola vez; luego el sistema los identifica automáticamente en cada consulta y separa el habla del paciente.",
      },
      {
        q: "¿Puede funcionar dentro de nuestro sistema hospitalario actual?",
        a: "Sí — a través de API REST, webhooks y un widget integrable que funciona dentro de tu HMS con tokens seguros de corta duración.",
      },
      {
        q: "¿Quién puede ver nuestros datos?",
        a: "Solo tu organización. El aislamiento de datos se aplica a nivel de base de datos en cada solicitud, con un sistema de cinco niveles de roles que controla el acceso dentro de tu organización.",
      },
      {
        q: "¿Qué idiomas son compatibles?",
        a: "El Agente de Comunicación Multilingüe admite más de 30 idiomas de la India para traducción en tiempo real y resúmenes multilingües, permitiendo la comunicación médico-paciente entre idiomas.",
      },
      {
        q: "¿Cumple con las regulaciones de salud?",
        a: "Nuestra arquitectura de seguridad es multiempresa y basada en roles por diseño; nuestro programa de certificación de cumplimiento está en marcha.",
      },
      {
        q: "¿El asistente de IA puede modificar datos por sí solo?",
        a: "Nunca sin tu autorización. Pulse solicita confirmación explícita antes de cualquier creación, actualización o eliminación.",
      },
    ],
  },
  cta: {
    badge: "Deja de escribir. Empieza a escuchar.",
    title: "Mira tu propia consulta, documentada",
    subtitle:
      "Reserva una demo de 20 minutos — trae una consulta de muestra y observa cómo se convierte en una nota clínica estructurada.",
    logIn: "Iniciar sesión",
    trustLine: "Asistido por IA, aprobado por clínicos · Funciona sin conexión · Se integra en tu HMS",
  },
  footer: {
    tagline:
      "El escriba médico con IA y la plataforma de consulta para clínicas y hospitales modernos — documentación, codificación y seguimiento, automáticamente.",
    columns: [
      {
        title: "Producto",
        links: [
          { label: "Agentes de IA", href: "#agents" },
          { label: "Plataforma", href: "#platform" },
          { label: "Cómo funciona", href: "#workflow" },
          { label: "Seguridad y confianza en IA", href: "#security" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Contacto", href: "#cta" },
          { label: "Iniciar sesión", href: "https://scribe.medconverse.ai/" },
        ],
      },
      {
        title: "Soporte",
        links: [
          { label: "Preguntas frecuentes", href: "#faq" },
          { label: "Seguridad", href: "/security" },
        ],
      },
    ],
    copyright: "© {year} MedConverse AI. Todos los derechos reservados.",
    privacyPolicy: "Política de privacidad",
    termsOfService: "Términos del servicio",
    security: "Seguridad",
  },
  bookDemoDialog: {
    title: "No hay una aplicación de correo configurada",
    body: "No pudimos abrir tu aplicación de correo. Contáctanos manualmente en la dirección de abajo — copia la dirección de correo o la plantilla completa de solicitud para comenzar.",
    ccLabel: "CC",
    copyEmail: "Copiar dirección de correo",
    emailCopied: "Dirección de correo copiada",
    copyTemplate: "Copiar plantilla de correo",
    templateCopied: "Plantilla de correo copiada",
    closeAria: "Cerrar diálogo",
  },
  legal: {
    privacyTitle: "Política de privacidad",
    termsTitle: "Términos del servicio",
    securityTitle: "Seguridad",
    lastUpdated: "Última actualización",
    englishOnlyNotice:
      "Este documento está disponible actualmente solo en inglés. Una traducción al {language} estará disponible próximamente — mientras tanto, la versión en inglés es el texto vigente.",
  },
};

export default es;
