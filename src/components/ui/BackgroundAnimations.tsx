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
      {/* Animated gradient background - very subtle */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(135deg, hsl(var(--ak-beige-50)) 0%, hsl(var(--ak-beige-100)) 50%, hsl(var(--ak-beige-300)) 100%),
            radial-gradient(circle at 20% 80%, hsl(var(--ak-blue) / 0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--ak-blue) / 0.01) 0%, transparent 50%)
          `,
          backgroundSize: '400% 400%, 800px 800px, 600px 600px',
          animation: `
            gradientShift 30s ease-in-out infinite,
            float 40s ease-in-out infinite,
            pulse 25s ease-in-out infinite
          `
        }}
      />

      {variant === 'hero' && (
        <>
          {/* Large floating shapes for hero - very subtle */}
          <div 
            className="absolute w-96 h-96 rounded-full opacity-5 will-change-transform"
            style={{
              top: '10%',
              left: '80%',
              background: 'radial-gradient(circle, hsl(var(--ak-blue) / 0.03) 0%, transparent 70%)',
              animation: 'floatSlow 35s ease-in-out infinite, rotateSlow 50s linear infinite'
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full opacity-4 will-change-transform"
            style={{
              bottom: '20%',
              left: '10%',
              background: 'radial-gradient(circle, hsl(var(--ak-beige-300) / 0.5) 0%, transparent 70%)',
              animation: 'floatSlow 40s ease-in-out infinite reverse, pulse 30s ease-in-out infinite'
            }}
          />
        </>
      )}

      {variant === 'section' && (
        <>
          {/* Medium floating elements for sections - very subtle */}
          <div 
            className="absolute w-32 h-32 opacity-3 will-change-transform"
            style={{
              top: '15%',
              right: '15%',
              background: 'linear-gradient(45deg, hsl(var(--ak-blue) / 0.05), transparent)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              animation: 'morph 45s ease-in-out infinite, floatGentle 30s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-24 h-24 opacity-2 will-change-transform"
            style={{
              bottom: '25%',
              right: '25%',
              background: 'hsl(var(--ak-beige-300) / 0.3)',
              borderRadius: '50%',
              animation: 'pulse 35s ease-in-out infinite, drift 50s linear infinite'
            }}
          />
        </>
      )}

      {/* Subtle ambient glow pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--ak-blue) / 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(var(--ak-beige-300) / 0.02) 0%, transparent 40%)
          `,
          backgroundSize: '800px 800px, 600px 600px',
          animation: 'gentleFloat 60s ease-in-out infinite'
        }}
      />
    </div>
  );
};

// CSS keyframes will be added to index.css