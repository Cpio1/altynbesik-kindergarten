"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { InstagramButton } from "@/components/shared/ContactLinks";
import { Cloud, Sparkle, Star } from "@/components/shared/Decorations";
import { Lightbox } from "@/components/shared/Lightbox";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { useGallery } from "@/components/shared/useGallery";
import { buildGalleryLayout } from "./galleryLayout";

const corners = [
  "rounded-[64px_24px_24px_24px]",
  "rounded-[24px]",
  "rounded-[24px_64px_24px_24px]",
  "rounded-[24px_24px_24px_64px]",
  "rounded-[24px_24px_64px_24px]",
];

export function DesktopGallery({ photos }: { photos: string[] }) {
  const { t } = useLocale();
  const { slots, initial } = buildGalleryLayout(photos.length);
  const gallery = useGallery(photos.length, initial);

  if (photos.length === 0) {
    return (
      <section id="gallery" className="section-anchor py-16">
        <div className="wrap">
          <Reveal className="relative mx-auto max-w-[760px] rounded-[64px] bg-white px-10 py-11 text-center shadow-soft">
            <Cloud className="float-b absolute -top-6 -left-5 w-24 drop-shadow-sm" color="#EAF3DF" />
            <Star className="twinkle absolute top-8 right-10 size-7" />
            <Sparkle className="twinkle absolute bottom-8 left-12 size-6" color="#86A77B" />
            <h2 className="font-display text-[34px] leading-[1.2] font-bold tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="mx-auto mt-3 max-w-[460px] text-[16px] text-ink/80">
              {t.gallery.instagramText}
            </p>
            <InstagramButton className="btn btn-gold mt-5" label={t.gallery.instagramCta} />
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="section-anchor py-16">
      <div className="wrap">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-[34px] leading-[1.2] font-bold tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="mt-2 text-[16px] text-ink/80">{t.gallery.intro}</p>
          </div>
          <InstagramButton className="btn btn-white shrink-0" />
        </Reveal>

        <ul className="mt-8 grid grid-cols-6 gap-3.5">
          {photos.slice(0, gallery.visibleCount).map((src, index) => (
            <li key={src} className={`${slots[index].span} ${slots[index].height}`}>
              <button
                type="button"
                ref={index === gallery.firstNewIndex ? gallery.firstNewRef : undefined}
                onClick={() => gallery.setOpenIndex(index)}
                aria-label={t.gallery.openPhoto(index + 1)}
                className={`group relative block size-full cursor-zoom-in overflow-hidden bg-mint shadow-soft ${corners[index % corners.length]}`}
              >
                <Image
                  src={src}
                  alt={t.gallery.photoAlt(index + 1)}
                  fill
                  loading="lazy"
                  sizes={slots[index].span === "col-span-4" ? "720px" : slots[index].span === "col-span-6" ? "1080px" : "360px"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </button>
            </li>
          ))}
        </ul>

        {gallery.hasMore && (
          <div className="mt-7 text-center">
            <button type="button" onClick={gallery.expand} className="btn btn-gold">
              {t.gallery.more}
              <ChevronDown className="size-[18px]" aria-hidden="true" />
            </button>
          </div>
        )}
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
