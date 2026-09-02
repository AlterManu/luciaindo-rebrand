import Image from "next/image";

const credentials = [
  "Perspectiva integrativa",
  "Informada por trauma y apego",
  "Acompañamiento a personas adultas",
];

const MainImage = () => {
  return (
    <Image
      src="/images/lucia.jpeg"
      alt="Lucía Indo"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover"
    />
  );
};

export function About() {
  return (
    <section id="sobre-mi" className="bg-accent/50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10 md:py-28">
        <div className="hidden md:block relative h-full rounded-2xl overflow-hidden">
          <MainImage />
        </div>

        <div>
          <span className="w-full block text-center text-[0.72rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Sobre mí
          </span>
          <h2 className="w-full block text-center mt-5 text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-[3.2rem]">
            Soy Lucía Indo, <span className="italic">psicóloga sanitaria</span>
          </h2>

          <div className="md:hidden relative h-[50vh] rounded-2xl overflow-hidden mt-6">
            <MainImage />
          </div>

          <div className="mt-7 max-w-xl space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Acompaño a personas adultas desde una perspectiva integrativa, con
              especial atención a cómo las experiencias tempranas y los vínculos
              participan en la manera en que hoy sentimos, reaccionamos y nos
              relacionamos.
            </p>
            <p>
              Mi forma de trabajar combina profundidad clínica, formación
              continua y un acompañamiento cuidadoso. Me interesa que puedas
              comprender lo que te sucede sin reducir tu experiencia a una
              etiqueta ni recibir soluciones rápidas para procesos que necesitan
              ser abordados con seriedad.
            </p>

            <p className="font-medium text-foreground underline my-1">
              Formación
            </p>
            <ul>
              <li>
                ○ Licenciada en Psicología - Universidad Nacional de Mar del
                Plata
              </li>
              <li>
                ○ Formación en modelo PARCUVE (trauma y apego con técnicas
                cognitivo-conductuales) - AEPSIS
              </li>
              <li>
                ○ Formación en EMDR (Eye Movement Desensitization and
                Reprocessing) - AEPSIS
              </li>
            </ul>
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

          <p className="w-fit mt-6 text-sm text-muted-foreground border-b border-primary">
            Psicóloga colegiada nº{" "}
            <span className="text-foreground">G-7603</span>
          </p>
        </div>
      </div>
    </section>
  );
}
