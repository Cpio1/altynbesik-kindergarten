import type { Metadata } from "next";
import { SiteExperience } from "@/components/shared/SiteExperience";
import { getSiteMedia } from "@/data/media";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
};

/** Статическая мобильная сборка главной: proxy.ts отдаёт её телефонам по адресу «/». */
export default function MobileHomePage() {
  return <SiteExperience initialVariant="mobile" media={getSiteMedia()} />;
}
