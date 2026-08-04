"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CallToAction() {
  return (
    <section className="relative w-full py-0 px-0 overflow-visible pb-12">
      <div className="w-full">
        {/* Container principal */}
        <div className="relative bg-brand rounded-none flex flex-col md:flex-row items-start md:items-stretch justify-between min-h-80 md:h-1/3">
          {/* Contenido izquierdo */}
          <div className="flex-1 p-6 md:p-12 text-white z-10 flex flex-col justify-center pl-6 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight mb-2">
              Hecho para el trabajo real
            </h2>
            <p className="text-sm md:text-base mb-4 leading-relaxed">
              Únete a los aliados que ya usan Qontrol en su día a día. Configúralo en minutos. Cancela cuando quieras.
            </p>
            <div className="w-fit">
              <Button
                asChild
                className="bg-orange hover:bg-secondary/90 text-white font-bold uppercase tracking-widest h-10 px-6 text-sm border-none rounded-none"
              >
                <Link
                  href="https://onboarding.theqontrol.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Free
                </Link>
              </Button>
            </div>
          </div>

          {/* Imagen derecha - Rectangulo con fondo oscuro */}
          <div className="hidden md:flex absolute md:relative right-0 top-0 md:top-auto w-72 h-64 md:w-96 md:h-64  flex-shrink-0 items-center justify-center overflow-visible">
            <Image
              src="/image/Personajecelular.svg"
              alt="call to action character"
              width={500}
              height={500}
              style={{
                objectFit: "contain",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
