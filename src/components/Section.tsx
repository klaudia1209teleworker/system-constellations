import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  eyebrow?: string
  lead?: string
  children: ReactNode
  tone?: 'default' | 'surface' | 'notice'
  width?: 'reading' | 'wide'
}

export function Section({
  id,
  title,
  eyebrow,
  lead,
  children,
  tone = 'default',
  width = 'reading',
}: SectionProps) {
  const bg =
    tone === 'surface' || tone === 'notice' ? 'bg-surface' : 'bg-bg'
  const max = width === 'wide' ? 'max-w-5xl' : 'max-w-3xl'

  return (
    <section id={id} className={`${bg} py-16 md:py-24`}>
      <div className={`mx-auto ${max} px-4 md:px-8`}>
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium tracking-wide text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">
          {title}
        </h2>
        <div className="section-rule mt-4 mb-6" aria-hidden="true" />
        {lead ? (
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
            {lead}
          </p>
        ) : (
          <div className="mb-8" />
        )}
        <div className="text-base leading-relaxed text-text">{children}</div>
      </div>
    </section>
  )
}
