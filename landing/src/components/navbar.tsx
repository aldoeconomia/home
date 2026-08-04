import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NavMenu } from "./nav-menu";
import { Logo1 } from "./logo";

const Navbar = () => {
  const bgClass = "bg-white  shadow-sm text-foreground";

  return (
      <header className={`fixed top-0 left-0 right-0 z-50 h-20 w-full px-4 sm:px-8 lg:px-12 transition-all duration-300 ${bgClass}`}>
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between">
          {/* Lado Izquierdo: Logo */}
          <div className="flex flex-1 items-center justify-start">
            <Link href="/" className="flex items-center">
              <Logo1 />
            </Link>
          </div>

          {/* Centro: Menú de navegación */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <NavMenu isScrolled={true} />
          </div>

          {/* Lado Derecho: Acciones y menú móvil */}
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
            <Button asChild className="bg-primary text-white">
              <Link
                  href="https://onboarding.theqontrol.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
              >
                Try Free <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
                className="hidden sm:inline-flex border-black text-black"
                variant="outline"
                asChild
            >
              <Link
                  href="https://app.theqontrol.com/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Iniciar sesión
              </Link>
            </Button>

            {/* Menú Móvil */}
            <Popover>
              <PopoverTrigger className="group md:hidden p-2 rounded-md hover:bg-accent focus:outline-none flex items-center justify-center">
                <Menu className="h-6 w-6 group-data-[state=open]:hidden" />
                <X className="h-6 w-6 hidden group-data-[state=open]:block" />
              </PopoverTrigger>
              <PopoverContent
                  className="h-[calc(100svh-5rem)] w-screen rounded-none border-none bg-background"
                  sideOffset={16}
              >
                <NavMenu orientation="vertical" isScrolled={true} />
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </header>
  );
};

export default Navbar;