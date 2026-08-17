import Link from "next/link";
import Video from "../common/video";

export function Hero() {
  return (
    <section
      id="inicio"
      className="h-[calc(100vh-75px)] md:h-screen overflow-hidden flex justify-center md:bg-secondary relative"
    >
      <div className="flex mt-24 md:items-center md:mt-0">
        {/* Title, info, and CTA */}
        <div className="md:w-3/5 px-4 md:px-6">
          <div className="flex flex-col">
            <p className="w-fit mb-8 rounded-full border border-border px-2 md:px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white ">
              Psicóloga Sanitaria · Psicoterapia online
            </p>

            <h1 className="text-balance font-serif text-[2.2rem] leading-none tracking-tight text-white sm:text-6xl md:text-[4rem]">
              Comprender cómo tu{" "}
              <span className="italic md:text-primary">historia</span> influye
              en tu <span className="italic md:text-primary">presente</span>{" "}
              puede ayudarte a relacionarte de otra manera con vos y con los
              demás
            </h1>

            <p className="hidden text-accent pr-22 mt-8 md:block font-medium text-xl">
              Un espacio de psicoterapia online con perspectiva integrativa e
              informada por trauma y apego, para trabajar experiencias,
              emociones y vínculos con profundidad y respetando tus tiempos.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6 md:gap-2 text-base md:text-lg">
              <Link
                style={{ border: "1px solid white" }}
                href="#consultar"
                className="text-black bg-white inline-flex items-center gap-2 rounded-full px-4 py-2"
              >
                Reservar una primera consulta
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="#enfoque"
                className="font-medium px-4 text-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
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
