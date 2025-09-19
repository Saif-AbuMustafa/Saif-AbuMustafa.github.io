import React from 'react';

interface BackgroundAnimationsProps {
  variant?: 'subtle' | 'hero' | 'section';
  className?: string;
}

export const BackgroundAnimations: React.FC<BackgroundAnimationsProps> = ({ 
  variant = 'subtle', 
  className = '' 
}) => {
  // Respect user preference for reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-ak-beige-50 via-ak-beige-100 to-ak-beige-300 opacity-50" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            linear-gradient(135deg, hsl(var(--ak-beige-50)) 0%, hsl(var(--ak-beige-100)) 50%, hsl(var(--ak-beige-300)) 100%),
            radial-gradient(circle at 20% 80%, hsl(var(--ak-blue) / 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--ak-blue) / 0.03) 0%, transparent 50%)
          `,
          backgroundSize: '400% 400%, 800px 800px, 600px 600px',
          animation: `
            gradientShift 20s ease-in-out infinite,
            float 30s ease-in-out infinite,
            pulse 15s ease-in-out infinite
          `
        }}
      />

      {variant === 'hero' && (
        <>
          {/* Large floating shapes for hero */}
          <div 
            className="absolute w-96 h-96 rounded-full opacity-20 will-change-transform"
            style={{
              top: '10%',
              left: '80%',
              background: 'radial-gradient(circle, hsl(var(--ak-blue) / 0.1) 0%, transparent 70%)',
              animation: 'floatSlow 25s ease-in-out infinite, rotateSlow 40s linear infinite'
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full opacity-15 will-change-transform"
            style={{
              bottom: '20%',
              left: '10%',
              background: 'radial-gradient(circle, hsl(var(--ak-beige-300)) 0%, transparent 70%)',
              animation: 'floatSlow 30s ease-in-out infinite reverse, pulse 20s ease-in-out infinite'
            }}
          />
        </>
      )}

      {variant === 'section' && (
        <>
          {/* Medium floating elements for sections */}
          <div 
            className="absolute w-32 h-32 opacity-10 will-change-transform"
            style={{
              top: '15%',
              right: '15%',
              background: 'linear-gradient(45deg, hsl(var(--ak-blue) / 0.2), transparent)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              animation: 'morph 35s ease-in-out infinite, floatGentle 20s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-24 h-24 opacity-8 will-change-transform"
            style={{
              bottom: '25%',
              right: '25%',
              background: 'hsl(var(--ak-beige-300) / 0.6)',
              borderRadius: '50%',
              animation: 'pulse 25s ease-in-out infinite, drift 40s linear infinite'
            }}
          />
        </>
      )}

      {/* Subtle animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, hsl(var(--ak-text)) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridMove 60s linear infinite'
        }}
      />
    </div>
  );
};

// CSS keyframes will be added to index.css