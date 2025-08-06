import React, { useEffect, useState } from 'react';

interface MouseFollowerProps {
  children?: React.ReactNode;
}

export const MouseFollower: React.FC<MouseFollowerProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = e.currentTarget as HTMLElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const container = document.querySelector('.mouse-follow-container');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove as EventListener);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove as EventListener);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {/* Large Cursor Glow */}
      <div
        className={`absolute w-96 h-96 rounded-full transition-all duration-500 ease-out pointer-events-none ${
          isHovering ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, hsl(var(--fintech-blue) / 0.3) 30%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `scale(${isHovering ? 1.2 : 0.8})`,
        }}
      />

      {/* Floating Particles Around Cursor */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 rounded-full transition-all duration-700 ease-out ${
            isHovering ? 'opacity-80' : 'opacity-0'
          }`}
          style={{
            left: mousePosition.x + Math.cos(i * 60 * Math.PI / 180) * 80,
            top: mousePosition.y + Math.sin(i * 60 * Math.PI / 180) * 80,
            backgroundColor: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--fintech-blue))',
            transform: `scale(${isHovering ? 1 : 0}) rotate(${i * 60}deg)`,
            boxShadow: '0 0 10px currentColor',
          }}
        />
      ))}

      {/* Expanding Ripple */}
      <div
        className={`absolute rounded-full border-2 transition-all duration-1000 ease-out pointer-events-none ${
          isHovering ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
          width: 150,
          height: 150,
          borderColor: 'hsl(var(--primary))',
          transform: `scale(${isHovering ? 1.5 : 0.3})`,
        }}
      />

      {/* Center Dot */}
      <div
        className={`absolute w-2 h-2 rounded-full transition-all duration-300 ease-out pointer-events-none ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          backgroundColor: 'hsl(var(--primary))',
          boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)',
          transform: `scale(${isHovering ? 2 : 1})`,
        }}
      />

      {/* Cross Hair Lines */}
      {isHovering && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="0"
            y1={mousePosition.y}
            x2="100%"
            y2={mousePosition.y}
            stroke="hsl(var(--primary) / 0.4)"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
          <line
            x1={mousePosition.x}
            y1="0"
            x2={mousePosition.x}
            y2="100%"
            stroke="hsl(var(--primary) / 0.4)"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </svg>
      )}

      {children}
    </div>
  );
};