"use client";

import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CallToAction } from "@/components/calltoaction";
import { ComparisonTablePlans } from "@/components/comparison-table-plans";
import { FrequentlyAskedQuestions } from "@/components/faq";

const plans = [
  {
    name: "Free for Life",
    price: 0,
    description:
        "Ideal para profesionales que están empezando. Sin necesidad de tarjeta de crédito.",
    features: [
      "1 Usuario Técnico + 1 Administrador",
      "500 MB de Almacenamiento de evidencias",
      "4 Reportes y envíos por semana",
      "Registro Offline (Sin Internet)",
      "Firma Digital incluida",
      "2 Plantillas de documentos y formularios",
      "Soporte por Correo",
    ],
    buttonText: "Try Free",
  },
  {
    name: "Primary",
    price: 175,
    isRecommended: true,
    description:
        "La experiencia completa de Qontrol para profesionales que buscan un verdadero aliado en su trabajo.",
    features: [
      "Usuarios Técnicos ilimitados",
      "Almacenamiento de evidencias ilimitado",
      "Reportes y envíos por correo ilimitados",
      "Dashboard de productividad con exportación a PDF",
      "Descarga masiva de evidencias en ZIP (Excel + PDF)",
      "Plantillas ilimitadas de documentos y formularios",
      "Firma Digital e Historial de Auditoría",
    ],
    buttonText: "Try Free",
    isPopular: true,
  },
  {
    name: "Corporate",
    price: 450,
    description:
        "Para equipos en crecimiento que necesitan optimizar tiempos, organizar evidencias y escalar sus operaciones.",
    features: [
      "Todo lo incluido en el plan Primary",
      "3 Usuarios Administradores incluidos",
      "Soporte prioritario por WhatsApp + Correo",
      "Marca blanca personalizada en documentos",
      "Descarga masiva e integración Cloud",
      "Configuración inicial y setup 100% incluido",
      "Capacitación remota para tu equipo incluida",
    ],
    buttonText: "Try Free",
  },
];

const Pricing = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative px-4 sm:px-6 py-8 sm:py-10 md:py-12 overflow-visible">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-medium text-3xl sm:text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
            Nuestros Planes
          </h2>
          <p className="mt-3 text-center text-muted-foreground text-xl -tracking-[0.01em] md:text-2xl">
            Elige el plan que se ajusta a tus necesidades
          </p>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto">
        <div className="mx-auto mt-6 sm:mt-8 md:mt-10 grid max-w-(--breakpoint-lg) grid-cols-1 items-stretch gap-6 sm:gap-8 md:gap-10 lg:grid-cols-3 lg:gap-0">
          {plans.map((plan) => (
            <div
              className={cn(
                "relative border bg-card p-6 sm:p-8 lg:p-7 lg:rounded-none lg:last:rounded-none lg:first:rounded-none h-full flex flex-col",
                {
                  "border-primary ring-1 ring-primary ring-inset":
                    plan.isPopular,
                },
              )}
              key={plan.name}
            >
              {plan.isPopular && (
                <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                  Más Popular
                </Badge>
              )}
              <h3 className="font-medium text-lg">{plan.name}</h3>
              <p className="mt-4 font-satoshi font-semibold text-4xl">
                ${plan.price} USD
              </p>
              <p className="mt-4 text-muted-foreground">{plan.description}</p>
              <Separator className="my-6" />
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    className="flex items-start gap-2 text-sm sm:text-base"
                    key={feature}
                  >
                    <CircleCheck className="mt-1 h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn("mt-8 w-full text-base font-semibold", {
                  "bg-primary text-white hover:bg-primary hover:text-white":
                    plan.isPopular,
                  "bg-white text-black border border-black hover:bg-white hover:text-black hover:border-black":
                    !plan.isPopular,
                })}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table Section */}
      <ComparisonTablePlans />

      {/* FAQ Section */}
      <FrequentlyAskedQuestions />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Pricing;
