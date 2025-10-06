import { Hero } from '@/components/sections/Hero';
import { Solutions } from '@/components/sections/Solutions';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Security } from '@/components/sections/Security';
import { ComplianceFAQ } from '@/components/sections/ComplianceFAQ';
import { WaitlistCTA } from '@/components/sections/WaitlistCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Solutions />
      <HowItWorks />
      <Security />
      <ComplianceFAQ />
      <WaitlistCTA />
    </div>
  );
}
