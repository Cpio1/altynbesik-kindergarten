"use client";

import { Sun, Wave } from "@/components/shared/Decorations";
import { MealArt } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

/** Четыре приёма пищи стоят на дуге, как солнце на пути от утра к вечеру. */
const offsets = ["mt-14", "mt-0", "mt-0", "mt-14"];

export function DesktopNutrition() {
  const { t } = useLocale();

  return (
    <section id="nutrition" className="section-anchor relative bg-butter">
      <Wave color="#FFF0BD" className="absolute inset-x-0 -top-[39px] h-10" />
      <div className="relative overflow-clip pt-12 pb-16">
        <Sun className="float-a absolute top-6 right-[7%] size-16" />
        <div className="wrap">
          <Reveal className="mx-auto max-w-[620px] text-center">
            <h2 className="font-display text-[34px] leading-[1.2] font-bold tracking-tight">
              {t.nutrition.title}
            </h2>
            <p className="mt-3 text-[16px] text-ink/80">{t.nutrition.intro}</p>
          </Reveal>

          <div className="relative mx-auto mt-6 max-w-[960px]">
            <svg
              aria-hidden="true"
              viewBox="0 0 960 170"
              preserveAspectRatio="none"
              className="absolute inset-x-[10%] top-[56px] h-[110px] w-[80%]"
            >
              <path
                d="M4 166C180 10 780 10 956 166"
                fill="none"
                stroke="#E9B949"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 14"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <ul className="relative grid grid-cols-4 gap-4">
              {t.nutrition.meals.map((meal, index) => (
                <Reveal as="li" key={meal} delay={index * 80} className={`${offsets[index]} flex justify-center`}>
                  <div className="wiggle-parent flex size-[172px] flex-col items-center justify-center gap-1.5 rounded-full bg-white shadow-soft ring-[7px] ring-white/60 transition-transform duration-300 hover:-translate-y-1.5">
                    <MealArt index={index} className="wiggle size-[72px]" />
                    <h3 className="text-[16px] font-extrabold">{meal}</h3>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Wave color="#FFF9ED" flip className="h-10" />
    </section>
  );
}
