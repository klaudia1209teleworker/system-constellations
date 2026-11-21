export type Locale = 'zh' | 'en'

export interface NavLink {
  href: string
  label: string
}

export interface LabelValue {
  label: string
  value: string
}

export interface StepItem {
  title: string
  body: string
}

export interface SplitItem {
  title: string
  body: string
  note?: string
  bullets?: string[]
}

export interface TopicItem {
  title: string
  subtitle?: string
  bullets?: string[]
  detail?: string
}

export interface PriceColumn {
  title: string
  price: string
  note: string
  steps: StepItem[]
}

export interface ScheduleRow {
  month: string
  days: string
}

export interface SiteContent {
  meta: {
    title: string
    description: string
  }
  nav: {
    aria: string
    links: NavLink[]
    langZh: string
    langEn: string
    langSwitcherAria: string
  }
  hero: {
    title: string
    lead: string
    cta: string
    noticeLink: string
  }
  intro: {
    title: string
    eyebrow: string
    lead: string
    paragraphs: string[]
    indexTitle: string
    index: { href: string; label: string; desc: string }[]
    closing: string
  }
  notice: {
    title: string
    lead: string
    callouts: { title: string; body: string }[]
    processTitle: string
    steps: StepItem[]
    copyright: string
    cta: string
  }
  curriculum: {
    title: string
    eyebrow: string
    lead: string
    section1: string
    pillars: SplitItem[]
    approachesTitle: string
    approaches: LabelValue[]
    classicalNote: string
    section2: string
    intentLead: string
    intentItems: string[]
    section3: string
    methods: SplitItem[]
    methodsNote: string
    section4: string
    process: StepItem[]
    section5: string
    topics: TopicItem[]
    topicsNote: string
  }
  terms: {
    title: string
    lead: string
    expectationsLead: string
    expectations: string[]
    specialTitle: string
    specialCalloutTitle: string
    specialParagraphs: string[]
    partnersTitle: string
    partnersBody: string
    privacyTitle: string
    privacyParagraphs: string[]
    homeworkTitle: string
    homeworkLead: string
    homeworkOneTitle: string
    homeworkOneBody: string
    copyrightTitle: string
    copyrightFacts: LabelValue[]
  }
  certification: {
    title: string
    lead: string
    attendance: SplitItem
    professional: SplitItem
  }
  teacher: {
    title: string
    timeline: LabelValue[]
    servicesTitle: string
    services: string[]
    credentialsTitle: string
    credentials: string[]
  }
  enroll: {
    title: string
    lead: string
    facts: LabelValue[]
    scheduleTitle: string
    scheduleMonthLabel: string
    scheduleDaysLabel: string
    schedule: ScheduleRow[]
    paymentTitle: string
    prices: PriceColumn[]
    prepareTitle: string
    prepareItems: string[]
    remittanceOrderNote: string
    refundTitle: string
    refundSteps: StepItem[]
    cta: string
  }
  line: {
    title: string
    cta: string
    closing: string
    notes: string[]
  }
  footer: {
    brand: string
    copyright: string
  }
  cta: {
    applyViaLine: string
  }
}
