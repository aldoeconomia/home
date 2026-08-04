"use client";

import { useState } from "react";
export function HoverCardSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const FEATURES = [
    { id: 1, title: "Monitoreo", p1: "Supervisa tus activos en tiempo real", p2: "desde un solo panel." },
    { id: 2, title: "Alertas", p1: "Recibe avisos oportunos", p2: "antes de que algo expire." },
    { id: 3, title: "Reportes", p1: "Genera reportes claros", p2: "para tu operación y auditoría." },
    { id: 4, title: "Trazabilidad", p1: "Consulta el historial completo", p2: "de cada equipo." },
    { id: 5, title: "Usuarios", p1: "Asigna permisos y responsabilidades", p2: "por equipo o sucursal." },
    { id: 6, title: "Mantenimiento", p1: "Agenda revisiones y seguimiento", p2: "sin perder fechas clave." },
    { id: 7, title: "Cumplimiento", p1: "Mantén ordenados tus controles", p2: "para estar siempre listo." },
    { id: 9, title: "Soporte", p1: "Acompañamiento cuando lo necesites", p2: "para tu equipo." },
    { id: 10, title: "Escalabilidad", p1: "Crece sin complicar tu operación", p2: "con procesos simples." },
  ];

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full py-8 md:py-16 bg-white font-sans">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* TÍTULO ARRIBA */}
        <div className="mb-20">
          <div className="h-2 w-35 bg-primary mb-8" />
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold tracking-tighter text-foreground leading-[1] uppercase">
            Características
          </h2>
        </div>

        {/* GRID DE CARDS EN MÚLTIPLES COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 group/list">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              onClick={() => toggleExpanded(feature.id)}
              className="group relative border-4 md:border-6 border-foreground text-left md:border-4 md:cursor-default"
            >
              <div className="flex flex-col py-8 md:py-12 lg:py-16 px-6 md:px-6 lg:px-8 cursor-pointer transition-opacity duration-500 md:group-hover/list:opacity-20 md:hover:!opacity-100">
                <div className="relative min-h-[100px] md:min-h-[120px] flex items-center justify-center overflow-hidden">
                  {/* TÍTULO: Se desplaza hacia arriba en desktop, oculto en mobile cuando expandido */}
                  <h3
                    className={`text-lg md:text-2xl lg:text-3xl font-montserrat font-bold tracking-tighter text-primary transition-all duration-900 cubic-bezier(0.16, 1, 0.3, 1) flex items-center justify-center text-center ${
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
