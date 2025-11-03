import React from 'react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Minimal global background to match homepage */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, hsl(var(--ak-white)) 0%, hsl(var(--ak-white)) 65%, hsl(var(--ak-beige-50)) 100%)
          `
        }}
      />

      {/* Soft lighting highlight with parallax */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        data-parallax="0.05"
        style={{
          background: `
            radial-gradient(800px 400px at 20% 10%, hsl(var(--ak-blue) / 0.10) 0%, transparent 60%),
            radial-gradient(600px 300px at 80% 0%, hsl(var(--ak-blue) / 0.06) 0%, transparent 60%)
          `
        }}
      />
      
      {/* Additional depth layer - moves slower */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        data-parallax="0.02"
        style={{
          background: `
            radial-gradient(1000px 500px at 50% 50%, hsl(var(--ak-blue) / 0.08) 0%, transparent 70%)
          `
        }}
      />
    </div>
  );
};
