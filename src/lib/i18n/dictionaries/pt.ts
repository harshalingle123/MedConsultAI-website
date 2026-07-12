import type { Dictionary } from "../dictionary";

const pt: Dictionary = {
  common: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: "Menu",
    switchToLight: "Mudar para modo claro",
    switchToDark: "Mudar para modo escuro",
    logIn: "Entrar",
    bookDemo: "Agendar uma demonstração",
  },
  languageSwitcher: {
    label: "Selecionar idioma",
    current: "Idioma atual",
  },
  nav: {
    links: [
      { label: "Agentes", href: "#agents" },
      { label: "Plataforma", href: "#platform" },
      { label: "Como funciona", href: "#workflow" },
      { label: "Segurança e confiança em IA", href: "#security" },
      { label: "Perguntas frequentes", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "Agentes de IA criados para a saúde",
    headlineLine1: "Assistente clínico de IA para",
    headlineRotatingPhrases: [
      "Cada consulta",
      "Cada paciente",
      "Cada agendamento",
      "Cada diagnóstico",
    ],
    subtitlePrefix:
      "A MedConverse AI acompanha cada consulta, cria automaticamente a documentação clínica, gera resumos com IA, apoia os fluxos de prescrição, sugere códigos médicos, identifica possíveis interações medicamentosas e agiliza o acompanhamento — para que ",
    subtitleSuffix: " possam focar nos pacientes, não na papelada.",
    rotatingWords: ["os médicos", "as clínicas", "os hospitais", "os grupos hospitalares"],
    trustStrip: ["Assistido por IA, aprovado por clínicos", "Funciona offline", "Integra-se ao seu HMS"],
    seeHowItWorks: "Veja como funciona",
    mock: {
      recording: "Gravando",
      liveTranscriptLabel: "Transcrição ao vivo · Identificação de interlocutor",
      liveBadge: "Ao vivo",
      quote: "“Dr. Rao: há quanto tempo os sintomas persistem?”",
      aiScribeLabel: "Escriba médico de IA",
      generatingSummary: "Gerando resumo · sugestões CID-10 · verificação de interações",
      summaryReady: "Resumo pronto para revisão",
      soapNote: "Nota SOAP redigida · aguardando aprovação clínica",
      review: "Revisar",
      speakerIdLabel: "Interlocutor",
      speakerName: "Dr. Rao",
      segmentsLabel: "Segmentos",
      segmentsValue: "18",
      statusLabel: "Status",
      statusValue: "Seguro offline",
      offlineBadge: "Funciona offline",
      clinicianApprovedBadge: "Aprovado por clínicos",
    },
  },
  capabilityRowA: [
    "Escriba médico de IA",
    "Transcrição ao vivo e identificação de interlocutor",
    "Gravação com prioridade offline",
    "Sugestões de codificação CID-10",
    "Verificação de interações medicamentosas",
    "Assistente de IA Pulse",
    "Automação de acompanhamento",
  ],
  capabilityRowB: [
    "Integração com HMS via API",
    "Gestão de pacientes e agendamentos",
    "Administração multiempresa e RBAC",
    "Relatórios e exportação em PDF",
    "Perfis de voz de interlocutores",
    "Aplicativos web e Android",
    "Assistência em prescrições",
  ],
  productOverview: {
    eyebrow: "Visão geral do produto",
    title: "Uma plataforma para toda a consulta.",
    subtitle: "Do agendamento à documentação e ao acompanhamento — tudo conectado de ponta a ponta.",
    steps: [
      {
        icon: "Mic",
        title: "Gravar",
        description: "Capture a consulta ao vivo ou offline — nada se perde.",
      },
      {
        icon: "Sparkles",
        title: "Compreender",
        description: "A IA transcreve, identifica interlocutores e analisa a conversa.",
      },
      {
        icon: "ClipboardCheck",
        title: "Agir",
        description: "O clínico revisa o resumo, os códigos e o acompanhamento e aprova.",
      },
    ],
  },
  demo: {
    eyebrow: "Veja em ação",
    title: "Veja uma consulta se transformar em um registro clínico",
    subtitle:
      "Esta é uma demonstração ilustrativa do Escriba médico de IA — da transcrição ao vivo com identificação de interlocutor até um resumo estruturado pronto para revisão clínica.",
    cardTitle: "Escriba médico de IA",
    transcribingLive: "Transcrevendo ao vivo",
    replayAria: "Repetir demonstração",
    transcribingAria: "Transcrevendo",
    patientSrLabel: "Paciente: ",
    doctorSrLabel: "Dr. Rao: ",
    highlights: [
      {
        label: "Identificação de interlocutor em tempo real",
        detail: "“Dr. Rao” versus “Paciente”, rotulados automaticamente",
      },
      {
        label: "Resumo clínico estruturado",
        detail: "Documentação no estilo SOAP redigida para revisão",
      },
      {
        label: "Codificação e verificações de segurança",
        detail: "Inclui sugestões CID-10 e alertas de interação medicamentosa",
      },
    ],
    script: [
      { from: "patient", text: "Tenho febre leve e tosse seca há três dias." },
      { from: "doctor", text: "Alguma falta de ar ou dor ao respirar?" },
      { from: "patient", text: "Sem dor, apenas um aperto no peito, e tenho me sentido cansado." },
      {
        from: "doctor",
        text: "Vamos verificar seus níveis de oxigênio e fazer uma radiografia de tórax por segurança. Também vou prescrever algo para a febre.",
      },
      { from: "system", text: "Interlocutores identificados: Dr. Rao · Paciente — 4 segmentos transcritos" },
      {
        from: "system",
        text: "Escriba médico de IA: resumo gerado · sugestões CID-10 prontas · nenhuma interação medicamentosa sinalizada",
      },
    ],
  },
  agents: {
    eyebrow: "Conheça a equipe",
    title: "Seis agentes especializados, um único fluxo de trabalho conectado",
    subtitle:
      "Cada agente domina uma parte da consulta — da primeira conversa até a ligação de acompanhamento — para que a documentação, a codificação e a coordenação do cuidado aconteçam sem cliques extras.",
    items: [
      {
        icon: "Mic",
        name: "Agente Escriba Médico de IA",
        tagline: "Revise a nota. Não a escreva.",
        description:
          "Grava consultas, realiza transcrição em tempo real, identifica interlocutores e gera notas clínicas estruturadas — incluindo documentação SOAP — automaticamente.",
      },
      {
        icon: "Bot",
        name: "Agente Médico Virtual de IA",
        tagline: "Conversas guiadas antes da consulta",
        description:
          "Conduz conversas inteligentes com o paciente, coleta sintomas e histórico médico, realiza uma avaliação clínica preliminar e orienta os pacientes antes das consultas — com suporte multilíngue.",
      },
      {
        icon: "Pill",
        name: "Agente de Prescrição de IA",
        tagline: "Um segundo olhar sobre cada medicamento",
        description:
          "Elabora prescrições, recomenda medicamentos, verifica interações medicamentosas, detecta conflitos de alergia e sugere ajustes de dosagem para revisão clínica.",
      },
      {
        icon: "ScanLine",
        name: "Agente de Imagem Médica",
        tagline: "Uma primeira leitura, antes da leitura do clínico",
        description:
          "Analisa raios-X, revisa tomografias e ressonâncias, auxilia na interpretação diagnóstica e gera achados preliminares para revisão clínica.",
      },
      {
        icon: "Languages",
        name: "Agente de Comunicação Multilíngue",
        tagline: "Atendimento em mais de 30 idiomas indianos",
        description:
          "Traduz conversas em tempo real, suporta mais de 30 idiomas indianos, gera resumos multilíngues e permite a comunicação médico-paciente entre idiomas.",
      },
      {
        icon: "CalendarCheck",
        name: "Agente de Cuidado de Acompanhamento",
        tagline: "Os pacientes que devem voltar, voltam",
        description:
          "Agenda acompanhamentos, envia lembretes de medicação, monitora a adesão ao tratamento e notifica os pacientes sobre próximas consultas.",
      },
    ],
  },
  platform: {
    eyebrow: "Módulos do produto",
    title: "Tudo o que uma clínica precisa, em um único sistema",
    subtitle:
      "Além do escriba, a MedConverse AI gerencia pacientes, agendamentos, acompanhamentos e relatórios em um ambiente multiempresa baseado em funções — e se integra diretamente ao seu HMS existente.",
    tablistAria: "Recursos da plataforma",
    items: [
      {
        icon: "Mic",
        title: "Fluxo de consulta e escriba de IA",
        description:
          "O ciclo central do produto: iniciar, gravar, transcrever, analisar, revisar e acompanhar — com início em um toque a partir da agenda do dia e persistência automática de sessão.",
        points: [
          "Captura ao vivo ou offline, sem perda de dados",
          "Transcrições editáveis com interlocutores identificados",
          "Resumo gerado por IA — revisado e aprovado pelo clínico",
        ],
      },
      {
        icon: "FileCheck2",
        title: "Suíte de análise clínica",
        description:
          "Após cada consulta, a IA realiza uma análise clínica com base em uma base de conhecimento médico — codificação, medicação e sinais de segurança chegam junto com o resumo.",
        points: [
          "Sugestões de codificação CID-10 / causal",
          "Extração e enriquecimento de medicação",
          "Verificação de interações entre medicamentos",
        ],
      },
      {
        icon: "MessageSquareHeart",
        title: "Pulse — Assistente de IA agente",
        description:
          "Um copiloto de IA conversacional que lê e age sobre os dados da clínica por meio de chamadas de ferramentas seguras e com permissões definidas — condensando fluxos administrativos de vários cliques em uma única frase.",
        points: [
          "Acesso de leitura e escrita em linguagem natural aos dados da clínica",
          "Isolamento por organização aplicado em SQL, não no prompt",
          "Toda ação de escrita exige confirmação explícita",
        ],
      },
      {
        icon: "CalendarClock",
        title: "Pacientes, agendamentos e acompanhamentos",
        description:
          "Um registro clínico completo — prontuários de pacientes, agendamento e filas de acompanhamento — vinculado diretamente a cada gravação e sua análise.",
        points: [
          "Registro de pacientes com detecção de duplicidade",
          "Calendário e agendamento de consultas por médico",
          "Fila de acompanhamento sugerida automaticamente com rastreamento de conversão",
        ],
      },
      {
        icon: "Waypoints",
        title: "Integração com HMS",
        description:
          "Hospitais integram a MedConverse AI diretamente ao seu Sistema de Gestão Hospitalar existente — sem necessidade de substituição completa.",
        points: [
          "API REST versionada com gestão de chaves de API",
          "Envio de webhooks ao concluir a sessão",
          "Widget incorporável com tokens assinados de curta duração",
        ],
      },
      {
        icon: "UserCheck",
        title: "Administração, relatórios e análises",
        description:
          "Administração de organizações e usuários em uma hierarquia de funções de cinco níveis, com registros de atividade, supervisão de sessões e relatórios.",
        points: [
          "Gestão de organizações com sinalizadores de módulo por organização",
          "Registros de atividade e auditoria para ações administrativas",
          "Estatísticas do painel, exportação em PDF e rastreamento de uso",
        ],
      },
    ],
  },
  workflow: {
    eyebrow: "Como funciona",
    title: "De “Iniciar” a aprovado, em cinco etapas",
    subtitle:
      "Documentação não é um único momento — é um fluxo de trabalho. A MedConverse AI automatiza cada etapa sem tirar o clínico do processo.",
    items: [
      {
        step: "01",
        title: "Iniciar",
        description:
          "O médico toca em Iniciar na consulta. O painel de gravação abre com um medidor de nível ao vivo e um cronômetro.",
      },
      {
        step: "02",
        title: "Gravar",
        description:
          "Online, o áudio é transmitido ao vivo para transcrição. Offline, é capturado localmente e enviado automaticamente assim que a conectividade retorna — nada se perde.",
      },
      {
        step: "03",
        title: "Transcrever",
        description:
          "A conversão de fala em texto em tempo real com diarização automática de interlocutores rotula a conversa conforme ela acontece — “Dr. Smith” versus “Paciente” — com identificação por perfil de voz.",
      },
      {
        step: "04",
        title: "Analisar",
        description:
          "A IA gera um resumo da consulta, sugestões de codificação CID-10 / causal, análise de medicação e alertas de interação medicamentosa — rotulados como gerados por IA, para revisão clínica.",
      },
      {
        step: "05",
        title: "Acompanhar",
        description:
          "A análise (ou o médico) recomenda um acompanhamento. A equipe o converte em consulta ou o recusa — de qualquer forma, nada passa despercebido.",
      },
    ],
  },
  benefits: {
    eyebrow: "Por que a MedConverse",
    title: "A carga de documentação, resolvida — não transferida",
    subtitle:
      "A MedConverse AI elimina o registro fora do horário sem tirar o clínico da decisão. Todos que participam de uma consulta se beneficiam.",
    items: [
      {
        icon: "Clock3",
        title: "Os médicos recuperam seu tempo",
        description:
          "Recupere tempo de documentação e acabe com o registro fora do horário. A atenção total permanece no paciente — o prontuário se escreve sozinho, e as sugestões de codificação e os alertas de interação reduzem a carga cognitiva enquanto você mantém o controle de cada decisão.",
      },
      {
        icon: "Blocks",
        title: "Clínicas operam com um único sistema",
        description:
          "Recepção, consultório e acompanhamento em uma única plataforma — menos software, menos treinamento e maior volume de consultas por médico ao dia. A automação de acompanhamento recupera retornos que, de outra forma, seriam perdidos.",
      },
      {
        icon: "Waypoints",
        title: "Hospitais adotam sem desmontar nada",
        description:
          "Integre ao seu HMS existente e entre em operação em dias com chaves de API e um widget pronto para uso. Administração multiempresa entre departamentos e unidades, com funções granulares, sinalizadores de módulo e supervisão central.",
      },
      {
        icon: "Users",
        title: "Recepção e equipes de cuidado trabalham mais rápido",
        description:
          "A enfermagem tem acesso instantâneo aos resumos de consulta e filas de acompanhamento, com menos perda de informação em repasses verbais. A recepção registra pacientes mais rápido com detecção de duplicidade, e o Pulse cuida das buscas em linguagem simples.",
      },
    ],
  },
  languagesSection: {
    eyebrow: "Cada paciente, compreendido",
    title: "Atendimento em mais de 30 idiomas indianos",
    subtitle:
      "O Agente de Comunicação Multilíngue traduz conversas em tempo real e gera resumos multilíngues — permitindo a comunicação médico-paciente entre idiomas sem a necessidade de um intérprete na sala.",
    moreLabel: "+ 30 idiomas suportados",
    note: "Lista representativa — a cobertura completa de idiomas é confirmada durante a integração.",
  },
  security: {
    eyebrow: "Segurança e confiança em IA",
    title: "Segurança em primeiro lugar, com uma IA que conhece seus limites",
    subtitle:
      "Cada consulta envolve informações de saúde protegidas, e cada saída da IA é uma sugestão. Cada decisão continua sendo do clínico.",
    items: [
      {
        icon: "ServerCog",
        title: "Isolamento de dados multiempresa",
        description:
          "O isolamento de dados por organização é aplicado no servidor a cada solicitação — não apenas na camada de aplicação.",
      },
      {
        icon: "UserCheck",
        title: "Hierarquia de funções de cinco níveis",
        description:
          "Autorização granular no servidor, do administrador global à equipe do dia a dia, com visibilidade restrita por médico quando necessário.",
      },
      {
        icon: "Lock",
        title: "Tokens assinados de curta duração",
        description:
          "Autenticação por token JWT mais tokens de widget assinados para sessões de HMS incorporadas, com autorização no servidor em cada endpoint.",
      },
      {
        icon: "FileCheck2",
        title: "Registro de atividade e erros",
        description:
          "As ações administrativas são registradas e revisáveis; o rastreamento centralizado de erros e as verificações de integridade são executados em toda a plataforma.",
      },
      {
        icon: "BadgeCheck",
        title: "IA com supervisão humana",
        description:
          "Toda saída clínica da IA — resumos, códigos, alertas de medicação — é consultiva. Os clínicos revisam e aprovam antes que qualquer coisa entre no prontuário.",
      },
      {
        icon: "ShieldCheck",
        title: "Ações da IA exigem confirmação",
        description:
          "O isolamento por organização do Pulse é aplicado em SQL, não no prompt, e toda ação de escrita da IA exige confirmação explícita do usuário antes de ocorrer.",
      },
    ],
    complianceNote:
      "Nossa arquitetura de segurança é multiempresa e baseada em funções por design. A certificação de conformidade (HIPAA, SOC 2) está em andamento — ainda não somos certificados.",
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Perguntas, respondidas",
    subtitle: "Tudo o que líderes de clínicas e hospitais perguntam antes de trazer IA para o consultório.",
    items: [
      {
        q: "A IA redige o prontuário médico final?",
        a: "Não. Cada resumo, código e alerta é uma sugestão. O clínico revisa, edita e aprova antes que qualquer coisa entre no prontuário.",
      },
      {
        q: "O que acontece se a internet cair no meio da consulta?",
        a: "A gravação continua localmente no dispositivo e é enviada automaticamente quando a conectividade retorna — com proteção contra duplicidade, para que nada se perca ou seja duplicado.",
      },
      {
        q: "Como o sistema sabe quem está falando?",
        a: "Os clínicos registram um breve perfil de voz uma única vez; o sistema então os identifica automaticamente em cada consulta e separa a fala do paciente.",
      },
      {
        q: "Pode funcionar dentro do nosso sistema hospitalar existente?",
        a: "Sim — via API REST, webhooks e um widget incorporável que roda dentro do seu HMS com tokens seguros de curta duração.",
      },
      {
        q: "Quem pode ver nossos dados?",
        a: "Somente sua organização. O isolamento de dados é aplicado no nível do banco de dados a cada solicitação, com um sistema de funções de cinco níveis controlando o acesso dentro da sua organização.",
      },
      {
        q: "Quais idiomas são suportados?",
        a: "O Agente de Comunicação Multilíngue suporta mais de 30 idiomas indianos para tradução em tempo real e resumos multilíngues, permitindo a comunicação médico-paciente entre idiomas.",
      },
      {
        q: "É compatível com as regulamentações de saúde?",
        a: "Nossa arquitetura de segurança é multiempresa e baseada em funções por design; nosso programa de certificação de conformidade está em andamento.",
      },
      {
        q: "O assistente de IA pode alterar dados por conta própria?",
        a: "Nunca sem você. O Pulse pede confirmação explícita antes de qualquer criação, atualização ou exclusão.",
      },
    ],
  },
  cta: {
    badge: "Pare de digitar. Comece a ouvir.",
    title: "Veja sua própria consulta, documentada",
    subtitle:
      "Agende uma demonstração de 20 minutos — traga uma consulta de exemplo e veja-a se transformar em uma nota clínica estruturada.",
    logIn: "Entrar",
    trustLine: "Assistido por IA, aprovado por clínicos · Funciona offline · Integra-se ao seu HMS",
  },
  footer: {
    tagline:
      "O escriba médico de IA e a plataforma de consultas para clínicas e hospitais modernos — documentação, codificação e acompanhamento, automaticamente.",
    columns: [
      {
        title: "Produto",
        links: [
          { label: "Agentes de IA", href: "#agents" },
          { label: "Plataforma", href: "#platform" },
          { label: "Como funciona", href: "#workflow" },
          { label: "Segurança e confiança em IA", href: "#security" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Contato", href: "#cta" },
          { label: "Entrar", href: "https://scribe.medconverse.ai/" },
        ],
      },
      {
        title: "Suporte",
        links: [
          { label: "Perguntas frequentes", href: "#faq" },
          { label: "Segurança", href: "/security" },
        ],
      },
    ],
    copyright: "© {year} MedConverse AI. Todos os direitos reservados.",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    security: "Segurança",
  },
  bookDemoDialog: {
    title: "Nenhum aplicativo de e-mail configurado",
    body: "Não conseguimos abrir seu aplicativo de e-mail. Entre em contato manualmente pelo endereço abaixo — copie o endereço de e-mail ou o modelo completo de solicitação para começar.",
    ccLabel: "CC",
    copyEmail: "Copiar endereço de e-mail",
    emailCopied: "Endereço de e-mail copiado",
    copyTemplate: "Copiar modelo de e-mail",
    templateCopied: "Modelo de e-mail copiado",
    closeAria: "Fechar caixa de diálogo",
  },
  legal: {
    privacyTitle: "Política de Privacidade",
    termsTitle: "Termos de Serviço",
    securityTitle: "Segurança",
    lastUpdated: "Última atualização",
    englishOnlyNotice:
      "Este documento está atualmente disponível apenas em inglês. Uma tradução para {language} estará disponível em breve — enquanto isso, a versão em inglês é a referência oficial.",
  },
};

export default pt;
