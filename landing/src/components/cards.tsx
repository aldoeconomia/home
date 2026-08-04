"use client";

import { messages } from "@/lib/messages";
import { useState } from "react";

export function HoverCardSection() {
  const t = messages.features;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const FEATURES = [0, 1, 2, 3, 4, 5, 6, 8, 9].map((i) => {
    const fullDesc = t[`f${i + 1}_desc` as keyof typeof t] as string;
    return {
      id: i + 1,
      title: t[`f${i + 1}_title` as keyof typeof t],
      p1: fullDesc?.split("|")[0],
      p2: fullDesc?.split("|")[1],
    };
  });

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full py-8 md:py-16 bg-white dark:bg-slate-950 font-sans">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* TÍTULO ARRIBA */}
        <div className="mb-20">
          <div className="h-2 w-35 bg-primary mb-8" />
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold tracking-tighter text-slate-950 dark:text-white leading-[1] uppercase">
            {t.section_title}
          </h2>
        </div>

        {/* GRID DE CARDS EN MÚLTIPLES COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 group/list">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              onClick={() => toggleExpanded(feature.id)}
              className="group relative border-4 md:border-6 border-foreground dark:border-slate-800 text-left md:border-4 md:cursor-default"
            >
              <div className="flex flex-col py-8 md:py-12 lg:py-16 px-6 md:px-6 lg:px-8 cursor-pointer transition-opacity duration-500 md:group-hover/list:opacity-20 md:hover:!opacity-100">
                <div className="relative min-h-[100px] md:min-h-[120px] flex items-center justify-center overflow-hidden">
                  {/* TÍTULO: Se desplaza hacia arriba en desktop, oculto en mobile cuando expandido */}
                  <h3
                    className={`text-lg md:text-2xl lg:text-3xl font-montserrat font-bold tracking-tighter text-primary dark:text-white transition-all duration-900 cubic-bezier(0.16, 1, 0.3, 1) flex items-center justify-center text-center ${
                      expandedId === feature.id
                        ? "md:group-hover:-translate-y-[120%] md:group-hover:opacity-0 opacity-0 -translate-y-[120%]"
                        : "md:group-hover:-translate-y-[120%] md:group-hover:opacity-0"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* DESCRIPCIÓN: Sube desde abajo en desktop, visible en mobile cuando expandido */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-center gap-4 transition-all duration-900 cubic-bezier(0.16, 1, 0.3, 1) ${
                      expandedId === feature.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[100%] md:group-hover:translate-y-0 md:group-hover:opacity-100"
                    }`}
                  >
                    <p className="text-sm md:text-lg text-accent font-montserrat font-bold leading-none tracking-tight uppercase text-center">
                      {feature.p1}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HoverCardSection;
