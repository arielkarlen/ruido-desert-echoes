import heroImage from "../../assets/ruido-hero.jpg";
export default function HeroBanner() {
  return (
    <section id="inicio" className="hero-section relative flex min-h-[92svh] items-end">
      <img
        src={heroImage}
        alt="Ruinas bajo un sol rojo en el desierto"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-shade absolute inset-0" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <p className="section-kicker mb-10">Argentina · Mendoza· Stoner / Doom / Desert Rock</p>
        <h1 className="max-w-5xl font-display text-5xl font-black uppercase leading-[0.88] sm:text-8xl lg:text-[9rem]">
          Ritual del
          <br />
          <span className="text-primary">caos</span>
        </h1>
        <p className="mt-7 max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg">
          Poesia densa. Distorsión infinita. Cuatro partes de un mismo sonido.
        </p>
      </div>
      <div className="absolute bottom-0 right-0 hidden border-l border-t border-border bg-background/75 px-7 py-4 font-mono text-[10px] uppercase text-muted-foreground lg:block">
        Vol. II · MMXXVII
      </div>
    </section>
  );
}
