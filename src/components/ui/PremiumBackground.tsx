import * as React from "react"
import { cn } from "@/lib/utils"

interface PremiumBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient" | "mesh" | "particles"
  intensity?: "subtle" | "medium" | "strong"
}

const PremiumBackground = React.forwardRef<HTMLDivElement, PremiumBackgroundProps>(
  ({ className, variant = "default", intensity = "medium", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          className
        )}
        {...props}
      >
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        
        {variant === "gradient" && (
          <>
            {/* Primary gradient orb */}
            <div className="absolute top-0 -right-40 w-80 h-80 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
            {/* Secondary gradient orb */}
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-radial from-fintech-blue/15 to-transparent rounded-full blur-3xl animate-float-slow" />
          </>
        )}

        {variant === "mesh" && (
          <>
            {/* Mesh grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 animate-gradient-shift" />
            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rotate-45 animate-spin-slow" />
            <div className="absolute bottom-32 right-32 w-24 h-24 bg-fintech-blue/10 rounded-full animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-primary/20 to-fintech-cyan/20 transform rotate-12 animate-float" />
          </>
        )}

        {variant === "particles" && (
          <>
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-1 h-1 bg-primary/40 rounded-full animate-float",
                  i % 3 === 0 && "bg-fintech-blue/30 w-2 h-2",
                  i % 4 === 0 && "bg-fintech-cyan/25 w-1.5 h-1.5"
                )}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
            {/* Subtle light rays */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-wave-move opacity-60" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-fintech-blue/15 to-transparent animate-wave-move opacity-40" style={{ animationDelay: "2s" }} />
          </>
        )}

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-multiply" />
        
        {/* Interactive glow that follows cursor */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none cursor-glow" />
      </div>
    )
  }
)
PremiumBackground.displayName = "PremiumBackground"

export { PremiumBackground }