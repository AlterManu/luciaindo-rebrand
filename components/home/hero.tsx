import Link from "next/link";
import Video from "../common/video";
import { FaWhatsapp } from "react-icons/fa";
import { WA_LINK } from "../constants/walink";

const textShadow = "1px 10px 24px black, 0 0 10em black";

export function Hero() {
  return (
    <section
      id="inicio"
      className="h-[calc(100vh-75px)] lg:h-screen overflow-hidden flex justify-center lg:bg-secondary relative"
    >
      <div className="flex mt-24 lg:items-center lg:mt-0 max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl px-2">
        {/* Title, info, and CTA */}
        <div className="lg:w-3/5 px-4 lg:px-6">
          <div className="flex flex-col">
            <p className="w-fit mb-8 rounded-full border border-border px-2 lg:px-4 py-2 font-medium uppercase tracking-[0.18em] text-white text-[0.65rem] md:text-sm">
              Psicóloga Sanitaria · Psicoterapia online
            </p>

            <h1
              className="text-balance font-serif text-[2.2rem] leading-none tracking-tight text-white md:text-[2.7rem] xl:text-[3rem]"
              style={{ textShadow }}
            >
              Comprender cómo tu{" "}
              <span className="italic lg:text-primary">historia</span> influye
              en tu <span className="italic lg:text-primary">presente</span>{" "}
              puede ayudarte a relacionarte de otra manera con vos y con los
              demás
            </h1>

            <p className="hidden xl:block text-accent pr-22 mt-8 font-medium text-xl">
              Un espacio de psicoterapia online con perspectiva integrativa e
              informada por trauma y apego, para trabajar experiencias,
              emociones y vínculos con profundidad y respetando tus tiempos.
            </p>

            <div className="mt-9 font-serif flex flex-wrap items-center gap-6 lg:gap-2 text-base md:text-lg lg:text-xl">
              <Link
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-white inline-flex items-center gap-2 rounded-full px-4 xl:px-6 py-2 hover:scale-[102%] transition-all duration-300"
              >
                Consultar disponibilidad
                <FaWhatsapp className="text-2xl text-primary" />
              </Link>
              <Link
                href="#enfoque"
                className="px-4 xl:px-6 underline decoration-primary decoration-2 underline-offset-4 text-white hover:text-primary lg:mt-2 xl:mt-0 hover:scale-[102%] transition-all duration-300"
              >
                Conocer cómo acompaño
              </Link>
            </div>
          </div>
        </div>

        {/* Video (as background in mobile and as right section at large screens) */}
        <div className="lg:w-2/5 lg:h-3/4">
          <Video
            src="/videos/hero.mp4"
            className="h-full w-full object-cover absolute top-0 left-0 -z-10 lg:static xl:w-3/4 lg:z-0 lg:rounded-[4rem] lg:p-4"
          />
        </div>
      </div>

      {/* Wavy top divider into the soft pink band */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 h-12 w-full text-primary lg:h-20"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,88 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
