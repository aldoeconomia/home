"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { cn } from "../lib/utils";

const linkKeys = [
  { href: "/", label: "Inicio" },
  { href: "/forms", label: "Forms" },
  { href: "/pricing", label: "Precios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const NavMenu = ({
                          className,
                          isScrolled = false,
                          orientation,
                          ...props
                        }: ComponentProps<typeof NavigationMenu> & { isScrolled?: boolean }) => {
  const pathname = usePathname();

  return (
      <NavigationMenu {...props} className={cn(className)}>
        <NavigationMenuList
            className={cn({
              "flex-col items-start gap-4": orientation === "vertical",
            })}
        >
          {linkKeys.map((link) => {
            const isActive = pathname === link.href;

            return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                      asChild
                      className={cn(
                          navigationMenuTriggerStyle(),
                          "transition-all duration-200",
                          "bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent",
                          "data-[active]:bg-transparent data-[state=open]:bg-transparent",
                          "focus:outline-none",
                          {
                            "text-destructive": isActive,
                            "text-foreground": !isActive && isScrolled,
                            "text-foreground/80": !isActive && !isScrolled,
                            "text-xl": orientation === "vertical",
                          },
                      )}
                  >
                    <Link
                        href={link.href}
                        className={cn("relative py-1", {
                          "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-destructive":
                          isActive,
                        })}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
  );
};