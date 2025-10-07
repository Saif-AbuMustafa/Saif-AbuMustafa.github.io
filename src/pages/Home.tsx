import { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Solutions } from '@/components/sections/Solutions';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Security } from '@/components/sections/Security';
import { FAQ } from '@/components/FAQ';
import { WaitlistCTA } from '@/components/sections/WaitlistCTA';

export default function Home() {
  useEffect(() => {
    // Scroll animation trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Solutions />
      <HowItWorks />
      <Security />
      <FAQ />
      <WaitlistCTA />
    </div>
  );
}
