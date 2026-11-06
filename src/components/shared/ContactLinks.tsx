"use client";

import { ExternalLink, Phone } from "lucide-react";
import { phoneHref, site, whatsappHref } from "@/data/site";
import { useLocale } from "./LocaleProvider";

export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5.500" />
      <circle cx="12" cy="12" r="4.200" />
      <circle cx="17.300" cy="6.700" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M3.500 20.500 5 16.200A8.500 8.500 0 1 1 8.300 19.300L3.500 20.500Z"
      />
      <path
        fill="currentColor"
        d="M9.300 8c.3 0 .5 0 .6.400l.7 1.600c.1.300 0 .5-.1.700l-.5.600c-.2.200-.2.400 0 .6.700 1.200 1.600 2 2.800 2.600.2.100.4.100.6-.1l.7-.8c.2-.2.400-.3.700-.2l1.500.7c.3.200.4.300.4.600 0 1.300-1 2-2.300 2-3.400 0-6.700-3.300-6.700-6.600C8 8.900 8.700 8 9.300 8Z"
      />
    </svg>
  );
}

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

export function CallButton({ className = "btn btn-gold" }: { className?: string }) {
  const { t } = useLocale();
  return (
    <a href={phoneHref} className={className}>
      <Phone className="size-[18px]" aria-hidden="true" />
      {t.contacts.call}
    </a>
  );
}

export function InstagramButton({
  className = "btn btn-white",
  label = "Instagram",
}: {
  className?: string;
  label?: string;
}) {
  const { t } = useLocale();
  return (
    <a
      href={site.instagram.url}
      {...externalProps}
      aria-label={`${label} — ${site.instagram.handle} (${t.a11y.newTab})`}
      className={className}
    >
      <InstagramIcon className="size-[18px]" />
      {label}
    </a>
  );
}

/** Появится сам, как только в src/data/site.ts указан номер WhatsApp. */
export function WhatsAppButton({ className = "btn btn-white" }: { className?: string }) {
  const { t } = useLocale();
  const href = whatsappHref();
  if (!href) return null;
  return (
    <a href={href} {...externalProps} aria-label={`WhatsApp (${t.a11y.newTab})`} className={className}>
      <WhatsAppIcon className="size-[18px]" />
      WhatsApp
    </a>
  );
}

export function ExternalMark({ className = "size-4" }: { className?: string }) {
  return <ExternalLink className={className} aria-hidden="true" />;
}
