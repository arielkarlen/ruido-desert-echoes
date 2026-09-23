import type { Language } from "./translations";

// Absolute URL required by Facebook/LinkedIn/WhatsApp crawlers.
export const siteUrl = "https://somosruido.netlify.app";
const ogImage = `${siteUrl}/ogImege.jpg`;
const ogImageWidth = "1200";
const ogImageHeight = "630";

export const metaContent = {
  es: {
    title: "R U I D O — Stoner / Doom / Desert Rock",
    description: "Sitio oficial de R U I D O. Stoner Rock desde Mendoza, Argentina.",
    ogTitle: "R U I D O — Stoner / Doom / Desert Rock",
    ogDescription: "Historia, integrantes, música y contacto de R U I D O.",
    ogImageAlt: "R U I D O — Ritual del caos",
    locale: "es_AR",
  },
  en: {
    title: "R U I D O — Stoner / Doom / Desert Rock",
    description: "Official site of R U I D O. Stoner Rock from Mendoza, Argentina.",
    ogTitle: "R U I D O — Stoner / Doom / Desert Rock",
    ogDescription: "History, members, music and contact of R U I D O.",
    ogImageAlt: "R U I D O — Ritual of chaos",
    locale: "en_US",
  },
} as const satisfies Record<Language, unknown>;

export function buildMeta(language: Language = "es") {
  const content = metaContent[language];
  return [
    { title: content.title },
    { name: "description", content: content.description },
    { property: "og:site_name", content: "R U I D O" },
    { property: "og:title", content: content.ogTitle },
    { property: "og:description", content: content.ogDescription },
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteUrl },
    { property: "og:locale", content: content.locale },
    { property: "og:image", content: ogImage },
    { property: "og:image:secure_url", content: ogImage },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: ogImageWidth },
    { property: "og:image:height", content: ogImageHeight },
    { property: "og:image:alt", content: content.ogImageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: content.ogTitle },
    { name: "twitter:description", content: content.ogDescription },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:image:alt", content: content.ogImageAlt },
  ];
}

// Default Spanish meta, used for the static server-rendered head.
export const meta = buildMeta("es");
