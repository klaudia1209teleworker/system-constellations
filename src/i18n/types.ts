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
  subtitle?: string
  body: string
}

export interface BilingualName {
  title: string
  subtitle?: string
}

export type BulletItem = string | BilingualName

export interface SplitItem {
  title: string
  body: string
  note?: string
  bullets?: string[]
}

export interface TopicItem {
  title: string
  subtitle?: string
  bullets?: BulletItem[]
  detail?: string
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
    themesTitle: string
    themes: string[]
    audienceTitle: string
    audience: string[]
    facts: LabelValue[]
    closing: string
  }
  curriculum: {
    title: string
    eyebrow: string
    lead: string
    section1: string
    section1En?: string
    pillars: SplitItem[]
    approachesTitle: string
    approaches: BilingualName[]
    approachesNote: string
    section2: string
    section2En?: string
    intentLead: string
    intentItems: string[]
    section3: string
    section3En?: string
    methods: SplitItem[]
    methodsNote: string
    section4: string
    section4En?: string
    process: StepItem[]
    section5: string
    section5En?: string
    topics: TopicItem[]
    topicsNote: string
  }
  terms: {
    title: string
    lead: string
    attendanceTitle: string
    attendanceItems: string[]
    learningTitle: string
    learningBody: string
    growthTitle: string
    growthBody: string
    attitudeTitle: string
    attitudeLead: string
    attitudeItems: string[]
    specialTitle: string
    specialTitleEn?: string
    specialCalloutTitle: string
    specialParagraphs: string[]
    partnersTitle: string
    partnersBody: string
    privacyTitle: string
    privacyParagraphs: string[]
    homeworkTitle: string
    homeworkLead: string
    homeworkOneTitle: string
    homeworkOneTitleEn?: string
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
  overview: {
    title: string
    lead: string
    facts: LabelValue[]
    scheduleTitle: string
    scheduleMonthLabel: string
    scheduleDaysLabel: string
    schedule: { month: string; days: string }[]
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
}
