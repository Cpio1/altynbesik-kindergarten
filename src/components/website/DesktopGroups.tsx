"use client";

import { Cloud, Star, Wave } from "@/components/shared/Decorations";
import { GroupArt } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

const cards = [
  { bg: "bg-gold", shape: "rounded-t-[999px] rounded-b-[32px]", offset: "" },
  { bg: "bg-white", shape: "rounded-[32px] rounded-b-[999px]", offset: "mt-9" },
  { bg: "bg-butter", shape: "rounded-[70px_28px_70px_28px]", offset: "" },
  { bg: "bg-sage", shape: "rounded-t-[999px] rounded-b-[32px]", offset: "mt-9" },
  { bg: "bg-white", shape: "rounded-[28px_70px_28px_70px]", offset: "" },
  { bg: "bg-butter", shape: "rounded-[32px] rounded-b-[999px]", offset: "mt-9" },
];

export function DesktopGroups() {
  const { t } = useLocale();

  return (
    <section id="groups" className="section-anchor relative bg-mint">
      <Wave color="#EAF3DF" className="absolute inset-x-0 -top-[39px] h-10" />
      <div className="relative overflow-clip pt-12 pb-16">
        <Cloud className="float-b absolute top-10 right-[6%] w-20" />
        <Star className="twinkle absolute top-16 left-[8%] size-7" />
        <div className="wrap">
          <Reveal className="mx-auto max-w-[560px] text-center">
            <h2 className="font-display text-[34px] leading-[1.2] font-bold tracking-tight">
              {t.groups.title}
            </h2>
            <p className="mt-3 text-[16px] text-ink/80">{t.groups.intro}</p>
          </Reveal>

          <ul className="mt-9 grid grid-cols-6 gap-3.5 xl:gap-5">
            {cards.map((card, index) => (
              <Reveal as="li" key={index} delay={index * 70} className={card.offset}>
                <div
                  className={`wiggle-parent flex h-[188px] flex-col items-center justify-center gap-2.5 px-2 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 ${card.bg} ${card.shape}`}
                >
                  <GroupArt index={index} className="wiggle size-[68px]" />
                  <h3 className="font-display text-[19px] leading-tight font-bold whitespace-nowrap">
                    {t.groups.name(index + 1)}
                  </h3>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
      <Wave color="#FFF9ED" flip className="h-10" />
    </section>
  );
}
