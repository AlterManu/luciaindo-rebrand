import { FaWhatsapp } from "react-icons/fa6";
import { WA_LINK } from "../constants/walink";
import Link from "next/link";

export function FinalCta() {
  return (
    <section id="consultar" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div>
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-secondary-foreground/60">
            Reservar consulta
          </span>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-[3.2rem]">
            No necesitás tenerlo todo claro para{" "}
            <span className="italic text-primary">empezar</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-secondary-foreground/85">
            Si estás considerando comenzar terapia, podés completar una consulta
            breve para conocer la disponibilidad actual y coordinar una primera
            sesión. Te respondo personalmente.
          </p>
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-fit font-serif bg-primary text-secondary hover:bg-accent transition-all duration-400 rounded-xl px-6 py-2 inline-flex items-center gap-1"
          >
            Quiero solicitar una sesión
            <FaWhatsapp className="text-xl" />
          </Link>
        </div>
        <p className="text-sm">Sesiones online · España / Argentina</p>
      </div>
    </section>
  );
}
