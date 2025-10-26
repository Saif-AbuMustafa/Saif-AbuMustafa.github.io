import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ModernHeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  description: string
  badge?: string
  background?: string
  children?: React.ReactNode
  overlay?: "default" | "strong" | "minimal"
  backgroundVariant?: "default" | "gradient" | "mesh" | "particles" | "hero"
}

const ModernHero = React.forwardRef<HTMLElement, ModernHeroProps>(
  ({ 
    className, 
    title, 
    subtitle, 
    description, 
    badge, 
    children, 
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-screen flex items-center justify-center overflow-hidden bg-white",
          className
        )}
        {...props}
      >
        {/* Clean minimal background - matching homepage */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <div className="text-center space-y-8 max-w-4xl mx-auto py-24 md:py-32">
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-5 py-2.5 border border-gray-200 animate-fade-in">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {subtitle ? (
                <>
                  {title}
                  <br />
                  <span className="text-primary">{subtitle}</span>
                </>
              ) : (
                <span className="text-primary">{title}</span>
              )}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {description}
            </p>

            {/* CTA Buttons */}
            {children && (
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                {children}
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center opacity-70">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    )
  }
)
ModernHero.displayName = "ModernHero"

export { ModernHero }
