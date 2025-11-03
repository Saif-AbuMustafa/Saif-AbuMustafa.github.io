import { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Solutions } from '@/components/sections/Solutions';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Security } from '@/components/sections/Security';
import { FAQ } from '@/components/FAQ';
import { WaitlistCTA } from '@/components/sections/WaitlistCTA';
import { WaitlistStats } from '@/components/WaitlistStats';
import { Navigation } from '@/components/layout/Navigation';
import { scrollAnimations } from '@/utils/scrollAnimations';

export default function Home() {
  useEffect(() => {
    // Initialize premium scroll animations
    scrollAnimations.initScrollReveal({
      threshold: 0.15,
      staggerDelay: 150,
    });
    scrollAnimations.registerParallax();

    return () => {
      scrollAnimations.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div data-animate="section">
        <HeroSection />
      </div>
      <div data-animate="section" data-delay="200">
        <WaitlistStats />
      </div>
      <div data-animate="section">
        <Solutions />
      </div>
      <div data-animate="section">
        <HowItWorks />
      </div>
      <div data-animate="section">
        <Security />
      </div>
      <div data-animate="section">
        <FAQ />
      </div>
      <div data-animate="section">
        <WaitlistCTA />
      </div>
    </div>
  );
}
