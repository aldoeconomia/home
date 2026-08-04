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
    name: "Inicio",
    price: 19,
    description:
      "Obtén 20 retratos generados por IA con 2 estilos y filtros únicos.",
    features: [
      "Tiempo de entrega: 5 horas",
      "20 retratos IA",
      "2 estilos a elegir",
      "2 filtros a elegir",
      "2 créditos de retoque",
    ],
    buttonText: "Comprar ahora",
  },
  {
    name: "Avanzado",
    price: 29,
    isRecommended: true,
    description:
      "Obtén 50 retratos generados por IA con 5 estilos y filtros únicos.",
    features: [
      "Tiempo de entrega: 3 horas",
      "50 retratos IA",
      "5 estilos a elegir",
      "5 filtros a elegir",
      "5 créditos de retoque",
    ],
    buttonText: "Comprar ahora",
    isPopular: true,
  },
  {
    name: "Premium",
    price: 49,
    description:
      "Obtén 100 retratos generados por IA con 10 estilos y filtros únicos.",
    features: [
      "Tiempo de entrega: 1 hora",
      "100 retratos IA",
      "10 estilos a elegir",
      "10 filtros a elegir",
      "10 créditos de retoque",
    ],
    buttonText: "Comprar ahora",
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
                ${plan.price}
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
