import type { Dictionary } from "../dictionary";

const ko: Dictionary = {
  common: {
    skipToContent: "본문으로 건너뛰기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    menu: "메뉴",
    switchToLight: "라이트 모드로 전환",
    switchToDark: "다크 모드로 전환",
    logIn: "로그인",
    bookDemo: "데모 예약하기",
  },
  languageSwitcher: {
    label: "언어 선택",
    current: "현재 언어",
  },
  nav: {
    links: [
      { label: "에이전트", href: "#agents" },
      { label: "플랫폼", href: "#platform" },
      { label: "작동 방식", href: "#workflow" },
      { label: "보안 및 AI 신뢰", href: "#security" },
      { label: "자주 묻는 질문", href: "#faq" },
    ],
  },
  hero: {
    eyebrow: "의료를 위해 만들어진 AI 에이전트",
    headlineLine1: "모든 진료를 위한 AI 임상 어시스턴트",
    headlineRotatingPhrases: [
      "모든 진료",
      "모든 환자",
      "모든 예약",
      "모든 진단",
    ],
    subtitlePrefix:
      "MedConverse AI는 모든 진료 내용을 청취하여 임상 문서를 자동으로 작성하고, AI 기반 요약을 생성하며, 처방 워크플로를 지원하고, 의료 코드를 제안하며, 잠재적인 약물 상호작용을 파악하고, 후속 조치를 간소화합니다 — 그 결과 ",
    subtitleSuffix: "은(는) 서류 작업이 아닌 환자에게 집중할 수 있습니다.",
    rotatingWords: ["의사", "클리닉", "병원", "병원 그룹"],
    trustStrip: ["AI 지원, 임상의 승인", "오프라인에서도 작동", "귀사의 HMS와 연동"],
    seeHowItWorks: "작동 방식 보기",
    mock: {
      recording: "녹음 중",
      liveTranscriptLabel: "실시간 기록 · 화자 식별",
      liveBadge: "라이브",
      quote: "“라오 박사: 증상이 얼마나 지속되었나요?”",
      aiScribeLabel: "AI 의료 기록 도우미",
      generatingSummary: "요약 생성 중 · ICD-10 제안 · 상호작용 확인",
      summaryReady: "검토 준비 완료된 요약",
      soapNote: "SOAP 노트 작성 완료 · 임상 승인 대기 중",
      review: "검토 필요",
      speakerIdLabel: "화자",
      speakerName: "라오 박사",
      segmentsLabel: "세그먼트",
      segmentsValue: "18",
      statusLabel: "상태",
      statusValue: "오프라인 안전",
      offlineBadge: "오프라인에서도 작동",
      clinicianApprovedBadge: "임상의 승인",
    },
  },
  capabilityRowA: [
    "AI 의료 기록 도우미",
    "실시간 기록 및 화자 식별",
    "오프라인 우선 녹음",
    "ICD-10 코딩 제안",
    "약물 상호작용 확인",
    "Pulse AI 어시스턴트",
    "후속 조치 자동화",
  ],
  capabilityRowB: [
    "API를 통한 HMS 연동",
    "환자 및 예약 관리",
    "멀티테넌트 관리자 및 RBAC",
    "보고서 및 PDF 내보내기",
    "화자 음성 프로필",
    "웹 및 안드로이드 앱",
    "처방 지원",
  ],
  productOverview: {
    eyebrow: "제품 개요",
    title: "진료 전체를 위한 하나의 플랫폼.",
    subtitle: "예약부터 문서화, 후속 조치까지 — 처음부터 끝까지 연결됩니다.",
    steps: [
      {
        icon: "Mic",
        title: "녹음",
        description: "실시간 또는 오프라인으로 진료를 기록합니다 — 아무것도 손실되지 않습니다.",
      },
      {
        icon: "Sparkles",
        title: "이해",
        description: "AI가 대화를 기록하고 화자를 식별하며 분석합니다.",
      },
      {
        icon: "ClipboardCheck",
        title: "실행",
        description: "임상의가 요약, 코드, 후속 조치를 검토한 후 승인합니다.",
      },
    ],
  },
  demo: {
    eyebrow: "실제로 확인해보세요",
    title: "진료가 임상 기록으로 바뀌는 과정을 확인해보세요",
    subtitle:
      "이것은 AI 의료 기록 도우미의 예시 시연입니다 — 실시간 화자 식별 기록부터 임상 검토가 가능한 구조화된 요약까지의 과정을 보여줍니다.",
    cardTitle: "AI 의료 기록 도우미",
    transcribingLive: "실시간 기록 중",
    replayAria: "데모 다시 재생",
    transcribingAria: "기록 중",
    patientSrLabel: "환자: ",
    doctorSrLabel: "라오 박사: ",
    highlights: [
      {
        label: "실시간 화자 식별",
        detail: "“라오 박사” 대 “환자”를 자동으로 라벨링",
      },
      {
        label: "구조화된 임상 요약",
        detail: "검토를 위해 작성된 SOAP 형식 문서",
      },
      {
        label: "코딩 및 안전성 확인",
        detail: "ICD-10 제안 및 약물 상호작용 경고 포함",
      },
    ],
    script: [
      { from: "patient", text: "3일 전부터 미열과 마른기침이 있었어요." },
      { from: "doctor", text: "호흡곤란이나 숨을 들이쉴 때 통증이 있나요?" },
      { from: "patient", text: "통증은 없지만 가슴이 약간 답답하고 피곤함을 느꼈어요." },
      {
        from: "doctor",
        text: "안전을 위해 산소 수치를 확인하고 흉부 엑스레이를 찍겠습니다. 열에 대한 약도 처방해 드릴게요.",
      },
      { from: "system", text: "화자 식별 완료: 라오 박사 · 환자 — 4개 세그먼트 기록됨" },
      {
        from: "system",
        text: "AI 의료 기록 도우미: 요약 생성 완료 · ICD-10 제안 준비 완료 · 약물 상호작용 없음",
      },
    ],
  },
  agents: {
    eyebrow: "팀 소개",
    title: "여섯 개의 전문 에이전트, 하나의 연결된 워크플로",
    subtitle:
      "각 에이전트는 진료의 한 부분을 전담합니다 — 첫 대화부터 후속 연락까지 — 이를 통해 문서화, 코딩, 케어 조정이 추가 클릭 없이 이루어집니다.",
    items: [
      {
        icon: "Mic",
        name: "AI 의료 기록 도우미 에이전트",
        tagline: "노트는 검토만 하세요. 작성할 필요는 없습니다.",
        description:
          "진료를 녹음하고, 실시간으로 기록하며, 화자를 식별하고, SOAP 문서를 포함한 구조화된 임상 노트를 자동으로 생성합니다.",
      },
      {
        icon: "Bot",
        name: "AI 가상 의사 에이전트",
        tagline: "방문 전 안내된 대화",
        description:
          "환자와 지능적인 대화를 나누고, 증상과 병력을 수집하며, 예비 임상 평가를 수행하고, 다국어 지원으로 진료 전 환자를 안내합니다.",
      },
      {
        icon: "Pill",
        name: "AI 처방 에이전트",
        tagline: "모든 약물을 다시 한번 확인",
        description:
          "처방전을 작성하고, 약물을 추천하며, 약물 상호작용을 확인하고, 알레르기 충돌을 감지하며, 임상 검토를 위해 용량 조정을 제안합니다.",
      },
      {
        icon: "ScanLine",
        name: "의료 영상 에이전트",
        tagline: "임상의의 판독 이전에 이루어지는 첫 번째 판독",
        description:
          "엑스레이를 분석하고, CT 및 MRI를 검토하며, 진단 해석을 지원하고, 임상 검토를 위한 예비 소견을 생성합니다.",
      },
      {
        icon: "Languages",
        name: "다국어 커뮤니케이션 에이전트",
        tagline: "30개 이상의 인도어로 제공되는 진료",
        description:
          "대화를 실시간으로 번역하고, 30개 이상의 인도어를 지원하며, 다국어 요약을 생성하고, 언어 간 의사-환자 소통을 가능하게 합니다.",
      },
      {
        icon: "CalendarCheck",
        name: "후속 케어 에이전트",
        tagline: "재방문이 필요한 환자는 반드시 재방문하도록",
        description:
          "후속 조치를 예약하고, 복약 알림을 전송하며, 치료 순응도를 추적하고, 예정된 진료에 대해 환자에게 알립니다.",
      },
    ],
  },
  platform: {
    eyebrow: "제품 모듈",
    title: "클리닉에 필요한 모든 것을 하나의 시스템으로",
    subtitle:
      "MedConverse AI는 기록 기능을 넘어 환자, 예약, 후속 조치, 보고서를 하나의 멀티테넌트, 역할 기반 워크스페이스에서 관리하며, 기존 HMS에 직접 연동됩니다.",
    tablistAria: "플랫폼 기능",
    items: [
      {
        icon: "Mic",
        title: "진료 워크플로 및 AI 기록",
        description:
          "제품의 핵심 순환 구조: 시작, 녹음, 기록, 분석, 검토, 후속 조치 — 당일 일정에서 원탭으로 시작하며 세션이 자동으로 유지됩니다.",
        points: [
          "실시간 또는 오프라인 캡처, 데이터 손실 없음",
          "화자가 식별된 편집 가능한 기록",
          "AI 생성 요약 — 임상의가 검토 및 승인",
        ],
      },
      {
        icon: "FileCheck2",
        title: "임상 분석 스위트",
        description:
          "각 진료 후 AI는 의료 지식 베이스를 기반으로 임상 분석을 수행합니다 — 코딩, 투약, 안전성 신호가 요약과 함께 제공됩니다.",
        points: [
          "ICD-10 / 원인 코딩 제안",
          "투약 정보 추출 및 보강",
          "약물 간 상호작용 확인",
        ],
      },
      {
        icon: "MessageSquareHeart",
        title: "Pulse — 에이전틱 AI 어시스턴트",
        description:
          "안전하고 권한이 제한된 도구 호출을 통해 클리닉 데이터를 읽고 조치를 취하는 대화형 AI 코파일럿입니다 — 여러 번 클릭해야 하는 관리 워크플로를 한 문장으로 압축합니다.",
        points: [
          "클리닉 데이터에 대한 자연어 읽기 및 쓰기 접근",
          "테넌트 격리는 프롬프트가 아닌 SQL에서 적용",
          "모든 쓰기 작업에는 명시적 확인이 필요",
        ],
      },
      {
        icon: "CalendarClock",
        title: "환자, 예약 및 후속 조치",
        description:
          "환자 기록, 일정 관리, 후속 조치 대기열 등 완전한 클리닉 등록부가 모든 녹음과 그 분석에 직접 연결됩니다.",
        points: [
          "중복 감지 기능이 있는 환자 등록부",
          "의사별 캘린더 및 예약 일정 관리",
          "전환 추적 기능이 있는 자동 제안 후속 조치 대기열",
        ],
      },
      {
        icon: "Waypoints",
        title: "HMS 연동",
        description:
          "병원은 기존 병원 관리 시스템에 MedConverse AI를 직접 통합할 수 있습니다 — 전면 교체가 필요하지 않습니다.",
        points: [
          "API 키 관리 기능이 있는 버전 관리형 REST API",
          "세션 완료 시 웹훅 전송",
          "서명된 단기 토큰을 사용한 임베드 가능 위젯",
        ],
      },
      {
        icon: "UserCheck",
        title: "관리, 보고서 및 분석",
        description:
          "5단계 역할 계층을 통한 조직 및 사용자 관리와 함께 활동 로그, 세션 감독, 보고 기능을 제공합니다.",
        points: [
          "조직별 모듈 플래그를 통한 조직 관리",
          "관리 작업에 대한 활동 및 감사 로그",
          "대시보드 통계, PDF 내보내기 및 사용 추적",
        ],
      },
    ],
  },
  workflow: {
    eyebrow: "작동 방식",
    title: "‘시작’부터 승인까지, 다섯 단계로",
    subtitle:
      "문서화는 한순간의 일이 아니라 하나의 워크플로입니다. MedConverse AI는 임상의를 프로세스에서 배제하지 않으면서 모든 단계를 자동화합니다.",
    items: [
      {
        step: "01",
        title: "시작",
        description:
          "의사가 예약 화면에서 시작을 누릅니다. 실시간 레벨 미터와 시간 타이머가 있는 녹음 패널이 열립니다.",
      },
      {
        step: "02",
        title: "녹음",
        description:
          "온라인 상태에서는 오디오가 실시간으로 스트리밍되어 기록됩니다. 오프라인 상태에서는 로컬에 저장되며 연결이 복구되는 즉시 자동으로 업로드됩니다 — 아무것도 손실되지 않습니다.",
      },
      {
        step: "03",
        title: "기록",
        description:
          "자동 화자 분리 기능이 있는 실시간 음성 인식이 대화가 진행되는 대로 라벨을 붙입니다 — ‘스미스 박사’ 대 ‘환자’ — 음성 프로필 식별 기능을 갖추고 있습니다.",
      },
      {
        step: "04",
        title: "분석",
        description:
          "AI는 진료 요약, ICD-10 / 원인 코딩 제안, 투약 분석, 약물 상호작용 경고를 생성합니다 — 임상 검토를 위해 ‘AI 생성’으로 표시됩니다.",
      },
      {
        step: "05",
        title: "후속 조치",
        description:
          "분석 결과(또는 의사)가 후속 조치를 권장합니다. 직원은 이를 예약으로 전환하거나 거절합니다 — 어느 경우든 놓치는 일이 없습니다.",
      },
    ],
  },
  benefits: {
    eyebrow: "MedConverse를 선택하는 이유",
    title: "문서화 부담, 전가하지 않고 해결",
    subtitle:
      "MedConverse AI는 임상의를 의사결정에서 배제하지 않으면서 근무 시간 외 차트 작성을 없앱니다. 진료에 관여하는 모든 사람이 혜택을 받습니다.",
    items: [
      {
        icon: "Clock3",
        title: "의사가 자신의 시간을 되찾습니다",
        description:
          "문서화 시간을 되찾고 근무 시간 외 차트 작성을 없애세요. 관심은 온전히 환자에게 집중되고 — 기록은 저절로 작성되며, 코딩 제안과 상호작용 경고는 인지 부담을 줄이면서도 모든 결정에 대한 통제권은 당신에게 남습니다.",
      },
      {
        icon: "Blocks",
        title: "클리닉이 하나의 시스템으로 운영됩니다",
        description:
          "접수, 진료실, 후속 조치가 하나의 플랫폼에 통합되어 — 소프트웨어와 교육이 줄고, 의사 1인당 일일 진료 처리량이 늘어납니다. 후속 조치 자동화로 놓칠 뻔한 재방문을 회복할 수 있습니다.",
      },
      {
        icon: "Waypoints",
        title: "병원은 아무것도 뜯어내지 않고 도입합니다",
        description:
          "기존 HMS에 통합하여 API 키와 즉시 사용 가능한 위젯을 통해 며칠 안에 운영을 시작할 수 있습니다. 부서와 지점을 아우르는 멀티테넌트 관리, 세분화된 역할, 모듈 플래그, 중앙 감독 기능을 제공합니다.",
      },
      {
        icon: "Users",
        title: "접수 및 케어 팀이 더 빠르게 일합니다",
        description:
          "간호사는 진료 요약과 후속 조치 대기열에 즉시 접근하여 구두 인계 시 정보 손실이 줄어듭니다. 접수 담당자는 중복 감지 기능으로 환자를 더 빠르게 등록하고, Pulse는 평이한 언어로 조회 업무를 처리합니다.",
      },
    ],
  },
  languagesSection: {
    eyebrow: "모든 환자가 이해받습니다",
    title: "30개 이상의 인도어로 제공되는 진료",
    subtitle:
      "다국어 커뮤니케이션 에이전트는 대화를 실시간으로 번역하고 다국어 요약을 생성합니다 — 통역사 없이도 언어 간 의사-환자 소통이 가능해집니다.",
    moreLabel: "+ 30개 이상 언어 지원",
    note: "예시 목록입니다 — 전체 언어 지원 범위는 온보딩 과정에서 확정됩니다.",
  },
  security: {
    eyebrow: "보안 및 AI 신뢰",
    title: "보안 최우선, 한계를 아는 AI",
    subtitle:
      "모든 진료는 보호되는 건강 정보를 다루며, 모든 AI 출력은 제안일 뿐입니다. 모든 결정은 여전히 임상의의 몫입니다.",
    items: [
      {
        icon: "ServerCog",
        title: "멀티테넌트 데이터 격리",
        description:
          "조직 단위 데이터 격리는 애플리케이션 계층뿐만 아니라 모든 요청에 대해 서버 측에서 적용됩니다.",
      },
      {
        icon: "UserCheck",
        title: "5단계 역할 계층",
        description:
          "전역 관리자부터 일상 업무 담당 직원까지, 필요한 경우 의사별로 제한된 가시성을 갖춘 세분화된 서버 측 권한 부여를 제공합니다.",
      },
      {
        icon: "Lock",
        title: "서명된 단기 토큰",
        description:
          "임베드된 HMS 세션을 위한 JWT 베어러 인증과 서명된 위젯 토큰, 그리고 모든 엔드포인트에서의 서버 측 권한 부여를 제공합니다.",
      },
      {
        icon: "FileCheck2",
        title: "활동 및 오류 로깅",
        description:
          "관리 작업은 기록되어 검토가 가능하며, 중앙 집중식 오류 추적과 상태 점검이 플랫폼 전반에서 실행됩니다.",
      },
      {
        icon: "BadgeCheck",
        title: "사람이 관여하는 AI",
        description:
          "요약, 코드, 투약 경고 등 모든 임상 AI 출력은 자문 성격입니다. 기록에 반영되기 전에 임상의가 검토하고 승인합니다.",
      },
      {
        icon: "ShieldCheck",
        title: "AI 작업에는 확인이 필요합니다",
        description:
          "Pulse의 테넌트 격리는 프롬프트가 아닌 SQL에서 적용되며, 모든 AI 쓰기 작업은 실행 전 사용자의 명시적 확인이 필요합니다.",
      },
    ],
    complianceNote:
      "당사의 보안 아키텍처는 설계 단계부터 멀티테넌트 및 역할 기반으로 구축되었습니다. 규정 준수 인증(HIPAA, SOC 2)은 진행 중이며 아직 인증을 받지 않았습니다.",
  },
  faq: {
    eyebrow: "자주 묻는 질문",
    title: "질문과 답변",
    subtitle: "진료실에 AI를 도입하기 전에 클리닉 및 병원 리더들이 묻는 모든 것.",
    items: [
      {
        q: "AI가 최종 의료 기록을 작성하나요?",
        a: "아닙니다. 모든 요약, 코드, 경고는 제안일 뿐입니다. 기록에 반영되기 전에 임상의가 검토, 편집, 승인합니다.",
      },
      {
        q: "진료 도중 인터넷이 끊기면 어떻게 되나요?",
        a: "녹음은 기기에서 로컬로 계속되며 연결이 복구되면 자동으로 업로드됩니다 — 중복 방지 기능이 있어 아무것도 손실되거나 중복되지 않습니다.",
      },
      {
        q: "누가 말하는지 어떻게 알 수 있나요?",
        a: "임상의는 한 번만 짧은 음성 프로필을 등록합니다. 이후 시스템은 모든 진료에서 자동으로 이를 식별하고 환자의 발화를 분리합니다.",
      },
      {
        q: "기존 병원 시스템 내에서 작동할 수 있나요?",
        a: "네 — REST API, 웹훅, 그리고 안전한 단기 토큰으로 HMS 내에서 작동하는 임베드 가능 위젯을 통해 가능합니다.",
      },
      {
        q: "누가 우리 데이터를 볼 수 있나요?",
        a: "오직 귀사의 조직만 가능합니다. 데이터 격리는 모든 요청에 대해 데이터베이스 수준에서 적용되며, 5단계 역할 시스템이 조직 내 접근을 제어합니다.",
      },
      {
        q: "어떤 언어가 지원되나요?",
        a: "다국어 커뮤니케이션 에이전트는 실시간 번역과 다국어 요약을 위해 30개 이상의 인도어를 지원하여 언어 간 의사-환자 소통을 가능하게 합니다.",
      },
      {
        q: "의료 규정을 준수하나요?",
        a: "당사의 보안 아키텍처는 설계 단계부터 멀티테넌트 및 역할 기반이며, 규정 준수 인증 프로그램이 현재 진행 중입니다.",
      },
      {
        q: "AI 어시스턴트가 스스로 데이터를 변경할 수 있나요?",
        a: "귀하의 허락 없이는 절대 불가능합니다. Pulse는 모든 생성, 업데이트, 삭제 작업 전에 명시적인 확인을 요청합니다.",
      },
    ],
  },
  cta: {
    badge: "타이핑을 멈추세요. 귀 기울여 들으세요.",
    title: "직접 진료가 문서화되는 모습을 확인해보세요",
    subtitle:
      "20분 데모를 예약하세요 — 예시 진료를 준비해 오시면 그것이 구조화된 차트 노트로 변환되는 과정을 보실 수 있습니다.",
    logIn: "로그인",
    trustLine: "AI 지원, 임상의 승인 · 오프라인에서도 작동 · 귀사의 HMS와 연동",
  },
  footer: {
    tagline:
      "현대적인 클리닉과 병원을 위한 AI 의료 기록 도우미이자 진료 플랫폼 — 문서화, 코딩, 후속 조치를 자동으로 처리합니다.",
    columns: [
      {
        title: "제품",
        links: [
          { label: "AI 에이전트", href: "#agents" },
          { label: "플랫폼", href: "#platform" },
          { label: "작동 방식", href: "#workflow" },
          { label: "보안 및 AI 신뢰", href: "#security" },
        ],
      },
      {
        title: "회사",
        links: [
          { label: "문의하기", href: "#cta" },
          { label: "로그인", href: "https://scribe.medconverse.ai/" },
        ],
      },
      {
        title: "지원",
        links: [
          { label: "자주 묻는 질문", href: "#faq" },
          { label: "보안", href: "/security" },
        ],
      },
    ],
    copyright: "© {year} MedConverse AI. All rights reserved.",
    privacyPolicy: "개인정보 처리방침",
    termsOfService: "서비스 약관",
    security: "보안",
  },
  bookDemoDialog: {
    title: "설정된 이메일 앱이 없습니다",
    body: "이메일 애플리케이션을 열 수 없었습니다. 아래 주소로 직접 문의해 주세요 — 시작하려면 이메일 주소 또는 전체 요청 템플릿을 복사하세요.",
    ccLabel: "참조",
    copyEmail: "이메일 주소 복사",
    emailCopied: "이메일 주소가 복사되었습니다",
    copyTemplate: "이메일 템플릿 복사",
    templateCopied: "이메일 템플릿이 복사되었습니다",
    closeAria: "대화상자 닫기",
  },
  legal: {
    privacyTitle: "개인정보 처리방침",
    termsTitle: "서비스 약관",
    securityTitle: "보안",
    lastUpdated: "최종 업데이트",
    englishOnlyNotice:
      "이 문서는 현재 영어로만 제공됩니다. {language} 번역본이 곧 제공될 예정이며, 그때까지는 영어 버전이 공식 문서입니다.",
  },
};

export default ko;
