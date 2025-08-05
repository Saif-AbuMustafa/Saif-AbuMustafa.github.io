import { useState, useEffect } from 'react';

interface ParticleProps {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface ParticleFieldProps {
  particleCount?: number;
  className?: string;
  color?: string;
}

export const ParticleField = ({ 
  particleCount = 50, 
  className = '',
  color = 'rgba(59, 130, 246, 0.3)' 
}: ParticleFieldProps) => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: ParticleProps[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      
      setParticles(newParticles);
    };

    if (dimensions.width > 0 && dimensions.height > 0) {
      createParticles();
    }
  }, [dimensions, particleCount]);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
          x: particle.x > dimensions.width ? 0 : particle.x < 0 ? dimensions.width : particle.x,
          y: particle.y > dimensions.height ? 0 : particle.y < 0 ? dimensions.height : particle.y
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [dimensions]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" className="absolute inset-0">
        {particles.map(particle => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={color}
            opacity={particle.opacity}
          />
        ))}
      </svg>
    </div>
  );
};