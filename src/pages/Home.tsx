import { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Solutions } from '@/components/sections/Solutions';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Security } from '@/components/sections/Security';
import { FAQ } from '@/components/FAQ';
import { WaitlistCTA } from '@/components/sections/WaitlistCTA';
import { WaitlistStats } from '@/components/WaitlistStats';
import { Navigation } from '@/components/layout/Navigation';

export default function Home() {
  useEffect(() => {
    // Initialize IntersectionObserver for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all fade-up elements
    document.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <WaitlistStats />
      <Solutions />
      <HowItWorks />
      <Security />
      <FAQ />
      <WaitlistCTA />
    </div>
  );
}
