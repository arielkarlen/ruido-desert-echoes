import heroImage from "../../assets/ruido-hero.jpg";
import { useLanguage } from "../../lib/language";

export default function HeroBanner() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section id="inicio" className="hero-section relative flex min-h-[92svh] items-end">
      <img
        src={heroImage}
        alt={hero.heroAlt}
        width={1920}
        height={1080}
        className="fixed inset-0 -z-10 h-screen w-full object-cover"
      />
      <div className="hero-shade absolute inset-0" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <p className="section-kicker mb-10">{hero.kicker}</p>
        <h1 className="max-w-5xl font-display text-5xl font-black uppercase leading-[0.88] sm:text-8xl lg:text-[9rem]">
          {hero.titleLine1}
          <br />
          <span className="text-primary">{hero.titleHighlight}</span>
        </h1>
        <p className="mt-7 max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg">
          {hero.description}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 hidden border-l border-t border-border bg-background/75 px-7 py-4 font-mono text-[10px] uppercase text-muted-foreground lg:block">
        {hero.volume}
      </div>
    </section>
  );
}
