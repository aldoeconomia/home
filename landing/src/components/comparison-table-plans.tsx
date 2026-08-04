"use client";

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

type ComparisonRow = {
  feature: string;
  starter: boolean | string;
  advanced: boolean | string;
  premium: boolean | string;
};

type ComparisonSection = {
  title: string;
  rows: ComparisonRow[];
};

const COMPARISON_SECTIONS: ComparisonSection[] = [
  {
    title: "Características Principales",
    rows: [
      {
        feature: "Retratos IA",
        starter: "20",
        advanced: "50",
        premium: "100",
      },
      {
        feature: "Tiempo de Entrega",
        starter: "5 horas",
        advanced: "3 horas",
        premium: "1 hora",
      },
      { feature: "Estilos", starter: "2", advanced: "5", premium: "10" },
      { feature: "Filtros", starter: "2", advanced: "5", premium: "10" },
      {
        feature: "Créditos de Retoque",
        starter: "2",
        advanced: "5",
        premium: "10",
      },
    ],
  },
  {
    title: "Soporte y Avanzado",
    rows: [
      {
        feature: "Soporte Prioritario",
        starter: false,
        advanced: true,
        premium: true,
      },
      {
        feature: "Marca de Agua Personalizada",
        starter: false,
        advanced: false,
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
        <div className="mx-auto flex flex-col items-center text-center md:max-w-3xl hidden md:flex">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] mb-4">
            Comparar Planes
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Ve que caracteristicas estan incluidas en cada plan. Elige el
            perfecto para tus necesidades.
          </p>
        </div>

        {/* Buttons above header - Desktop */}
        {/* Removed - buttons now in table header */}

        {/* Desktop/tablet (md+) table */}
        <div className="hidden md:block  ">
          <Table className="w-full bg-white">
            <TableHeader className="bg-white">
              {/* Buttons Row */}
              <TableRow className="h-20 border-b bg-white">
                <TableHead className=" text-base font-bold py-4 px-6">
                  {/* Empty cell for Features column */}
                </TableHead>
                <TableHead className="">
                  <div className="flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="w-full h-12 text-sm text-black border-black"
                    >
                      Inicio
                    </Button>
                  </div>
                </TableHead>
                <TableHead className="">
                  <div className="flex items-center justify-center">
                    <Button
                      variant="default"
                      className="w-full h-12 text-sm  text-white bg-primary"
                    >
                      Avanzado
                    </Button>
                  </div>
                </TableHead>
                <TableHead className="w-[20%]">
                  <div className="flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="w-full h-12 text-sm  text-black  border-black"
                    >
                      Premium
                    </Button>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARISON_SECTIONS[0].rows.map((row, idx) => (
                <TableRow key={`core-${idx}`} className="h-16 border-">
                  <TableCell className="text-base font-semibold py-4 px-6">
                    {row.feature}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center justify-center">
                      <span className="font-normal">{row.starter}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center justify-center">
                      <span className="font-normal">{row.advanced}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center justify-center">
                      <span className="font-normal">{row.premium}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {COMPARISON_SECTIONS[1].rows.map((row, idx) => (
                <TableRow key={`support-${idx}`} className="h-16 border-b ">
                  <TableCell className="text-base font-semibold py-4 px-6">
                    {row.feature}
                  </TableCell>

                  <TableCell className="py-4">
                    <div className="flex items-center justify-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check
                            className="size-6 text-green-600"
                            aria-hidden="true"
                          />
                        ) : (
                          <X
                            className="size-6 text-muted-foreground"
                            aria-hidden="true"
                          />
                        )
                      ) : (
                        <span className="font-normal">{row.starter}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center justify-center">
                      {typeof row.advanced === "boolean" ? (
                        row.advanced ? (
                          <Check
                            className="size-6 text-green-600"
                            aria-hidden="true"
                          />
                        ) : (
                          <X
                            className="size-6 text-muted-foreground"
                            aria-hidden="true"
                          />
                        )
                      ) : (
                        <span className="font-normal">{row.advanced}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center justify-center">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check
                            className="size-6 text-green-600"
                            aria-hidden="true"
                          />
                        ) : (
                          <X
                            className="size-6 text-muted-foreground"
                            aria-hidden="true"
                          />
                        )
                      ) : (
                        <span className="font-normal">{row.premium}</span>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
