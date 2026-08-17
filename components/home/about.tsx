import Image from "next/image"

const credentials = [
  "Perspectiva integrativa",
  "Informada por trauma y apego",
  "Acompañamiento a personas adultas",
]

export function About() {
  return (
    <section id="sobre-mi" className="bg-accent/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10 md:py-28">
        <div className="relative mx-auto max-w-sm md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-primary md:-bottom-7 md:-right-7"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-muted">
            <Image
              src="/images/about-lucia.png"
              alt="Lucía Indo en su consulta"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Sobre mí
          </span>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-[3.2rem]">
            Soy Lucía Indo<span className="italic">,</span> psicóloga sanitaria
          </h2>

          <div className="mt-7 max-w-xl space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Acompaño a personas adultas desde una perspectiva integrativa, con especial atención a
              cómo las experiencias tempranas y los vínculos participan en la manera en que hoy
              sentimos, reaccionamos y nos relacionamos.
            </p>
            <p>
              Mi forma de trabajar combina profundidad clínica, formación continua y un
              acompañamiento cuidadoso. Me interesa que puedas comprender lo que te sucede sin
              reducir tu experiencia a una etiqueta ni recibir soluciones rápidas para procesos que
              necesitan ser abordados con seriedad.
            </p>
            <p className="font-medium text-foreground">
              Formación:{" "}
              <span className="font-normal text-muted-foreground">
                [completar formación o especialidad principal]
              </span>
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {credentials.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                {c}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted-foreground">
            Psicóloga colegiada n.º <span className="text-foreground">[completar]</span>
          </p>
        </div>
      </div>
    </section>
  )
}
