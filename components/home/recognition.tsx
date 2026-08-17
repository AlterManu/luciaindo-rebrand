import Link from "next/link";

const paragraphs = [
  "Hay situaciones que podés comprender racionalmente y que, aun así, siguen afectándote. Tal vez te cuesta regular lo que sentís o reaccionás con mucha intensidad ante determinadas experiencias.",
  "Puede que aprendieras a desconectarte de tus emociones para poder continuar, o que algunos vínculos despierten inseguridad, miedo a perder al otro o una necesidad constante de agradar.",
  "O que vivas con un nivel de autoexigencia que no te permite descansar, equivocarte ni sentir que lo que hacés es suficiente.",
];

export function Recognition() {
  return (
    <section id="espacio" className="relative bg-[#fbf6f4]">
      {/* <div aria-hidden="true" className="bg-background">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-12 w-full text-primary md:h-20"
        >
          <path
            fill="currentColor"
            d="M0,40 C240,80 480,0 720,32 C960,64 1200,88 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div> */}

      <div className="bg-primary">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-8 md:py-24">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-primary-foreground/60">
            Quizás llegaste hasta acá porque…
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-serif text-3xl leading-[1.15] tracking-tight text-primary-foreground md:text-[2.9rem]">
            Algo pide ser mirado con <span className="italic">más cuidado</span>
          </h2>

          <div className="mt-8 space-y-5">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-pretty leading-relaxed text-primary-foreground/85"
              >
                {text}
              </p>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-pretty leading-relaxed text-primary-foreground">
            La terapia puede ofrecerte un espacio para comprender de dónde
            surgen estas respuestas, qué función tuvieron en tu historia y cómo
            empezar a construir otras formas de relacionarte con lo que te
            sucede.
          </p>

          <Link
            href="#consultar"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-medium text-secondary-foreground transition-opacity hover:opacity-90"
          >
            Dar el primer paso
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
