"use client";

import { LazyMotion, domAnimation, m } from "motion/react";
import { cn } from "@/lib/utils";

function Stats() {
  const statsData = [
    {
      value: "97.33%",
      label: "Tiempo ahorrado",
      bgColor: "bg-[var(--color-primary)]",
    }, // Verde
    {
      value: "5X",
      label: "Productividad",
      bgColor: "bg-[var(--color-secondary)]",
    }, // Amarillo
    {
      value: "98%",
      label: "Satisfacción",
      bgColor: "bg-[var(--color-accent)]",
    }, // Azul
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 md:mb-12">
        <h2 className="font-montserrat text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black">
          Datos y cifras
        </h2>

      </div>

      <LazyMotion features={domAnimation}>
        {/* Quitamos gap-8 para que los bloques encajen perfectamente si no hay redondeo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col justify-center items-center p-6 md:p-8 min-h-56 md:min-h-80 lg:min-h-96",
                stat.bgColor,
              )}
            >
              {/* Usamos items-center en lugar de baseline para que el '5' y la 'x' compartan eje central */}
              <div className="flex items-center justify-center">
                <m.span
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tighter"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {stat.value}
                </m.span>
              </div>

              <p className="mt-4 md:mt-6 font-semibold uppercase tracking-widest text-center text-white text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </LazyMotion>
    </section>
  );
}

export default Stats;
