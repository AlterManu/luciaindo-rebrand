import Image from "next/image";

const cards = [
  {
    title: "Mi forma de trabajar",
    body: "Trabajo con una perspectiva integrativa e informada por trauma y apego. Esto significa que no observo únicamente el síntoma o la dificultad actual. También tenemos en cuenta tu historia, tus vínculos, los recursos que desarrollaste para atravesar determinadas experiencias y la manera en que todo eso puede continuar interviniendo en tu presente.",
  },
  {
    title: "El espacio terapéutico",
    body: "El proceso no busca apresurarte ni ofrecer respuestas generales para situaciones complejas. La propuesta es construir un espacio profesional y cuidado en el que podamos comprender lo que te sucede y trabajar de acuerdo con tus necesidades, tus posibilidades y el momento en el que estás.",
  },
];

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
            Enfoque terapéutico
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.12] tracking-tight md:text-[2.9rem]">
            Una terapia que{" "}
            <span className="italic text-primary underline">no simplifica</span>{" "}
            lo que te pasa
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
  );
}
