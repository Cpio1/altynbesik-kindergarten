"use client";

import { MealArt } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

export function MobileNutrition() {
  const { t } = useLocale();

  return (
    <section id="nutrition" className="section-anchor rounded-[32px] bg-butter py-8">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal className="px-1 text-center">
          <h2 className="font-display text-[23px] leading-[1.22] font-bold tracking-tight">
            {t.nutrition.title}
          </h2>
          <p className="mt-2 text-[14.5px] leading-[1.5] text-ink/80">{t.nutrition.intro}</p>
        </Reveal>
        <ul className="mx-auto mt-5 grid max-w-[420px] grid-cols-2 gap-2.5">
          {t.nutrition.meals.map((meal, index) => (
            <Reveal as="li" key={meal} delay={index * 50}>
              <div className="flex items-center gap-2 rounded-full bg-white py-2 pr-2 pl-2 shadow-soft">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-milk">
                  <MealArt index={index} className="size-9" />
                </span>
                <h3 className="min-w-0 text-[13.5px] leading-tight font-extrabold">{meal}</h3>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
