import * as React from "react"
import { cn } from "@/lib/utils"

interface ModernSectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "accent" | "dark" | "gradient"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const ModernSection = React.forwardRef<HTMLElement, ModernSectionProps>(
  ({ className, variant = "default", padding = "lg", children, ...props }, ref) => {
    // All variants use clean white background, only accent is slightly tinted
    const bgClass = variant === "accent" ? "bg-gray-50/30" : "bg-white";
    
    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          bgClass,
          {
            // Padding
            "py-0": padding === "none",
            "py-12 lg:py-16": padding === "sm",
            "py-16 lg:py-20": padding === "md",
            "py-20 lg:py-32": padding === "lg",
            "py-32 lg:py-40": padding === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)
ModernSection.displayName = "ModernSection"

interface ModernContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg" | "xl" | "full"
}

const ModernContainer = React.forwardRef<HTMLDivElement, ModernContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4",
          {
            "max-w-4xl": size === "sm",
            "max-w-6xl": size === "default",
            "max-w-7xl": size === "lg",
            "max-w-8xl": size === "xl",
            "max-w-none": size === "full",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ModernContainer.displayName = "ModernContainer"

const ModernGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    cols?: 1 | 2 | 3 | 4 | 5 | 6
    gap?: "sm" | "md" | "lg" | "xl"
  }
>(({ className, cols = 3, gap = "lg", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid",
        {
          "grid-cols-1": cols === 1,
          "grid-cols-1 md:grid-cols-2": cols === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": cols === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": cols === 4,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5": cols === 5,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6": cols === 6,
          
          "gap-4": gap === "sm",
          "gap-6": gap === "md",
          "gap-8": gap === "lg",
          "gap-12": gap === "xl",
        },
        className
      )}
      {...props}
    />
  )
})
ModernGrid.displayName = "ModernGrid"

export { ModernSection, ModernContainer, ModernGrid }