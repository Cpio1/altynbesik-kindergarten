"use client";

import { twoGisFirmUrl, twoGisWidgetUrl } from "@/data/site";
import { ExternalMark } from "./ContactLinks";
import { useLocale } from "./LocaleProvider";

export function MapEmbed({ className = "" }: { className?: string }) {
  const { t } = useLocale();

  return (
    <div className={`relative overflow-hidden bg-white shadow-soft ${className}`}>
      <iframe
        src={twoGisWidgetUrl}
        title={t.contacts.mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0"
      />
    </div>
  );
}

export function MapLink({ className = "" }: { className?: string }) {
  const { t } = useLocale();
  return (
    <a
      href={twoGisFirmUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.contacts.openMap} (${t.a11y.newTab})`}
      className={className}
    >
      {t.contacts.openMap}
      <ExternalMark />
    </a>
  );
}
