import { LINE_ID, LINE_URL } from '../lib/constants'

interface LineCtaProps {
  label?: string
  variant?: 'primary' | 'surface' | 'outline'
  className?: string
}

export function LineCta({
  label = '透過官方 Line 申請',
  variant = 'primary',
  className = '',
}: LineCtaProps) {
  const base =
    'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

  const styles =
    variant === 'surface'
      ? 'bg-surface text-primary hover:bg-bg'
      : variant === 'outline'
        ? 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-surface'
        : 'bg-primary text-surface hover:bg-highlight'

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      aria-label={`${label}（${LINE_ID}）`}
    >
      {label}
    </a>
  )
}
