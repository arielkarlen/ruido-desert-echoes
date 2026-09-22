import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, Play, Youtube, X } from "lucide-react";
import { useState } from "react";

import albumCover from "../assets/dunas-de-sangre.jpg";
import ampsImage from "../assets/ruido-amps.jpg";
import heroImage from "../assets/ruido-hero.jpg";
import bassImage from "../assets/member-bass.jpg";
import drumsImage from "../assets/member-drums.jpg";
import guitarImage from "../assets/member-guitar.jpg";
import voiceImage from "../assets/member-voice.jpg";
import logoAsset from "../assets/logoFinal.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R U I D O — Stoner / Doom / Desert Rock" },
      { name: "description", content: "Sitio oficial de R U I D O. Distorsión, peso y desierto desde Argentina." },
      { property: "og:title", content: "R U I D O — Stoner / Doom / Desert Rock" },
      { property: "og:description", content: "Historia, integrantes, música y contacto de R U I D O." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const members = [
  { name: "TOMÁS R.", role: "Guitarra", image: guitarImage },
  { name: "JULIÁN M.", role: "Bajo", image: bassImage },
  { name: "LUCAS V.", role: "Batería", image: drumsImage },
  { name: "MARCOS S.", role: "Voz", image: voiceImage },
];

const tracks = [
  ["01", "Ritual de Viento", "07:42"],
  ["02", "Colapso Estelar", "06:15"],
  ["03", "El Gran Humo", "09:03"],
  ["04", "Horizonte Rojo", "05:58"],
  ["05", "Manto de Tierra", "11:20"],
];

const nav = [
  ["Historia", "#historia"],
  ["Somos RUIDO", "#banda"],
  ["Música", "#musica"],
  ["Contacto", "#contacto"],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#inicio" aria-label="R U I D O — Inicio" className="block w-36 md:w-44">
            <img src={logoAsset.url} alt="R U I D O" width={877} height={278} className="h-auto w-full" />
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </nav>
          <button type="button" className="icon-button md:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Navegación móvil" className="border-t border-border bg-background px-5 py-5 md:hidden">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="block border-b border-border py-4 font-display text-lg uppercase" onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero-section relative flex min-h-[92svh] items-end">
          <img src={heroImage} alt="Ruinas bajo un sol rojo en el desierto" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
          <div className="hero-shade absolute inset-0" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
            <p className="section-kicker mb-5">Argentina · Stoner / Doom / Desert Rock</p>
            <h1 className="max-w-5xl font-display text-6xl font-black uppercase leading-[0.88] sm:text-8xl lg:text-[9rem]">Bajo el<br /><span className="text-primary">desierto</span></h1>
            <p className="mt-7 max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg">Frecuencias bajas. Distorsión infinita. Cuatro cuerpos empujando el mismo muro de sonido.</p>
          </div>
          <div className="absolute bottom-0 right-0 hidden border-l border-t border-border bg-background/75 px-7 py-4 font-mono text-[10px] uppercase text-muted-foreground lg:block">Vol. I · MMXXVI</div>
        </section>

        <section id="historia" className="section-grid mx-auto grid max-w-7xl gap-14 px-5 py-28 md:grid-cols-2 md:px-8 md:py-40">
          <div className="max-w-xl md:pt-10">
            <p className="section-kicker">01 — Historia</p>
            <h2 className="section-title mt-6">El eco<br />del vacío</h2>
            <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
              <p>Formados entre el concreto de Buenos Aires y el polvo de las rutas del norte, R U I D O nace como una necesidad de materializar el peso de la tierra.</p>
              <p>Nuestra música no busca la velocidad, sino la gravedad. Cada riff es una piedra; cada golpe de batería, un pulso tectónico que resuena en el pecho.</p>
            </div>
            <div className="mt-12 flex items-center gap-5"><span className="h-px w-20 bg-primary" /><span className="font-mono text-[10px] uppercase text-muted-foreground">Desde las profundidades</span></div>
          </div>
          <figure className="image-frame md:ml-auto md:max-w-lg">
            <img src={ampsImage} alt="Amplificadores y pedales en la sala de ensayo" width={800} height={1000} loading="lazy" className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
            <figcaption className="absolute bottom-4 left-4 font-mono text-[9px] uppercase text-foreground/70">Sala de ensayo · Registro 01</figcaption>
          </figure>
        </section>

        <section id="banda" className="border-y border-border bg-secondary/40 py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div><p className="section-kicker">02 — Integrantes</p><h2 className="section-title mt-5">Somos RUIDO</h2></div>
              <p className="hidden max-w-xs text-right text-sm leading-6 text-muted-foreground md:block">Cuatro fuerzas. Una sola masa de aire desplazándose.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {members.map((member, index) => (
                <article key={member.role} className="member-card group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-card">
                    <img src={member.image} alt={`${member.name}, ${member.role}`} width={768} height={1024} loading="lazy" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0" />
                    <span className="absolute left-3 top-3 font-mono text-[9px] text-foreground/60">0{index + 1}</span>
                  </div>
                  <div className="border-t border-border px-1 py-5"><h3 className="font-display text-sm font-black uppercase md:text-base">{member.name}</h3><p className="mt-1 text-xs uppercase text-primary">{member.role}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="musica" className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
          <p className="section-kicker mb-12">03 — Música</p>
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
            <div className="album-frame"><img src={albumCover} alt="Portada de Dunas de Sangre" width={1200} height={1200} loading="lazy" className="h-auto w-full" /></div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase text-primary">Primer larga duración · 2026</p>
              <h2 className="font-display text-4xl font-black uppercase leading-none md:text-6xl">Dunas de sangre</h2>
              <ol className="mt-10 border-t border-border">
                {tracks.map(([number, title, duration]) => (
                  <li key={number} className="track-row grid grid-cols-[2.5rem_1fr_auto] items-center border-b border-border py-4">
                    <span className="font-mono text-[10px] text-primary">{number}</span><span className="text-sm font-semibold">{title}</span><span className="font-mono text-[10px] text-muted-foreground">{duration}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex gap-3">
                <a href="https://open.spotify.com" target="_blank" rel="noreferrer" className="music-button music-button-primary"><Play size={15} fill="currentColor" /> Spotify</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="music-button music-button-secondary"><Youtube size={16} /> YouTube</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-band border-t border-border py-28">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-5 md:flex-row md:items-end md:px-8">
            <div><p className="section-kicker">04 — Contacto</p><h2 className="section-title mt-6">Hacé ruido.</h2></div>
            <div className="space-y-4 md:text-right"><a href="mailto:hola@ruidobanda.com.ar" className="block font-display text-xl hover:text-primary md:text-3xl">hola@ruidobanda.com.ar</a><a href="tel:+5491112345678" className="block font-mono text-sm text-muted-foreground hover:text-primary">+54 9 11 1234 5678</a><p className="text-xs uppercase text-muted-foreground">Fechas · Prensa · Contrataciones</p></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <img src={logoAsset.url} alt="R U I D O" width={877} height={278} loading="lazy" className="w-32" />
          <div className="flex gap-3">
            <a className="social-link" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
            <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
            <a className="social-link" href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
            <a className="social-link" href="https://open.spotify.com" target="_blank" rel="noreferrer" aria-label="Spotify"><Play size={17} fill="currentColor" /></a>
          </div>
          <p className="font-mono text-[9px] uppercase text-muted-foreground">© 2026 R U I D O · Argentina</p>
        </div>
      </footer>
    </div>
  );
}