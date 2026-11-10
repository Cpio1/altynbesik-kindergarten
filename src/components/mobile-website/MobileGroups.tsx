"use client";

import { GroupArt } from "@/components/shared/Illustrations";
import { groupNames } from "@/data/site";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

const cards = [
  "bg-gold rounded-t-[60px] rounded-b-[20px]",
  "bg-white rounded-[20px] rounded-b-[60px]",
  "bg-butter rounded-[34px_16px_34px_16px]",
  "bg-sage rounded-[16px_34px_16px_34px]",
  "bg-white rounded-t-[60px] rounded-b-[20px]",
  "bg-butter rounded-[20px] rounded-b-[60px]",
  "bg-sage rounded-[34px_16px_34px_16px]",
  "bg-gold rounded-[16px_34px_16px_34px]",
];

export function MobileGroups() {
  const { t } = useLocale();

  return (
    <section id="groups" className="section-anchor rounded-[32px] bg-mint py-8">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal className="px-1 text-center">
          <h2 className="font-display text-[23px] leading-[1.22] font-bold tracking-tight">
            {t.groups.title}
          </h2>
          <p className="mt-2 text-[14.5px] leading-[1.5] text-ink/80">{t.groups.intro}</p>
        </Reveal>
        <ul className="mt-5 grid grid-cols-2 gap-2.5 max-[319px]:grid-cols-1">
          {groupNames.map((groupName, index) => (
            <Reveal as="li" key={groupName} delay={index * 40}>
              <div
                className={`flex h-[120px] flex-col items-center justify-center gap-1.5 px-2 shadow-soft ${cards[index % cards.length]}`}
              >
                <GroupArt index={index} className="size-11" />
                <h3 className="text-center font-display text-[14px] leading-tight font-bold text-balance">
                  {t.groups.name(groupName)}
                </h3>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
