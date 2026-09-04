import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const paragraphs = [
  {
    text: "Tal vez te cuesta regular lo que sentís, reaccionás con mucha intensidad ante determinadas experiencias o aprendiste a desconectarte de tus emociones para poder continuar.",
    img: "/images/gallery-1.jpg",
  },
  {
    text: "Puede que algunos vínculos despierten inseguridad, miedo a perder al otro o una necesidad constante de agradar.",
    img: "/images/gallery-2.jpg",
  },
  {
    text: "O que vivas con un nivel de autoexigencia que no te permite descansar, equivocarte, ni sentir que lo que hacés es suficiente.",
    img: "/images/gallery-3.jpg",
  },
  {
    text: "La terapia puede ofrecerte un espacio para comprender de dónde surgen estas respuestas, qué función tuvieron en tu historia y cómo empezar a construir otras formas de relacionarte con lo que te sucede.",
    img: "/images/gallery-5.jpg",
  },
];

const total = paragraphs.length;
const textShadow = "1px 1px 24px black, 0 0 1em black";

const RecognitionCarousel = () => {
  return (
    <Carousel className="w-full xl:mt-6">
      <CarouselContent>
        {paragraphs.map((item, i) => (
          <CarouselItem key={i}>
            <Card className="bg-transparent select-none py-0">
              <CardContent className="h-112 md:h-[75vh] text-white italic text-shadow-lg relative flex flex-col justify-center items-center">
                <p
                  style={{ textShadow }}
                  className="text-lg md:text-xl lg:text-2xl mb-4 absolute top-5 right-5"
                >{`${i + 1}/${total}`}</p>

                <p
                  style={{ textShadow }}
                  className="text-xl md:text-2xl lg:text-3xl px-4 xl:px-10"
                >
                  {item.text}
                </p>

                <Image
                  src={item.img}
                  className="absolute w-full h-full top-1/2 left-1/2 -translate-1/2 -z-10 object-cover rounded-2xl"
                  width={500}
                  height={500}
                  priority
                  alt="flores"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export function Recognition() {
  return (
    <section id="espacio" className="bg-primary">
      <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl px-6 py-16 text-center md:px-8 md:py-24">
        <span className="text-[0.72rem] xl:text-base font-medium uppercase tracking-[0.24em] text-primary-foreground/60">
          Quizás llegaste hasta acá porque…
        </span>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mt-6">
          <h2 className="w-full xl:w-1/2 text-balance font-serif leading-[1.15] tracking-tight text-primary-foreground text-3xl md:text-[2.9rem] xl:text-left">
            Hay situaciones que podés{" "}
            <span className="italic">comprender racionalmente</span> y que, aun
            así, <span className="italic underline">siguen afectándote:</span>
          </h2>

          <div className="w-full xl:w-1/2">
            <RecognitionCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
