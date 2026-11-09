"use client";

import Image from "next/image";
import { phoneHref, sectionIds, site } from "@/data/site";
import { InstagramIcon } from "./ContactLinks";
import { LOGO_SRC } from "./Logo";
import { useLocale } from "./LocaleProvider";

/** Общий подвал: раскладка подстраивается под ширину. */
export function SiteFooter({ extraBottom = false }: { extraBottom?: boolean }) {
  const { t } = useLocale();

  return (
    <footer className={`bg-ink text-milk ${extraBottom ? "pb-20" : ""}`}>
      <div className="wrap max-lg:px-5! grid gap-8 py-10 sm:grid-cols-[1.3fr_1fr_1.2fr] lg:gap-14 lg:py-12">
        <div className="flex items-start gap-3.5">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-milk p-1">
            <Image
              src={LOGO_SRC}
              alt=""
              width={96}
              height={96}
              sizes="56px"
              className="size-full object-contain"
            />
          </span>
          <div>
            <p className="font-display text-[20px] font-bold">{t.fullName}</p>
            <p className="mt-1 text-[14px] text-milk/80">{t.footer.tagline}</p>
          </div>
        </div>

        <nav aria-label={t.footer.menu}>
          <h2 className="text-[14px] font-extrabold text-gold">{t.footer.menu}</h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[14px]">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="inline-block py-0.5 underline-offset-4 hover:underline focus-visible:outline-milk"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[14px] font-extrabold text-gold">{t.footer.contacts}</h2>
          <address className="mt-2 space-y-1.5 text-[14px] not-italic">
            <p className="text-milk/85">{t.contacts.address}</p>
            <p>
              <a
                href={phoneHref}
                className="font-bold underline-offset-4 hover:underline focus-visible:outline-milk"
              >
                {site.phone.display}
              </a>
            </p>
            <p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${site.instagram.handle} (${t.a11y.newTab})`}
                className="inline-flex items-center gap-1.5 font-bold underline-offset-4 hover:underline focus-visible:outline-milk"
              >
                <InstagramIcon className="size-4" />
                {site.instagram.handle}
              </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}
