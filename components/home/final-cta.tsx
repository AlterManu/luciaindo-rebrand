import { FaWhatsapp } from "react-icons/fa6";
import { WA_LINK } from "../constants/walink";
import Link from "next/link";
import Image from "next/image";

export function FinalCta() {
  return (
    <section id="consultar" className="relative">
      <Image
        src="/images/woman-field.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-secondary/85 -z-10"
      />

      <div className="text-center mx-auto grid md:max-w-2xl lg:max-w-4xl xl:max-w-7xl gap-12 px-8 py-20 md:gap-16 md:px-8 md:py-28">
        <div className="xl:w-3/4 mx-auto text-secondary-foreground">
          <span className="lg:text-left text-[0.72rem] font-medium uppercase tracking-[0.24em] text-secondary-foreground/60">
            Reservar consulta
          </span>
          <h2 className="mt-5 text-balance font-serif leading-[1.05] tracking-tight text-3xl md:text-[2.9rem]">
            No necesitás tenerlo todo claro para{" "}
            <span className="italic text-primary">empezar</span>
          </h2>
          <p className="mt-6 sm:px-16 text-pretty leading-relaxed text-secondary-foreground/85">
            Si estás considerando comenzar terapia, podés completar una consulta
            breve para conocer la disponibilidad actual y coordinar una primera
            sesión. Te respondo personalmente.
          </p>
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-fit font-serif bg-primary text-secondary hover:bg-accent transition-all duration-400 rounded-xl px-6 py-2 inline-flex items-center gap-1.5"
          >
            Quiero solicitar una sesión
            <FaWhatsapp className="text-xl mb-0.5" />
          </Link>
          <p className="mt-10 text-sm">Sesiones online · España / Argentina</p>
        </div>
      </div>
    </section>
  );
}
