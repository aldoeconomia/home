"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿El plan gratuito tiene límite de tiempo?",
    answer:
        "No, el plan Free for Life es gratis para siempre y no requiere tarjeta de crédito. Incluye 1 usuario técnico, 1 administrador, 500 MB de almacenamiento y hasta 4 reportes por semana para que comiences sin prisa.",
  },
  {
    question: "¿Puedo cambiar de plan si mi equipo crece?",
    answer:
        "Sí, totalmente. Puedes hacer upgrade o downgrade de tu plan en cualquier momento desde tu panel de control. Si decides subir de plan, la diferencia se ajustará automáticamente a tu facturación.",
  },
  {
    question: "¿Tienen algún descuento si pago de forma anual?",
    answer:
        "Sí, al elegir el pago anual ahorras 2 meses completos de suscripción. El plan Primary pasa de $175 USD a $140 USD/mes ($1,720 USD al año) y el plan Corporate pasa de $450 USD a $375 USD/mes ($4,500 USD al año).",
  },
  {
    question: "¿Qué pasa si necesito administradores adicionales?",
    answer:
        "Si estás en el plan Primary puedes agregar usuarios administradores extra por $20.00 USD/mes cada uno. En el plan Corporate el costo preferencial por administrador extra es de solo $9.00 USD/mes (además de los 3 que ya vienen incluidos).",
  },
  {
    question: "¿Cobran costo de instalación o configuración inicial?",
    answer:
        "En los planes Free y Primary puedes empezar de inmediato por tu cuenta. Si deseas que nuestro equipo realice la configuración inicial o capacite a tu personal en Primary, ofrecemos la sesión por $90.00 USD. En el plan Corporate, la configuración inicial y capacitación están 100% incluidas sin costo extra.",
  },
  {
    question: "¿Hay plazos forzosos o puedo cancelar cuando quiera?",
    answer:
        "Sin contratos forzosos. Puedes cancelar tu suscripción mensual en cualquier momento sin penalizaciones. Conservarás el acceso a la plataforma y a tus evidencias hasta el final del periodo que ya hayas pagado.",
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
