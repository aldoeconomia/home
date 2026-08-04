import Link from "next/link";
import { messages } from "@/lib/messages";
import Image from "next/image";

const Footer = () => {
  const t = messages.footer;

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

  return (
    <footer className="relative z-10 bg-background px-6 py-12 pb-12 -mt-24 md:-mt-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Top Section: Quote and Social Icons - Centered mobile, Right desktop */}
        <div className="text-center md:text-left">
          <blockquote className="max-w-3xl mb-6 mx-auto md:mx-0">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4">
              {t.quote}
            </p>
            <footer className="text-muted-foreground text-sm">
              — {t.quoteAuthor}
            </footer>
          </blockquote>

          {/* Social Icons - Centered mobile, Right desktop */}
          <div className="flex items-center gap-5 justify-center md:justify-start">
            {socialLinks.map(({ src, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Image
                  src={src}
                  alt={label}
                  width={32}
                  height={32}
                  className="h-6 w-6 md:h-8 md:w-8"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section: Links - Top and Copyright - Bottom */}
        <div className="pt-8 flex flex-col gap-6 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 items-center sm:items-center justify-center md:justify-between w-full">
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                href="/#terms"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {t.terms}
              </Link>
              <Link
                href="/#privacy"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {t.privacy}
              </Link>
            </div>
            <Link
              href="mailto:sales@theqontrol.com"
              className="flex items-center gap-2 text-primary font-semibold text-xs md:text-sm hover:text-primary/80 transition-colors duration-200"
            >
              <span>{t.support}</span>
              <Image
                src="/icon/support.svg"
                alt="Support"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} QONTROL. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
