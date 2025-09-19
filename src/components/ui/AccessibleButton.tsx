import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'premium' | 'glass';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  children: React.ReactNode;
  asChild?: boolean;
}

export const AccessibleButton = React.forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          // Ensure high contrast for accessibility
          'focus-visible:ring-ak-red focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          // Improve touch targets for mobile
          'min-h-[44px] min-w-[44px]',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

AccessibleButton.displayName = "AccessibleButton";