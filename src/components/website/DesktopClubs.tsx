"use client";

import { Sparkle, Star } from "@/components/shared/Decorations";
import { DanceArt, TaekwondoArt } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

export function DesktopClubs() {
  const { t } = useLocale();
  const { choreography, taekwondo } = t.clubs;

  return (
    <section id="clubs" className="section-anchor py-16">
      <div className="wrap">
        <Reveal className="max-w-[600px]">
          <h2 className="font-display text-[34px] leading-[1.2] font-bold tracking-tight">
            {t.clubs.title}
          </h2>
          <p className="mt-3 text-[16px] text-ink/80">{t.clubs.intro}</p>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-6">
          {/* Хореография: мягкая, плавная, золотая. */}
          <Reveal>
            <article className="wiggle-parent relative flex h-full items-center gap-5 overflow-hidden rounded-[44px_150px_44px_44px] bg-gradient-to-br from-butter to-gold p-7 shadow-soft">
              <Sparkle className="twinkle absolute top-6 left-7 size-5" color="#FFFFFF" />
              <div className="relative min-w-0 flex-1">
                <h3 className="font-display text-[24px] font-bold">{choreography.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.55]">{choreography.text}</p>
                <ul className="mt-3.5 flex flex-wrap gap-1.5">
                  {choreography.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/75 px-3 py-0.5 text-[13px] font-bold">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <DanceArt className="wiggle size-[150px] shrink-0 xl:size-[172px]" />
            </article>
          </Reveal>

          {/* Тхэквондо: собранная, чёткая, зелёная. */}
          <Reveal delay={90}>
            <article className="wiggle-parent relative flex h-full items-center gap-5 overflow-hidden rounded-[150px_44px_44px_44px] bg-sage p-7 shadow-soft">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgb(255_255_255/0.08)_0,rgb(255_255_255/0.08)_14px,transparent_14px,transparent_34px)]"
              />
              <TaekwondoArt className="wiggle relative size-[150px] shrink-0 xl:size-[172px]" />
              <div className="relative min-w-0 flex-1">
                <h3 className="font-display text-[24px] font-bold">{taekwondo.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.55]">{taekwondo.text}</p>
                <ul className="mt-3.5 flex flex-wrap gap-1.5">
                  {taekwondo.tags.map((tag) => (
                    <li key={tag} className="rounded-lg bg-ink px-3 py-0.5 text-[13px] font-bold text-milk">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Star className="twinkle absolute right-6 bottom-5 size-5" color="#FFF0BD" />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
