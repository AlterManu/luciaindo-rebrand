import Image from "next/image";
import Link from "next/link";
import Video from "../../common/video";

const pills = [
  "Perspectiva integrativa",
  "Informada por trauma y apego",
  "Sesiones online",
];

export function Hero() {
  return (
    <section
      id="inicio"
      // className="h-screen overflow-hidden flex justify-center md:bg-[#fbf6f4] relative"
      className="h-[calc(100vh-75px)] md:h-screen overflow-hidden flex justify-center md:bg-secondary relative"
    >
      <div className="flex mt-24 md:items-center md:mt-0">
        {/* Title, info, and CTA */}
        <div className="md:w-3/5 px-4 md:px-6">
          <div className="flex flex-col">
            <p className="w-fit mb-8 rounded-full border border-border px-2 md:px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white ">
              Psicóloga Sanitaria · Psicoterapia online
            </p>

            <h1 className="text-balance font-serif text-[3rem] leading-none tracking-tight text-white sm:text-6xl md:text-[4.5rem]">
              Un espacio para{" "}
              <span className="italic text-white md:text-primary">
                comprender
              </span>{" "}
              tu historia y{" "}
              <span className="italic text-white md:text-primary">habitar</span>{" "}
              tus emociones
            </h1>

            <div className="hidden text-white mt-8 max-w-xl space-y-4 text-pretty leading-relaxed md:block">
              <p className="font-semibold text-xl">
                A veces no se trata de estar mal, sino de sentir que algo pide
                ser mirado con más cuidado.
              </p>
              {/* <p className="text-base">
                Acompaño procesos terapéuticos con profundidad y calidez,
                respetando los tiempos de cada persona: un lugar seguro para
                poner en palabras lo que duele, entender de dónde viene y
                encontrar otras formas de vincularte con vos y con los demás.
              </p> */}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-6 md:gap-2">
              <Link
                style={{ border: "1px solid white" }}
                href="#consultar"
                className="text-black bg-white inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg"
              >
                Reservar una primera consulta
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="#enfoque"
                className="text-lg font-medium px-4 text-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
              >
                Conocer cómo acompaño
              </Link>
            </div>
          </div>
        </div>

        {/* Video (as background in mobile and as right section at large screens) */}
        <div className="md:h-3/4 md:w-2/5">
          <Video
            src="/videos/hero.mp4"
            className="h-full w-full object-cover absolute top-0 left-0 -z-10 md:static md:w-3/4 md:z-0 md:rounded-[4rem] md:p-4"
          />
        </div>
      </div>

      {/* Pills */}
      {/* <div className="hidden md:block mx-auto max-w-7xl px-6 pb-4 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-border px-6 py-3 text-center text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white">
          {pills.map((pill, index) => (
            <span key={pill} className="flex items-center gap-3">
              {index > 0 && (
                <span className="text-primary" aria-hidden="true">
                  ·
                </span>
              )}
              {pill}
            </span>
          ))}
        </div>
      </div> */}

      {/* Wavy top divider into the soft pink band */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 h-12 w-full text-primary md:h-20"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,88 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
