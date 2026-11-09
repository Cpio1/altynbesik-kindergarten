"use client";

import { SiteFooter } from "@/components/shared/SiteFooter";
import { SkipLink } from "@/components/shared/SkipLink";
import type { SiteMedia } from "@/data/media";
import { MobileAbout } from "./MobileAbout";
import { MobileClubs } from "./MobileClubs";
import { MobileContactBar } from "./MobileContactBar";
import { MobileContacts } from "./MobileContacts";
import { MobileDocuments } from "./MobileDocuments";
import { MobileGallery } from "./MobileGallery";
import { MobileGroups } from "./MobileGroups";
import { MobileHeader } from "./MobileHeader";
import { MobileHero } from "./MobileHero";
import { MobileNutrition } from "./MobileNutrition";

export function MobileLayout({ media }: { media: SiteMedia }) {
  return (
    <div data-variant="mobile" id="top">
      <SkipLink />
      <MobileHeader />
      <main id="main" tabIndex={-1}>
        <MobileHero />
        <MobileAbout media={media.about} />
        <MobileGroups />
        <MobileClubs />
        <MobileNutrition />
        <MobileGallery photos={media.gallery} />
        <MobileDocuments />
        <MobileContacts />
      </main>
      <SiteFooter extraBottom />
      <MobileContactBar />
    </div>
  );
}
