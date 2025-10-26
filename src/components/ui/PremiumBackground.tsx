import * as React from "react"
import { cn } from "@/lib/utils"

interface PremiumBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient" | "mesh" | "particles" | "hero"
  intensity?: "subtle" | "medium" | "strong"
}

const PremiumBackground = React.forwardRef<HTMLDivElement, PremiumBackgroundProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          className
        )}
        {...props}
      >
        {/* Base, minimal gradient matching homepage */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, hsl(var(--ak-white)) 0%, hsl(var(--ak-white)) 70%, hsl(var(--ak-beige-50)) 100%)
            `
          }}
        />
      </div>
    )
  }
)
PremiumBackground.displayName = "PremiumBackground"

export { PremiumBackground }
