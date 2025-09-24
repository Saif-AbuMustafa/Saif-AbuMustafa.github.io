
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import { PremiumBackground } from '@/components/ui/PremiumBackground';

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
      <PremiumBackground variant="gradient" />
      <BackgroundAnimations variant="hero" className="absolute inset-0" />
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
