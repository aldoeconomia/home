import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import HeroImage from "./heroImage";
import TextLoop from "./text-loop";


const Hero = () => {
  return (
      <section className="relative min-h-screen w-full overflow-hidden bg-white rounded-none">
        {/* 1. Imagen de Fondo + Capa de Oscuridad */}
        <div className="absolute inset-0 z-0 h-full w-full rounded-none">
          <HeroImage />
          <div className="absolute inset-0 " />
        </div>

        {/* 2. Capa de Contenido */}
        <div className="relative z-20 flex flex-col min-h-screen w-full">
          <Navbar />

          {/* Contenedor Principal Centrado */}
          <div className="flex flex-1 flex-col items-start md:items-center justify-center pt-16 md:pt-20 px-10 md:px-20 lg:px-32 w-full">

            {/* Mobile: Solo description con TextLoop */}
            <div className="md:hidden mt-0 max-w-full">
              <div className="text-5xl sm:text-6xl text-white flex flex-wrap items-center gap-x-2 gap-y-2 text-left font-bold max-w-full leading-tight">
                <span>La plataforma donde la seguridad se vuelve</span>
                <TextLoop
                    staticText=""
                    rotatingTexts={["inteligente", "colaborativa", "rentable"]}
                    className="text-primary font-bold text-5xl sm:text-6xl"
                />
              </div>
            </div>

            {/* Desktop: Todo centrado en un solo contenedor */}
            <div className="hidden md:flex md:flex-col md:items-center text-center w-full max-w-5xl mx-auto ">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 ">
                La plataforma que escala <span className="text-primary">con tu operación</span>
              </h2>

              <div className="space-y-3 w-full">
                <p className="text-lg md:text-2xl text-white font-medium leading-relaxed">
                  Qontrol gestiona tus documentos, cumplimiento y flujos de trabajo para que tu equipo se enfoque en lo que realmente importa.
                </p>

                <div className="text-base md:text-lg text-white flex flex-wrap items-center justify-center gap-x-2 font-medium">
                  <span>La plataforma donde la seguridad se vuelve</span>
                  <TextLoop
                      staticText=""
                      rotatingTexts={["inteligente", "colaborativa", "rentable"]}
                      className="text-primary font-bold text-base md:text-lg"
                  />
                </div>
              </div>

              {/* Botón Desktop */}
              <div className="mt-8">
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
                    Comenzar ahora <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Hero;
