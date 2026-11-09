"use client";

import { SiteFooter } from "@/components/shared/SiteFooter";
import { SkipLink } from "@/components/shared/SkipLink";
import type { SiteMedia } from "@/data/media";
import { DesktopAbout } from "./DesktopAbout";
import { DesktopClubs } from "./DesktopClubs";
import { DesktopContacts } from "./DesktopContacts";
import { DesktopDocuments } from "./DesktopDocuments";
import { DesktopGallery } from "./DesktopGallery";
import { DesktopGroups } from "./DesktopGroups";
import { DesktopHeader } from "./DesktopHeader";
import { DesktopHero } from "./DesktopHero";
import { DesktopNutrition } from "./DesktopNutrition";

export function DesktopLayout({ media }: { media: SiteMedia }) {
  return (
    <div data-variant="desktop" id="top">
      <SkipLink />
      <DesktopHeader />
      <main id="main" tabIndex={-1}>
        <DesktopHero />
        <DesktopAbout media={media.about} />
        <DesktopGroups />
        <DesktopClubs />
        <DesktopNutrition />
        <DesktopGallery photos={media.gallery} />
        <DesktopDocuments />
        <DesktopContacts />
      </main>
      <SiteFooter />
    </div>
  );
}
