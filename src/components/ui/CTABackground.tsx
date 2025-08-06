import React from 'react';

export const CTABackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/30 to-fintech-blue/30 rounded-full blur-3xl animate-float-slow" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-l from-fintech-blue/25 to-primary/25 rounded-full blur-3xl animate-float-slow" 
             style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-primary/20 to-fintech-blue/20 rounded-full blur-3xl animate-float-slow" 
             style={{ animationDelay: '6s' }} />
      </div>

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--fintech-blue))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M ${i * 150} 0 Q ${i * 150 + 100} 200 ${i * 150 + 200} 400 T ${i * 150 + 400} 800`}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0; 0,-100; 0,0`}
              dur={`${8 + i}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>

      {/* Geometric Network */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${15 + (i * 8)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <div className="absolute inset-0 bg-primary rounded-full animate-ping" 
                 style={{ animationDelay: `${i * 0.3}s` }} />
          </div>
        ))}
      </div>

      {/* Mesh Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, hsl(var(--fintech-blue)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 40px 40px',
          animation: 'mesh-drift 25s linear infinite'
        }}
      />

      {/* Energy Waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-y-3 animate-wave-move" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-fintech-blue/8 to-transparent -skew-y-2 animate-wave-move" 
             style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};