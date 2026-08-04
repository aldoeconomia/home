import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import HeroImage from "./heroImage";
import TextLoop from "./text-loop";
import { messages } from "@/lib/messages";

const Hero = () => {
  const t = messages.hero;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black rounded-none">
      {/* 1. Imagen de Fondo */}
      <div className="absolute inset-0 z-0 h-full w-full rounded-none">
        <HeroImage />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* 2. Capa de Contenido */}
      <div className="relative z-20 flex flex-col min-h-screen w-full">
        <Navbar />

        {/* Contenedor:
            - justify-start: Lo coloca en la parte superior.
            - px-10 a lg:px-24: Espacio generoso a los lados para que no choque con los bordes.
        */}
        <div className="flex flex-1 flex-col items-start justify-center pt-16 md:pt-20 px-10 md:px-20 lg:px-32 w-full">
          {/* Mobile: Solo description con TextLoop */}
          <div className="md:hidden mt-0 max-w-full">
            <div className="text-5xl sm:text-6xl text-white flex flex-wrap items-center gap-x-2 gap-y-2 text-left font-bold max-w-full leading-tight">
              <span>{t.description}</span>
              <TextLoop
                staticText=""
                rotatingTexts={[t.rotating1, t.rotating2, t.rotating3]}
                className="text-primary font-bold text-5xl sm:text-6xl"
              />
            </div>
          </div>

          {/* Desktop: Diseño original */}
          <div className="hidden md:block">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight uppercase text-left mb-4">
              <span className="text-primary">QONTROL</span> TOTAL DE TUS
              EXTINTORES
            </h2>

            <div className="max-w-5xl space-y-3">
              <p className="text-lg md:text-2xl text-gray-200 font-medium text-left leading-relaxed">
                {t.subtitle}
              </p>

              <div className="text-base md:text-lg text-gray-200 flex flex-wrap items-center gap-x-2 text-left font-medium max-w-5xl">
                <span>{t.description}</span>
                <TextLoop
                  staticText=""
                  rotatingTexts={[t.rotating1, t.rotating2, t.rotating3]}
                  className="text-primary font-bold text-base md:text-lg"
                />
              </div>
            </div>
          </div>

          {/* Botón */}
          <div className="mt-8 hidden md:block space-y-3">
            <Button
              className="h-10 px-6 text-base font-bold uppercase tracking-widest"
              size="sm"
              asChild
            >
              <Link
                href="https://onboarding.theqontrol.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.cta} <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
