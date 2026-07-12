import type { Dictionary } from "../dictionary";

const en: Dictionary = {
  common: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    logIn: "Log in",
    bookDemo: "Book a demo",
  },
  languageSwitcher: {
    label: "Select language",
    current: "Current language",
  },
  nav: {
    links: [
      { label: "Agents", href: "#agents" },
      { label: "Platform", href: "#platform" },
      { label: "How It Works", href: "#workflow" },
      { label: "Security & AI Trust", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "AI agents built for healthcare",
    headlineLine1: "AI Clinical Assistant For",
    headlineRotatingPhrases: [
      "Every Consultation",
      "Every Patient",
      "Every Appointment",
      "Every Diagnosis",
    ],
    subtitlePrefix:
      "MedConverse AI listens to every consultation, automatically creates clinical documentation, generates AI-powered summaries, supports prescription workflows, suggests medical codes, identifies potential drug interactions, and streamlines follow-up care — so ",
    subtitleSuffix: " can focus on patients, not paperwork.",
    rotatingWords: ["doctors", "clinics", "hospitals", "hospital groups"],
    trustStrip: ["AI-assisted, clinician-approved", "Works offline", "Embeds in your HMS"],
    seeHowItWorks: "See how it works",
    mock: {
      recording: "Recording",
      liveTranscriptLabel: "Live transcript · Speaker ID",
      liveBadge: "Live",
      quote: "“Dr. Rao: How long have the symptoms lasted?”",
      aiScribeLabel: "AI Medical Scribe",
      generatingSummary: "Generating summary · ICD-10 suggestions · interaction check",
      summaryReady: "Summary ready for review",
      soapNote: "SOAP note drafted · awaiting clinician approval",
      review: "Review",
      speakerIdLabel: "Speaker ID",
      speakerName: "Dr. Rao",
      segmentsLabel: "Segments",
      segmentsValue: "18",
      statusLabel: "Status",
      statusValue: "Offline-safe",
      offlineBadge: "Works offline",
      clinicianApprovedBadge: "Clinician-approved",
    },
  },
  capabilityRowA: [
    "AI medical scribe",
    "Live transcription & speaker ID",
    "Offline-first recording",
    "ICD-10 coding suggestions",
    "Drug-interaction checks",
    "Pulse AI assistant",
    "Follow-up automation",
  ],
  capabilityRowB: [
    "HMS integration via API",
    "Patient & appointment management",
    "Multi-tenant admin & RBAC",
    "Reports & PDF export",
    "Speaker voice profiles",
    "Web & Android apps",
    "Prescription assistance",
  ],
  productOverview: {
    eyebrow: "Product overview",
    title: "One platform for the entire consultation.",
    subtitle: "From appointment to documentation to follow-up — connected end to end.",
    steps: [
      {
        icon: "Mic",
        title: "Record",
        description: "Capture the consultation live or offline — nothing is ever lost.",
      },
      {
        icon: "Sparkles",
        title: "Understand",
        description: "AI transcribes, identifies speakers, and analyzes the conversation.",
      },
      {
        icon: "ClipboardCheck",
        title: "Act",
        description: "Clinician reviews the summary, codes, and follow-ups, then approves.",
      },
    ],
  },
  demo: {
    eyebrow: "See it in action",
    title: "Watch a consultation become a clinical record",
    subtitle:
      "This is an illustrative walkthrough of the AI Medical Scribe — from live, speaker-identified transcription to a structured summary ready for the clinician to review.",
    cardTitle: "AI Medical Scribe",
    transcribingLive: "Transcribing live",
    replayAria: "Replay demo",
    transcribingAria: "Transcribing",
    patientSrLabel: "Patient: ",
    doctorSrLabel: "Dr. Rao: ",
    highlights: [
      {
        label: "Real-time speaker identification",
        detail: "“Dr. Rao” vs. “Patient,” labeled automatically",
      },
      {
        label: "Structured clinical summary",
        detail: "SOAP-style documentation drafted for review",
      },
      {
        label: "Coding & safety checks",
        detail: "ICD-10 suggestions and drug-interaction flags included",
      },
    ],
    script: [
      { from: "patient", text: "I've had a mild fever and a dry cough for the last three days." },
      { from: "doctor", text: "Any shortness of breath, or pain when you breathe in?" },
      { from: "patient", text: "No pain, just some tightness in my chest and I've been feeling tired." },
      {
        from: "doctor",
        text: "Let's check your oxygen levels and get a chest X-ray to be safe. I'll also prescribe something for the fever.",
      },
      { from: "system", text: "Speakers identified: Dr. Rao · Patient — 4 segments transcribed" },
      {
        from: "system",
        text: "AI Medical Scribe: summary generated · ICD-10 suggestions ready · no drug interactions flagged",
      },
    ],
  },
  agents: {
    eyebrow: "Meet the team",
    title: "Six specialized agents, one connected workflow",
    subtitle:
      "Each agent masters one part of the consultation — from the first conversation to the follow-up call — so documentation, coding, and care coordination happen without extra clicks.",
    items: [
      {
        icon: "Mic",
        name: "AI Medical Scribe Agent",
        tagline: "Review the note. Don't write it.",
        description:
          "Records consultations, performs real-time transcription, identifies speakers, and generates structured clinical notes — including SOAP documentation — automatically.",
      },
      {
        icon: "Bot",
        name: "AI Virtual Doctor Agent",
        tagline: "Guided conversations before the visit",
        description:
          "Conducts intelligent patient conversations, collects symptoms and medical history, performs a preliminary clinical assessment, and guides patients before consultations — with multilingual support.",
      },
      {
        icon: "Pill",
        name: "AI Prescription Agent",
        tagline: "A second set of eyes on every medication",
        description:
          "Drafts prescriptions, recommends medications, checks drug interactions, detects allergy conflicts, and suggests dosage adjustments for clinician review.",
      },
      {
        icon: "ScanLine",
        name: "Medical Imaging Agent",
        tagline: "A first read, before the clinician's read",
        description:
          "Analyzes X-rays, reviews CT scans and MRIs, assists with diagnostic interpretation, and generates preliminary findings for clinician review.",
      },
      {
        icon: "Languages",
        name: "Multilingual Communication Agent",
        tagline: "Care in 30+ Indian languages",
        description:
          "Translates conversations in real time, supports 30+ Indian languages, generates multilingual summaries, and enables cross-language doctor-patient communication.",
      },
      {
        icon: "CalendarCheck",
        name: "Follow-up Care Agent",
        tagline: "The patients who should come back, do",
        description:
          "Schedules follow-ups, sends medication reminders, tracks treatment adherence, and notifies patients about upcoming consultations.",
      },
    ],
  },
  platform: {
    eyebrow: "Product modules",
    title: "Everything a clinic needs, in one system",
    subtitle:
      "Beyond the scribe, MedConverse AI manages patients, appointments, follow-ups, and reporting in one multi-tenant, role-based workspace — and embeds directly into your existing HMS.",
    tablistAria: "Platform capabilities",
    items: [
      {
        icon: "Mic",
        title: "Consultation Workflow & AI Scribe",
        description:
          "The core loop of the product: start, record, transcribe, analyze, review, and follow up — with one-tap start from the day's schedule and automatic session persistence.",
        points: [
          "Live or offline capture, zero-loss recording",
          "Speaker-identified, editable transcripts",
          "AI-generated summary — clinician reviews and approves",
        ],
      },
      {
        icon: "FileCheck2",
        title: "Clinical Analysis Suite",
        description:
          "After each consultation, AI performs clinical analysis against a medicine knowledge base — coding, medication, and safety signals arrive alongside the summary.",
        points: [
          "ICD-10 / causal coding suggestions",
          "Medication extraction and enrichment",
          "Drug–drug interaction checks",
        ],
      },
      {
        icon: "MessageSquareHeart",
        title: "Pulse — Agentic AI Assistant",
        description:
          "A conversational AI copilot that reads and acts on clinic data through safe, permission-scoped tool calls — collapsing multi-click admin workflows into one sentence.",
        points: [
          "Natural-language read & write access to clinic data",
          "Tenant isolation enforced in SQL, not the prompt",
          "Every write action requires explicit confirmation",
        ],
      },
      {
        icon: "CalendarClock",
        title: "Patients, Appointments & Follow-ups",
        description:
          "A full clinic registry — patient records, scheduling, and follow-up queues — linked directly to every recording and its analysis.",
        points: [
          "Patient registry with duplicate detection",
          "Calendar and appointment scheduling per doctor",
          "Auto-suggested follow-up queue with conversion tracking",
        ],
      },
      {
        icon: "Waypoints",
        title: "HMS Integration",
        description:
          "Hospitals embed MedConverse AI directly into their existing Hospital Management System — no rip-and-replace required.",
        points: [
          "Versioned REST API with API-key management",
          "Webhook dispatch on session completion",
          "Embeddable widget with signed, short-lived tokens",
        ],
      },
      {
        icon: "UserCheck",
        title: "Admin, Reports & Analytics",
        description:
          "Organization and user administration across a five-level role hierarchy, with activity logs, session oversight, and reporting.",
        points: [
          "Org management with per-org module flags",
          "Activity and audit logs for admin actions",
          "Dashboard stats, PDF export, and usage tracking",
        ],
      },
    ],
  },
  workflow: {
    eyebrow: "How it works",
    title: "From 'Start' to signed-off, in five steps",
    subtitle:
      "Documentation isn't a single moment — it's a workflow. MedConverse AI automates every step without taking the clinician out of the loop.",
    items: [
      {
        step: "01",
        title: "Start",
        description:
          "The doctor taps Start on the appointment. The recording panel opens with a live level meter and duration timer.",
      },
      {
        step: "02",
        title: "Record",
        description:
          "Online, audio streams live for transcription. Offline, it's captured locally and uploads automatically the moment connectivity returns — nothing is ever lost.",
      },
      {
        step: "03",
        title: "Transcribe",
        description:
          "Real-time speech-to-text with automatic speaker diarization labels the conversation as it happens — 'Dr. Smith' versus 'Patient' — with voice-profile identification.",
      },
      {
        step: "04",
        title: "Analyze",
        description:
          "AI generates a consultation summary, ICD-10 / causal coding suggestions, medication analysis, and drug-interaction flags — labeled AI-generated, for clinician review.",
      },
      {
        step: "05",
        title: "Follow up",
        description:
          "The analysis (or the doctor) recommends a follow-up. Staff convert it to an appointment or decline it — either way, nothing falls through the cracks.",
      },
    ],
  },
  benefits: {
    eyebrow: "Why MedConverse",
    title: "Documentation burden, solved — not shifted",
    subtitle:
      "MedConverse AI removes the after-hours charting without removing the clinician from the decision. Everyone touching a consultation benefits.",
    items: [
      {
        icon: "Clock3",
        title: "Doctors get their time back",
        description:
          "Reclaim documentation time and end after-hours charting. Full attention stays on the patient — the record writes itself, and coding suggestions and interaction flags reduce cognitive load while you stay in control of every decision.",
      },
      {
        icon: "Blocks",
        title: "Clinics run on one system",
        description:
          "Front desk, consult room, and follow-up in a single platform — less software, less training, and higher consult throughput per doctor per day. Follow-up automation recovers otherwise-lost repeat visits.",
      },
      {
        icon: "Waypoints",
        title: "Hospitals adopt without ripping anything out",
        description:
          "Embed into your existing HMS and go live in days via API keys and a drop-in widget. Multi-tenant administration across departments and branches, with granular roles, module flags, and central oversight.",
      },
      {
        icon: "Users",
        title: "Front-desk and care teams work faster",
        description:
          "Nurses get instant access to consult summaries and follow-up queues with less verbal-handoff loss. Receptionists register patients faster with duplicate detection, and Pulse handles lookups in plain language.",
      },
    ],
  },
  languagesSection: {
    eyebrow: "Every patient, understood",
    title: "Care in 30+ Indian languages",
    subtitle:
      "The Multilingual Communication Agent translates conversations in real time and generates multilingual summaries — enabling cross-language doctor-patient communication without an interpreter in the room.",
    moreLabel: "+ 30 languages supported",
    note: "Representative list — full language coverage is confirmed during onboarding.",
  },
  security: {
    eyebrow: "Security & AI trust",
    title: "Security-first, with AI that knows its place",
    subtitle:
      "Every consultation touches protected health information, and every AI output is a suggestion. Every decision is still the clinician's.",
    items: [
      {
        icon: "ServerCog",
        title: "Multi-tenant data isolation",
        description:
          "Organization-scoped data isolation is enforced server-side on every request — not just in the application layer.",
      },
      {
        icon: "UserCheck",
        title: "Five-level role hierarchy",
        description:
          "Granular, server-side authorization from global admin down to day-to-day staff, with doctor-scoped visibility where needed.",
      },
      {
        icon: "Lock",
        title: "Signed, short-lived tokens",
        description:
          "JWT bearer authentication plus signed widget tokens for embedded HMS sessions, with server-side authorization on every endpoint.",
      },
      {
        icon: "FileCheck2",
        title: "Activity & error logging",
        description:
          "Admin actions are logged and reviewable; centralized error tracking and health checks run across the platform.",
      },
      {
        icon: "BadgeCheck",
        title: "Human-in-the-loop AI",
        description:
          "Every AI clinical output — summaries, codes, medication flags — is advisory. Clinicians review and approve before anything enters the record.",
      },
      {
        icon: "ShieldCheck",
        title: "AI actions require confirmation",
        description:
          "Pulse's tenant isolation is enforced in SQL, not the prompt, and every AI write action requires explicit user confirmation before it happens.",
      },
    ],
    complianceNote:
      "Our security architecture is multi-tenant and role-based by design. Compliance certification (HIPAA, SOC 2) is in progress — we are not yet certified.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered",
    subtitle: "Everything clinic and hospital leaders ask before bringing AI into the consultation room.",
    items: [
      {
        q: "Does the AI write the final medical record?",
        a: "No. Every summary, code, and flag is a suggestion. The clinician reviews, edits, and approves before anything enters the record.",
      },
      {
        q: "What happens if the internet drops mid-consultation?",
        a: "Recording continues locally on the device and uploads automatically when connectivity returns — with duplicate protection, so nothing is lost or doubled.",
      },
      {
        q: "How does it know who's speaking?",
        a: "Clinicians register a short voice profile once; the system then identifies them automatically in every consult and separates patient speech.",
      },
      {
        q: "Can it work inside our existing hospital system?",
        a: "Yes — via REST API, webhooks, and an embeddable widget that runs inside your HMS with secure, short-lived tokens.",
      },
      {
        q: "Who can see our data?",
        a: "Only your organization. Data isolation is enforced at the database level on every request, with a five-level role system controlling access inside your org.",
      },
      {
        q: "Which languages are supported?",
        a: "The Multilingual Communication Agent supports 30+ Indian languages for real-time translation and multilingual summaries, enabling cross-language doctor-patient communication.",
      },
      {
        q: "Is it compliant with healthcare regulations?",
        a: "Our security architecture is multi-tenant and role-based by design; our compliance certification program is underway.",
      },
      {
        q: "Can the AI assistant change data by itself?",
        a: "Never without you. Pulse asks for explicit confirmation before any create, update, or delete.",
      },
    ],
  },
  cta: {
    badge: "Stop typing. Start listening.",
    title: "See your own consultation, documented",
    subtitle:
      "Book a 20-minute demo — bring a sample consult and watch it become a structured chart note.",
    logIn: "Log in",
    trustLine: "AI-assisted, clinician-approved · Works offline · Embeds in your HMS",
  },
  footer: {
    tagline:
      "The AI medical scribe and consultation platform for modern clinics and hospitals — documentation, coding, and follow-up, automatically.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "AI Agents", href: "#agents" },
          { label: "Platform", href: "#platform" },
          { label: "How It Works", href: "#workflow" },
          { label: "Security & AI Trust", href: "#security" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Contact", href: "#cta" },
          { label: "Login", href: "https://scribe.medconverse.ai/" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Security", href: "/security" },
        ],
      },
    ],
    copyright: "© {year} MedConverse AI. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    security: "Security",
  },
  bookDemoDialog: {
    title: "No email app configured",
    body: "We couldn't open your email application. Please contact us manually at the address below — copy the email address or the full request template to get started.",
    ccLabel: "CC",
    copyEmail: "Copy Email Address",
    emailCopied: "Email Address Copied",
    copyTemplate: "Copy Email Template",
    templateCopied: "Email Template Copied",
    closeAria: "Close dialog",
  },
  legal: {
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    securityTitle: "Security",
    lastUpdated: "Last Updated",
    englishOnlyNotice:
      "This document is currently available in English only. A {language} translation is coming soon — the English version is the authoritative text in the meantime.",
  },
};

export default en;
