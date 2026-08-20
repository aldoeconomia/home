import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "QONTROL | La plataforma para registrar, inspeccionar, gestionar formularios y hacer seguimiento a tu operación.",
    template: "%s | QONTROL",
  },

  description:
      "QONTROL es un software mexicano para digitalizar inspecciones, mantenimiento y evidencias de extintores.",

  keywords: [
    "software de extintores",
    "inspección de extintores",
    "mantenimiento de extintores",
    "protección contra incendios",
    "SaaS México",
    "seguridad industrial",
  ],

  authors: [
    {
      name: "QONTROL",
    },
  ],

  creator: "QONTROL",

  metadataBase: new URL("https://www.theqontrol.com"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon/icon.svg",
  },

  openGraph: {
    title: "QONTROL | La plataforma para registrar, inspeccionar, gestionar formularios y hacer seguimiento a tu operación.",
    description:
        "Digitaliza inspecciones, evidencias y reportes de mantenimiento de extintores.",

    url: "https://www.theqontrol.com",

    siteName: "QONTROL",

    locale: "es_MX",

    type: "website",

    images: [
      {
        url: "/icon/icon.svg",
        width: 1200,
        height: 630,
        alt: "QONTROL - La plataforma para registrar, inspeccionar, gestionar formularios y hacer seguimiento a tu operación.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "QONTROL | La plataforma para registrar, inspeccionar, gestionar formularios y hacer seguimiento a tu operación.",
    description:
        "Software mexicano para controlar inspecciones, mantenimiento y evidencias.",
    images: ["/icon/icon.svg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      <JsonLd />
      {children}
      </body>
      </html>
  );
}