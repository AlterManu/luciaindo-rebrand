import Link from "next/link";

const paragraphs = [
  "Tal vez te cuesta regular lo que sentís, reaccionás con mucha intensidad ante determinadas experiencias o aprendiste a desconectarte de tus emociones para poder continuar.",
  "Puede que algunos vínculos despierten inseguridad, miedo a perder al otro o una necesidad constante de agradar.",
  "O que vivas con un nivel de autoexigencia que no te permite descansar, equivocarte ni sentir que lo que hacés es suficiente.",
  "La terapia puede ofrecerte un espacio para comprender de dónde surgen estas respuestas, qué función tuvieron en tu historia y cómo empezar a construir otras formas de relacionarte con lo que te sucede.",
];

export function Recognition() {
  return (
    <section id="espacio">
      <div className="bg-primary">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-8 md:py-24">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-primary-foreground/60">
            Quizás llegaste hasta acá porque…
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-serif text-3xl leading-[1.15] tracking-tight text-primary-foreground md:text-[2.9rem]">
            Hay situaciones que podés{" "}
            <span className="italic">comprender racionalmente</span> y que, aun
            así, <span className="italic">siguen afectándote.</span>
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
