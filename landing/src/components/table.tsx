"use client";

import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
} from "lucide-react";
import { messages } from "@/lib/messages";

interface Feature {
  name: string;
  traditional: boolean | string;
  qontrol: boolean | string;
}

export function ComparisonTable() {
  const t = messages.comparison;
  const [teamSize, setTeamSize] = useState(5);

  // Cálculos dinámicos basados en la imagen (2000 MXN por persona al mes)
  const monthlySavings = teamSize * 2000;
  const annualSavings = monthlySavings * 12;

  const features = t.features;

  return (
    <section className="bg-white dark:bg-slate-950 font-sans py-12">
      {/* Header con color primario */}
      <div className="bg-foreground p-12 md:p-16 mb-12">
        <h1 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight">
          {t.header}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Tabla de Comparación */}
        <div className="bg-white dark:bg-slate-900 rounded-none shadow-2xl overflow-x-auto border-4 border-black relative">
          <div className="min-w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs md:text-sm uppercase tracking-wider font-bold">
                  <th className="p-4 md:p-6 bg-muted text-foreground dark:bg-slate-800 dark:text-white w-1/3 min-w-[120px] md:min-w-auto">
                    {t.characteristics}
                  </th>
                  <th className="p-4 md:p-6 bg-muted text-foreground dark:bg-slate-800 dark:text-white w-1/3 min-w-[120px] md:min-w-auto">
                    {t.traditional}
                  </th>
                  <th className="p-4 md:p-6 bg-primary text-primary-foreground dark:bg-primary/90 w-1/3 text-center min-w-[120px] md:min-w-auto">
                    {t.qontrol}
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-base">
                {features.map((feature: Feature, index: number) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-white"
                        : "bg-white dark:bg-white"
                    } border-b border-black/20 last:border-0`}
                  >
                    <td className="p-4 md:p-6 font-bold text-foreground dark:text-foreground bg-white dark:bg-white min-w-[120px] md:min-w-auto">
                      {feature.name}
                    </td>
                    <td className="p-4 md:p-6 text-muted-foreground dark:text-slate-600 bg-white dark:bg-white min-w-[120px] md:min-w-auto">
                      {typeof feature.traditional === "boolean" ? (
                        feature.traditional ? (
                          <CheckCircle className="text-accent w-5 h-5" />
                        ) : (
                          <XCircle className="text-muted-foreground w-5 h-5" />
                        )
                      ) : (
                        feature.traditional
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-primary font-bold text-center bg-white dark:bg-white min-w-[120px] md:min-w-auto">
                      {typeof feature.qontrol === "boolean" ? (
                        <CheckCircle className="mx-auto text-primary fill-primary text-white w-6 h-6" />
                      ) : (
                        feature.qontrol
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Indicador de scroll - Solo mobile */}
          <div className="md:hidden flex items-center justify-center gap-2 py-3 bg-white dark:bg-slate-900 border-t border-black/20">
            <ChevronLeft className="w-4 h-4 text-muted-foreground animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Desliza para ver más
            </span>
            <ChevronRight className="w-4 h-4 text-muted-foreground animate-pulse" />
          </div>
        </div>

        {/* Sección de Calculadora / Ahorros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 items-center text-center md:text-left">
          {/* Selector de Equipo */}
          <div className="flex flex-col space-y-4">
            <span className="font-bold text-foreground dark:text-white uppercase text-sm">
              {t.teamSize}
            </span>
            {/* Mobile: Botones + y - */}
            <div className="md:hidden flex items-center justify-center gap-3">
              <button
                onClick={() => setTeamSize(Math.max(1, teamSize - 1))}
                className="p-1 bg-primary text-white rounded-none hover:bg-primary/80 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-2xl font-bold w-16 text-center">
                {teamSize}
              </span>
              <button
                onClick={() => setTeamSize(teamSize + 1)}
                className="p-1 bg-primary text-white rounded-none hover:bg-primary/80 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {/* Desktop: Input text */}
            <input
              type="number"
              value={teamSize}
              onChange={(e) =>
                setTeamSize(Math.max(1, parseInt(e.target.value) || 0))
              }
              className="hidden md:block w-32 mx-auto md:mx-0 p-3 text-3xl font-bold text-center border-black rounded-none bg-white text-foreground focus:outline-none"
            />
          </div>

          {/* Ahorro Mensual */}
          <div className="flex flex-col space-y-2">
            <span className="font-bold text-foreground dark:text-white uppercase text-sm">
              {t.monthlySavings}
            </span>
            <span className="text-5xl md:text-6xl font-black text-accent">
              {monthlySavings.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground dark:text-slate-400">
              MXN$
            </span>
          </div>

          {/* Ahorro Anual */}
          <div className="flex flex-col space-y-2">
            <span className="font-bold text-foreground dark:text-white uppercase text-sm">
              {t.annualSavings}
            </span>
            <span className="text-5xl md:text-6xl font-black text-secondary">
              {annualSavings.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground dark:text-slate-400">
              MXN$
            </span>
          </div>
        </div>

        <p className="pb-4 text-muted-foreground dark:text-slate-400 text-sm var(--font-montserrat) text-center md:text-left">
          {t.savings}
        </p>
      </div>
    </section>
  );
}

export default ComparisonTable;
