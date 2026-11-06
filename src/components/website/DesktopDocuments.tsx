"use client";

import { useDocumentsText, DocumentsAction } from "@/components/shared/DocumentsAction";
import { DocumentsArt } from "@/components/shared/Illustrations";
import { useLocale } from "@/components/shared/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

export function DesktopDocuments() {
  const { t } = useLocale();
  const text = useDocumentsText();

  return (
    <section id="documents" className="section-anchor pb-16">
      <div className="wrap">
        <Reveal>
          <div className="wiggle-parent flex items-center gap-8 rounded-[72px] bg-mint py-7 pr-11 pl-10 shadow-soft">
            <DocumentsArt className="wiggle w-[132px] shrink-0" />
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-[30px] leading-[1.2] font-bold tracking-tight">
                {t.documents.title}
              </h2>
              <p className="mt-1.5 text-[15.5px] text-ink/80">
                <strong className="font-extrabold text-ink">{t.documents.subtitle}.</strong> {text}
              </p>
            </div>
            <DocumentsAction className="btn btn-ink shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
