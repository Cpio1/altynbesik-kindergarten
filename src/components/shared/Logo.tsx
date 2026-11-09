"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { useLocale } from "./LocaleProvider";

/** Фирменный логотип (PNG с прозрачным фоном, 1024×1024). */
export const LOGO_SRC = "/images/logo.png";

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
      <Image
        src={LOGO_SRC}
        alt=""
        width={96}
        height={96}
        sizes="48px"
        className={`shrink-0 object-contain ${markClass}`}
      />
      <span className={`font-display font-bold tracking-tight ${textClass}`}>{site.name}</span>
    </a>
  );
}
