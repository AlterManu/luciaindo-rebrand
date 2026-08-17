import Image from "next/image"

const topics = [
  "Reconocer, expresar o regular las emociones.",
  "Experiencias adversas de la infancia que siguen influyendo hoy.",
  "Patrones vinculares que se repiten una y otra vez.",
  "Apego, miedo al abandono y dificultad para poner límites.",
  "Autoexigencia, culpa y sensación de no ser suficiente.",
  "Ansiedad relacionada con los vínculos y la propia historia.",
  "Identificar y comunicar lo que necesitás.",
  "Momentos vitales que piden comprensión y acompañamiento.",
]

const marqueeText = "PSICOTERAPIA CON PERSPECTIVA INTEGRATIVA"

export function ConsultationTopics() {
  return (
    <section id="motivos">
      <div className="grid lg:grid-cols-2">
        {/* Image column */}
        <div className="relative min-h-[22rem] lg:min-h-[38rem]">
          <Image
            src="/images/proceso.png"
            alt="Detalle sereno de un espacio de trabajo terapéutico"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Checklist column */}
        <div className="bg-secondary px-6 py-16 text-secondary-foreground md:px-12 lg:py-20">
          <h2 className="text-balance font-serif text-3xl leading-[1.12] tracking-tight md:text-[2.6rem]">
            En terapia podemos{" "}
            <span className="italic text-primary">trabajar</span> sobre:
          </h2>

          <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-primary"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                <span className="text-pretty text-sm leading-relaxed text-secondary-foreground/85">
                  {topic}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-9 text-pretty text-sm leading-relaxed text-secondary-foreground/70">
            No necesitás llegar con un diagnóstico ni poder explicar exactamente qué te sucede. La
            primera sesión también sirve para ordenar el motivo de consulta.
          </p>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-border bg-background py-3">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted-foreground"
            >
              {marqueeText}
              <span className="text-primary" aria-hidden="true">
                &#10022;
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
