import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
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

const Contact = () => (
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
          {/* Contact Info Items (Sin bordes en contenedor) */}
          <div className="grid w-full max-w-3xl grid-cols-1 gap-10 bg-white sm:grid-cols-2 lg:col-span-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center border border-white text-brand">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-medium text-xl">Email</h3>
              <p className="my-2.5 text-muted-foreground">
                Nuestro equipo está aquí para ayudarte. Inicia un nuevo chat.
              </p>
              <Link
                  className="font-medium text-primary"
                  href="mailto:hello@theqontrol.com"
              >
                hello@theqontrol.com
              </Link>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center border border-white text-orange">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-medium text-xl">Office</h3>
              <p className="my-2.5 text-muted-foreground">
                Visítanos en nuestras oficinas.
              </p>
              <Link
                  className="font-medium text-primary"
                  href=""
              >
                Saltillo, Coahuila, México
              </Link>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center border border-white text-blue">
                <PhoneIcon />
              </div>
              <h3 className="mt-6 font-medium text-xl">Phone</h3>
              <p className="my-2.5 text-muted-foreground">
                Lunes a viernes, de 8:00 a. m. a 5:00 p. m.
              </p>
              <Link
                  className="font-medium text-primary"
                  href="tel:844 880 9685"
              >
                +52 844 880 9685
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="w-full max-w-lg">
            <Card className="relative isolate rounded-none border border-black bg-white shadow-none lg:ms-auto">
              <CardHeader className="gap-1">
                <CardTitle className="font-medium text-xl">Contáctanos</CardTitle>
                <CardDescription className="text-base">
                  Nos encantaría saber de ti. Completa el siguiente formulario.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-2">
                <form
                    action="mailto:hello@theqontrol.com"
                    method="post"
                    encType="text/plain"
                >
                  <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input
                          className="mt-2 rounded-none border border-black bg-white shadow-none"
                          id="firstName"
                          name="firstName"
                          placeholder="Nombre"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input
                          className="mt-2 rounded-none border border-black bg-white shadow-none"
                          id="lastName"
                          name="lastName"
                          placeholder="Apellido"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                          className="mt-2 rounded-none border border-black bg-white shadow-none"
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                          className="mt-2 rounded-none border border-black bg-white shadow-none"
                          id="message"
                          name="message"
                          placeholder="Mensaje"
                          rows={6}
                      />
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <Checkbox className="rounded-none border-black bg-white" id="acceptTerms" />
                      <Label className="gap-0" htmlFor="acceptTerms">
                        Aceptas nuestros
                        <Link className="ml-1 underline" href="/terminos">
                          términos y condiciones
                        </Link>
                        <span>.</span>
                      </Label>
                    </div>
                  </div>
                  <Button className="mt-6 w-full rounded-none bg-black text-white hover:bg-black/90" size="lg" type="submit">
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
);

export default Contact;