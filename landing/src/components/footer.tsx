import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      src: "/icon/instagram.svg",
      href: "https://www.instagram.com/qontrolmx/",
      label: "Instagram",
    },
    {
      src: "/icon/facebook.svg",
      href: "https://www.facebook.com/people/Qontrol/61586167686768/#",
      label: "Facebook",
    },
    {
      src: "/icon/linkedin.svg",
      href: "https://www.linkedin.com/company/qontrolmx",
      label: "Linkedin",
    },
  ];

  const tabs = [
    {
      title: "Soluciones",
      items: [
        { href: "/forms", label: "Forms" },
      ],
    },
    {
      title: "Company",
      items: [
        { href: "/", label: "Inicio" },
        { href: "/pricing", label: "Precios" },
        { href: "/contacto", label: "Contacto" },
        { href: "/grupo-codiaz", label: "Grupo Codiaz" },
        { href: "/404", label: "404" },
        { href: "/blog", label: "Blog" },
      ],
    },
    {
      title: "Legal",
      items: [
        { href: "/terminos", label: "Términos y Condiciones" },
        { href: "/#privacy", label: "Política de privacidad" },
        { href: "/#security-compliance", label: "Cumplimiento de Seguridad" },
        { href: "/#marca", label: "Uso de Marca" },
      ],
    },
  ];

  return (
      <footer className="relative z-10 bg-background px-6 py-12 ">
        <div className="mx-auto w-full max-w-7xl">
          {/* Grid Principal: 1 col en celular, 2 en tablet pequeña, 4 columnas en desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-8 lg:gap-12 items-start">

            {/* Logo y descripción alineados al centro en mobile y a la izquierda en desktop */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left sm:col-span-2 md:col-span-1 max-w-sm mx-auto md:mx-0">
              <Link href="/" className="inline-block">
                <Image
                    src="/icon/logo.svg"
                    alt="Qontrol Logo"
                    width={72}
                    height={72}
                    className="h-16 w-16 md:h-20 md:w-20 object-contain"
                    priority
                />
              </Link>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                La plataforma para registrar, inspeccionar, gestionar formularios y hacer seguimiento a tu operación. Creada para las empresas que impulsan la industria de hoy.
              </p>
            </div>

            {/* Secciones de Links */}
            {tabs.map((section) => (
                <div key={section.title} className="text-center sm:text-left">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>

          {/* Separador e información inferior */}
          <div className="pt-8 mt-12 border-t border-border/60 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">
            <p className="text-xs text-muted-foreground max-w-xl leading-relaxed">
              <strong className="block mb-1 text-foreground/90 font-bold ">
                Qontrol&reg; - Hecho en México
              </strong>
              Copyright &copy; {new Date().getFullYear()}{' '}QONTROL&reg;. Todos los derechos reservados.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-end">
              <div className="flex items-center gap-4">
                {socialLinks.map(({ src, href, label }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        aria-label={label}
                    >
                      <Image
                          src={src}
                          alt={label}
                          width={28}
                          height={28}
                          className="h-6 w-6 md:h-7 md:w-7"
                      />
                    </Link>
                ))}
              </div>

              <Link
                  href="mailto:support@theqontrol.com"
                  className="flex items-center gap-2 text-primary font-semibold text-xs md:text-sm "
              >
                <span>¿Te apoyamos en algo?</span>
                <Image
                    src="/icon/support.svg"
                    alt="Support"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;