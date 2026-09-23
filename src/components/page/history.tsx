import { Fragment } from "react";
import ampsImage from "../../assets/ruido-amps.jpg";
import { useLanguage } from "../../lib/language";

function highlightBrand(text: string) {
  const parts = text.split("R U I D O");
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && <strong>R U I D O</strong>}
    </Fragment>
  ));
}

export default function History() {
  const { t } = useLanguage();
  const { history } = t;

  return (
    <section id="historia" className="relative z-10 bg-background py-28 md:py-40">
      <div className="section-grid mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-8">
        <div className="max-w-xl md:pt-10">
          <p className="section-kicker">{history.kicker}</p>
          <h2 className="section-title mt-6">
            {history.titleLine1}
            <br />
            {history.titleLine2}
          </h2>
          <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
            {history.paragraphs.map((paragraph, index) => (
              <p key={index}>{highlightBrand(paragraph)}</p>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-5">
            <span className="h-px w-20 bg-primary" />
            <span className="font-mono text-[10px] uppercase text-muted-foreground">
              {history.tagline}
            </span>
          </div>
        </div>
        <figure className="image-frame md:ml-auto md:mt-10 md:max-w-lg">
          <img
            src={ampsImage}
            alt={history.imageAlt}
            width={800}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
          />
          <figcaption className="absolute bottom-4 left-4 font-mono text-[9px] uppercase text-foreground/70">
            {history.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
