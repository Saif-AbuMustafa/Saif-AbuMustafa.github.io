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

      {/* Soft lighting highlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: `
            radial-gradient(800px 400px at 20% 10%, hsl(var(--ak-blue) / 0.10) 0%, transparent 60%),
            radial-gradient(600px 300px at 80% 0%, hsl(var(--ak-blue) / 0.06) 0%, transparent 60%)
          `
        }}
      />
    </div>
  );
};
