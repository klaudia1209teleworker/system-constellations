import type { ReactNode } from 'react'

export function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-12 scroll-mt-24 text-xl font-semibold text-text first:mt-0 md:text-2xl">
      {children}
    </h3>
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
  steps: { title: string; body?: ReactNode }[]
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
  children,
}: {
  tone?: 'highlight' | 'accent' | 'primary'
  title?: string
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
        <p className={`font-semibold ${titleColor}`}>{title}</p>
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
    <div className="mt-6 grid gap-6 md:grid-cols-2">
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
  topics: { title: string; en?: string; detail?: ReactNode }[]
}) {
  return (
    <ol className="mt-6 divide-y divide-border border-y border-border">
      {topics.map((topic, index) => (
        <li key={topic.title} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr]">
          <span className="font-serif text-lg font-bold text-secondary">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="font-medium text-primary">{topic.title}</p>
            {topic.en ? (
              <p className="mt-1 text-sm text-muted">{topic.en}</p>
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

/** 檢查清單 */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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
}: {
  rows: { month: string; days: string }[]
}) {
  return (
    <div className="mt-6 overflow-hidden border border-border">
      <table className="w-full text-left text-sm md:text-base">
        <thead className="bg-primary text-surface">
          <tr>
            <th className="px-4 py-3 font-medium">月份</th>
            <th className="px-4 py-3 font-medium">上課日期</th>
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

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
