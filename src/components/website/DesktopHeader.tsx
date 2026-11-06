"use client";

import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import { useActiveSection } from "@/components/shared/useActiveSection";
import { sectionIds } from "@/data/site";

export function DesktopHeader() {
  const { t } = useLocale();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-milk/92 shadow-[0_8px_24px_-18px_rgb(38_53_44/0.5)] backdrop-blur-md" : ""
      }`}
    >
      <div className="wrap flex h-[66px] items-center justify-between gap-2 max-xl:px-5! xl:gap-4">
        <Logo markClass="size-9" textClass="text-[18px] xl:text-[20px]" />
        <nav aria-label={t.a11y.menu}>
          <ul className="flex items-center gap-0.5">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`block rounded-full px-2 py-1.5 text-[13px] font-bold whitespace-nowrap transition-colors duration-200 xl:px-3 xl:text-[14px] ${
                    active === id ? "bg-butter" : "hover:bg-butter/60"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <a href="#contacts" className="btn btn-gold min-h-10! px-3.5! text-[13.5px]! whitespace-nowrap">
            {t.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
