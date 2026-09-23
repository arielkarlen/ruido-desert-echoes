export type Language = "es" | "en";

export const languages: Language[] = ["es", "en"];

const translations = {
  es: {
    nav: [
      { label: "Somos RUIDO", href: "#historia" },
      { label: "Atras del RUIDO", href: "#banda" },
      { label: "Nuestro RUIDO", href: "#musica" },
      { label: "Segui el RUIDO", href: "#contacto" },
    ],
    hero: {
      kicker: "Argentina · Mendoza· Stoner / Doom / Desert Rock",
      titleLine1: "Ritual del",
      titleHighlight: "caos",
      description: "Poesia densa. Distorsión infinita. Cuatro amplificadores de un solo ruido.",
      volume: "Vol. II · MMXXVII",
      heroAlt: "Ruinas bajo un sol rojo en el desierto",
    },
    history: {
      kicker: "01 — Historia",
      titleLine1: "Somos",
      titleLine2: "R U I D O",
      paragraphs: [
        "A la sombra del Aconcagua y con el calor del desierto cuyano, el R U I D O comienza a gestarse un Enero del 2023, en el sótano de una sala del centro mendocino, de la mano de Ariel y Rober.",
        "Con la llegada de Germán y Horacio en batería, la formación comienza a hacerse un lugar en la escena stoner de Mendoza bajo el nombre de Caronte.",
        "En julio de 2025 graban su primer EP, un punto de quiebre que transforma su sonido y su identidad. De ese caos nace R U I D O.",
        "Después del disco, la banda atraviesa nuevos cambios de formación con la llegada de Gino y la salida de Rober, dejando a Ariel y German como miembros originales. Hoy, R U I D O vuelve a renacer, con la mirada puesta en lo que viene y en el sucesor de su álbum debut.",
      ],
      tagline: "Pese a todo... adelante",
      imageAlt: "Amplificadores y pedales en la sala de ensayo",
      imageCaption: "Sala de ensayo · Registro 01",
    },
    members: {
      kicker: "02 — Integrantes",
      title: "Atrás del RUIDO",
      subtitle: "Cuatro estilos. Una misma fuerza.",
      roles: ["Guitarra", "Bajo", "Batería", "Voz"],
    },
    music: {
      kicker: "03 — Música",
      albumAlt: "Portada de 6 Monedas para Caronte",
      eyebrow: "EP · 2025",
      title: "6 Monedas para Caronte",
      moreInfoLabel: "+ info",
      infoContent:
        "Grabado, mezclado y masterizado en Bonsai Estudios, San Juan, entre los meses de Julio y Octubre del 2026.",
      spotifyLabel: "Spotify",
      youtubeLabel: "YouTube",
    },
    contact: {
      kicker: "04 — Contacto",
      title: "Seguí el ruido.",
      tagline: "Fechas · Prensa",
    },
    footer: {
      quote: '"Y una vez más, siguiendo el rastro de luz..."',
      copyright: "© 2026 R U I D O · Argentina",
    },
  },
  en: {
    nav: [
      { label: "We are RUIDO", href: "#historia" },
      { label: "Behind the RUIDO", href: "#banda" },
      { label: "Our RUIDO", href: "#musica" },
      { label: "Follow the RUIDO", href: "#contacto" },
    ],
    hero: {
      kicker: "Argentina · Mendoza · Stoner / Doom / Desert Rock",
      titleLine1: "Ritual of",
      titleHighlight: "chaos",
      description: "Dense poetry. Infinite distortion. Four amplifiers of a single noise.",
      volume: "Vol. II · MMXXVII",
      heroAlt: "Ruins under a red desert sun",
    },
    history: {
      kicker: "01 — History",
      titleLine1: "We are",
      titleLine2: "R U I D O",
      paragraphs: [
        "In the shadow of the Aconcagua and under the heat of the Cuyo desert, R U I D O began to take shape in January 2023, in the basement of a rehearsal room in downtown Mendoza, led by Ariel and Rober.",
        "With the arrival of Germán and Horacio on drums, the lineup began carving out a place in Mendoza's stoner scene under the name Caronte.",
        "In July 2025 they recorded their first EP, a turning point that transformed their sound and identity. From that chaos, R U I D O was born.",
        "After the record, the band went through new lineup changes with the arrival of Gino and the departure of Rober, leaving Ariel and Germán as the original members. Today, R U I D O is reborn once again, looking ahead to what's next and to the successor of its debut album.",
      ],
      tagline: "Against it all... onward",
      imageAlt: "Amplifiers and pedals in the rehearsal room",
      imageCaption: "Rehearsal room · Recording 01",
    },
    members: {
      kicker: "02 — Members",
      title: "Behind the RUIDO",
      subtitle: "Four styles. One single force.",
      roles: ["Guitar", "Bass", "Drums", "Vocals"],
    },
    music: {
      kicker: "03 — Music",
      albumAlt: "Cover art of 6 Monedas para Caronte",
      eyebrow: "EP · 2025",
      title: "6 Monedas para Caronte",
      moreInfoLabel: "+ info",
      infoContent:
        "Recorded, mixed and mastered at Bonsai Estudios, San Juan, between July and October 2026.",
      spotifyLabel: "Spotify",
      youtubeLabel: "YouTube",
    },
    contact: {
      kicker: "04 — Contact",
      title: "Follow the noise.",
      tagline: "Dates · Press ",
    },
    footer: {
      quote: '"And once again, following the trail of light..."',
      copyright: "© 2026 R U I D O · Argentina",
    },
  },
} as const satisfies Record<Language, unknown>;

export default translations;
