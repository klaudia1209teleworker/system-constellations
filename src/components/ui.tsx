import type { ReactNode } from 'react'

export function Subheading({
  children,
  subtitle,
}: {
  children: ReactNode
  subtitle?: string
}) {
  return (
    <div className="mt-12 scroll-mt-24 first:mt-0">
      <h3 className="text-xl font-semibold text-text md:text-2xl">{children}</h3>
      {subtitle ? (
        <p className="mt-1 text-sm font-normal text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export function SubheadingSm({ children }: { children: ReactNode }) {
  return (
    <h4 className="mt-8 text-lg font-semibold text-primary">{children}</h4>
  )
}

/** 關鍵資訊列／格 — 非卡片，僅以分隔線建立結構 */
export function FactGrid({
  items,
}: {
  items: { label: string; value: ReactNode }[]
}) {
  return (
    <dl className="mt-6 grid gap-0 border-y border-border sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="border-b border-border px-0 py-4 last:border-b-0 sm:border-b sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
        >
          <dt className="text-sm font-medium tracking-wide text-muted">
            {item.label}
          </dt>
          <dd className="mt-1.5 text-base leading-relaxed text-text">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** 步驟／流程 — 左側數字軌 */
export function StepList({
  steps,
}: {
  steps: { title: string; subtitle?: string; body?: ReactNode }[]
}) {
  return (
    <ol className="mt-6 space-y-0">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <div className="flex w-8 shrink-0 flex-col items-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-bold text-surface">
              {index + 1}
            </span>
            {index < steps.length - 1 ? (
              <span
                className="mt-1 w-px flex-1 bg-border"
                aria-hidden="true"
              />
            ) : null}
          </div>
          <div className={index < steps.length - 1 ? 'pb-8' : ''}>
            <p className="pt-1 font-medium text-primary">{step.title}</p>
            {step.subtitle ? (
              <p className="mt-0.5 text-sm text-muted">{step.subtitle}</p>
            ) : null}
            {step.body ? (
              <div className="mt-2 text-base leading-relaxed text-text">
                {step.body}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

/** 警示／重點條 */
export function Callout({
  tone = 'highlight',
  title,
  subtitle,
  children,
}: {
  tone?: 'highlight' | 'accent' | 'primary'
  title?: string
  subtitle?: string
  children: ReactNode
}) {
  const border =
    tone === 'accent'
      ? 'border-accent'
      : tone === 'primary'
        ? 'border-primary'
        : 'border-highlight'
  const titleColor =
    tone === 'accent'
      ? 'text-accent'
      : tone === 'primary'
        ? 'text-primary'
        : 'text-highlight'

  return (
    <aside
      className={`mt-6 border-l-[3px] ${border} bg-surface/80 py-4 pl-4 pr-3`}
    >
      {title ? (
        <div>
          <p className={`font-semibold ${titleColor}`}>{title}</p>
          {subtitle ? (
            <p className="mt-0.5 text-sm font-normal text-muted">{subtitle}</p>
          ) : null}
        </div>
      ) : null}
      <div
        className={`text-base leading-relaxed text-text ${title ? 'mt-2' : ''}`}
      >
        {children}
      </div>
    </aside>
  )
}

/** 雙欄支柱／對照 */
export function SplitBlocks({
  items,
}: {
  items: { title: string; body: ReactNode }[]
}) {
  return (
    <div
      className={`mt-6 grid gap-6 md:grid-cols-2 ${
        items.length >= 3 ? 'lg:grid-cols-3' : ''
      }`}
    >
      {items.map((item, index) => (
        <div
          key={item.title}
          className="border-t-2 border-secondary pt-4"
        >
          <p className="font-serif text-sm font-bold tracking-wide text-secondary">
            {String(index + 1).padStart(2, '0')}
          </p>
          <p className="mt-2 font-semibold text-primary">{item.title}</p>
          <div className="mt-2 text-base leading-relaxed text-text">
            {item.body}
          </div>
        </div>
      ))}
    </div>
  )
}

/** 主題條列（課程大綱） */
export function TopicRows({
  topics,
}: {
  topics: {
    title: string
    subtitle?: string
    detail?: ReactNode
  }[]
}) {
  return (
    <ol className="mt-6 divide-y divide-border border-y border-border">
      {topics.map((topic, index) => (
        <li
          key={`${index}-${topic.title}`}
          className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr]"
        >
          <span className="font-serif text-lg font-bold text-secondary">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="font-medium text-primary">{topic.title}</p>
            {topic.subtitle && topic.subtitle !== topic.title ? (
              <p className="mt-1 text-sm text-muted">{topic.subtitle}</p>
            ) : null}
            {topic.detail ? (
              <div className="mt-3 text-base leading-relaxed text-text">
                {topic.detail}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

/** 檢查清單（圓點採 CI secondary） */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
            aria-hidden="true"
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** 課表月曆格 */
export function ScheduleGrid({
  rows,
  monthLabel = '月份',
  daysLabel = '上課日期',
}: {
  rows: { month: string; days: string }[]
  monthLabel?: string
  daysLabel?: string
}) {
  return (
    <div className="mt-6 overflow-hidden border border-border">
      <table className="w-full text-left text-sm md:text-base">
        <thead className="bg-primary text-surface">
          <tr>
            <th className="px-4 py-3 font-medium">{monthLabel}</th>
            <th className="px-4 py-3 font-medium">{daysLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.month}
              className="border-t border-border odd:bg-surface/60"
            >
              <th className="whitespace-nowrap px-4 py-3 font-medium text-primary">
                {row.month}
              </th>
              <td className="px-4 py-3 text-text">{row.days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** 費用對照 */
export function PriceCompare({
  columns,
}: {
  columns: {
    title: string
    price: string
    note?: string
    steps: { title: string; body: string }[]
  }[]
}) {
  return (
    <div className="mt-6 grid gap-8 md:grid-cols-2">
      {columns.map((col) => (
        <div key={col.title} className="border-t-2 border-primary pt-5">
          <p className="text-sm font-medium tracking-wide text-muted">
            {col.title}
          </p>
          <p className="mt-2 font-serif text-2xl font-bold text-primary">
            {col.price}
          </p>
          {col.note ? (
            <p className="mt-2 text-sm text-muted">{col.note}</p>
          ) : null}
          <ol className="mt-5 space-y-4">
            {col.steps.map((step, i) => (
              <li key={step.title}>
                <p className="font-medium text-primary">
                  {i + 1}. {step.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  )
}

/** 章節目錄捷徑 */
export function IndexLinks({
  items,
}: {
  items: { href: string; label: string; desc?: string }[]
}) {
  return (
    <nav className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="本頁章節">
      {items.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          className="group flex gap-3 border-b border-border py-3 transition hover:border-primary"
        >
          <span className="font-serif text-lg font-bold text-secondary group-hover:text-primary">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>
            <span className="block font-medium text-primary">{item.label}</span>
            {item.desc ? (
              <span className="mt-1 block text-sm text-muted">{item.desc}</span>
            ) : null}
          </span>
        </a>
      ))}
    </nav>
  )
}

export type BulletItem = string | { title: string; subtitle?: string }

export function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => {
        if (typeof item === 'string') {
          return (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          )
        }
        return (
          <li key={item.title} className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
              aria-hidden="true"
            />
            <span>
              <span className="font-medium text-text">{item.title}</span>
              {item.subtitle ? (
                <span className="mt-0.5 block text-sm text-muted">
                  {item.subtitle}
                </span>
              ) : null}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

/** 雙語名稱列表（中文主標＋英文次行；預設橫向欄位） */
export function BilingualNameList({
  items,
  layout = 'row',
}: {
  items: { title: string; subtitle?: string }[]
  layout?: 'row' | 'stack'
}) {
  const listClass =
    layout === 'row'
      ? 'mt-4 grid gap-6 sm:grid-cols-3'
      : 'mt-4 space-y-4'
  const itemClass =
    layout === 'row'
      ? 'border-t-2 border-secondary pt-3'
      : 'border-l-2 border-secondary pl-3'

  return (
    <ul className={listClass}>
      {items.map((item) => (
        <li key={item.title} className={itemClass}>
          <p className="font-medium text-primary">{item.title}</p>
          {item.subtitle ? (
            <p className="mt-0.5 text-sm text-muted">{item.subtitle}</p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

function BadgeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="9" r="5.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.25 13.5 8 21l4-2.25L16 21l-1.25-7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m10.25 8.75 1.2 1.2 2.55-2.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** 認證／徽章列表：無匡線，以 badge icon 標示 */
export function BadgeList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <BadgeIcon className="h-5 w-5" />
          </span>
          <span className="pt-1 font-medium text-primary">{item}</span>
        </li>
      ))}
    </ul>
  )
}
