import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden cursor-pointer touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-primary-blue text-white hover:bg-primary-blue/90 shadow-sm hover:shadow-md focus:ring-primary-blue",
        primary: "bg-primary-blue text-white hover:bg-primary-blue/90 shadow-sm hover:shadow-md active:scale-[0.98] transition-transform",
        secondary: "bg-white text-primary-navy border border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow-sm focus:ring-primary-blue",
        destructive: "bg-error-500 text-white hover:bg-error-600 shadow-sm hover:shadow-md focus:ring-error-500",
        outline: "border-2 border-primary-blue bg-transparent text-primary-blue hover:bg-primary-blue hover:text-white shadow-sm hover:shadow-md active:scale-[0.98]",
        ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
        link: "text-primary-blue underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-primary-blue to-primary-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100",
        glass: "bg-white/60 backdrop-blur-md border border-gray-200 text-gray-900 hover:bg-white/80 shadow-lg hover:shadow-xl",
        black: "bg-black text-white shadow-lg hover:shadow-xl hover:bg-black/90",
      },
      size: {
        sm: "h-8 min-h-[32px] px-3 text-sm",
        default: "h-10 min-h-[40px] px-4 text-base",
        lg: "h-12 min-h-[48px] px-6 text-lg",
        xl: "h-14 min-h-[56px] px-8 text-lg",
        icon: "h-10 w-10 min-h-[40px] min-w-[40px]",
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
