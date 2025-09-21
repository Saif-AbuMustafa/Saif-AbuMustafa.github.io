
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
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-ak-blue/20 to-purple-500/20 rounded-full blur-2xl animate-fade-in animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-l from-ak-blue/15 to-cyan-500/15 rounded-full blur-3xl animate-scale-in hover-scale" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-ak-blue/10 rounded-full blur-xl animate-fade-in animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-20 right-1/4 w-28 h-28 bg-gradient-to-br from-ak-blue/8 to-violet-500/8 rounded-full blur-2xl animate-scale-in" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-gradient-to-tr from-cyan-500/5 to-ak-blue/10 rounded-full blur-3xl animate-enter" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-ak-blue/5 rounded-full blur-xl animate-fade-in animate-pulse" style={{ animationDelay: '2.5s' }} />
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
