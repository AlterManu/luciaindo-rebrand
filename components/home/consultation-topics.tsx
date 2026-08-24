import Image from "next/image";

const topics = [
  "Reconocer, expresar o regular las emociones.",
  "Experiencias adversas de la infancia que siguen influyendo hoy.",
  "Patrones vinculares que se repiten una y otra vez.",
  "Apego, miedo al abandono y dificultad para poner límites.",
  "Autoexigencia, culpa y sensación de no ser suficiente.",
  "Ansiedad relacionada con los vínculos y la propia historia.",
  "Identificar y comunicar lo que necesitás.",
  "Momentos vitales que piden comprensión y acompañamiento.",
];

const marqueeText = "PSICOTERAPIA CON PERSPECTIVA INTEGRATIVA";

const imageSrcA = "/images/leaves-1.png";
const imageSrcB = "/images/leaves-2.png";

export function ConsultationTopics() {
  return (
    <section id="motivos">
      <div className="grid lg:grid-cols-2">
        {/* Image column */}
        <div className="relative min-h-88 lg:min-h-152">
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
              <li
                key={i}
                className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm ${i % 2 === 0 ? "bg-accent" : "bg-muted"}`}
              >
                <img
                  src={i % 2 === 0 ? imageSrcA : imageSrcB}
                  className="h-10 w-10"
                  alt="hojas"
                />
                <span className="text-sm text-pretty leading-relaxed text-secondary">
                  {topic}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-9 text-pretty text-sm leading-relaxed text-secondary-foreground/70 italic">
            {`<< No necesitás llegar con un diagnóstico ni poder explicar exactamente
            qué te sucede. La primera sesión también sirve para ordenar el
            motivo de consulta. >>`}
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
  );
}
