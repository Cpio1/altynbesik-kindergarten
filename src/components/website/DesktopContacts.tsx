"use client";

import { MapPin, Phone } from "lucide-react";
import {
  CallButton,
  InstagramButton,
  InstagramIcon,
  WhatsAppButton,
} from "@/components/shared/ContactLinks";
import { Cloud, Star, Wave } from "@/components/shared/Decorations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { MapEmbed, MapLink } from "@/components/shared/MapEmbed";
import { Reveal } from "@/components/shared/Reveal";
import { phoneHref, site } from "@/data/site";

export function DesktopContacts() {
  const { t } = useLocale();

  return (
    <section id="contacts" className="section-anchor relative bg-[#FAEDC9]">
      <Wave color="#FAEDC9" className="absolute inset-x-0 -top-[39px] h-10" />
      <div className="relative overflow-clip pt-12 pb-16">
        <Cloud className="float-b absolute top-10 left-[3%] w-20" />
        <Star className="twinkle absolute right-[4%] bottom-14 size-7" color="#86A77B" />
        <div className="wrap grid grid-cols-[0.9fr_1.1fr] items-center gap-10 xl:gap-14">
          <Reveal>
            <h2 className="font-display text-[34px] leading-[1.2] font-bold tracking-tight">
              {t.contacts.title}
            </h2>
            <p className="mt-2.5 text-[16px] text-ink/80">{t.contacts.intro}</p>
            <p className="mt-5 font-display text-[20px] font-bold">{t.fullName}</p>

            <address className="mt-4 space-y-3.5 not-italic">
              <div className="flex gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-ink/70">{t.contacts.addressLabel}</p>
                  <p className="text-[15px] leading-snug font-semibold">{t.contacts.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-ink/70">{t.contacts.phoneLabel}</p>
                  <a href={phoneHref} className="text-[18px] font-extrabold underline-offset-4 hover:underline">
                    {site.phone.display}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <InstagramIcon />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-ink/70">Instagram</p>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram ${site.instagram.handle} (${t.a11y.newTab})`}
                    className="text-[15px] font-extrabold underline-offset-4 hover:underline"
                  >
                    {site.instagram.handle}
                  </a>
                </div>
              </div>
            </address>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <CallButton />
              <InstagramButton />
              <WhatsAppButton />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <MapEmbed className="h-[430px] rounded-[44px_44px_44px_120px]" />
            <div className="mt-3 text-right">
              <MapLink className="inline-flex items-center gap-1.5 text-[14px] font-extrabold underline-offset-4 hover:underline" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
