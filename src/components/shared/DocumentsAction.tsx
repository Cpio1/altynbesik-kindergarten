"use client";

import { FileText } from "lucide-react";
import { documentsHref } from "@/data/site";
import { CallButton, ExternalMark } from "./ContactLinks";
import { useLocale } from "./LocaleProvider";

/**
 * Кнопка «Құжаттарды қарау» появляется, когда в src/data/site.ts указан documentsUrl.
 * До этого вместо неё показывается кнопка звонка.
 */
export function useDocumentsText(): string {
  const { t } = useLocale();
  return documentsHref() ? t.documents.withLink : t.documents.withoutLink;
}

export function DocumentsAction({ className = "btn btn-ink" }: { className?: string }) {
  const { t } = useLocale();
  const href = documentsHref();

  if (!href) return <CallButton className={className} />;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.documents.view} (${t.a11y.newTab})`}
      className={className}
    >
      <FileText className="size-[18px]" aria-hidden="true" />
      {t.documents.view}
      <ExternalMark />
    </a>
  );
}
