export type NavLink = { label: string; href: string };

export type IconStep = { icon: string; title: string; description: string };

export type Agent = { icon: string; name: string; tagline: string; description: string };

export type WorkflowStep = { step: string; title: string; description: string };

export type PlatformFeature = {
  icon: string;
  title: string;
  description: string;
  points: [string, string, string];
};

export type Benefit = { icon: string; title: string; description: string };

export type SecurityFeature = { icon: string; title: string; description: string };

export type Faq = { q: string; a: string };

export type FooterColumn = { title: string; links: NavLink[] };

export type DemoMessage = { from: "patient" | "doctor" | "system"; text: string };

export type DemoHighlight = { label: string; detail: string };

export interface Dictionary {
  common: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    switchToLight: string;
    switchToDark: string;
    logIn: string;
    bookDemo: string;
  };
  languageSwitcher: {
    label: string;
    current: string;
  };
  nav: {
    links: NavLink[];
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineRotatingPhrases: [string, string, string, string];
    subtitlePrefix: string;
    subtitleSuffix: string;
    rotatingWords: [string, string, string, string];
    trustStrip: [string, string, string];
    seeHowItWorks: string;
    mock: {
      recording: string;
      liveTranscriptLabel: string;
      liveBadge: string;
      quote: string;
      aiScribeLabel: string;
      generatingSummary: string;
      summaryReady: string;
      soapNote: string;
      review: string;
      speakerIdLabel: string;
      speakerName: string;
      segmentsLabel: string;
      segmentsValue: string;
      statusLabel: string;
      statusValue: string;
      offlineBadge: string;
      clinicianApprovedBadge: string;
    };
  };
  capabilityRowA: [string, string, string, string, string, string, string];
  capabilityRowB: [string, string, string, string, string, string, string];
  productOverview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: [IconStep, IconStep, IconStep];
  };
  demo: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cardTitle: string;
    transcribingLive: string;
    replayAria: string;
    highlights: [DemoHighlight, DemoHighlight, DemoHighlight];
    script: [DemoMessage, DemoMessage, DemoMessage, DemoMessage, DemoMessage, DemoMessage];
    patientSrLabel: string;
    doctorSrLabel: string;
    transcribingAria: string;
  };
  agents: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: [Agent, Agent, Agent, Agent, Agent, Agent];
  };
  platform: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tablistAria: string;
    items: [PlatformFeature, PlatformFeature, PlatformFeature, PlatformFeature, PlatformFeature, PlatformFeature];
  };
  workflow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep];
  };
  benefits: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: [Benefit, Benefit, Benefit, Benefit];
  };
  languagesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    moreLabel: string;
    note: string;
  };
  security: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: [SecurityFeature, SecurityFeature, SecurityFeature, SecurityFeature, SecurityFeature, SecurityFeature];
    complianceNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: [Faq, Faq, Faq, Faq, Faq, Faq, Faq, Faq];
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    logIn: string;
    trustLine: string;
  };
  footer: {
    tagline: string;
    columns: [FooterColumn, FooterColumn, FooterColumn];
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
    security: string;
  };
  bookDemoDialog: {
    title: string;
    body: string;
    ccLabel: string;
    copyEmail: string;
    emailCopied: string;
    copyTemplate: string;
    templateCopied: string;
    closeAria: string;
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
    securityTitle: string;
    lastUpdated: string;
    englishOnlyNotice: string;
  };
}
