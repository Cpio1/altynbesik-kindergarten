import type { Metadata, Viewport } from "next";
import { Lora, Nunito } from "next/font/google";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { phoneHref, site, siteUrl } from "@/data/site";
import { LOCALE_STORAGE_KEY, translations } from "@/data/translations";
import "./globals.css";

// Оба шрифта содержат казахские буквы ә, ғ, қ, ң, ө, ұ, ү, һ, і (набор cyrillic-ext).
const lora = Lora({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-lora",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-nunito",
  display: "swap",
});

const { kk } = translations;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: kk.meta.title,
  description: kk.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: kk.fullName,
    title: kk.meta.title,
    description: kk.meta.description,
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFF9ED",
};

const earlyScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem(${JSON.stringify(
  LOCALE_STORAGE_KEY,
)})==='ru'){d.lang='ru';d.classList.add('locale-pending')}}catch(e){}})();`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: kk.fullName,
  alternateName: site.name,
  url: siteUrl(),
  telephone: phoneHref.replace("tel:", ""),
  sameAs: [site.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Айғаным Әл-Фараби көшесі, 1 үй",
    addressLocality: "Көктал ауылы",
    addressRegion: "Алматы облысы, Талғар ауданы",
    addressCountry: "KZ",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="kk"
      className={`${lora.variable} ${nunito.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
