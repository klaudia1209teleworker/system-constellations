import { createContext } from 'react'
import type { Locale, SiteContent } from './types'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: SiteContent
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
