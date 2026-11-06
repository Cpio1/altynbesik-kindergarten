"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Cloud, Sparkle, Squiggle, Star, Sun, Wave } from "@/components/shared/Decorations";
import { HeroScene } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { site } from "@/data/site";

const benefitColors = ["bg-gold", "bg-sage", "bg-butter"];

export function DesktopHero({ photo }: { photo: string | null }) {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-clip bg-[radial-gradient(circle_at_78%_18%,#FFF0BD_0,#FFF9ED_52%)] pt-[86px]">
      <Cloud className="float-b absolute top-[108px] left-[3%] -z-10 w-24" />
            <Star className="twinkle absolute top-[150px] left-[46%] -z-10 size-6" />
      <Sparkle className="twinkle absolute bottom-[34%] left-[2.5%] -z-10 size-6" color="#86A77B" />

      <div className="wrap grid grid-cols-[1.02fr_1fr] items-center gap-8 pt-4 pb-[64px] xl:gap-12">
        <div>
          <h1 className="font-display text-[42px] leading-[1.14] font-bold tracking-tight xl:text-[50px]">
            <span className="relative inline-block">
              {site.name}
              <Squiggle className="absolute -bottom-1.5 left-0 h-2.5 w-full" />
            </span>
            {t.hero.titleRest}
          </h1>
          <p className="mt-5 max-w-[470px] text-[17px] leading-[1.6] text-ink/80">{t.hero.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contacts" className="btn btn-gold">
              {t.hero.primary}
              <ArrowRight className="size-[18px]" aria-hidden="true" />
            </a>
            <a href="#about" className="btn btn-white">
              {t.hero.secondary}
              <ArrowDown className="size-[18px]" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[16/15] w-full max-w-[510px]">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-6 rounded-[47%_53%_44%_56%/54%_44%_56%_46%] bg-sage/35"
          />
          <div className="absolute inset-0 overflow-hidden rounded-[47%_53%_44%_56%/54%_44%_56%_46%] bg-butter shadow-lift">
            {photo ? (
              <Image
                src={photo}
                alt={t.fullName}
                fill
                preload
                sizes="(min-width: 1280px) 510px, 45vw"
                className="object-cover"
              />
            ) : (
              <HeroScene className="absolute inset-0 size-full" />
            )}
          </div>
          {photo && <Sun className="float-a absolute -top-5 -right-3 size-20" />}
          <Cloud className="float-b absolute bottom-10 -left-8 w-24 drop-shadow-sm" />
          <Star className="twinkle absolute -bottom-1 right-14 size-8" color="#86A77B" />
        </div>
      </div>

      <div className="relative z-10">
        <Wave color="#FFFFFF" className="absolute inset-x-0 bottom-0 h-14" />
        <div className="wrap relative pb-3">
          <ul className="mx-auto flex w-fit items-center divide-x divide-ink/10 rounded-full bg-white py-3 shadow-soft">
            {t.hero.benefits.map((benefit, index) => (
              <li key={benefit.label} className="flex items-center gap-3 px-7 xl:px-9">
                <span
                  className={`flex h-12 min-w-12 items-center justify-center rounded-full px-2.5 font-display text-[20px] font-bold ${benefitColors[index]}`}
                >
                  {benefit.value}
                </span>
                <span className="text-[16px] font-extrabold">{benefit.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
