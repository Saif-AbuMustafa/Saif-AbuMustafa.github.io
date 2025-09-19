import React, { useEffect, useState, useCallback } from 'react';

interface OptimizedCursorProps {
  disabled?: boolean;
}

export const OptimizedCursor: React.FC<OptimizedCursorProps> = ({ disabled = false }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Throttled mouse tracking with RAF
  const updateMousePosition = useCallback((e: MouseEvent) => {
    if (disabled) return;
    
    requestAnimationFrame(() => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      setIsMoving(true);
    });
  }, [disabled]);

  // Debounced movement detection
  useEffect(() => {
    if (!isMoving) return;
    
    const timeout = setTimeout(() => {
      setIsMoving(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [mousePosition, isMoving]);

  // Interactive element detection
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target && (
      target.matches('button, a, [role="button"], input, textarea, select') ||
      target.closest('button, a, [role="button"], input, textarea, select')
    )) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    if (disabled) return;

    // Respect user preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [disabled, updateMousePosition, handleMouseOver]);

  // Don't render if disabled or user prefers reduced motion
  if (disabled) return null;
  
  const prefersReducedMotion = typeof window !== 'undefined' ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
  
  if (prefersReducedMotion) return null;

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        transition: isMoving ? 'none' : 'transform 0.1s ease-out'
      }}
    >
      {/* Main cursor dot */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
          isHovering ? 'w-8 h-8 bg-ak-blue' : 'w-2 h-2 bg-ak-blue'
        }`}
        style={{
          boxShadow: isHovering ? '0 0 20px hsl(var(--ak-blue) / 0.6)' : 'none'
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-ak-blue/40 transition-all duration-500 ${
          isHovering ? 'w-16 h-16 border-ak-blue/60' : 'w-8 h-8'
        }`}
      />
      
      {/* Trailing effect */}
      {isMoving && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-ak-blue/30 rounded-full animate-ping"
        />
      )}
    </div>
  );
};