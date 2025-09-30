import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { PremiumBackground } from "./PremiumBackground"

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
    background, 
    children, 
    overlay = "default",
    backgroundVariant = "gradient",
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-screen flex items-center justify-center overflow-hidden bg-background",
          className
        )}
        {...props}
      >
        {/* Premium Background System */}
        <PremiumBackground variant={backgroundVariant} />
        
        {/* Custom Background Image */}
        {background && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-multiply"
            style={{ backgroundImage: `url(${background})` }}
          />
        )}
        
        {/* Subtle overlay for content readability */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-background/10",
          {
            "from-background/10 to-background/20": overlay === "strong",
            "from-background/2 to-background/5": overlay === "minimal",
          }
        )} />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            {badge && (
              <Badge 
                variant="outline" 
                className="mb-8 border-primary/30 text-primary bg-primary/5 backdrop-blur-sm animate-fade-in px-6 py-2 text-sm font-medium"
              >
                {badge}
              </Badge>
            )}

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-slide-up tracking-tight">
              {subtitle && (
                <>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {title}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-ak-blue to-ak-blue/70 bg-clip-text text-transparent">
                    {subtitle}
                  </span>
                </>
              )}
              {!subtitle && (
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {title}
                </span>
              )}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="mb-24 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {children}
            </div>
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