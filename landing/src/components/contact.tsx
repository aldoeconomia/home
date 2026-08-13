"use client";

import { useState } from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    company: "",
    country: "",
    city: "",
    message: "",
    acceptTerms: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          tel: "",
          company: "",
          country: "",
          city: "",
          message: "",
          acceptTerms: false,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setStatus("error");
    }
  };

  return (
      <div className="bg-white py-20">
        <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
          <b className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
            Contáctanos
          </b>
          <h2 className="mt-3 font-medium text-4xl tracking-[-0.035em]">
            ¡Habla con nuestro equipo!
          </h2>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            Nos encantaría saber de ti. Completa el formulario o envíanos un correo electrónico.
          </p>

          <div className="mt-16 flex flex-col gap-16 md:gap-10 lg:flex-row">
            {/* Contact Info Items */}
            <div className="grid w-full max-w-3xl grid-cols-1 gap-10 bg-white sm:grid-cols-2 lg:col-span-2">
              <div>
                <div className="flex h-12 w-12 items-center justify-center border border-white text-brand">
                  <MailIcon />
                </div>
                <h3 className="mt-6 font-medium text-xl">Email</h3>
                <p className="my-2.5 text-muted-foreground">
                  Nuestro equipo está aquí para ayudarte. Contáctanos.
                </p>
                <Link
                    className="font-medium text-primary underline"
                    href="mailto:hello@theqontrol.com"
                >
                  hello@theqontrol.com
                </Link>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center border border-white text-orange">
                  <MapPinIcon />
                </div>
                <h3 className="mt-6 font-medium text-xl">Oficina</h3>
                <p className="my-2.5 text-muted-foreground">
                  Visítanos en nuestras oficinas.
                </p>
                <span className="font-medium text-primary">
                Saltillo, Coahuila, México
              </span>
              </div>
            </div>

            {/* Card Component with Form */}
            <div className="w-full max-w-lg">
              <Card className="relative isolate rounded-none border border-black bg-white shadow-none lg:ms-auto">
                <CardHeader className="gap-1">
                  <CardTitle className="font-medium text-xl">Contáctanos</CardTitle>
                  <CardDescription className="text-base">
                    Nos encantaría saber de ti. Completa el siguiente formulario.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                      {/* Nombre */}
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input
                            className="mt-2 rounded-none border border-black bg-white shadow-none"
                            id="firstName"
                            name="firstName"
                            placeholder="Nombre"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                      </div>

                      {/* Apellido */}
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input
                            className="mt-2 rounded-none border border-black bg-white shadow-none"
                            id="lastName"
                            name="lastName"
                            placeholder="Apellido"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                      </div>

                      {/* Email */}
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            className="mt-2 rounded-none border border-black bg-white shadow-none"
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                      </div>

                      {/* Teléfono */}
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="tel">Teléfono</Label>
                        <Input
                            className="mt-2 rounded-none border border-black bg-white shadow-none"
                            id="tel"
                            name="tel"
                            placeholder="+52 844 000 0000"
                            type="tel"
                            value={formData.tel}
                            onChange={handleChange}
                        />
                      </div>

                      {/* Empresa */}
                      <div className="col-span-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                            className="mt-2 rounded-none border border-black bg-white shadow-none"
                            id="company"
                            name="company"
                            placeholder="Nombre de tu empresa"
                            value={formData.company}
                            onChange={handleChange}
                        />
                      </div>

                      {/* País */}
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="country">País</Label>
                        <Input
                            className="mt-2 rounded-none border border-black bg-white shadow-none"
                            id="country"
                            name="country"
                            placeholder="México"
                            value={formData.country}
                            onChange={handleChange}
                        />
                      </div>

                      {/* Ciudad */}
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input
                            className="mt-2 rounded-none border border-black bg-white shadow-none"
                            id="city"
                            name="city"
                            placeholder="Saltillo"
                            value={formData.city}
                            onChange={handleChange}
                        />
                      </div>

                      {/* Mensaje */}
                      <div className="col-span-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                            className="mt-2 rounded-none border border-black bg-white shadow-none"
                            id="message"
                            name="message"
                            placeholder="Mensaje"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                      </div>

                      {/* Términos y condiciones */}
                      <div className="col-span-2 flex items-center gap-2">
                        <Checkbox
                            className="rounded-none border-black bg-white"
                            id="acceptTerms"
                            checked={formData.acceptTerms}
                            onCheckedChange={(checked) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  acceptTerms: Boolean(checked),
                                }))
                            }
                        />
                        <Label className="gap-0" htmlFor="acceptTerms">
                          Aceptas nuestros
                          <Link className="ml-1 underline" href="/terminos">
                            términos y condiciones
                          </Link>
                        </Label>
                      </div>
                    </div>

                    <Button
                        className="mt-6 w-full rounded-none bg-black text-white hover:bg-black/90"
                        size="lg"
                        type="submit"
                        disabled={status === "loading"}
                    >
                      {status === "loading" ? "Enviando..." : "Enviar"}
                    </Button>

                    {status === "success" && (
                        <p className="mt-4 text-center text-sm text-green-600">
                          ¡Mensaje enviado con éxito!
                        </p>
                    )}
                    {status === "error" && (
                        <p className="mt-4 text-center text-sm text-red-600">
                          Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                        </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
  );
}