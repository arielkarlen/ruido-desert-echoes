import ampsImage from "../../assets/ruido-amps.jpg";
export default function History() {
  return (
    <section
      id="historia"
      className="section-grid mx-auto grid max-w-7xl gap-14 px-5 py-28 md:grid-cols-2 md:px-8 md:py-40"
    >
      <div className="max-w-xl md:pt-10">
        <p className="section-kicker">01 — Historia</p>
        <h2 className="section-title mt-6">
          Somos
          <br />R U I D O
        </h2>
        <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
          <p>
            A la sombra del Aconcagua y con el calor del desierto cuyano, el{" "}
            <strong>R U I D O</strong> comienza a gestarse un Enero del 2023, en el sótano de una
            sala del centro mendocino, de la mano de Ariel y Rober.
          </p>
          <p>
            Con la llegada de Germán y Horacio en batería, la formación comienza a hacerse un lugar
            en la escena stoner de Mendoza bajo el nombre de Caronte.
          </p>
          <p>
            En julio de 2025 graban su primer EP, un punto de quiebre que transforma su sonido y su
            identidad. De ese caos nace <strong>R U I D O</strong>.
          </p>
          <p>
            Después del disco, la banda atraviesa nuevos cambios de formación con la llegada de Gino
            y la salida de Rober, dejando a Ariel y German como miembros originales. Hoy,{" "}
            <strong>R U I D O</strong> vuelve a renacer, con la mirada puesta en lo que viene y en
            el sucesor de su álbum debut.
          </p>
        </div>
        <div className="mt-12 flex items-center gap-5">
          <span className="h-px w-20 bg-primary" />
          <span className="font-mono text-[10px] uppercase text-muted-foreground">
            Pese a todo... adelante
          </span>
        </div>
      </div>
      <figure className="image-frame md:ml-auto md:max-w-lg">
        <img
          src={ampsImage}
          alt="Amplificadores y pedales en la sala de ensayo"
          width={800}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
        />
        <figcaption className="absolute bottom-4 left-4 font-mono text-[9px] uppercase text-foreground/70">
          Sala de ensayo · Registro 01
        </figcaption>
      </figure>
    </section>
  );
}
