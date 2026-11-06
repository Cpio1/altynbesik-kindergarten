"use client";

import type { Locale } from "@/data/translations";
import { useLocale } from "./LocaleProvider";

const options: { locale: Locale; label: string; lang: string }[] = [
  { locale: "kk", label: "KZ", lang: "kk" },
  { locale: "ru", label: "RU", lang: "ru" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className={`inline-flex rounded-full bg-butter/80 p-[3px] ${className}`}
    >
      {options.map((option) => {
        const active = option.locale === locale;
        return (
          <button
            key={option.locale}
            type="button"
            lang={option.lang}
            aria-pressed={active}
            onClick={() => setLocale(option.locale)}
            className={`flex h-8 min-w-9 cursor-pointer items-center justify-center rounded-full px-2 text-[13px] font-extrabold transition-colors duration-200 ${
              active ? "bg-ink text-milk" : "text-ink hover:bg-white/70"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
