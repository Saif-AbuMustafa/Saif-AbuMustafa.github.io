import React from 'react';
import { CTABackground } from '@/components/ui/CTABackground';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  className = ""
}) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      <CTABackground />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {subtitle && (
            <p className="text-fintech-blue font-semibold mb-4 animate-slide-up">
              {subtitle}
            </p>
          )}
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            {title}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            {primaryAction.href ? (
              <a href={primaryAction.href} className="btn-primary">
                {primaryAction.text}
              </a>
            ) : (
              <button 
                onClick={primaryAction.onClick}
                className="btn-primary"
              >
                {primaryAction.text}
              </button>
            )}
            
            {secondaryAction && (
              secondaryAction.href ? (
                <a href={secondaryAction.href} className="btn-secondary">
                  {secondaryAction.text}
                </a>
              ) : (
                <button 
                  onClick={secondaryAction.onClick}
                  className="btn-secondary"
                >
                  {secondaryAction.text}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};