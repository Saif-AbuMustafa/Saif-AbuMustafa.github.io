import React from 'react';

interface BackgroundAnimationsProps {
  variant?: 'subtle' | 'hero' | 'section';
  className?: string;
}

// Unified minimal background: this component is now a no-op to prevent duplicate overlays.
// Pages still rendering <BackgroundAnimations /> will no longer add extra layers.
export const BackgroundAnimations: React.FC<BackgroundAnimationsProps> = () => {
  return null;
};

// CSS keyframes remain defined in index.css for future use if needed.
