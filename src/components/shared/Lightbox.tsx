"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent, type TouchEvent } from "react";
import { useLocale } from "./LocaleProvider";

const SWIPE_DISTANCE = 45;

export function Lightbox({
  photos,
  index,
  onChange,
  onClose,
}: {
  photos: string[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const total = photos.length;

  // Нативный dialog удерживает фокус внутри. К моменту очистки он уже удалён из DOM,
  // поэтому фокус на фото, с которого открыли просмотр, возвращается явно.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const opener = document.activeElement as HTMLElement | null;
    dialog.showModal();
    document.documentElement.classList.add("is-locked");
    return () => {
      document.documentElement.classList.remove("is-locked");
      if (dialog.open) dialog.close();
      opener?.focus({ preventScroll: true });
    };
  }, []);

  const go = (step: number) => onChange((index + step + total) % total);

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (total < 2) return;
    if (event.key === "ArrowLeft") go(-1);
    if (event.key === "ArrowRight") go(1);
  };

  const onTouchStart = (event: TouchEvent) => {
    touchStart.current = event.touches.length === 1 ? event.touches[0].clientX : null;
  };
  const onTouchEnd = (event: TouchEvent) => {
    if (touchStart.current === null || total < 2) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) > SWIPE_DISTANCE) go(distance < 0 ? 1 : -1);
  };

  const neighbours = total > 1 ? [(index + 1) % total, (index - 1 + total) % total] : [];
  const controlClass =
    "flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 focus-visible:outline-white";

  return (
    <dialog
      ref={dialogRef}
      aria-label={t.gallery.viewerLabel}
      className="lightbox"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={onKeyDown}
    >
      <div
        className="relative flex size-full flex-col"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex items-center justify-between px-4 pt-[max(12px,env(safe-area-inset-top))] pb-2">
          <p aria-live="polite" className="text-sm font-bold tabular-nums">
            {t.gallery.counter(index + 1, total)}
          </p>
          <button
            type="button"
            autoFocus
            onClick={onClose}
            aria-label={t.gallery.close}
            className={controlClass}
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        <div
          className="relative min-h-0 flex-1"
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <div className="pointer-events-none absolute inset-x-2 inset-y-1 lg:inset-x-20">
            <Image
              key={photos[index]}
              src={photos[index]}
              alt={t.gallery.photoAlt(index + 1)}
              fill
              sizes="100vw"
              loading="eager"
              className="pointer-events-auto object-contain"
            />
            {/* Соседние снимки загружаются заранее, чтобы листание было мгновенным. */}
            {neighbours.map((i) => (
              <Image
                key={photos[i]}
                src={photos[i]}
                alt=""
                aria-hidden="true"
                fill
                sizes="100vw"
                loading="eager"
                className="invisible object-contain"
              />
            ))}
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t.gallery.prev}
                className={`absolute top-1/2 left-3 hidden -translate-y-1/2 sm:flex ${controlClass}`}
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t.gallery.next}
                className={`absolute top-1/2 right-3 hidden -translate-y-1/2 sm:flex ${controlClass}`}
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex justify-center gap-4 pt-2 pb-[max(14px,env(safe-area-inset-bottom))] sm:hidden">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t.gallery.prev}
              className={controlClass}
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t.gallery.next}
              className={controlClass}
            >
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
}
