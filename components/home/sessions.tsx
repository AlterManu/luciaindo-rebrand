import Image from "next/image"

const cards = [
  {
    title: "Cómo son los encuentros",
    body: "Las sesiones se realizan online por videollamada y duran 50 minutos. Un espacio privado, tranquilo y sostenido, en el que podés hablar con libertad y a tu propio ritmo.",
  },
  {
    title: "El primer encuentro",
    body: "Conversamos sobre qué te trae a consulta, tu situación actual y lo que te gustaría trabajar. También es el momento para que conozcas mi forma de acompañar y evaluemos juntas si el encuadre es adecuado para vos.",
  },
  {
    title: "Si decidimos continuar",
    body: "Acordamos la frecuencia de los encuentros según las características del proceso. La terapia avanza respetando tus tiempos, sin apurar ni forzar etapas.",
  },
]

export function Sessions() {
  return (
    <section id="sesiones" className="relative overflow-hidden">
      <Image
        src="/images/imaginario.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-secondary/85" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center text-secondary-foreground">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-secondary-foreground/60">
            Cómo son las sesiones
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.12] tracking-tight md:text-[2.9rem]">
            El proceso continúa{" "}
            <span className="italic text-primary">entre encuentros</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-border/70 bg-card/95 p-7 backdrop-blur"
            >
              <h3 className="font-serif text-xl tracking-tight text-card-foreground">
                {card.title}
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
