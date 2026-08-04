import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
      variants: {
        variant: {
          default:
              "bg-brand text-white hover:bg-brand/90 focus-visible:border-brand/40 focus-visible:ring-brand/20",
          outline:
              "border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors",
          secondary:
              "bg-black text-white hover:bg-black/80 focus-visible:border-black/40 focus-visible:ring-black/20",
          ghost:
              "hover:bg-blue/10 hover:text-blue focus-visible:border-blue/40 focus-visible:ring-blue/20",
          link: "text-blue underline-offset-4 hover:underline focus-visible:border-blue/40 focus-visible:ring-blue/20",

          // Variaciones sólidas adicionales
          orange:
              "bg-orange text-white hover:bg-orange/90 focus-visible:border-orange/40 focus-visible:ring-orange/20",
          brown:
              "bg-brown text-white hover:bg-brown/90 focus-visible:border-brown/40 focus-visible:ring-brown/20",
          red:
              "bg-red text-white hover:bg-red/90 focus-visible:border-red/40 focus-visible:ring-red/20",
          success:
              "bg-success text-black hover:bg-success/90 focus-visible:border-black/20 focus-visible:ring-black/10",
          error:
              "bg-error text-white hover:bg-error/90 focus-visible:border-error/40 focus-visible:ring-error/20",

          // Variaciones usando los tonos suaves (-back)
          "brand-soft":
              "bg-brand-back text-brand hover:bg-brand-back/80 focus-visible:border-brand/40 focus-visible:ring-brand/20",
          "blue-soft":
              "bg-blue-back text-blue hover:bg-blue-back/80 focus-visible:border-blue/40 focus-visible:ring-blue/20",
          "orange-soft":
              "bg-orange-back text-orange hover:bg-orange-back/80 focus-visible:border-orange/40 focus-visible:ring-orange/20",
          "brown-soft":
              "bg-brown-back text-brown hover:bg-brown-back/80 focus-visible:border-brown/40 focus-visible:ring-brown/20",
        },
        size: {
          default:
              "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
          xs: "h-6 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
          sm: "h-7 gap-1 px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
          lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
          icon: "size-8",
          "icon-xs":
              "size-6 [&_svg:not([class*='size-'])]:size-3",
          "icon-sm":
              "size-7",
          "icon-lg": "size-9",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
