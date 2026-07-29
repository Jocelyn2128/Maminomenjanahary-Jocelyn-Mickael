import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { Language } from "./types"
import fr from "./fr"
import en from "./en"

const translations: Record<string, unknown> = { fr, en }

function getNested(obj: unknown, path: string): string {
  const keys = path.split(".")
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  if (typeof current === "string") return current
  return path
}

type I18nContextType = {
  lang: Language
  setLang: (lang: Language) => void
  t: (path: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr")
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null
    if (stored === "fr" || stored === "en") {
      setLangState(stored)
    }
  }, [])
  const setLang = (next: Language) => {
    setLangState(next)
    try {
      localStorage.setItem("lang", next)
    } catch {}
  }
  const t = (path: string) => getNested(translations[lang], path)
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return ctx
}
