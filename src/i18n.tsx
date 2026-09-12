import { createContext, useContext, useEffect, useState } from 'react'
import { content, type Language } from './content'

type TranslationContext = {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof content)[Language]
}

const I18nContext = createContext<TranslationContext | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('portfolio-language')
    return saved === 'es' ? 'es' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: content[language] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useTranslation must be used inside I18nProvider')
  return context
}
