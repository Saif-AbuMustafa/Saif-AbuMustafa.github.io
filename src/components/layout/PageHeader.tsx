
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
  showBackButton = false,
  backTo = '/',
  children,
  className = ''
}: PageHeaderProps) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden bg-white ${className}`}>
      {/* Clean minimal background - matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Back Button */}
          {showBackButton && (
            <div className="mb-8">
              <Button 
                variant="ghost" 
                asChild 
                className="group text-gray-700 hover:text-primary"
              >
                <Link to={backTo}>
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back
                </Link>
              </Button>
            </div>
          )}

          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-5 py-2.5 border border-gray-200 animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {subtitle ? (
              <>
                {title}
                <br />
                <span className="text-primary">{subtitle}</span>
              </>
            ) : (
              <span className="text-primary">{title}</span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {description}
            </p>
          )}

          {/* Children (CTAs, etc.) */}
          {children && (
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
