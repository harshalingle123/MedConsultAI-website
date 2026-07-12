import type { Dictionary } from "../dictionary";

const zh: Dictionary = {
  common: {
    skipToContent: "跳转到内容",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    menu: "菜单",
    switchToLight: "切换到浅色模式",
    switchToDark: "切换到深色模式",
    logIn: "登录",
    bookDemo: "预约演示",
  },
  languageSwitcher: {
    label: "选择语言",
    current: "当前语言",
  },
  nav: {
    links: [
      { label: "智能体", href: "#agents" },
      { label: "平台", href: "#platform" },
      { label: "工作原理", href: "#workflow" },
      { label: "安全与 AI 信任", href: "#security" },
      { label: "常见问题", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "为医疗行业打造的 AI 智能体",
    headlineLine1: "面向每一次诊疗的 AI 临床助手",
    headlineRotatingPhrases: [
      "每一次诊疗",
      "每一位患者",
      "每一次预约",
      "每一次诊断",
    ],
    subtitlePrefix:
      "MedConverse AI 聆听每一次诊疗对话，自动生成临床文档，创建 AI 驱动的摘要，支持处方流程，建议医疗编码，识别潜在的药物相互作用，并简化随访流程——让",
    subtitleSuffix: "能够专注于患者，而非文书工作。",
    rotatingWords: ["医生", "诊所", "医院", "医院集团"],
    trustStrip: ["AI 辅助，经临床医生批准", "支持离线使用", "可接入您的医院管理系统"],
    seeHowItWorks: "了解工作原理",
    mock: {
      recording: "正在录音",
      liveTranscriptLabel: "实时转录 · 说话人识别",
      liveBadge: "实时",
      quote: "“Rao 医生：这些症状持续多久了？”",
      aiScribeLabel: "AI 医疗记录助手",
      generatingSummary: "正在生成摘要 · ICD-10 编码建议 · 相互作用检查",
      summaryReady: "摘要已生成，待审核",
      soapNote: "SOAP 病历已生成 · 等待临床审批",
      review: "待审核",
      speakerIdLabel: "说话人",
      speakerName: "Rao 医生",
      segmentsLabel: "片段数",
      segmentsValue: "18",
      statusLabel: "状态",
      statusValue: "离线安全",
      offlineBadge: "支持离线使用",
      clinicianApprovedBadge: "经临床医生批准",
    },
  },
  capabilityRowA: [
    "AI 医疗记录助手",
    "实时转录与说话人识别",
    "离线优先录音",
    "ICD-10 编码建议",
    "药物相互作用检查",
    "Pulse AI 助手",
    "随访自动化",
  ],
  capabilityRowB: [
    "通过 API 集成医院管理系统",
    "患者与预约管理",
    "多租户管理与基于角色的访问控制",
    "报表与 PDF 导出",
    "说话人声纹档案",
    "网页版与安卓应用",
    "处方辅助",
  ],
  productOverview: {
    eyebrow: "产品概览",
    title: "一个平台，覆盖整个诊疗过程。",
    subtitle: "从预约到文档记录再到随访——全程无缝衔接。",
    steps: [
      {
        icon: "Mic",
        title: "录制",
        description: "实时或离线记录诊疗过程——内容永不丢失。",
      },
      {
        icon: "Sparkles",
        title: "理解",
        description: "AI 转录内容、识别说话人并分析对话。",
      },
      {
        icon: "ClipboardCheck",
        title: "处理",
        description: "临床医生审核摘要、编码和随访建议后予以批准。",
      },
    ],
  },
  demo: {
    eyebrow: "查看实际效果",
    title: "见证一次诊疗如何转化为临床记录",
    subtitle:
      "这是 AI 医疗记录助手的示例演示——从实时说话人识别转录，到可供临床审核的结构化摘要。",
    cardTitle: "AI 医疗记录助手",
    transcribingLive: "正在实时转录",
    replayAria: "重新播放演示",
    transcribingAria: "正在转录",
    patientSrLabel: "患者：",
    doctorSrLabel: "Rao 医生：",
    highlights: [
      {
        label: "实时说话人识别",
        detail: "自动区分并标注“Rao 医生”与“患者”",
      },
      {
        label: "结构化临床摘要",
        detail: "生成可供审核的 SOAP 风格文档",
      },
      {
        label: "编码与安全检查",
        detail: "包含 ICD-10 编码建议和药物相互作用提示",
      },
    ],
    script: [
      { from: "patient", text: "我已经轻微发烧、干咳三天了。" },
      { from: "doctor", text: "有没有呼吸急促，或者吸气时疼痛？" },
      { from: "patient", text: "没有疼痛，只是胸口有点发紧，而且感觉很疲惫。" },
      {
        from: "doctor",
        text: "为保险起见，我们来检查一下您的血氧水平并做一次胸部 X 光检查。我也会给您开一些退烧药。",
      },
      { from: "system", text: "已识别说话人：Rao 医生 · 患者 — 已转录 4 个片段" },
      {
        from: "system",
        text: "AI 医疗记录助手：摘要已生成 · ICD-10 编码建议已就绪 · 未发现药物相互作用",
      },
    ],
  },
  agents: {
    eyebrow: "认识我们的智能体团队",
    title: "六个专业智能体，一个互联的工作流程",
    subtitle:
      "每个智能体专注于诊疗过程中的一个环节——从首次问诊到随访电话——使文档记录、编码和护理协调无需额外操作即可完成。",
    items: [
      {
        icon: "Mic",
        name: "AI 医疗记录智能体",
        tagline: "只需审核记录，无需亲自撰写。",
        description:
          "记录诊疗过程，进行实时转录，识别说话人，并自动生成结构化临床记录——包括 SOAP 病历文档。",
      },
      {
        icon: "Bot",
        name: "AI 虚拟医生智能体",
        tagline: "就诊前的引导式对话",
        description:
          "与患者进行智能对话，收集症状和病史，进行初步临床评估，并在就诊前为患者提供多语言支持的指引。",
      },
      {
        icon: "Pill",
        name: "AI 处方智能体",
        tagline: "为每一种药物提供二次核查",
        description:
          "起草处方，推荐药物，检查药物相互作用，检测过敏冲突，并为临床审核提出剂量调整建议。",
      },
      {
        icon: "ScanLine",
        name: "医学影像智能体",
        tagline: "在临床医生读片之前提供初步判读",
        description:
          "分析 X 光片，审阅 CT 和 MRI 影像，协助诊断解读，并为临床审核生成初步发现。",
      },
      {
        icon: "Languages",
        name: "多语言沟通智能体",
        tagline: "以 30 多种印度语言提供医疗服务",
        description:
          "实时翻译对话内容，支持 30 多种印度语言，生成多语言摘要，实现跨语言的医患沟通。",
      },
      {
        icon: "CalendarCheck",
        name: "随访护理智能体",
        tagline: "确保需要复诊的患者按时复诊",
        description:
          "安排随访计划，发送用药提醒，跟踪治疗依从性，并就即将到来的诊疗通知患者。",
      },
    ],
  },
  platform: {
    eyebrow: "产品模块",
    title: "诊所所需的一切，尽在一个系统",
    subtitle:
      "除记录功能外，MedConverse AI 还在一个多租户、基于角色的工作空间中管理患者、预约、随访和报表——并可直接集成到您现有的医院管理系统中。",
    tablistAria: "平台功能",
    items: [
      {
        icon: "Mic",
        title: "诊疗工作流与 AI 记录助手",
        description:
          "产品的核心流程：启动、录制、转录、分析、审核和随访——从当日日程一键启动，会话自动保持。",
        points: [
          "实时或离线采集，数据零丢失",
          "已识别说话人、可编辑的转录内容",
          "AI 生成摘要——由临床医生审核并批准",
        ],
      },
      {
        icon: "FileCheck2",
        title: "临床分析套件",
        description:
          "每次诊疗后，AI 会根据医学知识库进行临床分析——编码、用药和安全信号与摘要一并生成。",
        points: [
          "ICD-10 / 病因编码建议",
          "用药信息提取与补充",
          "药物间相互作用检查",
        ],
      },
      {
        icon: "MessageSquareHeart",
        title: "Pulse — 智能体式 AI 助手",
        description:
          "一款对话式 AI 助手，通过安全、权限受限的工具调用读取并处理诊所数据——将多步骤的管理操作简化为一句话。",
        points: [
          "以自然语言方式读写诊所数据",
          "租户隔离由 SQL 层强制执行，而非依赖提示词",
          "所有写入操作均需明确确认",
        ],
      },
      {
        icon: "CalendarClock",
        title: "患者、预约与随访",
        description:
          "一个完整的诊所登记系统——患者档案、排班和随访队列——直接与每次录音及其分析结果关联。",
        points: [
          "具备重复检测功能的患者登记系统",
          "按医生划分的日历与预约排班",
          "自动建议并可追踪转化情况的随访队列",
        ],
      },
      {
        icon: "Waypoints",
        title: "医院管理系统集成",
        description:
          "医院可将 MedConverse AI 直接集成到现有的医院管理系统中——无需彻底更换系统。",
        points: [
          "支持 API 密钥管理的版本化 REST API",
          "会话完成后发送 Webhook 通知",
          "使用签名短期令牌的可嵌入组件",
        ],
      },
      {
        icon: "UserCheck",
        title: "管理、报表与分析",
        description:
          "通过五级角色体系进行组织与用户管理，并提供活动日志、会话监控与报表功能。",
        points: [
          "按组织设置模块开关的组织管理",
          "管理操作的活动日志与审计记录",
          "仪表盘统计、PDF 导出及使用情况追踪",
        ],
      },
    ],
  },
  workflow: {
    eyebrow: "工作原理",
    title: "从“开始”到审批完成，仅需五步",
    subtitle:
      "文档记录不是一瞬间的事，而是一个完整的工作流程。MedConverse AI 在不将临床医生排除在外的前提下，自动完成每一步。",
    items: [
      {
        step: "01",
        title: "开始",
        description:
          "医生在预约界面点击“开始”。录音面板随即打开，显示实时音量表和计时器。",
      },
      {
        step: "02",
        title: "录制",
        description:
          "在线状态下，音频会实时流式传输以进行转录。离线状态下，音频会在本地录制，并在网络恢复的瞬间自动上传——内容永不丢失。",
      },
      {
        step: "03",
        title: "转录",
        description:
          "具备自动说话人分离功能的实时语音转文字系统会即时标注对话内容——区分“Smith 医生”与“患者”——并结合声纹识别技术。",
      },
      {
        step: "04",
        title: "分析",
        description:
          "AI 生成诊疗摘要、ICD-10 / 病因编码建议、用药分析和药物相互作用提示——均标注为“AI 生成”，供临床审核。",
      },
      {
        step: "05",
        title: "随访",
        description:
          "分析结果（或医生）会建议进行随访。工作人员可将其转为预约或予以拒绝——无论哪种情况，都不会遗漏。",
      },
    ],
  },
  benefits: {
    eyebrow: "为什么选择 MedConverse",
    title: "解决文档记录负担——而非转嫁给他人",
    subtitle:
      "MedConverse AI 在不让临床医生脱离决策过程的前提下，消除了下班后补写病历的负担。每一位参与诊疗的人都能从中受益。",
    items: [
      {
        icon: "Clock3",
        title: "医生重新掌握自己的时间",
        description:
          "省下书写病历的时间，告别下班后补写病历。全部精力都可以放在患者身上——病历自动生成，编码建议和相互作用提示能减轻认知负担，同时每一个决策仍由您掌控。",
      },
      {
        icon: "Blocks",
        title: "诊所运行在一个统一系统上",
        description:
          "前台、诊室与随访环节整合在同一平台上——软件更少，培训更少，每位医生每日可处理的诊疗量更高。随访自动化能挽回原本可能流失的复诊患者。",
      },
      {
        icon: "Waypoints",
        title: "医院无需拆除现有系统即可采用",
        description:
          "将其集成到您现有的医院管理系统中，通过 API 密钥和即插即用组件，数天内即可上线。跨部门、跨分支的多租户管理，配备精细的角色权限、模块开关和中央监管。",
      },
      {
        icon: "Users",
        title: "前台与护理团队工作效率更高",
        description:
          "护士可即时访问诊疗摘要和随访队列，减少口头交接中的信息损失。前台工作人员借助重复检测功能能更快地登记患者，而 Pulse 则以自然语言处理各类查询。",
      },
    ],
  },
  languagesSection: {
    eyebrow: "让每一位患者都被理解",
    title: "以 30 多种印度语言提供医疗服务",
    subtitle:
      "多语言沟通智能体可实时翻译对话内容并生成多语言摘要——无需现场配备翻译人员，即可实现跨语言的医患沟通。",
    moreLabel: "+ 支持另外 30 种语言",
    note: "以下为示例列表——完整的语言覆盖范围将在入驻流程中确认。",
  },
  security: {
    eyebrow: "安全与 AI 信任",
    title: "安全优先，AI 深知自身的边界",
    subtitle:
      "每一次诊疗都涉及受保护的健康信息，每一项 AI 输出都只是建议。最终决策权始终掌握在临床医生手中。",
    items: [
      {
        icon: "ServerCog",
        title: "多租户数据隔离",
        description:
          "组织级别的数据隔离在每一次请求中都会由服务器端强制执行——而不仅仅是在应用层。",
      },
      {
        icon: "UserCheck",
        title: "五级角色体系",
        description:
          "从全局管理员到日常工作人员，均实施精细化的服务器端授权，并在需要时提供按医生划分的可见范围。",
      },
      {
        icon: "Lock",
        title: "签名短期令牌",
        description:
          "为嵌入式医院管理系统会话提供 JWT 令牌认证及签名组件令牌，并在每个接口上执行服务器端授权。",
      },
      {
        icon: "FileCheck2",
        title: "活动与错误日志记录",
        description:
          "管理操作会被记录并可供审查；集中式错误追踪和健康检查在整个平台范围内持续运行。",
      },
      {
        icon: "BadgeCheck",
        title: "人工监督下的 AI",
        description:
          "所有临床 AI 输出——摘要、编码、用药提示——均仅供参考。任何内容进入病历前，均须经临床医生审核并批准。",
      },
      {
        icon: "ShieldCheck",
        title: "AI 操作需经确认",
        description:
          "Pulse 的租户隔离由 SQL 层强制执行，而非依赖提示词，且任何 AI 写入操作在执行前都需要用户明确确认。",
      },
    ],
    complianceNote:
      "我们的安全架构从设计之初就采用多租户和基于角色的方式。合规认证（HIPAA、SOC 2）正在推进中——我们目前尚未获得认证。",
  },
  faq: {
    eyebrow: "常见问题",
    title: "问题解答",
    subtitle: "诊所和医院管理者在将 AI 引入诊室之前最常问的问题。",
    items: [
      {
        q: "AI 会撰写最终的医疗记录吗？",
        a: "不会。每一份摘要、编码和提示都只是建议。临床医生会在内容进入病历前进行审核、编辑和批准。",
      },
      {
        q: "如果诊疗过程中网络中断会怎样？",
        a: "录音会在设备上本地继续进行，并在网络恢复后自动上传——并具备重复保护机制，确保内容既不会丢失也不会重复。",
      },
      {
        q: "系统如何知道是谁在说话？",
        a: "临床医生只需注册一次简短的声纹档案；此后系统会在每次诊疗中自动识别其身份，并将患者的语音区分开来。",
      },
      {
        q: "它能在我们现有的医院系统中运行吗？",
        a: "可以——通过 REST API、Webhook，以及使用安全短期令牌在您的医院管理系统内运行的可嵌入组件实现。",
      },
      {
        q: "谁可以查看我们的数据？",
        a: "仅限您的所属组织。数据隔离在每次请求中都会在数据库层面强制执行，并通过五级角色系统控制组织内部的访问权限。",
      },
      {
        q: "支持哪些语言？",
        a: "多语言沟通智能体支持 30 多种印度语言，用于实时翻译和生成多语言摘要，实现跨语言的医患沟通。",
      },
      {
        q: "是否符合医疗健康法规要求？",
        a: "我们的安全架构从设计之初就采用多租户和基于角色的方式；我们的合规认证计划正在推进中。",
      },
      {
        q: "AI 助手能自行修改数据吗？",
        a: "未经您的许可，绝不会。Pulse 在执行任何创建、更新或删除操作前，都会请求明确确认。",
      },
    ],
  },
  cta: {
    badge: "别再打字了，开始倾听吧。",
    title: "亲眼见证您自己的诊疗被完整记录",
    subtitle: "预约一场 20 分钟的演示——带来一段示例诊疗，观看它转化为一份结构化的病历记录。",
    logIn: "登录",
    trustLine: "AI 辅助，经临床医生批准 · 支持离线使用 · 可接入您的医院管理系统",
  },
  footer: {
    tagline:
      "面向现代诊所和医院的 AI 医疗记录助手与诊疗平台——自动完成文档记录、编码与随访。",
    columns: [
      {
        title: "产品",
        links: [
          { label: "AI 智能体", href: "#agents" },
          { label: "平台", href: "#platform" },
          { label: "工作原理", href: "#workflow" },
          { label: "安全与 AI 信任", href: "#security" },
        ],
      },
      {
        title: "公司",
        links: [
          { label: "联系我们", href: "#cta" },
          { label: "登录", href: "https://scribe.medconverse.ai/" },
        ],
      },
      {
        title: "支持",
        links: [
          { label: "常见问题", href: "#faq" },
          { label: "安全", href: "/security" },
        ],
      },
    ],
    copyright: "© {year} MedConverse AI. 保留所有权利。",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    security: "安全",
  },
  bookDemoDialog: {
    title: "未配置邮件应用程序",
    body: "我们无法打开您的邮件应用程序。请通过下方地址手动与我们联系——您可以复制邮箱地址或完整的请求模板以便开始。",
    ccLabel: "抄送",
    copyEmail: "复制邮箱地址",
    emailCopied: "邮箱地址已复制",
    copyTemplate: "复制邮件模板",
    templateCopied: "邮件模板已复制",
    closeAria: "关闭对话框",
  },
  legal: {
    privacyTitle: "隐私政策",
    termsTitle: "服务条款",
    securityTitle: "安全",
    lastUpdated: "最后更新时间",
    englishOnlyNotice:
      "本文档目前仅提供英文版本。{language}翻译版本即将推出——在此之前，英文版本为具有法律效力的正式文本。",
  },
};

export default zh;
