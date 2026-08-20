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
import Banner from "./banner";

const Navbar = () => {
  const bgClass = "bg-white shadow-sm text-black";

  return (
      <header className={`fixed top-0 left-0 right-0 z-50 h-20 w-full px-4 sm:px-8 lg:px-12 transition-all duration-300 ${bgClass}`}>
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 sm:gap-6">

          {/* Lado Izquierdo: Logo */}
          <div className="flex items-center justify-start shrink-0">
            <Link href="/" className="flex items-center scale-[0.75] sm:scale-100 origin-left transition-transform">
              <Logo1 />
            </Link>
          </div>

          {/* Lado Derecho / Centro: Banner */}
          <div className="flex items-center min-w-0">
            <Banner />
          </div>

          {/* Centro: Menú de navegación (Desktop) */}
          <div className="hidden md:flex items-center justify-center">
            <NavMenu isScrolled={true} />
          </div>

          {/* Lado Derecho: Acciones y menú móvil */}
          {/* CAMBIOS:
            1. justify-center en móvil, md:justify-end para escritorio.
            2. gap-3 en móvil para separar un poco el botón del menú hamburguesa.
            3. mr-3 sm:mr-0 para despegar todo el bloque del borde derecho en móvil.
        */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 shrink-0 mr-3 sm:mr-0">

            <Button asChild className="bg-brand text-white px-3 sm:px-4">
              <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
              >
                <span className="hidden sm:inline">Try Free</span>
                <span className="sm:hidden">Try Free</span>
                <ArrowUpRight className="h-4 w-4" />
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
              <PopoverTrigger className="group md:hidden p-2 hover:bg-gray-100 rounded-md focus:outline-none flex items-center justify-center">
                <Menu className="h-6 w-6 group-data-[state=open]:hidden" />
                <X className="h-6 w-6 hidden group-data-[state=open]:block" />
              </PopoverTrigger>

              <PopoverContent
                  className="h-[calc(100svh-5rem)] w-[95vw] sm:w-[350px] overflow-y-auto rounded-none bg-white p-6 shadow-xl"
                  sideOffset={16}
                  align="end"
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