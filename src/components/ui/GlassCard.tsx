import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  glow?: boolean;
}

export const GlassCard = ({ 
  children, 
  className = '', 
  blur = 'md',
  opacity = 0.1,
  glow = false 
}: GlassCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  return (
    <Card
      className={`
        relative overflow-hidden border-border/20 ${blurClasses[blur]}
        bg-white/[${opacity}] dark:bg-white/[${opacity * 0.5}]
        shadow-xl hover:shadow-2xl transition-all duration-500
        ${glow ? 'hover:shadow-fintech-blue/20' : ''}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />
      
      {/* Glow Effect */}
      {glow && isHovered && (
        <div 
          className="absolute inset-0 opacity-50 blur-xl transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 70%)`
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Card>
  );
};