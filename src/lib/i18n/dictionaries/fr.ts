import type { Dictionary } from "../dictionary";

const fr: Dictionary = {
  common: {
    skipToContent: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menu: "Menu",
    switchToLight: "Passer en mode clair",
    switchToDark: "Passer en mode sombre",
    logIn: "Se connecter",
    bookDemo: "Réserver une démo",
  },
  languageSwitcher: {
    label: "Choisir la langue",
    current: "Langue actuelle",
  },
  nav: {
    links: [
      { label: "Agents", href: "#agents" },
      { label: "Plateforme", href: "#platform" },
      { label: "Comment ça marche", href: "#workflow" },
      { label: "Sécurité et confiance IA", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Des agents IA conçus pour la santé",
    headlineLine1: "Assistant clinique IA pour",
    headlineRotatingPhrases: [
      "Chaque consultation",
      "Chaque patient",
      "Chaque rendez-vous",
      "Chaque diagnostic",
    ],
    subtitlePrefix:
      "MedConverse AI écoute chaque consultation, crée automatiquement la documentation clinique, génère des synthèses assistées par IA, prend en charge les workflows de prescription, suggère des codes médicaux, identifie les interactions médicamenteuses potentielles et simplifie le suivi — pour que ",
    subtitleSuffix: " puissent se concentrer sur les patients, pas sur la paperasse.",
    rotatingWords: ["les médecins", "les cliniques", "les hôpitaux", "les groupes hospitaliers"],
    trustStrip: ["Assisté par IA, validé par les cliniciens", "Fonctionne hors ligne", "S'intègre à votre SIH"],
    seeHowItWorks: "Voir comment ça marche",
    mock: {
      recording: "Enregistrement",
      liveTranscriptLabel: "Transcription en direct · Identification du locuteur",
      liveBadge: "En direct",
      quote: "« Dr Rao : depuis combien de temps avez-vous ces symptômes ? »",
      aiScribeLabel: "Secrétaire médical IA",
      generatingSummary: "Génération du résumé · suggestions CIM-10 · vérification des interactions",
      summaryReady: "Résumé prêt pour relecture",
      soapNote: "Note SOAP rédigée · en attente de validation clinique",
      review: "À relire",
      speakerIdLabel: "Locuteur",
      speakerName: "Dr Rao",
      segmentsLabel: "Segments",
      segmentsValue: "18",
      statusLabel: "Statut",
      statusValue: "Sécurisé hors ligne",
      offlineBadge: "Fonctionne hors ligne",
      clinicianApprovedBadge: "Validé par les cliniciens",
    },
  },
  capabilityRowA: [
    "Secrétaire médical IA",
    "Transcription en direct et identification du locuteur",
    "Enregistrement hors ligne en priorité",
    "Suggestions de codage CIM-10",
    "Vérification des interactions médicamenteuses",
    "Assistant IA Pulse",
    "Automatisation du suivi",
  ],
  capabilityRowB: [
    "Intégration SIH via API",
    "Gestion des patients et rendez-vous",
    "Administration multi-organisation et RBAC",
    "Rapports et export PDF",
    "Profils vocaux des locuteurs",
    "Applications web et Android",
    "Aide à la prescription",
  ],
  productOverview: {
    eyebrow: "Vue d'ensemble du produit",
    title: "Une seule plateforme pour toute la consultation.",
    subtitle: "Du rendez-vous à la documentation en passant par le suivi — tout est connecté de bout en bout.",
    steps: [
      {
        icon: "Mic",
        title: "Enregistrer",
        description: "Capturez la consultation en direct ou hors ligne — rien n'est jamais perdu.",
      },
      {
        icon: "Sparkles",
        title: "Comprendre",
        description: "L'IA transcrit, identifie les locuteurs et analyse la conversation.",
      },
      {
        icon: "ClipboardCheck",
        title: "Agir",
        description: "Le clinicien relit le résumé, les codes et le suivi, puis valide.",
      },
    ],
  },
  demo: {
    eyebrow: "Voyez-le en action",
    title: "Regardez une consultation devenir un dossier clinique",
    subtitle:
      "Ceci est une démonstration illustrative du Secrétaire médical IA — de la transcription en direct avec identification du locuteur jusqu'à un résumé structuré prêt pour la relecture clinique.",
    cardTitle: "Secrétaire médical IA",
    transcribingLive: "Transcription en direct",
    replayAria: "Rejouer la démo",
    transcribingAria: "Transcription en cours",
    patientSrLabel: "Patient : ",
    doctorSrLabel: "Dr Rao : ",
    highlights: [
      {
        label: "Identification du locuteur en temps réel",
        detail: "« Dr Rao » contre « Patient », étiquetés automatiquement",
      },
      {
        label: "Résumé clinique structuré",
        detail: "Documentation de type SOAP rédigée pour relecture",
      },
      {
        label: "Codage et vérifications de sécurité",
        detail: "Suggestions CIM-10 et alertes d'interaction médicamenteuse incluses",
      },
    ],
    script: [
      { from: "patient", text: "J'ai une légère fièvre et une toux sèche depuis trois jours." },
      { from: "doctor", text: "Un essoufflement, ou une douleur en inspirant ?" },
      { from: "patient", text: "Pas de douleur, juste une oppression dans la poitrine, et je me sens fatigué." },
      {
        from: "doctor",
        text: "Vérifions votre saturation en oxygène et faisons une radio pulmonaire par précaution. Je vais aussi vous prescrire quelque chose pour la fièvre.",
      },
      { from: "system", text: "Locuteurs identifiés : Dr Rao · Patient — 4 segments transcrits" },
      {
        from: "system",
        text: "Secrétaire médical IA : résumé généré · suggestions CIM-10 prêtes · aucune interaction médicamenteuse détectée",
      },
    ],
  },
  agents: {
    eyebrow: "Découvrez l'équipe",
    title: "Six agents spécialisés, un seul flux de travail connecté",
    subtitle:
      "Chaque agent maîtrise une partie de la consultation — de la première conversation à l'appel de suivi — pour que la documentation, le codage et la coordination des soins se fassent sans clic supplémentaire.",
    items: [
      {
        icon: "Mic",
        name: "Agent Secrétaire Médical IA",
        tagline: "Relisez la note. Ne l'écrivez pas.",
        description:
          "Enregistre les consultations, effectue une transcription en temps réel, identifie les locuteurs et génère automatiquement des notes cliniques structurées — y compris la documentation SOAP.",
      },
      {
        icon: "Bot",
        name: "Agent Médecin Virtuel IA",
        tagline: "Des échanges guidés avant la visite",
        description:
          "Mène des conversations intelligentes avec le patient, recueille symptômes et antécédents médicaux, réalise une évaluation clinique préliminaire et guide les patients avant les consultations — avec prise en charge multilingue.",
      },
      {
        icon: "Pill",
        name: "Agent de Prescription IA",
        tagline: "Un second regard sur chaque médicament",
        description:
          "Rédige des ordonnances, recommande des médicaments, vérifie les interactions médicamenteuses, détecte les conflits d'allergies et suggère des ajustements de dosage pour relecture clinique.",
      },
      {
        icon: "ScanLine",
        name: "Agent d'Imagerie Médicale",
        tagline: "Une première lecture, avant celle du clinicien",
        description:
          "Analyse les radiographies, examine les scanners et IRM, aide à l'interprétation diagnostique et génère des résultats préliminaires pour relecture clinique.",
      },
      {
        icon: "Languages",
        name: "Agent de Communication Multilingue",
        tagline: "Des soins dans plus de 30 langues indiennes",
        description:
          "Traduit les conversations en temps réel, prend en charge plus de 30 langues indiennes, génère des résumés multilingues et permet la communication médecin-patient entre langues.",
      },
      {
        icon: "CalendarCheck",
        name: "Agent de Suivi des Soins",
        tagline: "Les patients qui doivent revenir, reviennent",
        description:
          "Planifie les suivis, envoie des rappels de médication, suit l'adhésion au traitement et notifie les patients des consultations à venir.",
      },
    ],
  },
  platform: {
    eyebrow: "Modules du produit",
    title: "Tout ce dont une clinique a besoin, dans un seul système",
    subtitle:
      "Au-delà du secrétariat, MedConverse AI gère les patients, les rendez-vous, les suivis et les rapports dans un espace de travail multi-organisation et basé sur les rôles — et s'intègre directement à votre SIH existant.",
    tablistAria: "Fonctionnalités de la plateforme",
    items: [
      {
        icon: "Mic",
        title: "Workflow de consultation et secrétariat IA",
        description:
          "Le cœur du produit : démarrer, enregistrer, transcrire, analyser, relire et suivre — avec un démarrage en un clic depuis le planning du jour et une persistance automatique de session.",
        points: [
          "Capture en direct ou hors ligne, sans perte de données",
          "Transcriptions modifiables avec locuteurs identifiés",
          "Résumé généré par IA — relu et validé par le clinicien",
        ],
      },
      {
        icon: "FileCheck2",
        title: "Suite d'analyse clinique",
        description:
          "Après chaque consultation, l'IA effectue une analyse clinique à partir d'une base de connaissances médicales — codage, médication et signaux de sécurité arrivent avec le résumé.",
        points: [
          "Suggestions de codage CIM-10 / causal",
          "Extraction et enrichissement des médications",
          "Vérification des interactions médicamenteuses",
        ],
      },
      {
        icon: "MessageSquareHeart",
        title: "Pulse — Assistant IA agentique",
        description:
          "Un copilote IA conversationnel qui lit et agit sur les données de la clinique via des appels d'outils sécurisés et limités par permissions — condensant des workflows administratifs à plusieurs clics en une seule phrase.",
        points: [
          "Accès en lecture et écriture aux données de la clinique en langage naturel",
          "Isolation par organisation appliquée en SQL, pas dans le prompt",
          "Toute action d'écriture nécessite une confirmation explicite",
        ],
      },
      {
        icon: "CalendarClock",
        title: "Patients, rendez-vous et suivis",
        description:
          "Un registre clinique complet — dossiers patients, planification et files de suivi — relié directement à chaque enregistrement et son analyse.",
        points: [
          "Registre des patients avec détection des doublons",
          "Calendrier et planification des rendez-vous par médecin",
          "File de suivi suggérée automatiquement avec suivi des conversions",
        ],
      },
      {
        icon: "Waypoints",
        title: "Intégration SIH",
        description:
          "Les hôpitaux intègrent MedConverse AI directement dans leur Système d'Information Hospitalier existant — sans tout remplacer.",
        points: [
          "API REST versionnée avec gestion des clés API",
          "Envoi de webhooks à la fin de la session",
          "Widget intégrable avec jetons signés à courte durée de vie",
        ],
      },
      {
        icon: "UserCheck",
        title: "Administration, rapports et analyses",
        description:
          "Administration des organisations et des utilisateurs selon une hiérarchie de rôles à cinq niveaux, avec journaux d'activité, supervision des sessions et rapports.",
        points: [
          "Gestion des organisations avec indicateurs de modules par organisation",
          "Journaux d'activité et d'audit pour les actions administratives",
          "Statistiques de tableau de bord, export PDF et suivi d'utilisation",
        ],
      },
    ],
  },
  workflow: {
    eyebrow: "Comment ça marche",
    title: "De « Démarrer » à validé, en cinq étapes",
    subtitle:
      "La documentation n'est pas un instant unique — c'est un workflow. MedConverse AI automatise chaque étape sans écarter le clinicien de la boucle.",
    items: [
      {
        step: "01",
        title: "Démarrer",
        description:
          "Le médecin appuie sur Démarrer pour le rendez-vous. Le panneau d'enregistrement s'ouvre avec un indicateur de niveau en direct et un chronomètre.",
      },
      {
        step: "02",
        title: "Enregistrer",
        description:
          "En ligne, l'audio est diffusé en direct pour la transcription. Hors ligne, il est capturé localement et téléversé automatiquement dès que la connexion revient — rien n'est jamais perdu.",
      },
      {
        step: "03",
        title: "Transcrire",
        description:
          "La reconnaissance vocale en temps réel avec diarisation automatique des locuteurs étiquette la conversation en direct — « Dr Smith » contre « Patient » — avec identification par profil vocal.",
      },
      {
        step: "04",
        title: "Analyser",
        description:
          "L'IA génère un résumé de consultation, des suggestions de codage CIM-10 / causal, une analyse de la médication et des alertes d'interaction médicamenteuse — étiquetés générés par IA, pour relecture clinique.",
      },
      {
        step: "05",
        title: "Suivre",
        description:
          "L'analyse (ou le médecin) recommande un suivi. Le personnel le convertit en rendez-vous ou le décline — dans tous les cas, rien ne passe entre les mailles du filet.",
      },
    ],
  },
  benefits: {
    eyebrow: "Pourquoi MedConverse",
    title: "La charge de documentation, résolue — pas déplacée",
    subtitle:
      "MedConverse AI supprime la saisie hors horaires sans écarter le clinicien de la décision. Tous ceux qui interviennent dans une consultation en profitent.",
    items: [
      {
        icon: "Clock3",
        title: "Les médecins récupèrent leur temps",
        description:
          "Récupérez du temps de documentation et mettez fin à la saisie hors horaires. L'attention reste sur le patient — le dossier s'écrit tout seul, et les suggestions de codage et les alertes d'interaction réduisent la charge mentale tandis que vous gardez le contrôle de chaque décision.",
      },
      {
        icon: "Blocks",
        title: "Les cliniques fonctionnent avec un seul système",
        description:
          "Accueil, salle de consultation et suivi sur une seule plateforme — moins de logiciels, moins de formation, et un débit de consultations plus élevé par médecin et par jour. L'automatisation du suivi récupère des visites répétées autrement perdues.",
      },
      {
        icon: "Waypoints",
        title: "Les hôpitaux adoptent sans rien démonter",
        description:
          "Intégrez-le à votre SIH existant et lancez-vous en quelques jours grâce à des clés API et un widget prêt à l'emploi. Administration multi-organisation entre départements et sites, avec des rôles granulaires, des indicateurs de modules et une supervision centrale.",
      },
      {
        icon: "Users",
        title: "L'accueil et les équipes soignantes travaillent plus vite",
        description:
          "Le personnel infirmier accède instantanément aux résumés de consultation et aux files de suivi, avec moins de perte d'informations lors des transmissions orales. L'accueil enregistre les patients plus vite grâce à la détection des doublons, et Pulse gère les recherches en langage courant.",
      },
    ],
  },
  languagesSection: {
    eyebrow: "Chaque patient, compris",
    title: "Des soins dans plus de 30 langues indiennes",
    subtitle:
      "L'Agent de Communication Multilingue traduit les conversations en temps réel et génère des résumés multilingues — permettant une communication médecin-patient entre langues sans interprète dans la salle.",
    moreLabel: "+ 30 langues prises en charge",
    note: "Liste représentative — la couverture linguistique complète est confirmée lors de l'intégration.",
  },
  security: {
    eyebrow: "Sécurité et confiance IA",
    title: "La sécurité d'abord, avec une IA qui connaît sa place",
    subtitle:
      "Chaque consultation touche des données de santé protégées, et chaque sortie de l'IA est une suggestion. Chaque décision reste celle du clinicien.",
    items: [
      {
        icon: "ServerCog",
        title: "Isolation des données multi-organisation",
        description:
          "L'isolation des données par organisation est appliquée côté serveur à chaque requête — pas seulement au niveau applicatif.",
      },
      {
        icon: "UserCheck",
        title: "Hiérarchie de rôles à cinq niveaux",
        description:
          "Autorisation granulaire côté serveur, de l'administrateur global au personnel quotidien, avec une visibilité limitée par médecin lorsque nécessaire.",
      },
      {
        icon: "Lock",
        title: "Jetons signés à courte durée de vie",
        description:
          "Authentification par jeton JWT et jetons de widget signés pour les sessions SIH intégrées, avec autorisation côté serveur sur chaque point d'accès.",
      },
      {
        icon: "FileCheck2",
        title: "Journalisation de l'activité et des erreurs",
        description:
          "Les actions administratives sont journalisées et consultables ; le suivi centralisé des erreurs et les contrôles d'état s'exécutent sur toute la plateforme.",
      },
      {
        icon: "BadgeCheck",
        title: "IA avec supervision humaine",
        description:
          "Chaque sortie clinique de l'IA — résumés, codes, alertes de médication — est consultative. Les cliniciens relisent et valident avant toute inscription au dossier.",
      },
      {
        icon: "ShieldCheck",
        title: "Les actions de l'IA nécessitent une confirmation",
        description:
          "L'isolation par organisation de Pulse est appliquée en SQL, pas dans le prompt, et toute action d'écriture de l'IA nécessite une confirmation explicite de l'utilisateur avant exécution.",
      },
    ],
    complianceNote:
      "Notre architecture de sécurité est multi-organisation et basée sur les rôles par conception. La certification de conformité (HIPAA, SOC 2) est en cours — nous ne sommes pas encore certifiés.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vos questions, nos réponses",
    subtitle: "Tout ce que les dirigeants de cliniques et d'hôpitaux demandent avant d'introduire l'IA en salle de consultation.",
    items: [
      {
        q: "L'IA rédige-t-elle le dossier médical final ?",
        a: "Non. Chaque résumé, code et alerte est une suggestion. Le clinicien relit, modifie et valide avant toute inscription au dossier.",
      },
      {
        q: "Que se passe-t-il si internet coupe en pleine consultation ?",
        a: "L'enregistrement continue localement sur l'appareil et se téléverse automatiquement dès le retour de la connexion — avec une protection contre les doublons, pour que rien ne soit perdu ni dupliqué.",
      },
      {
        q: "Comment sait-il qui parle ?",
        a: "Les cliniciens enregistrent un court profil vocal une seule fois ; le système les identifie ensuite automatiquement à chaque consultation et sépare la parole du patient.",
      },
      {
        q: "Peut-il fonctionner au sein de notre système hospitalier existant ?",
        a: "Oui — via une API REST, des webhooks et un widget intégrable qui s'exécute dans votre SIH avec des jetons sécurisés à courte durée de vie.",
      },
      {
        q: "Qui peut voir nos données ?",
        a: "Seule votre organisation. L'isolation des données est appliquée au niveau de la base de données à chaque requête, avec un système de rôles à cinq niveaux contrôlant l'accès au sein de votre organisation.",
      },
      {
        q: "Quelles langues sont prises en charge ?",
        a: "L'Agent de Communication Multilingue prend en charge plus de 30 langues indiennes pour la traduction en temps réel et les résumés multilingues, permettant une communication médecin-patient entre langues.",
      },
      {
        q: "Est-ce conforme aux réglementations de santé ?",
        a: "Notre architecture de sécurité est multi-organisation et basée sur les rôles par conception ; notre programme de certification de conformité est en cours.",
      },
      {
        q: "L'assistant IA peut-il modifier des données de lui-même ?",
        a: "Jamais sans vous. Pulse demande une confirmation explicite avant toute création, mise à jour ou suppression.",
      },
    ],
  },
  cta: {
    badge: "Arrêtez de taper. Commencez à écouter.",
    title: "Voyez votre propre consultation, documentée",
    subtitle:
      "Réservez une démo de 20 minutes — apportez une consultation type et regardez-la devenir une note clinique structurée.",
    logIn: "Se connecter",
    trustLine: "Assisté par IA, validé par les cliniciens · Fonctionne hors ligne · S'intègre à votre SIH",
  },
  footer: {
    tagline:
      "Le secrétaire médical IA et la plateforme de consultation pour les cliniques et hôpitaux modernes — documentation, codage et suivi, automatiquement.",
    columns: [
      {
        title: "Produit",
        links: [
          { label: "Agents IA", href: "#agents" },
          { label: "Plateforme", href: "#platform" },
          { label: "Comment ça marche", href: "#workflow" },
          { label: "Sécurité et confiance IA", href: "#security" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "Contact", href: "#cta" },
          { label: "Connexion", href: "https://scribe.medconverse.ai/" },
        ],
      },
      {
        title: "Assistance",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Sécurité", href: "/security" },
        ],
      },
    ],
    copyright: "© {year} MedConverse AI. Tous droits réservés.",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    security: "Sécurité",
  },
  bookDemoDialog: {
    title: "Aucune application de messagerie configurée",
    body: "Nous n'avons pas pu ouvrir votre application de messagerie. Veuillez nous contacter manuellement à l'adresse ci-dessous — copiez l'adresse e-mail ou le modèle de demande complet pour commencer.",
    ccLabel: "CC",
    copyEmail: "Copier l'adresse e-mail",
    emailCopied: "Adresse e-mail copiée",
    copyTemplate: "Copier le modèle d'e-mail",
    templateCopied: "Modèle d'e-mail copié",
    closeAria: "Fermer la boîte de dialogue",
  },
  legal: {
    privacyTitle: "Politique de confidentialité",
    termsTitle: "Conditions d'utilisation",
    securityTitle: "Sécurité",
    lastUpdated: "Dernière mise à jour",
    englishOnlyNotice:
      "Ce document est actuellement disponible uniquement en anglais. Une traduction en {language} sera disponible prochainement — en attendant, la version anglaise fait foi.",
  },
};

export default fr;
