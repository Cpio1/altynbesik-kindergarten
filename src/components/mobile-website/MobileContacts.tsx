"use client";

import { MapPin, Phone } from "lucide-react";
import {
  InstagramButton,
  InstagramIcon,
  WhatsAppButton,
} from "@/components/shared/ContactLinks";
import { Star } from "@/components/shared/Decorations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { MapEmbed, MapLink } from "@/components/shared/MapEmbed";
import { Reveal } from "@/components/shared/Reveal";
import { phoneHref, site } from "@/data/site";

export function MobileContacts() {
  const { t } = useLocale();

  return (
    <section id="contacts" className="section-anchor relative rounded-t-[32px] bg-[#FAEDC9] pt-8 pb-8">
      <Star className="twinkle absolute top-7 right-6 size-5" color="#86A77B" />
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal className="px-1">
          <h2 className="font-display text-[23px] leading-[1.22] font-bold tracking-tight">
            {t.contacts.title}
          </h2>
          <p className="mt-1.5 text-[14.5px] leading-[1.5] text-ink/80">{t.contacts.intro}</p>
          <p className="mt-3 font-display text-[17px] font-bold">{t.fullName}</p>
        </Reveal>

        <Reveal className="px-1">
          <address className="mt-3 space-y-2.5 not-italic">
            <div className="flex gap-2.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
                <MapPin className="size-[18px]" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[12.5px] font-bold text-ink/70">{t.contacts.addressLabel}</p>
                <p className="text-[14px] leading-snug font-semibold">{t.contacts.address}</p>
              </div>
            </div>
            <a href={phoneHref} className="flex items-center gap-2.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
                <Phone className="size-[18px]" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[12.5px] font-bold text-ink/70">{t.contacts.phoneLabel}</span>
                <span className="block text-[16px] font-extrabold">{site.phone.display}</span>
              </span>
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${site.instagram.handle} (${t.a11y.newTab})`}
              className="flex items-center gap-2.5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
                <InstagramIcon className="size-[18px]" />
              </span>
              <span className="min-w-0">
                <span className="block text-[12.5px] font-bold text-ink/70">Instagram</span>
                <span className="block text-[14px] font-extrabold">{site.instagram.handle}</span>
              </span>
            </a>
          </address>
        </Reveal>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a href={phoneHref} className="btn btn-gold px-2!">
            <Phone className="size-[18px]" aria-hidden="true" />
            {t.contacts.call}
          </a>
          <InstagramButton className="btn btn-white px-2!" />
          <WhatsAppButton className="btn btn-white col-span-2" />
        </div>

        <Reveal className="mt-4">
          <MapEmbed className="h-[340px] rounded-[24px]" />
          <div className="mt-2 text-center">
            <MapLink className="inline-flex min-h-10 items-center gap-1.5 text-[14px] font-extrabold underline-offset-4 hover:underline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
