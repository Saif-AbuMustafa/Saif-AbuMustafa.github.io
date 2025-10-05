import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 min-h-[44px] w-full rounded-md border-2 border-input bg-background px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[hsl(220,9%,46%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(217,91%,60%)] focus-visible:ring-offset-2 focus-visible:border-[hsl(217,91%,60%)] disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
