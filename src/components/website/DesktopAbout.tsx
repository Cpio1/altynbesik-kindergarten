"use client";

import { Blocks, BookOpen, HeartHandshake, Home, Palette, type LucideIcon } from "lucide-react";
import { AboutMediaView } from "@/components/shared/AboutMediaView";
import { Cloud, Sparkle, Star } from "@/components/shared/Decorations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import type { AboutMedia } from "@/data/media";

const icons: LucideIcon[] = [Blocks, HeartHandshake, Palette, BookOpen, Home];
const tones = ["bg-butter", "bg-mint", "bg-butter", "bg-mint", "bg-butter"];

export function DesktopAbout({ media }: { media: AboutMedia | null }) {
  const { t } = useLocale();
  const isVideo = media?.kind === "video";

  return (
    <section id="about" className="section-anchor relative overflow-clip bg-white pt-14 pb-20">
      <div className="wrap grid grid-cols-[0.82fr_1fr] items-center gap-12 xl:gap-16">
        <Reveal className="relative mx-auto w-full max-w-[400px]">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-2/3 w-3/4 rounded-[40px] bg-butter"
          />
          <div
            className={`relative aspect-[7/8] overflow-hidden bg-mint shadow-lift ${
              isVideo ? "rounded-[36px]" : "rounded-t-[999px] rounded-b-[36px]"
            }`}
          >
            <AboutMediaView media={media} sizes="400px" />
          </div>
          <Star className="twinkle absolute top-10 -left-5 size-8" />
          <Sparkle className="twinkle absolute top-1/3 -right-5 size-7" color="#86A77B" />
          <Cloud className="float-a absolute -right-8 bottom-10 w-24 drop-shadow-sm" />
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-[34px] leading-[1.2] font-bold tracking-tight">
              {t.about.title}
            </h2>
            <p className="mt-4 text-[16px] font-semibold">{t.about.lead}</p>
            <p className="mt-2.5 text-ink/80">{t.about.body}</p>
          </Reveal>

          <ul className="mt-6 grid grid-cols-2 gap-x-7 gap-y-4">
            {t.about.pillars.map((pillar, index) => {
              const Icon = icons[index];
              return (
                <Reveal
                  as="li"
                  key={pillar.title}
                  delay={index * 60}
                  className={`wiggle-parent flex gap-3 ${index === 4 ? "col-span-2 max-w-[340px]" : ""}`}
                >
                  <span
                    className={`wiggle flex size-10 shrink-0 items-center justify-center rounded-full ${tones[index]}`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] leading-snug font-extrabold">{pillar.title}</h3>
                    <p className="mt-0.5 text-[14px] leading-[1.5] text-ink/75">{pillar.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
