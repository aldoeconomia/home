"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NavMenu } from "./nav-menu";
import { Logo1, Logo2 } from "./logo";
import { messages } from "@/lib/messages";
import { useState, useEffect } from "react";

const Navbar = ({
  variant = "hero",
  customLogo,
}: {
  variant?: "hero" | "page";
  customLogo?: React.ReactNode;
}) => {
  const t = messages.navbar;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia estado cuando ha scrolleado más de 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Configuración basada en el variant
  const isPageVariant = variant === "page";
  const bgClass = isPageVariant
    ? "bg-white dark:bg-slate-950 shadow-md text-foreground"
    : isScrolled
      ? "bg-white dark:bg-slate-950 shadow-md text-foreground"
      : "bg-transparent text-white";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-22 px-12 transition-all duration-300 ${bgClass}`}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            {customLogo ? (
              customLogo
            ) : isPageVariant || isScrolled ? (
              <Logo2 />
            ) : (
              <Logo1 />
            )}
          </Link>
        </div>

        <div className="hidden md:block">
          <NavMenu isScrolled={isPageVariant || isScrolled} />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              asChild
              className={`${
                isPageVariant || isScrolled
                  ? "bg-primary text-white dark:text-white"
                  : "bg-primary text-white"
              }`}
            >
              <Link
                href="https://onboarding.theqontrol.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.cta} <ArrowUpRight />
              </Link>
            </Button>
            <Button
              className={`hidden sm:inline-flex ${
                isPageVariant || isScrolled
                  ? "border-black text-black dark:border-white dark:text-white"
                  : "border-white text-white dark:border-white dark:text-white"
              }`}
              variant="outline"
              asChild
            >
              <Link
                href="https://app.theqontrol.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.login}
              </Link>
            </Button>
          </div>

          {/* Mobile navigation menu */}
          <Popover>
            <PopoverTrigger className="group md:hidden">
              <Menu className="group-data-[state=open]:hidden" />
              <X className="hidden group-data-[state=open]:block" />
            </PopoverTrigger>
            <PopoverContent
              className="h-[calc(100svh-4rem)] w-screen rounded-none border-none bg-background"
              sideOffset={20}
            >
              <NavMenu orientation="vertical" isScrolled={true} />
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
