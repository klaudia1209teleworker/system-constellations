const links = [
  { href: '#notice', label: '注意事項' },
  { href: '#curriculum', label: '課程內容' },
  { href: '#terms', label: '條款' },
  { href: '#certification', label: '認證' },
  { href: '#teacher', label: '講師' },
  { href: '#enroll', label: '報名' },
]

export function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-40 border-b border-border/70 bg-bg/90 backdrop-blur-sm"
      aria-label="頁面導覽"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-4 py-3 md:px-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-md px-2.5 py-1.5 text-sm text-muted transition hover:bg-surface hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
