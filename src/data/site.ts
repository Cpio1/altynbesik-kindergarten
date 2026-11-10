/**
 * Факты о детском саде и настройки сайта.
 * Тексты на казахском и русском лежат в translations.ts.
 */
export const site = {
  name: "Алтынбесік",

  phone: {
    display: "8 (727) 398-19-67",
    e164: "+77273981967",
  },

  instagram: {
    handle: "@altynbesik6",
    url: "https://www.instagram.com/altynbesik6/",
  },

  /**
   * Ссылка на папку Google Drive с документами. Пример:
   * documentsUrl: "https://drive.google.com/drive/folders/XXXXXXXX",
   * Пока здесь null, кнопка «Құжаттарды қарау» на сайте не показывается.
   */
  documentsUrl: null as string | null,

  /**
   * Отдельный номер WhatsApp только цифрами. Пример: whatsappNumber: "77001234567".
   * Пока здесь null, кнопка WhatsApp на сайте не показывается.
   * Городской номер сюда указывать не нужно.
   */
  whatsappNumber: null as string | null,

  /** Карточка организации в 2ГИС: название и адрес сверены с исходными данными. */
  twoGis: {
    city: "almaty",
    firmId: "70000001027903923",
    lat: 43.431725,
    lon: 77.073097,
  },
};

/** Названия групп в порядке отображения на сайте. */
export const groupNames = [
  "АлтынҮміт",
  "АлтынБала",
  "АлтынҰя",
  "АлтынҰрпақ",
  "АлтынПерзент",
  "АлтынБөбек",
  "АлтынМұра",
  "АлтынАрай",
] as const;

export const phoneHref = `tel:${site.phone.e164}`;

export const twoGisFirmUrl = `https://2gis.kz/${site.twoGis.city}/firm/${site.twoGis.firmId}`;

export const twoGisWidgetUrl = `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
  JSON.stringify({
    pos: { lat: site.twoGis.lat, lon: site.twoGis.lon, zoom: 16 },
    opt: { city: site.twoGis.city },
    org: site.twoGis.firmId,
  }),
)}`;

/** Возвращает ссылку на документы, только если она настоящая и https. */
export function documentsHref(): string | null {
  const url = site.documentsUrl?.trim();
  return url && url.startsWith("https://") ? url : null;
}

export function whatsappHref(): string | null {
  const digits = site.whatsappNumber?.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
}

export const sectionIds = [
  "about",
  "groups",
  "clubs",
  "nutrition",
  "gallery",
  "documents",
  "contacts",
] as const;

export type SectionId = (typeof sectionIds)[number];

/** Адрес сайта для canonical и Open Graph; на Vercel определяется автоматически. */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
