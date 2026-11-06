"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { InstagramIcon } from "@/components/shared/ContactLinks";
import { useLocale } from "@/components/shared/LocaleProvider";
import { phoneHref, site } from "@/data/site";

/** Плавающая панель связи: появляется после первого экрана и прячется в «Байланыс». */
export function MobileContactBar() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contacts = document.getElementById("contacts");
    if (!hero || !contacts) return;
    const state = { hero: true, contacts: false };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) state.hero = entry.isIntersecting;
        if (entry.target === contacts) state.contacts = entry.isIntersecting;
      }
      setVisible(!state.hero && !state.contacts);
    });
    observer.observe(hero);
    observer.observe(contacts);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 flex justify-center px-3 pb-[max(10px,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex w-full max-w-[380px] gap-1.5 rounded-full bg-white p-1.5 shadow-lift">
        <a href={phoneHref} className="btn btn-gold min-h-11! flex-1 px-3! text-[14px]! shadow-none!">
          <Phone className="size-[17px]" aria-hidden="true" />
          {t.header.call}
        </a>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram ${site.instagram.handle} (${t.a11y.newTab})`}
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mint"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
