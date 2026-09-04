"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿La terapia es completamente online?",
    a: "Sí. Las sesiones se realizan por videollamada. Para preservar la privacidad del encuentro, es importante que cuentes con un espacio tranquilo, conexión estable y auriculares si los necesitás.",
  },
  {
    q: "¿Necesito tener un diagnóstico para consultar?",
    a: "No. Podés consultar a partir de una dificultad, una experiencia o una situación que quieras comprender y trabajar.",
  },
  {
    q: "¿Con qué frecuencia se realizan las sesiones?",
    a: "La frecuencia se define según cada proceso. En muchos casos se comienza con sesiones semanales para sostener la continuidad del trabajo terapéutico.",
  },
  {
    q: "¿Qué sucede si necesito cancelar o reprogramar?",
    a: "Las cancelaciones o reprogramaciones deben informarse con un mínimo de 24 horas hábiles. Fuera de ese plazo, la sesión se abona igualmente.",
  },
  {
    q: "¿Cómo sé si este espacio es adecuado para mí?",
    a: "La primera sesión permite conversar sobre tu motivo de consulta, conocer mi forma de trabajo y evaluar si este encuadre puede acompañar tus necesidades actuales.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="preguntas"
      className="mx-auto max-w-7xl px-6 py-10 md:px-14 md:py-16"
    >
      <div className="mx-auto grid md:max-w-2xl lg:max-w-4xl xl:max-w-7xl items-center md:items-start lg:items-center w-full md:grid md:grid-cols-[0.8fr_1.2fr] md:gap-16 gap-12">
        <div>
          <span className="w-full block text-center font-medium uppercase tracking-[0.24em] text-muted-foreground text-[0.72rem] xl:text-base">
            Preguntas frecuentes
          </span>
          <h2 className="text-center mt-5 text-balance font-serif leading-[1.05] tracking-tight text-foreground text-2xl md:text-[2.5rem]">
            Antes de empezar...
          </h2>
          <div className="mx-auto relative mt-8 aspect-4/5 max-w-[24rem] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/before-start.jpg"
              alt="flores"
              fill
              sizes="30vw"
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="px-4">
          <div className="divide-y divide-border border-t border-border">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif tracking-tight text-foreground text-lg xl:text-2xl">
                      {faq.q}
                    </span>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="size-4" aria-hidden="true" />
                      ) : (
                        <Plus className="size-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 text-pretty leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
