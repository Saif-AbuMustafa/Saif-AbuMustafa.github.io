
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  background?: string;
  showBackButton?: boolean;
  backTo?: string;
  children?: ReactNode;
  className?: string;
}

export const PageHeader = ({
  title,
  subtitle,
  description,
  badge,
  badgeVariant = 'outline',
  background,
  showBackButton = false,
  backTo = '/',
  children,
  className = ''
}: PageHeaderProps) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Animated Background - replaces static background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10 animate-gradient-shift" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/8 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${20 + Math.random() * 15}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/2 rounded-full animate-pulse-slow" />
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-ak-blue/2 rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-primary/2 rotate-45 animate-spin-slow" />
        </div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-2"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--ak-blue) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--ak-blue) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'grid-move 30s linear infinite'
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Back Button */}
          {showBackButton && (
            <div className="mb-8">
              <Button variant="ghost" asChild className="group">
                <Link to={backTo}>
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back
                </Link>
              </Button>
            </div>
          )}

          {/* Badge */}
          {badge && (
            <Badge 
              variant={badgeVariant}
              className="mb-6 border-ak-blue text-ak-blue bg-ak-blue/5 backdrop-blur-sm animate-fade-in"
            >
              {badge}
            </Badge>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {subtitle ? (
              <>
                <span className="text-foreground animate-slide-in-right">{title}</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  {subtitle}
                </span>
              </>
            ) : (
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-enter">
                {title}
              </span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {description}
            </p>
          )}

          {/* Children (CTAs, etc.) */}
          {children && (
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
