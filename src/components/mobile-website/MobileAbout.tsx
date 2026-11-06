"use client";

import { Blocks, BookOpen, HeartHandshake, Home, Palette, type LucideIcon } from "lucide-react";
import { AboutMediaView } from "@/components/shared/AboutMediaView";
import { Sparkle, Star } from "@/components/shared/Decorations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import type { AboutMedia } from "@/data/media";

const icons: LucideIcon[] = [Blocks, HeartHandshake, Palette, BookOpen, Home];

export function MobileAbout({ media }: { media: AboutMedia | null }) {
  const { t } = useLocale();
  const isVideo = media?.kind === "video";

  return (
    <section id="about" className="section-anchor rounded-t-[32px] bg-white py-8">
      <div className="mx-auto max-w-[640px] px-5">
        <Reveal>
          <h2 className="font-display text-[23px] leading-[1.22] font-bold tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-2.5 text-[15px] leading-[1.55] font-semibold">{t.about.lead}</p>
        </Reveal>

        <Reveal className="relative my-5">
          <div
            className={`relative overflow-hidden bg-mint shadow-soft ${
              isVideo
                ? "aspect-video rounded-[24px]"
                : "aspect-[16/11] rounded-[24px_90px_24px_24px]"
            }`}
          >
            <AboutMediaView media={media} sizes="(min-width: 640px) 600px, 100vw" />
          </div>
          <Star className="twinkle absolute -top-2 left-4 size-5" />
          <Sparkle className="twinkle absolute -bottom-2 right-8 size-5" color="#86A77B" />
        </Reveal>

        <Reveal>
          <p className="text-[14.5px] leading-[1.55] text-ink/80">{t.about.body}</p>
        </Reveal>

        <ul className="mt-4 space-y-3">
          {t.about.pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <Reveal as="li" key={pillar.title} className="flex gap-3">
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                    index % 2 === 0 ? "bg-butter" : "bg-mint"
                  }`}
                >
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[14.5px] leading-snug font-extrabold">{pillar.title}</h3>
                  <p className="text-[13.5px] leading-[1.45] text-ink/75">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
