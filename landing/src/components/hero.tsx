import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import HeroImage from "./heroImage";
import TextLoop from "./text-loop";
import Banner from "@/components/banner";

const Hero = () => {
return (
    /* Contenedor EXTERNO: w-full para ocupar todo el ancho real del navegador */
    <section className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-black">

      {/* 1. Fondo e Imagen (Ocupan el 100% absoluto de la pantalla) */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <HeroImage />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. Contenido INTERNO: max-w-7xl mx-auto (Igual que el <nav> de tu Navbar) */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-4 py-12 text-center">
          {/* Solo la navegación va en el Header */}
          <header className="relative z-30 w-full">
            <Navbar />
          </header>

          {/* Contenedor Principal Centrado */}
          <div className="flex flex-1 flex-col items-center justify-center px-6 md:px-20 lg:px-32 w-full py-12">

            {/* MOVIDO AQUÍ: El Banner ahora vive junto al contenido principal */}
            <div className="mb-6">
              <Banner />
            </div>

            {/* Mobile */}
            <div className="md:hidden mt-0 max-w-full">
              <div className="text-5xl sm:text-6xl text-white flex flex-wrap items-center gap-x-2 gap-y-2 text-left font-bold max-w-full leading-tight">
                <span>La plataforma donde la seguridad se vuelve</span>
                <TextLoop
                    staticText=""
                    rotatingTexts={["inteligente", "colaborativa", "rentable"]}
                    className="text-brand font-bold text-5xl sm:text-6xl"
                />
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex md:flex-col md:items-center text-center w-full max-w-5xl mx-auto">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
                La plataforma que escala <span className="text-brand">con tu operación</span>
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
                      className="text-brand font-bold text-base md:text-lg"
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button
                    className="h-10 px-6 text-base font-bold uppercase tracking-widest bg-brand text-white"
                    size="sm"
                    asChild
                >
                  <Link
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Try Free <ArrowUpRight className="ml-2 h-5 w-5" />
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
