import * as React from "react"
import { cn } from "@/lib/utils"

interface TextOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "subtle" | "medium" | "strong" | "glass"
  position?: "center" | "left" | "right" | "full"
}

const TextOverlay = React.forwardRef<HTMLDivElement, TextOverlayProps>(
  ({ className, variant = "subtle", position = "center", children, ...props }, ref) => {
    const overlayClasses = {
      subtle: "bg-background/70 backdrop-blur-sm",
      medium: "bg-background/80 backdrop-blur-md",
      strong: "bg-background/90 backdrop-blur-lg",
      glass: "bg-ak-beige-50/60 backdrop-blur-md border border-ak-beige-200/30"
    }

    const positionClasses = {
      center: "text-center mx-auto max-w-4xl",
      left: "text-left max-w-4xl",
      right: "text-right max-w-4xl ml-auto",
      full: "text-center w-full"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-8 shadow-lg",
          overlayClasses[variant],
          positionClasses[position],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TextOverlay.displayName = "TextOverlay"

export { TextOverlay }