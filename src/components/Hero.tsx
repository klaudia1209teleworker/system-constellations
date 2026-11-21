import { useLocale } from '../i18n/useLocale'
import { LanguageSwitcher } from './LanguageSwitcher'
import { LineCta } from './LineCta'

export function Hero() {
  const { t } = useLocale()

  return (
    <header className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <div className="hero-plane absolute inset-0" aria-hidden="true" />
      <div
        className="hero-grain pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
      />

      <div className="absolute right-4 top-4 z-20 md:right-8 md:top-6">
        <LanguageSwitcher />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-16 pt-28 md:px-8 md:pb-24">
        <p className="animate-soft-rise mb-4 text-sm font-medium tracking-[0.18em] text-secondary">
          STEPHEN VICTOR
        </p>
        <h1 className="animate-fade-up font-serif text-4xl font-bold leading-tight text-surface md:text-5xl">
          {t.hero.title}
        </h1>
        <p className="animate-soft-rise mt-5 max-w-xl text-base leading-relaxed text-surface/90 md:text-lg">
          {t.hero.lead}
        </p>
        <div className="animate-soft-rise mt-8 flex flex-wrap items-center gap-4">
          <LineCta variant="surface" label={t.hero.cta} />
          <a
            href="#notice"
            className="text-sm font-medium text-surface/85 underline-offset-4 transition hover:text-surface hover:underline"
          >
            {t.hero.noticeLink}
          </a>
        </div>
      </div>
    </header>
  )
}
