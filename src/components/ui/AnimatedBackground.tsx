import React from 'react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Background - very subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10 animate-gradient-shift" />
      
      {/* Floating Particles - reduced and subtle */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
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

      {/* Geometric Shapes - very subtle */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/2 rounded-full animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-ak-blue/2 rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-primary/2 rotate-45 animate-spin-slow" />
      </div>

      {/* Grid Pattern - very subtle */}
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
  );
};