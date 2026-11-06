"use client";

import { useEffect, useState } from "react";
import { sectionIds, type SectionId } from "@/data/site";

/** Раздел, который сейчас пересекает среднюю линию экрана: для подсветки пункта меню. */
export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
          else setActive((current) => (current === entry.target.id ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sectionIds) {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}
