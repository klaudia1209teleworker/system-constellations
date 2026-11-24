import { useLocale } from '../i18n/useLocale'

export function SiteNav() {
  const { t } = useLocale()

  return (
    <nav
      className="sticky top-0 z-40 border-b border-border/70 bg-bg/90 backdrop-blur-sm"
      aria-label={t.nav.aria}
    >
      <div className="mx-auto flex max-w-5xl items-center overflow-x-auto px-4 py-3 md:px-8">
        <div className="flex min-w-0 items-center gap-1 overflow-x-auto">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-md px-2.5 py-1.5 text-sm text-muted transition hover:bg-surface hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
