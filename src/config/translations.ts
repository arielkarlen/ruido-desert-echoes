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
        "A la sombra del Aconcagua y bajo el calor del desierto cuyano, R U I D O comienza a gestarse en enero de 2023, en el sótano de una sala del centro mendocino, de la mano de Ariel K. y Rober A.",
        "Con la llegada de Germán T. y Horacio A. en batería, el proyecto empieza a tomar forma y a hacerse un lugar en la escena stoner de Mendoza, por entonces bajo el nombre de Caronte.",
        "En julio de 2025 llega el primer EP. Un disco que marca un antes y un después, no solo en el sonido, sino también en la identidad de la banda. Antes de su estreno, Horacio deja el grupo y, en medio de ese caos, Caronte quedó atrás y nació R U I D O.",
        "Pero la historia no se detiene ahí. Después del lanzamiento llegan nuevos cambios: Gino B. se suma a la banda y Rober toma otro camino, dejando a Ariel y Germán  como los únicos miembros que siguen desde el comienzo.",
        "Hoy, R U I D O vuelve a pararse sobre sus propias ruinas, con la mirada puesta hacia adelante, el volumen más alto y nuevas canciones tomando forma.",
        "Porque algunas bandas nacen de un plan, pero R U I D O nació del ruido.",
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
        "In the shadow of the Aconcagua and under the heat of the Cuyo desert, R U I D O began to take shape in January 2023, in the basement of a rehearsal room in downtown Mendoza, led by Ariel K. and Rober A.",
        "With the arrival of Germán T. and Horacio A. on drums, the project began taking shape and carving out a place in Mendoza's stoner scene, back then under the name Caronte.",
        "In July 2025 the first EP arrives. A record that marks a before and after, not only in sound but also in the band's identity. Before its release, Horacio leaves the group and, amid that chaos, Caronte was left behind and R U I D O was born.",
        "But the story doesn't stop there. After the release come new changes: Gino B. joins the band and Rober takes a different path, leaving Ariel and Germán as the only members still standing since the beginning.",
        "Today, R U I D O rises once again over its own ruins, looking ahead, with the volume turned up and new songs taking shape.",
        "Because some bands are born from a plan, but R U I D O was born from noise.",
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
