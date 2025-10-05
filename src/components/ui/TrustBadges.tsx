import { Shield, Lock, CheckCircle, Award } from 'lucide-react';

interface TrustBadgesProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
}

export const TrustBadges = ({ variant = 'horizontal', size = 'md' }: TrustBadgesProps) => {
  const badges = [
    {
      icon: Shield,
      text: 'SSL Secured',
      color: 'text-green-600'
    },
    {
      icon: Lock,
      text: 'Privacy Protected',
      color: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      text: 'GDPR Compliant',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      text: 'Verified Secure',
      color: 'text-orange-600'
    }
  ];

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <div className={`flex ${variant === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-3'} items-center justify-center`}>
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/50 backdrop-blur-sm border border-[hsl(36,20%,85%)]"
        >
          <badge.icon className={`${iconSizes[size]} ${badge.color}`} />
          <span className={`${sizeClasses[size]} font-medium text-[hsl(220,13%,23%)]`}>
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
};
