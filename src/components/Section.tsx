import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
  tone?: 'default' | 'surface' | 'notice'
}

export function Section({
  id,
  title,
  eyebrow,
  children,
  tone = 'default',
}: SectionProps) {
  const bg =
    tone === 'surface'
      ? 'bg-surface'
      : tone === 'notice'
        ? 'bg-surface'
        : 'bg-bg'

  return (
    <section id={id} className={`${bg} py-16 md:py-24`}>
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium tracking-wide text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">
          {title}
        </h2>
        <div className="section-rule mt-4 mb-8" aria-hidden="true" />
        <div className="prose-block text-base leading-relaxed text-text">
          {children}
        </div>
      </div>
    </section>
  )
}
