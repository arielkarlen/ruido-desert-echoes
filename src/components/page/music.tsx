import { Play, Youtube } from "lucide-react";
import albumCover from "../../assets/6monedas.jpg";
import { tracks } from "../../config/tracks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function Music() {
  return (
    <section id="musica" className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
      <p className="section-kicker mb-12">03 — Música</p>
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="album-frame">
          <img
            src={albumCover}
            alt="Portada de 6 Monedas para Caronte"
            width={1200}
            height={1200}
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase text-primary">EP · 2025</p>
          <h2 className="font-display text-4xl font-black uppercase leading-none md:text-6xl">
            6 Monedas para Caronte
          </h2>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="info" className="border-0">
              <AccordionTrigger className="w-fit gap-2 p-0 text-[12px] font-medium uppercase text-red-500 hover:no-underline [&>svg]:hidden">
                + info
              </AccordionTrigger>
              <AccordionContent className="pt-3 text-sm leading-relaxed text-foreground/80">
                Grabado, mezclado y masterizado en Bonsai Estudios, San Juan, entre los meses de
                Julio y Octubre.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
              href="https://open.spotify.com/intl-es/album/0oPejU1pLApYrdZhy37tyt?si=jZ9BRgAOQ9uGiefmDJ-s8Q"
              target="_blank"
              rel="noreferrer"
              className="music-button music-button-primary"
            >
              <Play size={15} fill="currentColor" /> Spotify
            </a>
            <a
              href="https://music.youtube.com/playlist?list=OLAK5uy_mGOx6lhspNETe44fQaVvRC19wdkEERyJc&si=rSE4raQQ1njqP6Kx"
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
  );
}
