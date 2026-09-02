import Image from "next/image";

const topics = [
  "Dificultades para reconocer, expresar o regular las emociones.",
  "Experiencias adversas de la infancia que continúan influyendo en el presente.",
  "Patrones vinculares que se repiten una y otra vez.",
  "Apego, miedo al abandono y dificultad para poner límites.",
  "Autoexigencia, culpa y sensación persistente de no ser suficiente.",
  "Trastornos de ansiedad, de estado de ánimo y de personalidad.",
  "Dificultad para identificar y comunicar lo que necesitás.",
  "Momentos vitales que requieren comprensión y acompañamiento.",
];

const marqueeText = "PSICOTERAPIA CON PERSPECTIVA INTEGRATIVA";

const imageSrcA = "/images/leaves-1.png";
const imageSrcB = "/images/leaves-2.png";

export function ConsultationTopics() {
  return (
    <section id="motivos">
      <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
        {/* Image column */}
        <div className="relative h-[60vh] lg:h-full">
          <Image
            src="/images/work.jpg"
            alt="Espacio de trabajo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Checklist column */}
        <div className="bg-secondary px-6 py-16 text-secondary-foreground lg:px-12 lg:py-20">
          <span className="text-[0.72rem] xl:text-base font-medium uppercase tracking-[0.24em] text-secondary-foreground/60 block w-full text-center">
            Motivos de consulta
          </span>

          <h2 className="mt-5 text-balance text-center font-serif leading-[1.12] tracking-tight text-3xl md:text-[2.9rem] ">
            ¿Qué podemos <span className="italic text-primary">trabajar</span>{" "}
            en terapia?
          </h2>

          <h3 className="mt-8 text-balance text-center leading-[1.12] tracking-tight text-base md:text-xl lg:text-2xl">
            Acompaño procesos vinculados con...
          </h3>

          <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {topics.map((topic, i) => (
              <li
                key={i}
                className={`flex items-center gap-2 rounded-2xl px-4 py-3 ${i % 2 === 0 ? "bg-accent" : "bg-muted"}`}
              >
                <img
                  src={i % 2 === 0 ? imageSrcA : imageSrcB}
                  className="h-10 w-10"
                  alt="hojas"
                />
                <span className="text-sm md:text-lg xl:text-lg text-pretty leading-relaxed text-secondary">
                  {topic}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-9 text-sm md:text-lg lg:text-xl text-pretty leading-relaxed text-secondary-foreground/70 italic">
            {`<< No necesitás llegar con un diagnóstico ni poder explicar exactamente qué te sucede. La primera sesión también permite ordenar el motivo de consulta y evaluar qué tipo de acompañamiento puede ser adecuado para vos. >>`}
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
