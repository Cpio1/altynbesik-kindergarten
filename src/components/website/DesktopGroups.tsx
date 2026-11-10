"use client";

import { Cloud, Star, Wave } from "@/components/shared/Decorations";
import { GroupArt } from "@/components/shared/Illustrations";
import { groupNames } from "@/data/site";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

const cards = [
  { bg: "bg-gold", shape: "rounded-t-[999px] rounded-b-[32px]", offset: "" },
  { bg: "bg-white", shape: "rounded-[32px] rounded-b-[120px]", offset: "mt-6" },
  { bg: "bg-butter", shape: "rounded-[70px_28px_70px_28px]", offset: "" },
  {
    bg: "bg-sage",
    shape: "rounded-t-[999px] rounded-b-[32px]",
    offset: "mt-6",
  },
  { bg: "bg-white", shape: "rounded-[28px_70px_28px_70px]", offset: "" },
  {
    bg: "bg-butter",
    shape: "rounded-[32px] rounded-b-[120px]",
    offset: "mt-6",
  },
  { bg: "bg-sage", shape: "rounded-[70px_28px_70px_28px]", offset: "" },
  {
    bg: "bg-gold",
    shape: "rounded-t-[999px] rounded-b-[32px]",
    offset: "mt-6",
  },
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

          <ul className="mx-auto mt-9 grid max-w-[1040px] grid-cols-4 gap-4 xl:gap-6">
            {groupNames.map((groupName, index) => {
              const card = cards[index % cards.length];
              return (
                <Reveal
                  as="li"
                  key={groupName}
                  delay={index * 60}
                  className={card.offset}
                >
                  <div
                    className={`wiggle-parent relative flex h-[176px] flex-col items-center justify-center gap-2.5 px-3 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 ${card.bg} ${card.shape}`}
                  >
                    <Star className="twinkle absolute top-5 right-6 size-4 opacity-70" />
                    <GroupArt index={index} className="wiggle size-[64px]" />
                    <h3 className="text-center font-display text-[18px] leading-tight font-bold text-balance">
                      {t.groups.name(groupName)}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
      <Wave color="#FFF9ED" flip className="h-10" />
    </section>
  );
}
