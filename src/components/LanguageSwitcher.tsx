import { useLocale } from '../i18n/useLocale'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      className="ml-auto flex shrink-0 items-center gap-0.5 rounded-md border border-border bg-surface p-0.5"
      role="group"
      aria-label={t.nav.langSwitcherAria}
    >
      <button
        type="button"
        onClick={() => setLocale('zh')}
        aria-pressed={locale === 'zh'}
        className={`rounded px-2.5 py-1 text-sm font-medium transition ${
          locale === 'zh'
            ? 'bg-primary text-surface'
            : 'text-muted hover:text-primary'
        }`}
      >
        {t.nav.langZh}
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={`rounded px-2.5 py-1 text-sm font-medium transition ${
          locale === 'en'
            ? 'bg-primary text-surface'
            : 'text-muted hover:text-primary'
        }`}
      >
        {t.nav.langEn}
      </button>
    </div>
  )
}
