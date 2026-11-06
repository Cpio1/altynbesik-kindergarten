"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import type { SiteMedia } from "@/data/media";

export type Variant = "desktop" | "mobile";

/* Код второй версии загружается только если она действительно понадобилась. */
const DesktopLayout = dynamic(() =>
  import("@/components/website/DesktopLayout").then((mod) => mod.DesktopLayout),
);
const MobileLayout = dynamic(() =>
  import("@/components/mobile-website/MobileLayout").then((mod) => mod.MobileLayout),
);

const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribe(listener: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
}

export function SiteExperience({
  initialVariant,
  media,
}: {
  initialVariant: Variant;
  media: SiteMedia;
}) {
  const isDesktop = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => initialVariant === "desktop",
  );

  return isDesktop ? <DesktopLayout media={media} /> : <MobileLayout media={media} />;
}
