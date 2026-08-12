import Image from "next/image"
import Link from "next/link"

const pills = [
  "Perspectiva integrativa",
  "Informada por trauma y apego",
  "Sesiones online",
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-10 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pt-20">
        <div className="order-2 lg:order-1">
          <p className="mb-8 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Psicóloga Sanitaria · Psicoterapia online
          </p>

          <h1 className="text-balance font-serif text-[2.6rem] leading-[1.03] tracking-tight text-foreground sm:text-6xl lg:text-[4.2rem]">
            Un espacio para{" "}
            <span className="italic text-secondary">comprender</span> tu historia y{" "}
            <span className="italic text-secondary">habitar</span> tus emociones
          </h1>

          <div className="mt-8 max-w-xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p className="text-lg font-medium text-foreground">
              A veces no se trata de estar mal, sino de sentir que algo pide ser mirado con más
              cuidado.
            </p>
            <p>
              Acompaño procesos terapéuticos con profundidad y calidez, respetando los tiempos de
              cada persona: un lugar seguro para poner en palabras lo que duele, entender de dónde
              viene y encontrar otras formas de vincularte con vos y con los demás.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#consultar"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-medium text-secondary-foreground transition-opacity hover:opacity-90"
            >
              Reservar una primera consulta
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="#enfoque"
              className="text-sm font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-secondary"
            >
              Conocer cómo acompaño
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] bg-primary lg:-left-7 lg:-top-7"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-muted">
              <Image
                src="/images/hero-lucia.png"
                alt="Retrato de Lucía Indo, psicóloga sanitaria"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-4 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-border bg-card px-6 py-3 text-center text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {pills.map((pill, index) => (
            <span key={pill} className="flex items-center gap-3">
              {index > 0 && <span className="text-primary" aria-hidden="true">·</span>}
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
