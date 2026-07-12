import type { Dictionary } from "../dictionary";

const it: Dictionary = {
  common: {
    skipToContent: "Vai al contenuto",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    menu: "Menu",
    switchToLight: "Passa alla modalità chiara",
    switchToDark: "Passa alla modalità scura",
    logIn: "Accedi",
    bookDemo: "Prenota una demo",
  },
  languageSwitcher: {
    label: "Seleziona lingua",
    current: "Lingua attuale",
  },
  nav: {
    links: [
      { label: "Agenti", href: "#agents" },
      { label: "Piattaforma", href: "#platform" },
      { label: "Come funziona", href: "#workflow" },
      { label: "Sicurezza e fiducia nell'IA", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Agenti IA pensati per la sanità",
    headlineLine1: "Assistente clinico IA per",
    headlineRotatingPhrases: [
      "Ogni consulto",
      "Ogni paziente",
      "Ogni appuntamento",
      "Ogni diagnosi",
    ],
    subtitlePrefix:
      "MedConverse AI ascolta ogni consulto, crea automaticamente la documentazione clinica, genera riepiloghi basati su IA, supporta i flussi di prescrizione, suggerisce codici medici, individua potenziali interazioni farmacologiche e semplifica il follow-up — così ",
    subtitleSuffix: " possono concentrarsi sui pazienti, non sulla burocrazia.",
    rotatingWords: ["i medici", "le cliniche", "gli ospedali", "i gruppi ospedalieri"],
    trustStrip: ["Assistito da IA, approvato dai clinici", "Funziona offline", "Si integra nel tuo HMS"],
    seeHowItWorks: "Scopri come funziona",
    mock: {
      recording: "Registrazione",
      liveTranscriptLabel: "Trascrizione dal vivo · Identificazione del parlante",
      liveBadge: "Live",
      quote: "«Dr. Rao: da quanto tempo ha questi sintomi?»",
      aiScribeLabel: "Assistente alla scrittura clinica IA",
      generatingSummary: "Generazione riepilogo · suggerimenti ICD-10 · verifica interazioni",
      summaryReady: "Riepilogo pronto per la revisione",
      soapNote: "Nota SOAP redatta · in attesa di approvazione clinica",
      review: "Da rivedere",
      speakerIdLabel: "Parlante",
      speakerName: "Dr. Rao",
      segmentsLabel: "Segmenti",
      segmentsValue: "18",
      statusLabel: "Stato",
      statusValue: "Sicuro offline",
      offlineBadge: "Funziona offline",
      clinicianApprovedBadge: "Approvato dai clinici",
    },
  },
  capabilityRowA: [
    "Assistente alla scrittura clinica IA",
    "Trascrizione dal vivo e identificazione del parlante",
    "Registrazione offline-first",
    "Suggerimenti di codifica ICD-10",
    "Verifica delle interazioni farmacologiche",
    "Assistente IA Pulse",
    "Automazione del follow-up",
  ],
  capabilityRowB: [
    "Integrazione HMS via API",
    "Gestione pazienti e appuntamenti",
    "Amministrazione multi-tenant e RBAC",
    "Report ed esportazione PDF",
    "Profili vocali del parlante",
    "App web e Android",
    "Assistenza alla prescrizione",
  ],
  productOverview: {
    eyebrow: "Panoramica del prodotto",
    title: "Un'unica piattaforma per l'intero consulto.",
    subtitle: "Dall'appuntamento alla documentazione fino al follow-up — tutto collegato end-to-end.",
    steps: [
      {
        icon: "Mic",
        title: "Registra",
        description: "Cattura il consulto dal vivo o offline — nulla va mai perso.",
      },
      {
        icon: "Sparkles",
        title: "Comprendi",
        description: "L'IA trascrive, identifica i parlanti e analizza la conversazione.",
      },
      {
        icon: "ClipboardCheck",
        title: "Agisci",
        description: "Il clinico rivede riepilogo, codici e follow-up, quindi approva.",
      },
    ],
  },
  demo: {
    eyebrow: "Guardalo in azione",
    title: "Guarda un consulto trasformarsi in un referto clinico",
    subtitle:
      "Questa è una dimostrazione illustrativa dell'Assistente alla scrittura clinica IA — dalla trascrizione dal vivo con identificazione del parlante fino a un riepilogo strutturato pronto per la revisione clinica.",
    cardTitle: "Assistente alla scrittura clinica IA",
    transcribingLive: "Trascrizione dal vivo",
    replayAria: "Riproduci di nuovo la demo",
    transcribingAria: "Trascrizione in corso",
    patientSrLabel: "Paziente: ",
    doctorSrLabel: "Dr. Rao: ",
    highlights: [
      {
        label: "Identificazione del parlante in tempo reale",
        detail: "«Dr. Rao» contro «Paziente», etichettati automaticamente",
      },
      {
        label: "Riepilogo clinico strutturato",
        detail: "Documentazione in stile SOAP redatta per la revisione",
      },
      {
        label: "Codifica e controlli di sicurezza",
        detail: "Include suggerimenti ICD-10 e avvisi di interazione farmacologica",
      },
    ],
    script: [
      { from: "patient", text: "Ho febbre lieve e tosse secca da tre giorni." },
      { from: "doctor", text: "Ha difficoltà respiratorie o dolore quando inspira?" },
      { from: "patient", text: "Nessun dolore, solo un po' di oppressione al petto e mi sono sentito stanco." },
      {
        from: "doctor",
        text: "Controlliamo i livelli di ossigeno e facciamo una radiografia al torace per sicurezza. Le prescriverò anche qualcosa per la febbre.",
      },
      { from: "system", text: "Parlanti identificati: Dr. Rao · Paziente — 4 segmenti trascritti" },
      {
        from: "system",
        text: "Assistente alla scrittura clinica IA: riepilogo generato · suggerimenti ICD-10 pronti · nessuna interazione farmacologica rilevata",
      },
    ],
  },
  agents: {
    eyebrow: "Conosci il team",
    title: "Sei agenti specializzati, un unico flusso di lavoro connesso",
    subtitle:
      "Ogni agente padroneggia una parte del consulto — dalla prima conversazione alla chiamata di follow-up — così documentazione, codifica e coordinamento delle cure avvengono senza clic aggiuntivi.",
    items: [
      {
        icon: "Mic",
        name: "Agente Assistente alla Scrittura Clinica IA",
        tagline: "Rivedi la nota. Non scriverla.",
        description:
          "Registra i consulti, esegue la trascrizione in tempo reale, identifica i parlanti e genera automaticamente note cliniche strutturate — inclusa la documentazione SOAP.",
      },
      {
        icon: "Bot",
        name: "Agente Medico Virtuale IA",
        tagline: "Conversazioni guidate prima della visita",
        description:
          "Conduce conversazioni intelligenti con il paziente, raccoglie sintomi e anamnesi, effettua una valutazione clinica preliminare e guida i pazienti prima dei consulti — con supporto multilingue.",
      },
      {
        icon: "Pill",
        name: "Agente di Prescrizione IA",
        tagline: "Un secondo controllo su ogni farmaco",
        description:
          "Redige prescrizioni, consiglia farmaci, verifica le interazioni farmacologiche, rileva conflitti allergici e suggerisce aggiustamenti del dosaggio per la revisione clinica.",
      },
      {
        icon: "ScanLine",
        name: "Agente di Imaging Medico",
        tagline: "Una prima lettura, prima di quella del clinico",
        description:
          "Analizza radiografie, esamina TC e risonanze magnetiche, assiste nell'interpretazione diagnostica e genera risultati preliminari per la revisione clinica.",
      },
      {
        icon: "Languages",
        name: "Agente di Comunicazione Multilingue",
        tagline: "Assistenza in oltre 30 lingue indiane",
        description:
          "Traduce le conversazioni in tempo reale, supporta oltre 30 lingue indiane, genera riepiloghi multilingue e consente la comunicazione medico-paziente tra lingue diverse.",
      },
      {
        icon: "CalendarCheck",
        name: "Agente di Cura del Follow-up",
        tagline: "I pazienti che devono tornare, tornano",
        description:
          "Pianifica i follow-up, invia promemoria per i farmaci, monitora l'aderenza al trattamento e avvisa i pazienti sui prossimi consulti.",
      },
    ],
  },
  platform: {
    eyebrow: "Moduli del prodotto",
    title: "Tutto ciò di cui una clinica ha bisogno, in un unico sistema",
    subtitle:
      "Oltre alla scrittura clinica, MedConverse AI gestisce pazienti, appuntamenti, follow-up e report in un unico spazio di lavoro multi-tenant basato sui ruoli — e si integra direttamente nel tuo HMS esistente.",
    tablistAria: "Funzionalità della piattaforma",
    items: [
      {
        icon: "Mic",
        title: "Flusso del consulto e scrittura clinica IA",
        description:
          "Il ciclo centrale del prodotto: avvia, registra, trascrivi, analizza, rivedi e fai follow-up — con avvio con un tocco dall'agenda del giorno e persistenza automatica della sessione.",
        points: [
          "Acquisizione dal vivo o offline, senza perdita di dati",
          "Trascrizioni modificabili con parlanti identificati",
          "Riepilogo generato dall'IA — rivisto e approvato dal clinico",
        ],
      },
      {
        icon: "FileCheck2",
        title: "Suite di analisi clinica",
        description:
          "Dopo ogni consulto, l'IA esegue un'analisi clinica confrontandola con una base di conoscenza medica — codifica, farmaci e segnali di sicurezza arrivano insieme al riepilogo.",
        points: [
          "Suggerimenti di codifica ICD-10 / causale",
          "Estrazione e arricchimento dei dati sui farmaci",
          "Verifica delle interazioni tra farmaci",
        ],
      },
      {
        icon: "MessageSquareHeart",
        title: "Pulse — Assistente IA agentico",
        description:
          "Un copilota IA conversazionale che legge e agisce sui dati della clinica tramite chiamate a strumenti sicure e con permessi delimitati — riducendo flussi amministrativi con più clic a una singola frase.",
        points: [
          "Accesso in lettura e scrittura ai dati della clinica in linguaggio naturale",
          "Isolamento per organizzazione applicato in SQL, non nel prompt",
          "Ogni azione di scrittura richiede conferma esplicita",
        ],
      },
      {
        icon: "CalendarClock",
        title: "Pazienti, appuntamenti e follow-up",
        description:
          "Un registro clinico completo — cartelle pazienti, pianificazione e code di follow-up — collegato direttamente a ogni registrazione e alla sua analisi.",
        points: [
          "Registro pazienti con rilevamento dei duplicati",
          "Calendario e pianificazione appuntamenti per medico",
          "Coda di follow-up suggerita automaticamente con tracciamento delle conversioni",
        ],
      },
      {
        icon: "Waypoints",
        title: "Integrazione HMS",
        description:
          "Gli ospedali integrano MedConverse AI direttamente nel loro Sistema di Gestione Ospedaliera esistente — senza doverlo sostituire completamente.",
        points: [
          "API REST versionata con gestione delle chiavi API",
          "Invio di webhook al completamento della sessione",
          "Widget incorporabile con token firmati e a breve durata",
        ],
      },
      {
        icon: "UserCheck",
        title: "Amministrazione, report e analisi",
        description:
          "Amministrazione di organizzazioni e utenti su una gerarchia di ruoli a cinque livelli, con log delle attività, supervisione delle sessioni e reportistica.",
        points: [
          "Gestione organizzazioni con flag di modulo per organizzazione",
          "Log di attività e audit per le azioni amministrative",
          "Statistiche della dashboard, esportazione PDF e monitoraggio dell'utilizzo",
        ],
      },
    ],
  },
  workflow: {
    eyebrow: "Come funziona",
    title: "Da «Avvia» ad approvato, in cinque passaggi",
    subtitle:
      "La documentazione non è un singolo momento — è un flusso di lavoro. MedConverse AI automatizza ogni passaggio senza escludere il clinico dal processo.",
    items: [
      {
        step: "01",
        title: "Avvia",
        description:
          "Il medico tocca Avvia sull'appuntamento. Il pannello di registrazione si apre con un misuratore di livello dal vivo e un timer.",
      },
      {
        step: "02",
        title: "Registra",
        description:
          "Online, l'audio viene trasmesso dal vivo per la trascrizione. Offline, viene acquisito localmente e caricato automaticamente non appena torna la connettività — nulla va mai perso.",
      },
      {
        step: "03",
        title: "Trascrivi",
        description:
          "Il riconoscimento vocale in tempo reale con diarizzazione automatica dei parlanti etichetta la conversazione mentre avviene — «Dr. Smith» contro «Paziente» — con identificazione tramite profilo vocale.",
      },
      {
        step: "04",
        title: "Analizza",
        description:
          "L'IA genera un riepilogo del consulto, suggerimenti di codifica ICD-10 / causale, analisi dei farmaci e avvisi di interazione farmacologica — etichettati come generati dall'IA, per la revisione clinica.",
      },
      {
        step: "05",
        title: "Follow-up",
        description:
          "L'analisi (o il medico) consiglia un follow-up. Il personale lo converte in un appuntamento o lo rifiuta — in entrambi i casi, nulla sfugge.",
      },
    ],
  },
  benefits: {
    eyebrow: "Perché MedConverse",
    title: "L'onere della documentazione, risolto — non spostato",
    subtitle:
      "MedConverse AI elimina la compilazione delle cartelle fuori orario senza escludere il clinico dalla decisione. Chiunque sia coinvolto in un consulto ne trae vantaggio.",
    items: [
      {
        icon: "Clock3",
        title: "I medici recuperano il loro tempo",
        description:
          "Recupera tempo per la documentazione e metti fine alla compilazione delle cartelle fuori orario. L'attenzione resta interamente sul paziente — la cartella si scrive da sola, e i suggerimenti di codifica e gli avvisi di interazione riducono il carico cognitivo mentre tu mantieni il controllo su ogni decisione.",
      },
      {
        icon: "Blocks",
        title: "Le cliniche funzionano con un unico sistema",
        description:
          "Reception, ambulatorio e follow-up in un'unica piattaforma — meno software, meno formazione e maggiore throughput di consulti per medico al giorno. L'automazione del follow-up recupera visite ripetute altrimenti perse.",
      },
      {
        icon: "Waypoints",
        title: "Gli ospedali adottano senza smontare nulla",
        description:
          "Integralo nel tuo HMS esistente e vai in produzione in pochi giorni con chiavi API e un widget pronto all'uso. Amministrazione multi-tenant tra reparti e sedi, con ruoli granulari, flag di modulo e supervisione centrale.",
      },
      {
        icon: "Users",
        title: "Reception e team di cura lavorano più velocemente",
        description:
          "Il personale infermieristico ha accesso immediato ai riepiloghi dei consulti e alle code di follow-up con meno perdita di informazioni nei passaggi di consegne verbali. La reception registra i pazienti più rapidamente grazie al rilevamento dei duplicati, e Pulse gestisce le ricerche in linguaggio semplice.",
      },
    ],
  },
  languagesSection: {
    eyebrow: "Ogni paziente, compreso",
    title: "Assistenza in oltre 30 lingue indiane",
    subtitle:
      "L'Agente di Comunicazione Multilingue traduce le conversazioni in tempo reale e genera riepiloghi multilingue — consentendo la comunicazione medico-paziente tra lingue diverse senza un interprete in sala.",
    moreLabel: "+ 30 lingue supportate",
    note: "Elenco rappresentativo — la copertura linguistica completa viene confermata durante l'onboarding.",
  },
  security: {
    eyebrow: "Sicurezza e fiducia nell'IA",
    title: "La sicurezza prima di tutto, con un'IA che conosce i suoi limiti",
    subtitle:
      "Ogni consulto coinvolge informazioni sanitarie protette, e ogni output dell'IA è un suggerimento. Ogni decisione resta comunque del clinico.",
    items: [
      {
        icon: "ServerCog",
        title: "Isolamento dei dati multi-tenant",
        description:
          "L'isolamento dei dati per organizzazione viene applicato lato server a ogni richiesta — non solo a livello applicativo.",
      },
      {
        icon: "UserCheck",
        title: "Gerarchia di ruoli a cinque livelli",
        description:
          "Autorizzazione granulare lato server, dall'amministratore globale al personale quotidiano, con visibilità limitata per medico dove necessario.",
      },
      {
        icon: "Lock",
        title: "Token firmati a breve durata",
        description:
          "Autenticazione con token JWT più token widget firmati per le sessioni HMS incorporate, con autorizzazione lato server su ogni endpoint.",
      },
      {
        icon: "FileCheck2",
        title: "Registro di attività ed errori",
        description:
          "Le azioni amministrative vengono registrate e sono revisionabili; il tracciamento centralizzato degli errori e i controlli di integrità vengono eseguiti su tutta la piattaforma.",
      },
      {
        icon: "BadgeCheck",
        title: "IA con supervisione umana",
        description:
          "Ogni output clinico dell'IA — riepiloghi, codici, avvisi sui farmaci — è consultivo. I clinici rivedono e approvano prima che qualcosa entri nella cartella.",
      },
      {
        icon: "ShieldCheck",
        title: "Le azioni dell'IA richiedono conferma",
        description:
          "L'isolamento per organizzazione di Pulse viene applicato in SQL, non nel prompt, e ogni azione di scrittura dell'IA richiede una conferma esplicita dell'utente prima di essere eseguita.",
      },
    ],
    complianceNote:
      "La nostra architettura di sicurezza è multi-tenant e basata sui ruoli per progettazione. La certificazione di conformità (HIPAA, SOC 2) è in corso — non siamo ancora certificati.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Domande, risposte",
    subtitle: "Tutto ciò che i responsabili di cliniche e ospedali chiedono prima di introdurre l'IA in ambulatorio.",
    items: [
      {
        q: "L'IA scrive la cartella clinica definitiva?",
        a: "No. Ogni riepilogo, codice e avviso è un suggerimento. Il clinico rivede, modifica e approva prima che qualcosa entri nella cartella.",
      },
      {
        q: "Cosa succede se internet cade a metà consulto?",
        a: "La registrazione continua localmente sul dispositivo e viene caricata automaticamente al ritorno della connettività — con protezione dai duplicati, così nulla va perso o duplicato.",
      },
      {
        q: "Come fa a sapere chi sta parlando?",
        a: "I clinici registrano una volta un breve profilo vocale; il sistema li identifica poi automaticamente a ogni consulto e separa il parlato del paziente.",
      },
      {
        q: "Può funzionare all'interno del nostro sistema ospedaliero esistente?",
        a: "Sì — tramite API REST, webhook e un widget incorporabile che funziona all'interno del tuo HMS con token sicuri e a breve durata.",
      },
      {
        q: "Chi può vedere i nostri dati?",
        a: "Solo la tua organizzazione. L'isolamento dei dati è applicato a livello di database a ogni richiesta, con un sistema di ruoli a cinque livelli che controlla l'accesso all'interno della tua organizzazione.",
      },
      {
        q: "Quali lingue sono supportate?",
        a: "L'Agente di Comunicazione Multilingue supporta oltre 30 lingue indiane per la traduzione in tempo reale e i riepiloghi multilingue, consentendo la comunicazione medico-paziente tra lingue diverse.",
      },
      {
        q: "È conforme alle normative sanitarie?",
        a: "La nostra architettura di sicurezza è multi-tenant e basata sui ruoli per progettazione; il nostro programma di certificazione di conformità è in corso.",
      },
      {
        q: "L'assistente IA può modificare i dati da solo?",
        a: "Mai senza di te. Pulse chiede una conferma esplicita prima di qualsiasi creazione, aggiornamento o eliminazione.",
      },
    ],
  },
  cta: {
    badge: "Smetti di digitare. Inizia ad ascoltare.",
    title: "Guarda il tuo consulto, documentato",
    subtitle:
      "Prenota una demo di 20 minuti — porta un consulto di esempio e guardalo trasformarsi in una nota clinica strutturata.",
    logIn: "Accedi",
    trustLine: "Assistito da IA, approvato dai clinici · Funziona offline · Si integra nel tuo HMS",
  },
  footer: {
    tagline:
      "L'assistente alla scrittura clinica IA e la piattaforma di consulto per cliniche e ospedali moderni — documentazione, codifica e follow-up, automaticamente.",
    columns: [
      {
        title: "Prodotto",
        links: [
          { label: "Agenti IA", href: "#agents" },
          { label: "Piattaforma", href: "#platform" },
          { label: "Come funziona", href: "#workflow" },
          { label: "Sicurezza e fiducia nell'IA", href: "#security" },
        ],
      },
      {
        title: "Azienda",
        links: [
          { label: "Contatti", href: "#cta" },
          { label: "Accedi", href: "https://scribe.medconverse.ai/" },
        ],
      },
      {
        title: "Assistenza",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Sicurezza", href: "/security" },
        ],
      },
    ],
    copyright: "© {year} MedConverse AI. Tutti i diritti riservati.",
    privacyPolicy: "Informativa sulla privacy",
    termsOfService: "Termini di servizio",
    security: "Sicurezza",
  },
  bookDemoDialog: {
    title: "Nessuna app di posta configurata",
    body: "Non siamo riusciti ad aprire la tua app di posta. Contattaci manualmente all'indirizzo qui sotto — copia l'indirizzo email o il modello completo della richiesta per iniziare.",
    ccLabel: "CC",
    copyEmail: "Copia indirizzo email",
    emailCopied: "Indirizzo email copiato",
    copyTemplate: "Copia modello email",
    templateCopied: "Modello email copiato",
    closeAria: "Chiudi la finestra di dialogo",
  },
  legal: {
    privacyTitle: "Informativa sulla privacy",
    termsTitle: "Termini di servizio",
    securityTitle: "Sicurezza",
    lastUpdated: "Ultimo aggiornamento",
    englishOnlyNotice:
      "Questo documento è attualmente disponibile solo in inglese. Una traduzione in {language} sarà disponibile a breve — nel frattempo, la versione inglese è il testo di riferimento.",
  },
};

export default it;
