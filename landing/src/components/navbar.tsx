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
  const bgClass = "bg-white shadow-md text-foreground";

  return (
      <div
          className={`fixed top-0 left-0 right-0 z-50 h-22 px-12 transition-all duration-300 ${bgClass}`}
      >
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Logo1 />
            </Link>
          </div>

          <div className="hidden md:block">
            <NavMenu isScrolled={true} />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                  asChild
                  className="bg-primary text-white"
              >
                <Link
                    href="https://onboarding.theqontrol.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Solicitar demo <ArrowUpRight />
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