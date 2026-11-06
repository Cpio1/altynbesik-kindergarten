"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  translations,
  type Locale,
  type Translation,
} from "@/data/translations";

type LocaleContextValue = {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const listeners = new Set<() => void>();
let memoryLocale: Locale | null = null;

function readLocale(): Locale {
  if (memoryLocale) return memoryLocale;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    memoryLocale = stored === "ru" || stored === "kk" ? stored : DEFAULT_LOCALE;
  } catch {
    memoryLocale = DEFAULT_LOCALE;
  }
  return memoryLocale;
}

function writeLocale(locale: Locale) {
  memoryLocale = locale;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Без доступа к хранилищу язык действует до перезагрузки страницы.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getServerLocale = () => DEFAULT_LOCALE;

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Сервер и первая гидрация видят казахский; сохранённый язык применяется сразу после неё.
  const locale = useSyncExternalStore(subscribe, readLocale, getServerLocale);
  const value = useMemo<LocaleContextValue>(
    () => ({ locale, t: translations[locale], setLocale: writeLocale }),
    [locale],
  );

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.classList.remove("locale-pending");
    document.title = translations[locale].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[locale].meta.description);
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
