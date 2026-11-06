"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { InstagramIcon } from "@/components/shared/ContactLinks";
import { Star } from "@/components/shared/Decorations";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Logo } from "@/components/shared/Logo";
import { phoneHref, sectionIds, site } from "@/data/site";

export function MobileHeader() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const pendingTarget = useRef<string | null>(null);

  // Блокировка прокрутки на время открытого меню и фокус на первый пункт.
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("is-locked");
    sheetRef.current?.querySelector<HTMLElement>("a,button")?.focus({ preventScroll: true });
    return () => document.documentElement.classList.remove("is-locked");
  }, [open]);

  // Переход выполняется уже после снятия блокировки, иначе страница не прокрутится.
  useEffect(() => {
    if (open || !pendingTarget.current) return;
    const target = document.getElementById(pendingTarget.current);
    const id = pendingTarget.current;
    pendingTarget.current = null;
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }, [open]);

  const goTo = (event: MouseEvent, id: string) => {
    event.preventDefault();
    pendingTarget.current = id;
    setOpen(false);
  };

  const onSheetKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
      burgerRef.current?.focus();
      return;
    }
    if (event.key !== "Tab" || !sheetRef.current) return;
    const items = [
      ...sheetRef.current.querySelectorAll<HTMLElement>("a,button"),
      burgerRef.current,
    ].filter((node): node is HTMLElement => Boolean(node));
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div onKeyDown={open ? onSheetKeyDown : undefined}>
      <header className="fixed inset-x-0 top-0 z-50 bg-milk/95 shadow-[0_6px_18px_-14px_rgb(38_53_44/0.5)] backdrop-blur-md">
        <div className="flex h-[54px] items-center justify-between gap-2 px-3.5 sm:px-6">
          <Logo markClass="size-8" textClass="text-[17px]" onClick={() => setOpen(false)} />
          <div className="flex items-center gap-1.5">
            <LanguageSwitcher />
            <button
              ref={burgerRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
              onClick={() => setOpen((value) => !value)}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gold"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={sheetRef}
        id="mobile-menu"
        inert={!open}
        className={`menu-sheet fixed inset-x-0 top-[54px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-milk px-5 pt-3 pb-[max(20px,env(safe-area-inset-bottom))] ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <Star className="twinkle absolute top-5 right-6 size-6" />
        <nav aria-label={t.a11y.menu}>
          <ul>
            {sectionIds.map((id) => (
              <li key={id} className="border-b border-ink/8 last:border-b-0">
                <a
                  href={`#${id}`}
                  onClick={(event) => goTo(event, id)}
                  className="flex min-h-12 items-center font-display text-[20px] font-semibold"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a href={phoneHref} className="btn btn-gold px-3!">
            <Phone className="size-[18px]" aria-hidden="true" />
            {t.header.call}
          </a>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram (${t.a11y.newTab})`}
            className="btn btn-white px-3!"
          >
            <InstagramIcon className="size-[18px]" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
