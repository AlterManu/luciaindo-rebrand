import Link from "next/link";

const cards = [
  {
    num: "01",
    title: "Querés comprenderte",
    items: [
      "Sentís que hay algo que se repite y querés entender por qué.",
      "Buscás mirar tu historia sin quedarte solo en el síntoma.",
      "Necesitás un espacio serio, cuidado y sin apuros.",
    ],
  },
  {
    num: "02",
    title: "Algo te pesa hoy",
    items: [
      "Te cuesta regular lo que sentís o reaccionás con mucha intensidad.",
      "Vivís con autoexigencia, culpa o miedo a no ser suficiente.",
      "La ansiedad aparece en tus vínculos y decisiones.",
    ],
  },
  {
    num: "03",
    title: "Estás lista para empezar",
    items: [
      "Querés comprometerte con un proceso terapéutico real.",
      "Preferís acompañamiento online, flexible y a tu ritmo.",
      "Estás dispuesta a mirar de frente lo que te sucede.",
    ],
  },
];

export function Approach() {
  return (
    <section id="enfoque" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-secondary-foreground/60">
            Enfoque terapéutico
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.12] tracking-tight md:text-[2.9rem]">
            Una terapia que{" "}
            <span className="italic text-primary underline">no simplifica</span>{" "}
            lo que te pasa
          </h2>
          <p className="text-left mt-8 max-w-xl text-pretty leading-relaxed text-secondary-foreground/80">
            Trabajo desde una perspectiva integrativa e informada por trauma y
            apego. No observo únicamente el síntoma: tenemos en cuenta tu
            historia, tus vínculos y los recursos que desarrollaste para
            atravesar cada experiencia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.num}
              className="flex flex-col rounded-3xl p-7 border border-secondary-foreground/15 bg-secondary-foreground/10"
            >
              <span className="font-serif text-3xl italic text-primary">
                {card.num}
              </span>
              <h3 className="mt-3 font-serif text-xl tracking-tight text-secondary-foreground">
                {card.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span className="text-pretty text-sm leading-relaxed text-secondary-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center text-sm">
          <p className="text-sm mt-12 mb-6 max-w-3xl text-balance text-center leading-relaxed text-secondary-foreground/70">
            No hace falta tenerlo todo ordenado para empezar. Sí ayuda haber
            recorrido lo suficiente como para querer mirarlo con acompañamiento
            profesional.
          </p>

          <Link
            href="#consultar"
            className="w-fit font-serif text-primary border border-primary gap-2 rounded-full px-4 py-2"
          >
            Quiero conocer la disponibilidad
          </Link>
        </div>
      </div>
    </section>
  );
}
