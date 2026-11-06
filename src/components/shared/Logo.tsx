"use client";

import { site } from "@/data/site";
import { LogoMark } from "./Illustrations";
import { useLocale } from "./LocaleProvider";

export function Logo({
  markClass = "size-10",
  textClass = "text-[20px]",
  onClick,
}: {
  markClass?: string;
  textClass?: string;
  onClick?: () => void;
}) {
  const { t } = useLocale();
  return (
    <a
      href="#top"
      aria-label={t.a11y.home}
      onClick={onClick}
      className="inline-flex shrink-0 items-center gap-2"
    >
      <LogoMark className={markClass} />
      <span className={`font-display font-bold tracking-tight ${textClass}`}>{site.name}</span>
    </a>
  );
}
