import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LocaleContext } from './context'
import { en } from './en'
import type { Locale, SiteContent } from './types'
import { zh } from './zh'

const STORAGE_KEY = 'sc-locale'

function readStoredLocale(): Locale {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'en' || value === 'zh') return value
  } catch {
    /* ignore */
  }
  return 'zh'
}

function applyDocumentLanguage(locale: Locale, content: SiteContent) {
  const htmlLang = locale === 'zh' ? 'zh-Hant' : 'en'
  document.documentElement.lang = htmlLang
  document.title = content.meta.title

  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', content.meta.description)
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'zh' : readStoredLocale(),
  )

  const t = locale === 'en' ? en : zh

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    applyDocumentLanguage(locale, t)
  }, [locale, t])

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}
