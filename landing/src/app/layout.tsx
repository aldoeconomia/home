import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Qontrol | Sistema de Gestión de Activos Normativos e Inspecciones",
  description:
      "La plataforma que escala con tu operación. Qontrol gestiona tus documentos, cumplimiento y flujos de trabajo para que tu equipo se enfoque en lo que realmente importa.",
  keywords: [
    "gestión de activos normativos",
    "software de inspecciones industriales",
    "cumplimiento NOM",
    "cumplimiento ISO",
    "aplicación de revisión",
    "gestión de flujos de trabajo",
    "digitalización de formularios industriales",
    "mantenimientos planta industrial",
    "Qontrol Forms",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon/logo.svg",
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="es" className={montserrat.variable} suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
      {children}
      </body>
      </html>
  );
}