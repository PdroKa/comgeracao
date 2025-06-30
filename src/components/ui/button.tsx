import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"

import Link from "next/link"
import type { UrlObject } from 'url';
import Image from "next/image"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/80",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border-2 border-transparent hover:border-background bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-transparent text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-6 py-3 has-[>svg]:px-3",
        ghost: "",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
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
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}


// ___ LINK COM BOTAO___
function ButtonLink({
  children,
  disabled,
  className,
  href,
  ...props
}: {
  children: React.ReactNode;
  disabled?: boolean;
  href: string | UrlObject;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {

  if (disabled) {
    return (
      <Button disabled {...props}>
        {children}
      </Button>
    )
  }
  return (
    <Link href={href}>
      <Button {...props} className={className}>
        {children}
      </Button>
    </Link>
  )


}



function ButtonWhatsApp({
  children,
  className,
  href
}: {
  children: string;
  href: string | UrlObject;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return (
    <Link target="_blank" title={children} href={href} className={`fixed bottom-4 right-4 z-50 bg-transparent hover:scale-110 ${className}`}>
      <Image
        src={'/whatssapp.svg'}
        width={50}
        height={50}
        alt="Link para WhatsApp"
      />
    </Link>
  )


}

export { Button, buttonVariants, ButtonLink, ButtonWhatsApp }
