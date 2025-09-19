import * as React from "react"
import { cn } from "@/lib/utils"
import { PremiumBackground } from "./PremiumBackground"

interface InteractiveSectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "default" | "gradient" | "mesh" | "particles"
  interactive?: boolean
  children: React.ReactNode
}

const InteractiveSection = React.forwardRef<HTMLElement, InteractiveSectionProps>(
  ({ className, background = "default", interactive = false, children, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
    
    const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
      if (!interactive) return
      const rect = e.currentTarget.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      })
    }, [interactive])

    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          interactive && "cursor-none",
          className
        )}
        onMouseMove={handleMouseMove}
        {...props}
      >
        <PremiumBackground variant={background} />
        
        {interactive && (
          <div
            className="absolute pointer-events-none z-10 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl transition-all duration-300"
            style={{
              left: `${mousePosition.x * 100}%`,
              top: `${mousePosition.y * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        )}
        
        <div className="relative z-20">
          {children}
        </div>
      </section>
    )
  }
)
InteractiveSection.displayName = "InteractiveSection"

export { InteractiveSection }