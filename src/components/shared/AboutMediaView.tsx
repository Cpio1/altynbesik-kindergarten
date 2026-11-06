"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { AboutMedia } from "@/data/media";
import { CradleScene } from "./Illustrations";
import { useLocale } from "./LocaleProvider";

/**
 * Медиа раздела «Балабақша туралы»: фото, видео с постером или иллюстрация.
 * Видео не скачивается, пока его не запустят.
 */
export function AboutMediaView({ media, sizes }: { media: AboutMedia | null; sizes: string }) {
  const { t } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!media || (media.kind === "video" && failed)) {
    return <CradleScene className="absolute inset-0 size-full" />;
  }

  if (media.kind === "image") {
    return (
      <Image
        src={media.src}
        alt={t.about.photoAlt}
        fill
        sizes={sizes}
        loading="lazy"
        className="object-cover"
      />
    );
  }

  const start = () => {
    setStarted(true);
    void videoRef.current?.play().catch(() => {
      // Автозапуск заблокирован: остаются штатные элементы управления видео.
    });
  };

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 size-full bg-ink object-cover"
        poster={media.poster ?? undefined}
        controls={started}
        playsInline
        preload="none"
        aria-label={t.about.videoLabel}
        onError={() => setFailed(true)}
      >
        <source src={media.src} type={media.type} onError={() => setFailed(true)} />
      </video>
      {!started && (
        <>
          {!media.poster && <CradleScene className="absolute inset-0 size-full" />}
          <button
            type="button"
            onClick={start}
            aria-label={t.about.videoPlay}
            className="absolute inset-0 flex cursor-pointer items-center justify-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-gold text-ink shadow-lift transition-transform duration-200 hover:scale-105">
              <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
            </span>
          </button>
        </>
      )}
    </>
  );
}
