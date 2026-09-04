import Link from "next/link";
import { WA_LINK } from "../constants/walink";
import { FaWhatsapp } from "react-icons/fa6";

const cards = [
  {
    num: "PASO 1",
    title: "Sesión de valoración",
    items: [
      "Nos conocemos, escucho qué te preocupa, resuelvo tus dudas y vemos juntos si este proceso es el adecuado para ayudarte.",
    ],
  },
  {
    num: "PASO 2",
    title: "Evaluación inicial",
    items: [
      "Construimos un vínculo de confianza y realizamos una evaluación psicológica de tu historia, tu contexto, tus emociones, tus pensamientos y tu estilo de apego.",
    ],
  },
  {
    num: "PASO 3",
    title: "Comprensión de tu caso",
    items: [
      "Damos sentido en conjunto a lo que te ocurre hoy, conectando tus dificultades actuales con tu historia para comprender de dónde viene el malestar y trazar el camino a seguir.",
    ],
  },
  {
    num: "PASO 4",
    title: "Intervención y regulación",
    items: [
      "Empezamos a trabajar objetivos concretos siempre dentro de tu ventana de tolerancia, con herramientas adaptadas a ti para ayudarte a regular tu sistema nervioso y tu mente.",
    ],
  },
  {
    num: "PASO 5",
    title: "Autonomía e integración",
    items: [
      "A medida que avances, revisamos tus objetivos y fortalecemos tus propios recursos para que logres integrar tu historia y llevarte herramientas a largo plazo.",
    ],
  },
];

export function Approach() {
  return (
    <section id="enfoque" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[0.72rem] xl:text-base font-medium uppercase tracking-[0.24em] text-secondary-foreground/60">
            El proceso
          </span>
          <h2 className="mt-5 text-balance font-serif leading-[1.12] tracking-tight text-3xl md:text-[2.9rem]">
            ¿Cómo sería{" "}
            <span className="italic text-primary">empezar terapia</span>{" "}
            conmigo?
          </h2>
          <p className="px-4 lg:px-8 text-left lg:text-center text-sm md:text-base mt-8 text-pretty leading-relaxed text-secondary-foreground/80">
            En terapia no vas a encontrar juicios, presión ni recetas mágicas.
            Vas a encontrar un espacio seguro donde poder hablar con calma,
            sintonizar con tu cuerpo y tu mente, y trabajar paso a paso con un
            enfoque integrador para que recuperes el control de tu vida.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.num}
              className="flex flex-col rounded-3xl p-7 border border-secondary-foreground/15 bg-secondary-foreground/10"
            >
              <span className="font-serif text-2xl italic text-primary">
                {card.num}
              </span>
              <h3 className="mt-3 font-serif text-xl tracking-tight text-secondary-foreground">
                {card.title}
              </h3>

              <ul className="mt-5 space-y-3.5">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pretty text-base leading-relaxed text-secondary-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center text-sm">
          <p className="text-sm md:text-base lg:text-lg mt-12 mb-6 max-w-3xl text-balance text-center leading-relaxed text-secondary-foreground/70">
            No hace falta tenerlo todo ordenado para empezar. Sí ayuda haber
            recorrido lo suficiente como para querer mirarlo con acompañamiento
            profesional.
          </p>

          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-serif text-base lg:text-xl mt-4 bg-primary text-secondary hover:bg-accent transition-all duration-400 rounded-xl px-6 lg:px-8 py-2 flex items-center gap-1.5"
          >
            <p>Quiero conocer la disponibilidad</p>
            <FaWhatsapp className="text-xl mb-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
