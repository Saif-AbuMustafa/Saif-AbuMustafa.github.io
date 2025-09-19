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
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-screen flex items-center justify-center overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        {background && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
          />
        )}
        
        {/* Overlay */}
        <div className={cn(
          "absolute inset-0",
          {
            "bg-gradient-to-br from-background/95 via-background/85 to-background/95": overlay === "default",
            "bg-gradient-to-br from-background/98 via-background/95 to-background/98": overlay === "strong",
            "bg-gradient-to-br from-background/80 via-background/60 to-background/80": overlay === "minimal",
          }
        )} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-fintech-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-fintech-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            {badge && (
              <Badge 
                variant="outline" 
                className="mb-8 border-fintech-blue text-fintech-blue bg-fintech-blue/5 backdrop-blur-sm animate-fade-in px-6 py-2 text-sm font-medium"
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
                  <span className="text-foreground">
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
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
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
          <div className="w-6 h-10 border-2 border-fintech-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fintech-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    )
  }
)
ModernHero.displayName = "ModernHero"

export { ModernHero }