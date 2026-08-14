import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // 🛡️ Cabeceras de Seguridad y SEO Técnico servidas desde el Edge de Vercel
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Evita que los navegadores interpreten tipos MIME incorrectos
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Previene ataques de Clickjacking
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Protege la privacidad del usuario en enlaces externos
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on", // Acelera la resolución de dominios en enlaces dentro de tu sitio
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // Fuerza el uso de HTTPS seguro
          },
        ],
      },
    ];
  },

  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "localhost:4500",
        "theqontrol.com",
        "www.theqontrol.com",
        "*.theqontrol.com",
      ],
    },
  },

  typescript: {
    // ⚠️ NOTA: Útil para despliegues rápidos en desarrollo.
    // Para producción, procura corregir los errores de tipos para evitar errores 500 en vivo que afecten el SEO.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;