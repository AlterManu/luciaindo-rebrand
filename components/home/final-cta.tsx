export function FinalCta() {
  return (
    <section id="consultar" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div>
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-secondary-foreground/60">
            Reservar consulta
          </span>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-[3.2rem]">
            No necesitás tenerlo todo claro para{" "}
            <span className="italic text-primary">empezar</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-secondary-foreground/85">
            Si estás considerando comenzar terapia, podés completar una consulta
            breve para conocer la disponibilidad actual y coordinar una primera
            sesión. Te respondo personalmente.
          </p>
          <p className="mt-6 text-sm text-secondary-foreground/70">
            Sesiones online · España / Argentina
          </p>
        </div>

        <div className="rounded-3xl bg-background p-7 text-foreground md:p-9">
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                ¿Qué te gustaría trabajar? (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder="Podés contarme brevemente tu motivo de consulta"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-secondary px-7 py-3.5 text-sm font-medium text-secondary-foreground transition-opacity hover:opacity-90"
            >
              Quiero solicitar una sesión
            </button>
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              El valor y las condiciones se informan al responder tu consulta,
              antes de confirmar la primera sesión.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
