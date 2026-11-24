import { Hero } from './components/Hero'
import { LineCta } from './components/LineCta'
import { ScheduleOpenButton } from './components/ScheduleOpenButton'
import { Section } from './components/Section'
import { SiteNav } from './components/SiteNav'
import {
  BulletList,
  Callout,
  CheckList,
  FactGrid,
  SplitBlocks,
  StepList,
  Subheading,
  TopicRows,
} from './components/ui'
import { useLocale } from './i18n/useLocale'
import { LINE_ID, LINE_URL } from './lib/constants'

export default function App() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen">
      <Hero />
      <SiteNav />

      <Section
        id="intro"
        title={t.intro.title}
        eyebrow={t.intro.eyebrow}
        lead={t.intro.lead}
      >
        <div className="max-w-2xl space-y-4">
          {t.intro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 28)}>{paragraph}</p>
          ))}
        </div>

        <Subheading>{t.intro.themesTitle}</Subheading>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3">
          {t.intro.themes.map((theme, index) => (
            <li
              key={theme}
              className="border-t-2 border-secondary pt-3"
            >
              <span className="font-serif text-sm font-bold text-secondary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 font-medium text-primary">{theme}</p>
            </li>
          ))}
        </ol>

        <Subheading>{t.intro.audienceTitle}</Subheading>
        <CheckList items={t.intro.audience} />

        <FactGrid items={t.intro.facts} />
        <p className="mt-8 text-muted">{t.intro.closing}</p>
        <div className="mt-6">
          <LineCta label={t.hero.cta} />
        </div>
      </Section>

      <Section
        id="curriculum"
        title={t.curriculum.title}
        eyebrow={t.curriculum.eyebrow}
        width="wide"
        lead={t.curriculum.lead}
      >
        <Subheading>{t.curriculum.section1}</Subheading>
        <SplitBlocks items={t.curriculum.pillars} />

        <h4 className="mt-8 text-lg font-semibold text-primary">
          {t.curriculum.approachesTitle}
        </h4>
        <CheckList items={t.curriculum.approaches} />
        <p className="mt-6 max-w-3xl">{t.curriculum.approachesNote}</p>

        <Subheading>{t.curriculum.section2}</Subheading>
        <p className="max-w-3xl">{t.curriculum.intentLead}</p>
        <CheckList items={t.curriculum.intentItems} />

        <Subheading>{t.curriculum.section3}</Subheading>
        <SplitBlocks items={t.curriculum.methods} />
        <p className="mt-6 max-w-3xl text-muted">{t.curriculum.methodsNote}</p>

        <Subheading>{t.curriculum.section4}</Subheading>
        <StepList steps={t.curriculum.process} />

        <Subheading>{t.curriculum.section5}</Subheading>
        <TopicRows
          topics={t.curriculum.topics.map((topic) => ({
            title: topic.title,
            subtitle: topic.subtitle,
            detail: topic.bullets ? (
              <BulletList items={topic.bullets} />
            ) : (
              topic.detail
            ),
          }))}
        />
        <p className="mt-6 max-w-3xl text-muted">{t.curriculum.topicsNote}</p>
      </Section>

      <Section
        id="terms"
        title={t.terms.title}
        tone="surface"
        width="wide"
        lead={t.terms.lead}
      >
        <Subheading>{t.terms.attendanceTitle}</Subheading>
        <CheckList items={t.terms.attendanceItems} />

        <Subheading>{t.terms.learningTitle}</Subheading>
        <p className="max-w-3xl">{t.terms.learningBody}</p>

        <Subheading>{t.terms.growthTitle}</Subheading>
        <p className="max-w-3xl">{t.terms.growthBody}</p>

        <Subheading>{t.terms.attitudeTitle}</Subheading>
        <p className="max-w-3xl">{t.terms.attitudeLead}</p>
        <CheckList items={t.terms.attitudeItems} />

        <Subheading>{t.terms.specialTitle}</Subheading>
        <Callout tone="highlight" title={t.terms.specialCalloutTitle}>
          {t.terms.specialParagraphs.map((paragraph, index) => (
            <p key={paragraph.slice(0, 24)} className={index > 0 ? 'mt-3' : ''}>
              {paragraph}
            </p>
          ))}
        </Callout>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="border-t border-border pt-4">
            <h4 className="text-lg font-semibold text-primary">
              {t.terms.partnersTitle}
            </h4>
            <p className="mt-3">{t.terms.partnersBody}</p>
          </div>
          <div className="border-t border-border pt-4 md:col-span-2">
            <h4 className="text-lg font-semibold text-primary">
              {t.terms.privacyTitle}
            </h4>
            {t.terms.privacyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mt-3">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Subheading>{t.terms.homeworkTitle}</Subheading>
        <p>{t.terms.homeworkLead}</p>
        <Callout tone="primary" title={t.terms.homeworkOneTitle}>
          {t.terms.homeworkOneBody}
        </Callout>

        <Subheading>{t.terms.copyrightTitle}</Subheading>
        <FactGrid items={t.terms.copyrightFacts} />
      </Section>

      <Section
        id="certification"
        title={t.certification.title}
        width="wide"
        lead={t.certification.lead}
      >
        <SplitBlocks
          items={[
            {
              title: t.certification.attendance.title,
              body: (
                <>
                  {t.certification.attendance.note ? (
                    <p className="text-sm text-muted">
                      {t.certification.attendance.note}
                    </p>
                  ) : null}
                  <CheckList
                    items={t.certification.attendance.bullets ?? []}
                  />
                </>
              ),
            },
            {
              title: t.certification.professional.title,
              body: (
                <>
                  {t.certification.professional.note ? (
                    <p className="text-sm text-muted">
                      {t.certification.professional.note}
                    </p>
                  ) : null}
                  <CheckList
                    items={t.certification.professional.bullets ?? []}
                  />
                </>
              ),
            },
          ]}
        />
      </Section>

      <Section
        id="teacher"
        title={t.teacher.title}
        tone="surface"
        width="wide"
      >
        <FactGrid items={t.teacher.timeline} />

        <Subheading>{t.teacher.servicesTitle}</Subheading>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.teacher.services.map((item) => (
            <div
              key={item}
              className="border-l-2 border-secondary py-1 pl-3 text-text"
            >
              {item}
            </div>
          ))}
        </div>

        <Subheading>{t.teacher.credentialsTitle}</Subheading>
        <ul className="mt-4 space-y-0 border-y border-border">
          {t.teacher.credentials.map((item) => (
            <li
              key={item}
              className="border-b border-border py-3 font-medium text-primary last:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="overview"
        title={t.overview.title}
        width="wide"
        lead={t.overview.lead}
      >
        <FactGrid items={t.overview.facts} />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ScheduleOpenButton />
          <LineCta label={t.overview.cta} />
        </div>
      </Section>

      <section
        id="line"
        className="border-t border-border bg-primary py-16 text-surface md:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <h2 className="font-serif text-2xl font-bold md:text-3xl">
                {t.line.title}
              </h2>
              <p className="mt-3 text-secondary">ID: {LINE_ID}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <LineCta variant="surface" label={t.line.cta} />
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary underline-offset-4 hover:underline"
                >
                  {LINE_ID}
                </a>
              </div>
              <p className="mt-10 font-serif text-lg text-surface/95">
                {t.line.closing}
              </p>
            </div>
            <ol className="space-y-4 border-t border-secondary/40 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              {t.line.notes.map((item, index) => (
                <li key={item} className="flex gap-3 text-surface/90">
                  <span className="font-serif text-secondary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-bg py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>{t.footer.brand}</p>
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
