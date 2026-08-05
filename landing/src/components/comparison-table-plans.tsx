"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type ComparisonRow = {
  feature: string;
  starter: boolean | string;
  advanced: boolean | string;
  premium: boolean | string;
};

export type ComparisonSection = {
  title: string;
  rows: ComparisonRow[];
};

export const COMPARISON_SECTIONS: ComparisonSection[] = [
  {
    title: "Suscripción y Precios",
    rows: [
      {
        feature: "Mensualidad",
        starter: "Gratis ($0)",
        advanced: "$175.00 USD",
        premium: "$450.00 USD",
      },
      {
        feature: "Mensualidad (Plan Anual)",
        starter: "Gratis ($0)",
        advanced: "$140.00 USD/mes",
        premium: "$375.00 USD/mes",
      },
    ],
  },
  {
    title: "Equipo y Usuarios",
    rows: [
      {
        feature: "Usuarios Técnicos",
        starter: "1",
        advanced: "Ilimitados",
        premium: "Ilimitados",
      },
      {
        feature: "Usuario Administrador Incluido",
        starter: "1",
        advanced: "1",
        premium: "3",
      },
      {
        feature: "Usuario Administrador Extra",
        starter: false,
        advanced: "$20.00 USD",
        premium: "$9.00 USD",
      },
    ],
  },
  {
    title: "Almacenamiento",
    rows: [
      {
        feature: "Almacenamiento de Evidencias",
        starter: "500 MB",
        advanced: "Ilimitados",
        premium: "Ilimitados",
      },
    ],
  },
  {
    title: "Características Principales",
    rows: [
      {
        feature: "Reportes por semana",
        starter: "4",
        advanced: "Ilimitados",
        premium: "Ilimitados",
      },
      {
        feature: "Registro Offline (Sin Internet)",
        starter: true,
        advanced: true,
        premium: true,
      },
      {
        feature: "Dashboard visual de productividad del equipo",
        starter: true,
        advanced: "Incluido + Exportar PDF",
        premium: "Incluido + Exportar PDF",
      },
      {
        feature: "Soporte Técnico",
        starter: "Solo Correo",
        advanced: "Solo Correo",
        premium: "WhatsApp + Correo",
      },
      {
        feature: "Descarga Masiva de Evidencias",
        starter: false,
        advanced: "Carpetas ZIP (Excel+PDF)",
        premium: "Carpetas ZIP (Excel+PDF) + Cloud",
      },
      {
        feature: "Firma Digital",
        starter: true,
        advanced: true,
        premium: true,
      },
      {
        feature: "Historial de Auditoría / Seguimiento de Correos",
        starter: false,
        advanced: true,
        premium: true,
      },
      {
        feature: "Envíos por correo",
        starter: "4 x semana",
        advanced: "Ilimitados",
        premium: "Ilimitados",
      },
      {
        feature: "Plantillas de Documentos",
        starter: "2",
        advanced: "Ilimitados",
        premium: "Ilimitados",
      },
      {
        feature: "Plantillas de Formularios",
        starter: "2",
        advanced: "Ilimitados",
        premium: "Ilimitados",
      },
    ],
  },
  {
    title: "Personalización y Add-ons",
    rows: [
      {
        feature: "Marca Blanca en Documentos",
        starter: false,
        advanced: false,
        premium: true,
      },
    ],
  },
  {
    title: "Setup y Capacitación",
    rows: [
      {
        feature: "Configuración Inicial / Setup",
        starter: false,
        advanced: "$90.00 USD",
        premium: true,
      },
      {
        feature: "Capacitación Remota (Sesión 30 min)",
        starter: false,
        advanced: "$90.00 USD",
        premium: true,
      },
      {
        feature: "Videos Tutoriales",
        starter: true,
        advanced: true,
        premium: true,
      },
    ],
  },
  {
    title: "Beneficios Adicionales",
    rows: [
      {
        feature: 'Certificado Mensual "Empresa Verde / Cero Papel"',
        starter: true,
        advanced: true,
        premium: true,
      },
    ],
  },
];
export function ComparisonTablePlans() {
  return (
      <section className="bg-white py-20 sm:py-24 md:py-32 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12 md:gap-16">
          {/* Title block */}
          <div className="mx-auto flex-col items-center text-center md:max-w-3xl hidden md:flex">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] mb-4">
              Comparar Planes
            </h2>
            <p className="text-black text-lg md:text-xl">
              Revisa las características incluidas en cada plan y elige el que
              mejor se adapte a tus necesidades.
            </p>
          </div>

          {/* Table */}
          <div className="hidden md:block overflow-hidden">
            <Table className="w-full bg-white border-0 [&_tr]:border-b-0">
              <TableHeader className="bg-white [&_tr]:border-b-0">
                <TableRow className="h-20 bg-white border-b-0 hover:bg-transparent">
                  <TableHead className="w-[30%] text-base font-bold py-4 px-6 text-black border-0">
                    Características
                  </TableHead>
                  <TableHead className="w-[23%] border-0">
                    <div className="flex items-center justify-center">
                      <Button
                          variant="outline"
                          className="w-full h-12 text-sm text-black font-semibold"
                      >
                        Free for Life
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead className="w-[23%] border-0">
                    <div className="flex items-center justify-center">
                      <Button
                          variant="default"
                          className="w-full h-12 text-sm text-white bg-brand font-semibold"
                      >
                        Primary
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead className="w-[24%] border-0">
                    <div className="flex items-center justify-center">
                      <Button
                          variant="outline"
                          className="w-full h-12 text-sm text-black font-semibold"
                      >
                        Corporate
                      </Button>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON_SECTIONS.map((section, sectionIdx) => (
                    <React.Fragment key={`section-${sectionIdx}`}>
                      {/* Encabezado de la categoría */}
                      <TableRow className="border-b-0 hover:bg-transparent">
                        <TableCell
                            colSpan={4}
                            className="py-3 px-6 text-xs font-bold uppercase tracking-wider border-0"
                        >
                          {section.title}
                        </TableCell>
                      </TableRow>

                      {/* Filas de características */}
                      {section.rows.map((row, rowIdx) => (
                          <TableRow
                              key={`row-${sectionIdx}-${rowIdx}`}
                              className="h-16 border-b-0 hover:bg-transparent"
                          >
                            <TableCell className="text-sm font-medium py-4 px-6 border-0">
                              {row.feature}
                            </TableCell>

                            {/* Starter */}
                            <TableCell className="py-4 border-0">
                              <div className="flex items-center justify-center text-center text-sm">
                                {typeof row.starter === "boolean" ? (
                                    row.starter ? (
                                        <Check
                                            className="size-5 text-success"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <X
                                            className="size-5 text-error"
                                            aria-hidden="true"
                                        />
                                    )
                                ) : (
                                    <span className="font-normal text-black">
                              {row.starter}
                            </span>
                                )}
                              </div>
                            </TableCell>

                            {/* Advanced */}
                            <TableCell className="py-4 border-0">
                              <div className="flex items-center justify-center text-center text-sm">
                                {typeof row.advanced === "boolean" ? (
                                    row.advanced ? (
                                        <Check
                                            className="size-5 text-success"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <X
                                            className="size-5 text-error"
                                            aria-hidden="true"
                                        />
                                    )
                                ) : (
                                    <span className="font-normal text-black">
                              {row.advanced}
                            </span>
                                )}
                              </div>
                            </TableCell>

                            {/* Premium */}
                            <TableCell className="py-4 border-0">
                              <div className="flex items-center justify-center text-center text-sm">
                                {typeof row.premium === "boolean" ? (
                                    row.premium ? (
                                        <Check
                                            className="size-5 text-success"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <X
                                            className="size-5 text-error"
                                            aria-hidden="true"
                                        />
                                    )
                                ) : (
                                    <span className="font-normal text-black">
                              {row.premium}
                            </span>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                      ))}
                    </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
  );
}
