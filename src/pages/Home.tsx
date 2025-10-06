import { HeroSection } from '@/components/sections/HeroSection';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { SecurityCompliance } from '@/components/sections/SecurityCompliance';
import { GlobalReach } from '@/components/sections/GlobalReach';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ComplianceFAQ } from '@/components/sections/ComplianceFAQ';
import { WaitlistCTA } from '@/components/sections/WaitlistCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsGrid />
      <SecurityCompliance />
      <GlobalReach />
      <HowItWorks />
      <ComplianceFAQ />
      <WaitlistCTA />
    </div>
  );
}
