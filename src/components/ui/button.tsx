import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(217,91%,60%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group cursor-pointer touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] text-white shadow-lg hover:shadow-xl hover:shadow-[hsl(217,91%,60%)]/30 hover:scale-105 active:scale-100 hover:from-[hsl(217,91%,55%)] hover:to-[hsl(224,76%,43%)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-destructive/25 hover:scale-105 active:scale-100",
        outline:
          "border-2 border-[hsl(217,91%,60%)] bg-background text-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,60%)] hover:text-white shadow-sm hover:shadow-md hover:scale-105 active:scale-100",
        secondary:
          "bg-[hsl(220,9%,46%)] text-white hover:bg-[hsl(220,13%,40%)] shadow-sm hover:shadow-md hover:scale-105 active:scale-100",
        ghost: "hover:bg-[hsl(36,30%,92%)] hover:text-[hsl(220,13%,23%)] text-[hsl(220,13%,23%)]",
        link: "text-[hsl(217,91%,60%)] underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] text-white shadow-lg hover:shadow-2xl hover:shadow-[hsl(217,91%,60%)]/40 hover:scale-105 active:scale-100",
        glass: "bg-white/60 backdrop-blur-md border border-[hsl(36,20%,85%)] text-[hsl(220,13%,23%)] hover:bg-white/80 shadow-lg hover:shadow-xl",
        black: "bg-black text-white shadow-lg hover:shadow-xl hover:shadow-black/25 hover:scale-105 active:scale-100 hover:bg-black/90",
      },
      size: {
        default: "h-11 min-h-[44px] px-6 py-3",
        sm: "h-9 min-h-[36px] rounded-md px-4 text-sm",
        lg: "h-14 min-h-[44px] rounded-lg px-8 text-base",
        xl: "h-16 min-h-[48px] rounded-lg px-10 text-lg",
        icon: "h-11 w-11 min-h-[44px] min-w-[44px] rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
