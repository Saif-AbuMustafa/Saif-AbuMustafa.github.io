
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
      {/* Background */}
      {background && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
        </>
      )}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-fintech-blue/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-fintech-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

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
              className="mb-6 border-fintech-blue text-fintech-blue bg-fintech-blue/5 backdrop-blur-sm animate-fade-in"
            >
              {badge}
            </Badge>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            {subtitle ? (
              <>
                <span className="text-foreground">{title}</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {subtitle}
                </span>
              </>
            ) : (
              <span className="bg-gradient-primary bg-clip-text text-transparent">
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
