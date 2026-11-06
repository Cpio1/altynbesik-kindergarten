"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { InstagramButton } from "@/components/shared/ContactLinks";
import { Cloud, Star } from "@/components/shared/Decorations";
import { Lightbox } from "@/components/shared/Lightbox";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { useGallery } from "@/components/shared/useGallery";

const INITIAL_COUNT = 4;

export function MobileGallery({ photos }: { photos: string[] }) {
  const { t } = useLocale();
  const gallery = useGallery(photos.length, INITIAL_COUNT);

  if (photos.length === 0) {
    return (
      <section id="gallery" className="section-anchor py-8">
        <div className="mx-auto max-w-[640px] px-4">
          <Reveal className="relative rounded-[32px] bg-white px-5 py-7 text-center shadow-soft">
            <Cloud className="float-b absolute -top-3 -left-1 w-14" color="#EAF3DF" />
            <Star className="twinkle absolute top-5 right-5 size-5" />
            <h2 className="font-display text-[23px] leading-[1.22] font-bold tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="mt-2 text-[14.5px] leading-[1.5] text-ink/80">{t.gallery.instagramText}</p>
            <InstagramButton className="btn btn-gold mt-4" label={t.gallery.instagramCta} />
          </Reveal>
        </div>
      </section>
    );
  }

  const isWide = (index: number) =>
    index % 3 === 0 || (index === photos.length - 1 && index % 3 === 1);

  return (
    <section id="gallery" className="section-anchor py-8">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal className="px-1">
          <h2 className="font-display text-[23px] leading-[1.22] font-bold tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="mt-1.5 text-[14.5px] leading-[1.5] text-ink/80">{t.gallery.intro}</p>
        </Reveal>

        <ul className="mt-4 grid grid-cols-2 gap-2">
          {photos.slice(0, gallery.visibleCount).map((src, index) => (
            <li key={src} className={isWide(index) ? "col-span-2 aspect-[16/10]" : "aspect-square"}>
              <button
                type="button"
                ref={index === gallery.firstNewIndex ? gallery.firstNewRef : undefined}
                onClick={() => gallery.setOpenIndex(index)}
                aria-label={t.gallery.openPhoto(index + 1)}
                className="relative block size-full cursor-zoom-in overflow-hidden rounded-[20px] bg-mint"
              >
                <Image
                  src={src}
                  alt={t.gallery.photoAlt(index + 1)}
                  fill
                  loading="lazy"
                  sizes={isWide(index) ? "(min-width: 640px) 610px, 100vw" : "(min-width: 640px) 305px, 50vw"}
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4 grid gap-2 min-[375px]:grid-flow-col min-[375px]:auto-cols-fr">
          {gallery.hasMore && (
            <button type="button" onClick={gallery.expand} className="btn btn-gold px-3!">
              {t.gallery.more}
              <ChevronDown className="size-[18px]" aria-hidden="true" />
            </button>
          )}
          <InstagramButton className="btn btn-white px-3!" />
        </div>
      </div>

      {gallery.openIndex !== null && (
        <Lightbox
          photos={photos}
          index={gallery.openIndex}
          onChange={gallery.setOpenIndex}
          onClose={gallery.close}
        />
      )}
    </section>
  );
}
