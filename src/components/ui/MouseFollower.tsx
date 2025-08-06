import React, { useEffect, useState } from 'react';

interface MouseFollowerProps {
  children?: React.ReactNode;
}

export const MouseFollower: React.FC<MouseFollowerProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.mouse-follow-container')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = document.querySelector('.mouse-follow-container');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="mouse-follow-container absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cursor Glow */}
      <div
        className={`absolute w-96 h-96 rounded-full transition-all duration-300 ease-out pointer-events-none ${
          isHovering ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, hsl(var(--fintech-blue) / 0.2) 30%, transparent 70%)',
          filter: 'blur(40px)',
          transform: `scale(${isHovering ? 1 : 0.8})`,
        }}
      />

      {/* Floating Particles Following Mouse */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full transition-all duration-500 ease-out ${
            isHovering ? 'opacity-80' : 'opacity-0'
          }`}
          style={{
            left: mousePosition.x + Math.cos(i * 45 * Math.PI / 180) * (60 + i * 10),
            top: mousePosition.y + Math.sin(i * 45 * Math.PI / 180) * (60 + i * 10),
            backgroundColor: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--fintech-blue))',
            animationDelay: `${i * 0.1}s`,
            transform: `scale(${isHovering ? 1 : 0}) rotate(${i * 45}deg)`,
          }}
        />
      ))}

      {/* Ripple Effect */}
      <div
        className={`absolute rounded-full border-2 transition-all duration-700 ease-out pointer-events-none ${
          isHovering ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: 100,
          height: 100,
          borderColor: 'hsl(var(--primary) / 0.6)',
          transform: `scale(${isHovering ? 2 : 0.5})`,
        }}
      />

      {/* Mouse Trail */}
      <div
        className={`absolute w-1 h-1 rounded-full transition-all duration-200 ease-out pointer-events-none ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          backgroundColor: 'hsl(var(--primary))',
          boxShadow: '0 0 20px hsl(var(--primary) / 0.8)',
          transform: `scale(${isHovering ? 3 : 1})`,
        }}
      />

      {/* Interactive Grid Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <radialGradient id="mouseGradient" cx="50%" cy="50%" r="20%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {isHovering && (
          <>
            <line
              x1="0"
              y1={mousePosition.y}
              x2="100%"
              y2={mousePosition.y}
              stroke="hsl(var(--primary) / 0.3)"
              strokeWidth="1"
              className="animate-pulse"
            />
            <line
              x1={mousePosition.x}
              y1="0"
              x2={mousePosition.x}
              y2="100%"
              stroke="hsl(var(--primary) / 0.3)"
              strokeWidth="1"
              className="animate-pulse"
            />
          </>
        )}
      </svg>

      {children}
    </div>
  );
};