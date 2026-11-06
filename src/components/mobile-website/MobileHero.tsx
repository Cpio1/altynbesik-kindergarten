"use client";

import Image from "next/image";
import { Cloud, Sparkle, Star, Sun } from "@/components/shared/Decorations";
import { HeroScene } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { site } from "@/data/site";

const benefitColors = ["bg-gold", "bg-sage", "bg-butter"];

export function MobileHero({ photo }: { photo: string | null }) {
  const { t } = useLocale();

  return (
    <section id="hero" className="relative overflow-clip pt-[54px]">
      {/* Купол с фото занимает всю ширину экрана. */}
      <div className="relative mx-auto max-w-[640px] px-3.5 pt-3">
        <div className="relative aspect-[5/4] overflow-hidden rounded-t-[140px] rounded-b-[28px] bg-butter shadow-soft min-[400px]:rounded-t-[170px] sm:rounded-t-[240px]">
          {photo ? (
            <Image src={photo} alt={t.fullName} fill preload sizes="(min-width: 640px) 640px, 100vw" className="object-cover" />
          ) : (
            <HeroScene viewBox="0 50 640 512" className="absolute inset-0 size-full" />
          )}
        </div>
        {photo && <Sun className="float-a absolute top-1 right-2 size-12" />}
        <Cloud className="float-b absolute top-[38%] -left-3 w-14 drop-shadow-sm" />
      </div>

      <div className="relative mx-auto max-w-[640px] px-5 pt-5 pb-8 text-center">
        <Star className="twinkle absolute top-4 left-3 size-4" />
        <Sparkle className="twinkle absolute right-3 bottom-[52%] size-4" color="#86A77B" />
        <h1 className="font-display text-[27px] leading-[1.18] font-bold tracking-tight min-[375px]:text-[30px] sm:text-[36px]">
          <span className="underline decoration-gold decoration-[3px] underline-offset-[5px]">{site.name}</span>
          {t.hero.titleRest}
        </h1>
        <p className="mx-auto mt-3 max-w-[460px] text-[15px] leading-[1.55] text-ink/80">
          {t.hero.subtitle}
        </p>
        <div className="mx-auto mt-4 grid max-w-[420px] gap-2 min-[375px]:grid-cols-2">
          <a href="#contacts" className="btn btn-gold px-3!">
            {t.hero.primary}
          </a>
          <a href="#about" className="btn btn-white px-3!">
            {t.hero.secondary}
          </a>
        </div>

        <ul className="mx-auto mt-6 grid max-w-[420px] grid-cols-3 gap-1">
          {t.hero.benefits.map((benefit, index) => (
            <li key={benefit.label} className="flex flex-col items-center gap-1.5">
              <span
                className={`flex size-[52px] items-center justify-center rounded-full font-display text-[18px] font-bold ${benefitColors[index]}`}
              >
                {benefit.value}
              </span>
              <span className="text-[13px] leading-[1.2] font-extrabold">{benefit.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
