import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Play, Youtube, X } from "lucide-react";
import { meta } from "../config/meta";
import { tracks } from "../config/tracks";
import albumCover from "../assets/dunas-de-sangre.jpg";
import logoAsset from "../assets/logoFinal.png.asset.json";
import MainHeader from "@/components/page/header";
import HeroBanner from "@/components/page/heroBanner";
import History from "@/components/page/history";
import Members from "@/components/page/members";
const pageTitle =
  meta.find((item) => typeof item.title === "string")?.title ??
  "R U I D O — Stoner / Doom / Desert Rock";

export const Route = createFileRoute("/")({
  head: () => ({
    title: pageTitle,
    meta: meta.slice(1),
  }),
  component: Index,
});

function Index() {
  return (
    <div className="site-shell min-h-screen overflow-hidden bg-background text-foreground">
      <MainHeader />
      <main>
        <HeroBanner />
        <History />
        <Members />
        <section id="musica" className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
          <p className="section-kicker mb-12">03 — Música</p>
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
            <div className="album-frame">
              <img
                src={albumCover}
                alt="Portada de Dunas de Sangre"
                width={1200}
                height={1200}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase text-primary">
                Primer larga duración · 2026
              </p>
              <h2 className="font-display text-4xl font-black uppercase leading-none md:text-6xl">
                Dunas de sangre
              </h2>
              <ol className="mt-10 border-t border-border">
                {tracks.map(([number, title, duration]) => (
                  <li
                    key={number}
                    className="track-row grid grid-cols-[2.5rem_1fr_auto] items-center border-b border-border py-4"
                  >
                    <span className="font-mono text-[10px] text-primary">{number}</span>
                    <span className="text-sm font-semibold">{title}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{duration}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex gap-3">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="music-button music-button-primary"
                >
                  <Play size={15} fill="currentColor" /> Spotify
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="music-button music-button-secondary"
                >
                  <Youtube size={16} /> YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-band border-t border-border py-28">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-5 md:flex-row md:items-end md:px-8">
            <div>
              <p className="section-kicker">04 — Contacto</p>
              <h2 className="section-title mt-6">Hacé ruido.</h2>
            </div>
            <div className="space-y-4 md:text-right">
              <a
                href="mailto:hola@ruidobanda.com.ar"
                className="block font-display text-xl hover:text-primary md:text-3xl"
              >
                hola@ruidobanda.com.ar
              </a>
              <a
                href="tel:+5491112345678"
                className="block font-mono text-sm text-muted-foreground hover:text-primary"
              >
                +54 9 11 1234 5678
              </a>
              <p className="text-xs uppercase text-muted-foreground">
                Fechas · Prensa · Contrataciones
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <img
            src={logoAsset.url}
            alt="R U I D O"
            width={877}
            height={278}
            loading="lazy"
            className="w-32"
          />
          <div className="flex gap-3">
            <a
              className="social-link"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={17} />
            </a>
            <a
              className="social-link"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a
              className="social-link"
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              className="social-link"
              href="https://open.spotify.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify"
            >
              <Play size={17} fill="currentColor" />
            </a>
          </div>
          <p className="font-mono text-[9px] uppercase text-muted-foreground">
            © 2026 R U I D O · Argentina
          </p>
        </div>
      </footer>
    </div>
  );
}
