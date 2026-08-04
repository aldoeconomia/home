"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, puedes mejorar o reducir tu plan en cualquier momento. Los cambios surtirán efecto inmediatamente.",
  },
  {
    question: "¿Qué si necesito más retratos?",
    answer:
      "Puedes agregar retratos adicionales a tu plan en cualquier momento. Contacta a nuestro equipo de soporte para paquetes personalizados.",
  },
  {
    question: "¿Hay cargos ocultos?",
    answer:
      "No, no hay cargos ocultos. El precio que ves es el precio que pagas. Todas las características están incluidas.",
  },
  {
    question: "¿Puedo cancelar mi suscripción?",
    answer:
      "Sí, puedes cancelar en cualquier momento sin penalizaciones. Tu acceso continúa hasta el final de tu período de facturación.",
  },
  {
    question: "¿Ofrecen reembolsos?",
    answer:
      "Ofrecemos una garantía de devolución de dinero de 7 días si no estás satisfecho con nuestro servicio.",
  },
  {
    question: "¿Hay una prueba gratuita?",
    answer:
      "Sí, ofrecemos una prueba gratuita de 14 días para nuevos usuarios. No se requiere tarjeta de crédito para comenzar.",
  },
];

export function FrequentlyAskedQuestions() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="px-4 sm:px-6 py-8 sm:py-16 md:py-24 w-full">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center font-medium text-3xl sm:text-4xl tracking-[-0.04em] mb-12">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-2 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border overflow-hidden transition-all">
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 transition-transform duration-200",
                    expandedFaq === index && "rotate-180",
                  )}
                />
              </button>
              {expandedFaq === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-muted-foreground text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
