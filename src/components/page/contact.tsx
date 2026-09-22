export default function Contact() {
  return (
    <section id="contacto" className="contact-band border-t border-border py-28">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-5 md:flex-row md:items-end md:px-8">
        <div>
          <p className="section-kicker">04 — Contacto</p>
          <h2 className="section-title mt-6">Escucha el ruido.</h2>
        </div>
        <div className="space-y-4 md:text-right">
          <a
            href="mailto:hola@ruidobanda.com.ar"
            className="block font-display text-xl hover:text-primary md:text-3xl"
          >
            somosruidostoner@gmail.com
          </a>
          {/* <a
            href="tel:+5492615440633"
            className="block font-mono text-sm text-muted-foreground hover:text-primary"
          >
            +54 9 2615440633
          </a> */}
          <p className="text-xs uppercase text-muted-foreground">
            Fechas · Prensa · Contrataciones
          </p>
        </div>
      </div>
    </section>
  );
}
