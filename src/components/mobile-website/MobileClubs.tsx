"use client";

import { DanceArt, TaekwondoArt } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

export function MobileClubs() {
  const { t } = useLocale();
  const { choreography, taekwondo } = t.clubs;

  return (
    <section id="clubs" className="section-anchor py-8">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal className="px-1">
          <h2 className="font-display text-[23px] leading-[1.22] font-bold tracking-tight">
            {t.clubs.title}
          </h2>
          <p className="mt-2 text-[14.5px] leading-[1.5] text-ink/80">{t.clubs.intro}</p>
        </Reveal>

        <div className="mt-4 space-y-3">
          <Reveal>
            <article className="flex items-center gap-2 rounded-[24px_72px_24px_24px] bg-gradient-to-br from-butter to-gold p-4 shadow-soft">
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[19px] font-bold">{choreography.title}</h3>
                <p className="mt-1 text-[13.5px] leading-[1.45]">{choreography.text}</p>
              </div>
              <DanceArt className="size-[84px] shrink-0 min-[375px]:size-[96px]" />
            </article>
          </Reveal>
          <Reveal>
            <article className="flex items-center gap-2 rounded-[72px_24px_24px_24px] bg-sage p-4 shadow-soft">
              <TaekwondoArt className="size-[84px] shrink-0 min-[375px]:size-[96px]" />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[19px] font-bold">{taekwondo.title}</h3>
                <p className="mt-1 text-[13.5px] leading-[1.45]">{taekwondo.text}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
