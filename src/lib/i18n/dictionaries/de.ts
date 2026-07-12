import type { Dictionary } from "../dictionary";

const de: Dictionary = {
  common: {
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    menu: "Menü",
    switchToLight: "Zum hellen Modus wechseln",
    switchToDark: "Zum dunklen Modus wechseln",
    logIn: "Anmelden",
    bookDemo: "Demo buchen",
  },
  languageSwitcher: {
    label: "Sprache auswählen",
    current: "Aktuelle Sprache",
  },
  nav: {
    links: [
      { label: "Agenten", href: "#agents" },
      { label: "Plattform", href: "#platform" },
      { label: "So funktioniert's", href: "#workflow" },
      { label: "Sicherheit & KI-Vertrauen", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "KI-Agenten für das Gesundheitswesen",
    headlineLine1: "KI-Klinikassistent für",
    headlineRotatingPhrases: [
      "Jede Konsultation",
      "Jeden Patienten",
      "Jeden Termin",
      "Jede Diagnose",
    ],
    subtitlePrefix:
      "MedConverse AI hört jede Konsultation mit, erstellt automatisch die klinische Dokumentation, generiert KI-gestützte Zusammenfassungen, unterstützt Verordnungsabläufe, schlägt medizinische Codes vor, erkennt mögliche Wechselwirkungen und beschleunigt die Nachsorge — damit sich ",
    subtitleSuffix: " auf die Patienten konzentrieren können, nicht auf Papierkram.",
    rotatingWords: ["Ärztinnen und Ärzte", "Kliniken", "Krankenhäuser", "Krankenhausgruppen"],
    trustStrip: ["KI-unterstützt, klinisch geprüft", "Funktioniert offline", "Lässt sich in Ihr KIS einbinden"],
    seeHowItWorks: "So funktioniert's",
    mock: {
      recording: "Aufnahme läuft",
      liveTranscriptLabel: "Live-Transkript · Sprechererkennung",
      liveBadge: "Live",
      quote: "„Dr. Rao: Seit wann bestehen die Symptome?“",
      aiScribeLabel: "KI-Arztassistent",
      generatingSummary: "Zusammenfassung wird erstellt · ICD-10-Vorschläge · Wechselwirkungsprüfung",
      summaryReady: "Zusammenfassung bereit zur Prüfung",
      soapNote: "SOAP-Notiz erstellt · wartet auf klinische Freigabe",
      review: "Prüfen",
      speakerIdLabel: "Sprecher",
      speakerName: "Dr. Rao",
      segmentsLabel: "Segmente",
      segmentsValue: "18",
      statusLabel: "Status",
      statusValue: "Offline-sicher",
      offlineBadge: "Funktioniert offline",
      clinicianApprovedBadge: "Klinisch geprüft",
    },
  },
  capabilityRowA: [
    "KI-Arztassistent",
    "Live-Transkription & Sprechererkennung",
    "Offline-first-Aufnahme",
    "ICD-10-Codierungsvorschläge",
    "Wechselwirkungsprüfung",
    "Pulse KI-Assistent",
    "Automatisierte Nachsorge",
  ],
  capabilityRowB: [
    "KIS-Integration über API",
    "Patienten- und Terminverwaltung",
    "Mandantenfähige Verwaltung & RBAC",
    "Berichte & PDF-Export",
    "Sprecher-Stimmprofile",
    "Web- und Android-Apps",
    "Unterstützung bei Verordnungen",
  ],
  productOverview: {
    eyebrow: "Produktübersicht",
    title: "Eine Plattform für die gesamte Konsultation.",
    subtitle: "Vom Termin über die Dokumentation bis zur Nachsorge — durchgängig vernetzt.",
    steps: [
      {
        icon: "Mic",
        title: "Aufnehmen",
        description: "Erfassen Sie die Konsultation live oder offline — nichts geht jemals verloren.",
      },
      {
        icon: "Sparkles",
        title: "Verstehen",
        description: "Die KI transkribiert, identifiziert Sprecher und analysiert das Gespräch.",
      },
      {
        icon: "ClipboardCheck",
        title: "Handeln",
        description: "Der Arzt prüft Zusammenfassung, Codes und Nachsorge und gibt sie frei.",
      },
    ],
  },
  demo: {
    eyebrow: "So funktioniert es in der Praxis",
    title: "Sehen Sie, wie aus einer Konsultation ein klinischer Datensatz wird",
    subtitle:
      "Dies ist eine anschauliche Demonstration des KI-Arztassistenten — von der live sprechererkannten Transkription bis zur strukturierten, prüfbereiten Zusammenfassung.",
    cardTitle: "KI-Arztassistent",
    transcribingLive: "Live-Transkription",
    replayAria: "Demo erneut abspielen",
    transcribingAria: "Transkription läuft",
    patientSrLabel: "Patient: ",
    doctorSrLabel: "Dr. Rao: ",
    highlights: [
      {
        label: "Echtzeit-Sprechererkennung",
        detail: "„Dr. Rao“ vs. „Patient“, automatisch gekennzeichnet",
      },
      {
        label: "Strukturierte klinische Zusammenfassung",
        detail: "SOAP-artige Dokumentation zur Prüfung erstellt",
      },
      {
        label: "Codierung & Sicherheitsprüfungen",
        detail: "Inklusive ICD-10-Vorschlägen und Wechselwirkungshinweisen",
      },
    ],
    script: [
      { from: "patient", text: "Ich habe seit drei Tagen leichtes Fieber und trockenen Husten." },
      { from: "doctor", text: "Haben Sie Atemnot oder Schmerzen beim Einatmen?" },
      { from: "patient", text: "Keine Schmerzen, nur ein Engegefühl in der Brust, und ich fühle mich müde." },
      {
        from: "doctor",
        text: "Lassen Sie uns sicherheitshalber Ihre Sauerstoffwerte prüfen und eine Röntgenaufnahme des Brustkorbs machen. Ich verschreibe Ihnen auch etwas gegen das Fieber.",
      },
      { from: "system", text: "Sprecher erkannt: Dr. Rao · Patient — 4 Segmente transkribiert" },
      {
        from: "system",
        text: "KI-Arztassistent: Zusammenfassung erstellt · ICD-10-Vorschläge bereit · keine Wechselwirkungen festgestellt",
      },
    ],
  },
  agents: {
    eyebrow: "Lernen Sie das Team kennen",
    title: "Sechs spezialisierte Agenten, ein vernetzter Arbeitsablauf",
    subtitle:
      "Jeder Agent beherrscht einen Teil der Konsultation — vom ersten Gespräch bis zum Nachsorgeanruf —, sodass Dokumentation, Codierung und Versorgungskoordination ohne zusätzliche Klicks ablaufen.",
    items: [
      {
        icon: "Mic",
        name: "KI-Arztassistent-Agent",
        tagline: "Notiz prüfen. Nicht selbst schreiben.",
        description:
          "Nimmt Konsultationen auf, transkribiert in Echtzeit, identifiziert Sprecher und erstellt automatisch strukturierte klinische Notizen — einschließlich SOAP-Dokumentation.",
      },
      {
        icon: "Bot",
        name: "KI-Virtueller-Arzt-Agent",
        tagline: "Geführte Gespräche vor dem Termin",
        description:
          "Führt intelligente Patientengespräche, erfasst Symptome und Anamnese, führt eine vorläufige klinische Einschätzung durch und begleitet Patienten vor Konsultationen — mit mehrsprachiger Unterstützung.",
      },
      {
        icon: "Pill",
        name: "KI-Verordnungs-Agent",
        tagline: "Ein zweites Augenpaar für jedes Medikament",
        description:
          "Entwirft Verordnungen, empfiehlt Medikamente, prüft Wechselwirkungen, erkennt Allergiekonflikte und schlägt Dosisanpassungen zur klinischen Prüfung vor.",
      },
      {
        icon: "ScanLine",
        name: "Medizinischer-Bildgebungs-Agent",
        tagline: "Eine erste Einschätzung vor der ärztlichen Befundung",
        description:
          "Analysiert Röntgenbilder, prüft CT- und MRT-Aufnahmen, unterstützt bei der diagnostischen Interpretation und erstellt vorläufige Befunde zur klinischen Prüfung.",
      },
      {
        icon: "Languages",
        name: "Mehrsprachiger-Kommunikations-Agent",
        tagline: "Versorgung in über 30 indischen Sprachen",
        description:
          "Übersetzt Gespräche in Echtzeit, unterstützt über 30 indische Sprachen, erstellt mehrsprachige Zusammenfassungen und ermöglicht sprachübergreifende Arzt-Patienten-Kommunikation.",
      },
      {
        icon: "CalendarCheck",
        name: "Nachsorge-Agent",
        tagline: "Die Patienten, die wiederkommen sollten, kommen wieder",
        description:
          "Plant Nachsorgetermine, sendet Medikationserinnerungen, verfolgt die Therapietreue und benachrichtigt Patienten über anstehende Konsultationen.",
      },
    ],
  },
  platform: {
    eyebrow: "Produktmodule",
    title: "Alles, was eine Klinik braucht, in einem System",
    subtitle:
      "MedConverse AI verwaltet über den Schreibdienst hinaus Patienten, Termine, Nachsorge und Berichte in einem mandantenfähigen, rollenbasierten Arbeitsbereich — und lässt sich direkt in Ihr bestehendes KIS einbinden.",
    tablistAria: "Plattformfunktionen",
    items: [
      {
        icon: "Mic",
        title: "Konsultationsworkflow & KI-Schreibdienst",
        description:
          "Der zentrale Ablauf des Produkts: starten, aufnehmen, transkribieren, analysieren, prüfen und nachverfolgen — mit Ein-Klick-Start aus dem Tagesplan und automatischer Sitzungspersistenz.",
        points: [
          "Live- oder Offline-Erfassung ohne Datenverlust",
          "Bearbeitbare Transkripte mit erkannten Sprechern",
          "KI-generierte Zusammenfassung — vom Arzt geprüft und freigegeben",
        ],
      },
      {
        icon: "FileCheck2",
        title: "Klinische Analyse-Suite",
        description:
          "Nach jeder Konsultation führt die KI eine klinische Analyse gegen eine medizinische Wissensdatenbank durch — Codierung, Medikation und Sicherheitssignale kommen zusammen mit der Zusammenfassung.",
        points: [
          "ICD-10- / kausale Codierungsvorschläge",
          "Medikationsextraktion und -anreicherung",
          "Prüfung von Wechselwirkungen zwischen Medikamenten",
        ],
      },
      {
        icon: "MessageSquareHeart",
        title: "Pulse — Agentischer KI-Assistent",
        description:
          "Ein konversationeller KI-Copilot, der Klinikdaten über sichere, rechtebeschränkte Werkzeugaufrufe liest und darauf reagiert — und mehrklickige Verwaltungsabläufe zu einem Satz verdichtet.",
        points: [
          "Lese- und Schreibzugriff auf Klinikdaten in natürlicher Sprache",
          "Mandantentrennung wird in SQL durchgesetzt, nicht im Prompt",
          "Jede Schreibaktion erfordert eine ausdrückliche Bestätigung",
        ],
      },
      {
        icon: "CalendarClock",
        title: "Patienten, Termine & Nachsorge",
        description:
          "Ein vollständiges Klinikregister — Patientenakten, Terminplanung und Nachsorge-Warteschlangen — direkt mit jeder Aufnahme und ihrer Analyse verknüpft.",
        points: [
          "Patientenregister mit Duplikaterkennung",
          "Kalender und Terminplanung je Arzt",
          "Automatisch vorgeschlagene Nachsorge-Warteschlange mit Konversionsverfolgung",
        ],
      },
      {
        icon: "Waypoints",
        title: "KIS-Integration",
        description:
          "Krankenhäuser binden MedConverse AI direkt in ihr bestehendes Krankenhausinformationssystem ein — ohne kompletten Systemwechsel.",
        points: [
          "Versionierte REST-API mit API-Schlüsselverwaltung",
          "Webhook-Versand bei Sitzungsabschluss",
          "Einbettbares Widget mit signierten, kurzlebigen Tokens",
        ],
      },
      {
        icon: "UserCheck",
        title: "Verwaltung, Berichte & Analysen",
        description:
          "Organisations- und Benutzerverwaltung über eine fünfstufige Rollenhierarchie, mit Aktivitätsprotokollen, Sitzungsüberwachung und Berichten.",
        points: [
          "Organisationsverwaltung mit Modul-Flags je Organisation",
          "Aktivitäts- und Prüfprotokolle für Verwaltungsaktionen",
          "Dashboard-Statistiken, PDF-Export und Nutzungsverfolgung",
        ],
      },
    ],
  },
  workflow: {
    eyebrow: "So funktioniert's",
    title: "Von „Start“ bis freigegeben, in fünf Schritten",
    subtitle:
      "Dokumentation ist kein einzelner Moment — sie ist ein Workflow. MedConverse AI automatisiert jeden Schritt, ohne den Arzt aus dem Prozess herauszunehmen.",
    items: [
      {
        step: "01",
        title: "Starten",
        description:
          "Der Arzt tippt beim Termin auf Start. Das Aufnahmefenster öffnet sich mit einer Live-Pegelanzeige und einem Zeitzähler.",
      },
      {
        step: "02",
        title: "Aufnehmen",
        description:
          "Online wird das Audio live zur Transkription gestreamt. Offline wird es lokal erfasst und automatisch hochgeladen, sobald die Verbindung wiederhergestellt ist — nichts geht jemals verloren.",
      },
      {
        step: "03",
        title: "Transkribieren",
        description:
          "Echtzeit-Spracherkennung mit automatischer Sprechertrennung kennzeichnet das Gespräch live — „Dr. Smith“ gegenüber „Patient“ — mit Stimmprofil-Identifikation.",
      },
      {
        step: "04",
        title: "Analysieren",
        description:
          "Die KI erstellt eine Konsultationszusammenfassung, ICD-10- / kausale Codierungsvorschläge, eine Medikationsanalyse und Wechselwirkungshinweise — als KI-generiert gekennzeichnet, zur klinischen Prüfung.",
      },
      {
        step: "05",
        title: "Nachsorgen",
        description:
          "Die Analyse (oder der Arzt) empfiehlt eine Nachsorge. Das Personal wandelt sie in einen Termin um oder lehnt sie ab — in jedem Fall geht nichts verloren.",
      },
    ],
  },
  benefits: {
    eyebrow: "Warum MedConverse",
    title: "Dokumentationslast gelöst — nicht nur verschoben",
    subtitle:
      "MedConverse AI beseitigt die Dokumentation außerhalb der Sprechzeiten, ohne den Arzt aus der Entscheidung zu nehmen. Alle, die an einer Konsultation beteiligt sind, profitieren.",
    items: [
      {
        icon: "Clock3",
        title: "Ärztinnen und Ärzte gewinnen Zeit zurück",
        description:
          "Gewinnen Sie Dokumentationszeit zurück und beenden Sie die Aktenpflege nach Feierabend. Die volle Aufmerksamkeit bleibt beim Patienten — die Akte schreibt sich von selbst, und Codierungsvorschläge sowie Wechselwirkungshinweise reduzieren die kognitive Belastung, während Sie die Kontrolle über jede Entscheidung behalten.",
      },
      {
        icon: "Blocks",
        title: "Kliniken laufen mit einem einzigen System",
        description:
          "Empfang, Sprechzimmer und Nachsorge in einer einzigen Plattform — weniger Software, weniger Schulung und höherer Konsultationsdurchsatz je Arzt und Tag. Automatisierte Nachsorge rettet sonst verlorene Folgebesuche.",
      },
      {
        icon: "Waypoints",
        title: "Krankenhäuser führen es ein, ohne etwas auszureißen",
        description:
          "Binden Sie es in Ihr bestehendes KIS ein und gehen Sie in wenigen Tagen mit API-Schlüsseln und einem einbettbaren Widget live. Mandantenfähige Verwaltung über Abteilungen und Standorte hinweg, mit granularen Rollen, Modul-Flags und zentraler Aufsicht.",
      },
      {
        icon: "Users",
        title: "Empfangs- und Pflegeteams arbeiten schneller",
        description:
          "Pflegekräfte erhalten sofortigen Zugriff auf Konsultationszusammenfassungen und Nachsorge-Warteschlangen mit weniger Informationsverlust bei mündlichen Übergaben. Empfangspersonal registriert Patienten dank Duplikaterkennung schneller, und Pulse übernimmt Abfragen in einfacher Sprache.",
      },
    ],
  },
  languagesSection: {
    eyebrow: "Jeder Patient wird verstanden",
    title: "Versorgung in über 30 indischen Sprachen",
    subtitle:
      "Der Mehrsprachige-Kommunikations-Agent übersetzt Gespräche in Echtzeit und erstellt mehrsprachige Zusammenfassungen — für sprachübergreifende Arzt-Patienten-Kommunikation ohne Dolmetscher im Raum.",
    moreLabel: "+ 30 weitere Sprachen unterstützt",
    note: "Beispielhafte Liste — die vollständige Sprachabdeckung wird während des Onboardings bestätigt.",
  },
  security: {
    eyebrow: "Sicherheit & KI-Vertrauen",
    title: "Sicherheit zuerst, mit einer KI, die ihre Grenzen kennt",
    subtitle:
      "Jede Konsultation berührt geschützte Gesundheitsdaten, und jede KI-Ausgabe ist ein Vorschlag. Jede Entscheidung bleibt weiterhin beim Arzt.",
    items: [
      {
        icon: "ServerCog",
        title: "Mandantenfähige Datenisolation",
        description:
          "Die organisationsbezogene Datenisolation wird serverseitig bei jeder Anfrage durchgesetzt — nicht nur auf Anwendungsebene.",
      },
      {
        icon: "UserCheck",
        title: "Fünfstufige Rollenhierarchie",
        description:
          "Granulare, serverseitige Autorisierung vom globalen Administrator bis zum Tagespersonal, mit arztbezogener Sichtbarkeit, wo nötig.",
      },
      {
        icon: "Lock",
        title: "Signierte, kurzlebige Tokens",
        description:
          "JWT-Bearer-Authentifizierung plus signierte Widget-Tokens für eingebettete KIS-Sitzungen, mit serverseitiger Autorisierung bei jedem Endpunkt.",
      },
      {
        icon: "FileCheck2",
        title: "Aktivitäts- & Fehlerprotokollierung",
        description:
          "Verwaltungsaktionen werden protokolliert und sind überprüfbar; zentrale Fehlerverfolgung und Systemprüfungen laufen über die gesamte Plattform.",
      },
      {
        icon: "BadgeCheck",
        title: "KI mit menschlicher Kontrolle",
        description:
          "Jede klinische KI-Ausgabe — Zusammenfassungen, Codes, Medikationshinweise — ist beratend. Ärzte prüfen und geben frei, bevor etwas in die Akte gelangt.",
      },
      {
        icon: "ShieldCheck",
        title: "KI-Aktionen erfordern eine Bestätigung",
        description:
          "Die Mandantentrennung von Pulse wird in SQL durchgesetzt, nicht im Prompt, und jede schreibende KI-Aktion erfordert vor der Ausführung eine ausdrückliche Nutzerbestätigung.",
      },
    ],
    complianceNote:
      "Unsere Sicherheitsarchitektur ist von Grund auf mandantenfähig und rollenbasiert. Die Compliance-Zertifizierung (HIPAA, SOC 2) läuft — wir sind noch nicht zertifiziert.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen, beantwortet",
    subtitle: "Alles, was Klinik- und Krankenhausleitungen fragen, bevor KI ins Sprechzimmer kommt.",
    items: [
      {
        q: "Schreibt die KI die endgültige Patientenakte?",
        a: "Nein. Jede Zusammenfassung, jeder Code und jeder Hinweis ist ein Vorschlag. Der Arzt prüft, bearbeitet und gibt frei, bevor etwas in die Akte gelangt.",
      },
      {
        q: "Was passiert, wenn die Internetverbindung mitten in der Konsultation abbricht?",
        a: "Die Aufnahme läuft lokal auf dem Gerät weiter und wird automatisch hochgeladen, sobald die Verbindung zurückkehrt — mit Duplikatschutz, damit nichts verloren geht oder doppelt erfasst wird.",
      },
      {
        q: "Woher weiß das System, wer spricht?",
        a: "Ärzte hinterlegen einmalig ein kurzes Stimmprofil; das System erkennt sie danach automatisch bei jeder Konsultation und trennt die Sprache des Patienten.",
      },
      {
        q: "Kann es in unser bestehendes Krankenhaussystem eingebunden werden?",
        a: "Ja — über REST-API, Webhooks und ein einbettbares Widget, das mit sicheren, kurzlebigen Tokens innerhalb Ihres KIS läuft.",
      },
      {
        q: "Wer kann unsere Daten sehen?",
        a: "Nur Ihre Organisation. Die Datenisolation wird bei jeder Anfrage auf Datenbankebene durchgesetzt, mit einem fünfstufigen Rollensystem, das den Zugriff innerhalb Ihrer Organisation steuert.",
      },
      {
        q: "Welche Sprachen werden unterstützt?",
        a: "Der Mehrsprachige-Kommunikations-Agent unterstützt über 30 indische Sprachen für Echtzeitübersetzung und mehrsprachige Zusammenfassungen und ermöglicht sprachübergreifende Arzt-Patienten-Kommunikation.",
      },
      {
        q: "Erfüllt es Vorgaben im Gesundheitswesen?",
        a: "Unsere Sicherheitsarchitektur ist von Grund auf mandantenfähig und rollenbasiert; unser Compliance-Zertifizierungsprogramm läuft bereits.",
      },
      {
        q: "Kann der KI-Assistent Daten von sich aus ändern?",
        a: "Niemals ohne Sie. Pulse fordert vor jedem Erstellen, Aktualisieren oder Löschen eine ausdrückliche Bestätigung an.",
      },
    ],
  },
  cta: {
    badge: "Hören Sie auf zu tippen. Fangen Sie an zuzuhören.",
    title: "Sehen Sie Ihre eigene Konsultation, dokumentiert",
    subtitle:
      "Buchen Sie eine 20-minütige Demo — bringen Sie eine Beispielkonsultation mit und sehen Sie, wie daraus eine strukturierte Aktennotiz wird.",
    logIn: "Anmelden",
    trustLine: "KI-unterstützt, klinisch geprüft · Funktioniert offline · Lässt sich in Ihr KIS einbinden",
  },
  footer: {
    tagline:
      "Der KI-Arztassistent und die Konsultationsplattform für moderne Kliniken und Krankenhäuser — Dokumentation, Codierung und Nachsorge, automatisch.",
    columns: [
      {
        title: "Produkt",
        links: [
          { label: "KI-Agenten", href: "#agents" },
          { label: "Plattform", href: "#platform" },
          { label: "So funktioniert's", href: "#workflow" },
          { label: "Sicherheit & KI-Vertrauen", href: "#security" },
        ],
      },
      {
        title: "Unternehmen",
        links: [
          { label: "Kontakt", href: "#cta" },
          { label: "Anmelden", href: "https://scribe.medconverse.ai/" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Sicherheit", href: "/security" },
        ],
      },
    ],
    copyright: "© {year} MedConverse AI. Alle Rechte vorbehalten.",
    privacyPolicy: "Datenschutzerklärung",
    termsOfService: "Nutzungsbedingungen",
    security: "Sicherheit",
  },
  bookDemoDialog: {
    title: "Keine E-Mail-App konfiguriert",
    body: "Wir konnten Ihre E-Mail-Anwendung nicht öffnen. Bitte kontaktieren Sie uns manuell unter der unten stehenden Adresse — kopieren Sie die E-Mail-Adresse oder die vollständige Anfragevorlage, um loszulegen.",
    ccLabel: "CC",
    copyEmail: "E-Mail-Adresse kopieren",
    emailCopied: "E-Mail-Adresse kopiert",
    copyTemplate: "E-Mail-Vorlage kopieren",
    templateCopied: "E-Mail-Vorlage kopiert",
    closeAria: "Dialog schließen",
  },
  legal: {
    privacyTitle: "Datenschutzerklärung",
    termsTitle: "Nutzungsbedingungen",
    securityTitle: "Sicherheit",
    lastUpdated: "Zuletzt aktualisiert",
    englishOnlyNotice:
      "Dieses Dokument ist derzeit nur auf Englisch verfügbar. Eine Übersetzung auf {language} folgt in Kürze — bis dahin ist die englische Fassung maßgeblich.",
  },
};

export default de;
