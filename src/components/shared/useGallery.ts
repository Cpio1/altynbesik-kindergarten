"use client";

import { useEffect, useRef, useState } from "react";

/** Общая логика галереи: раскрытие остальных фото и открытый снимок в lightbox. */
export function useGallery(total: number, initialCount: number) {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const firstNewRef = useRef<HTMLButtonElement>(null);
  const shouldFocus = useRef(false);

  const visibleCount = expanded ? total : Math.min(initialCount, total);

  // После «Тағы көрсету» кнопка исчезает, поэтому фокус переходит на первое новое фото.
  useEffect(() => {
    if (expanded && shouldFocus.current) {
      shouldFocus.current = false;
      firstNewRef.current?.focus({ preventScroll: true });
    }
  }, [expanded]);

  return {
    visibleCount,
    hasMore: visibleCount < total,
    expand: () => {
      shouldFocus.current = true;
      setExpanded(true);
    },
    firstNewRef,
    firstNewIndex: initialCount,
    openIndex,
    setOpenIndex,
    close: () => setOpenIndex(null),
  };
}
