"use client";

import { useLocale } from "./LocaleProvider";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a
      href="#main"
      className="btn btn-ink fixed top-2 left-2 z-[60] -translate-y-24 focus-visible:translate-y-0"
    >
      {t.a11y.skip}
    </a>
  );
}
