import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, errorMessage, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 min-h-[40px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error-500 focus-visible:ring-error-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && errorMessage && (
          <p className="mt-1 text-sm text-error-600">{errorMessage}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
