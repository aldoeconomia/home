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
        {/* Redujimos el gap en mobile (gap-2) para que los elementos quepan mejor */}
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 sm:gap-6">

          {/* Lado Izquierdo: Logo */}
          <div className="flex items-center justify-start shrink-0">
            <Link href="/" className="flex items-center">
              <Logo1 />
            </Link>
          </div>

          {/* Lado Derecho / Centro: Banner */}
          {/* Usamos min-w-0 para permitir que el banner se reduzca si la pantalla es muy pequeña */}
          <div className="flex items-center min-w-0">
            <Banner />
          </div>

          {/* Centro: Menú de navegación (Desktop) */}
          <div className="hidden md:flex items-center justify-center">
            <NavMenu isScrolled={true} />
          </div>

          {/* Lado Derecho: Acciones y menú móvil */}
          {/* Eliminamos flex-1 y agregamos shrink-0 para que los botones nunca se aplasten ni se salgan de pantalla */}
          <div className="flex items-center justify-end gap-2 sm:gap-4 shrink-0">
            <Button asChild className="bg-brand text-white px-3 sm:px-4">
              <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
              >
                <span className="hidden sm:inline">Try Free</span>
                <span className="sm:hidden">Try Free</span> {/* Texto más corto en mobile si es necesario, o déjalo como Try Free */}
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
              <PopoverTrigger className="group md:hidden p-2 rounded-md hover:bg-back focus:outline-none flex items-center justify-center">
                <Menu className="h-6 w-6 group-data-[state=open]:hidden" />
                <X className="h-6 w-6 hidden group-data-[state=open]:block" />
              </PopoverTrigger>

              {/*
              CORRECCIONES DEL POPOVER:
              1. align="end": Evita que el w-screen desborde la pantalla hacia la derecha.
              2. overflow-y-auto: Permite hacer scroll si tienes muchos links.
              3. p-4 o p-6: Añade respiro para que no se vea pegado a los bordes.
            */}
              <PopoverContent
                  className="h-[calc(100svh-5rem)] w-screen overflow-y-auto rounded-none border-none bg-back p-6 shadow-xl"
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