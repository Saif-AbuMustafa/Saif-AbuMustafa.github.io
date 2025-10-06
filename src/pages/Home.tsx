import { HeroSection } from '@/components/sections/HeroSection';
import { SecurityTrust } from '@/components/sections/SecurityTrust';
import { GlobalPlatform } from '@/components/sections/GlobalPlatform';
import { Solutions } from '@/components/sections/Solutions';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ComplianceFAQ } from '@/components/sections/ComplianceFAQ';
import { WaitlistCTA } from '@/components/sections/WaitlistCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SecurityTrust />
      <GlobalPlatform />
      <Solutions />
      <HowItWorks />
      <ComplianceFAQ />
      <WaitlistCTA />
    </div>
  );
}
