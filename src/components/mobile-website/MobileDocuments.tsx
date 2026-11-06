"use client";

import { DocumentsAction, useDocumentsText } from "@/components/shared/DocumentsAction";
import { DocumentsArt } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

export function MobileDocuments() {
  const { t } = useLocale();
  const text = useDocumentsText();

  return (
    <section id="documents" className="section-anchor pb-8">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal className="rounded-[32px] bg-mint p-5 shadow-soft">
          <div className="flex items-center gap-3">
            <DocumentsArt className="w-[70px] shrink-0" />
            <div className="min-w-0">
              <h2 className="font-display text-[23px] leading-[1.22] font-bold tracking-tight">
                {t.documents.title}
              </h2>
              <p className="text-[13.5px] font-extrabold">{t.documents.subtitle}</p>
            </div>
          </div>
          <p className="mt-3 text-[14px] leading-[1.5] text-ink/80">{text}</p>
          <DocumentsAction className="btn btn-ink mt-3.5 w-full" />
        </Reveal>
      </div>
    </section>
  );
}
