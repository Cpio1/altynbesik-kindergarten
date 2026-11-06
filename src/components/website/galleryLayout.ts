export type GallerySlot = { span: string; height: string };

/**
 * Раскладка по рядам из 3 и 2 снимков. Последний ряд никогда не остаётся с одним фото,
 * если снимков больше одного. Начальный показ всегда заканчивается целым рядом.
 */
export function buildGalleryLayout(total: number): { slots: GallerySlot[]; initial: number } {
  const rows: number[] = [];
  let left = total;
  while (left > 0) {
    const size = Math.min(rows.length % 2 === 0 ? 3 : 2, left);
    rows.push(size);
    left -= size;
  }
  const last = rows.length - 1;
  if (rows.length > 1 && rows[last] === 1) {
    if (rows[last - 1] === 3) {
      rows[last - 1] = 2;
      rows[last] = 2;
    } else {
      rows[last - 1] = 3;
      rows.pop();
    }
  }

  const slots: GallerySlot[] = [];
  let wideFirst = true;
  rows.forEach((size) => {
    if (size === 3) {
      for (let i = 0; i < 3; i += 1) slots.push({ span: "col-span-2", height: "h-[214px]" });
    } else if (size === 2) {
      const pair = wideFirst ? ["col-span-4", "col-span-2"] : ["col-span-2", "col-span-4"];
      wideFirst = !wideFirst;
      pair.forEach((span) => slots.push({ span, height: "h-[268px]" }));
    } else {
      slots.push({ span: "col-span-6", height: "h-[380px]" });
    }
  });

  let initial = 0;
  for (const size of rows) {
    if (initial >= 4) break;
    initial += size;
  }
  return { slots, initial };
}
