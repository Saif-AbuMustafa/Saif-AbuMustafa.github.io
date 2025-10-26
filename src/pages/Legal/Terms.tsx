import { PageHeader } from '@/components/layout/PageHeader';
import { ModernSection, ModernContainer } from '@/components/ui/ModernSection';
import { ModernCard } from '@/components/ui/ModernCard';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Terms and Conditions"
        subtitle="Keys Pay Terms of Service"
        description="Terms and conditions for using Keys Pay services"
        background={heroBackground}
        showBackButton
      />

      <ModernSection padding="xl">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer size="lg">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">1. Introduction</h3>
              <p className="text-ak-muted leading-relaxed">
                These Terms and Conditions ("Terms") govern the use of the Keys Pay wallet, card services, virtual IBAN, and associated applications and features. By using Keys Pay, you ("User" or "You") agree to these Terms, our Privacy Policy, and any additional terms provided for specific services.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">2. Eligibility</h3>
              <p className="text-ak-muted leading-relaxed">
                You must be at least 18 years old to open an individual account as a parent or guardian, OR 9–18 years old with consent and active supervision of a parent/guardian. Parental approval and ID verification are required for all accounts held by minors.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">3. Account Setup & Use</h3>
              <p className="text-ak-muted leading-relaxed">
                All users must undergo KYC (Know Your Customer) procedures before activating services. You agree to provide accurate, complete, and updated registration information. Keys Pay reserves the right to suspend or terminate accounts that are incomplete, fraudulent, or misused.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">4. Card Issuance & Use</h3>
              <p className="text-ak-muted leading-relaxed">
                Cards are issued by licensed financial institutions in cooperation with Keys Pay. Virtual and physical cards are to be used for personal, non-commercial use only. Lost or stolen cards must be reported immediately.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">5. Parental Control for Minors</h3>
              <p className="text-ak-muted leading-relaxed">
                For users under 18, all transactions are subject to real-time parental control. Parents can approve, block, limit, or freeze child accounts at any time. Keys Pay will not be held liable for unauthorized transactions if parent controls are disabled or bypassed.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">6. Crypto and Fiat Transactions</h3>
              <p className="text-ak-muted leading-relaxed">
                Keys Pay enables conversion between fiat currencies (AED, USD, etc.) and cryptocurrencies (e.g. $KEYES, USDT, SOL). Exchange rates are subject to market volatility and may include a service margin. You acknowledge that cryptocurrency values can fluctuate, and you accept all associated risks. We are not financial advisors. Crypto investments are your sole responsibility.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">7. Virtual IBAN</h3>
              <p className="text-ak-muted leading-relaxed">
                Users with verified identity and compliance clearance may be issued a Virtual IBAN. Virtual IBAN services are subject to applicable anti-money laundering (AML) and counter-terrorism financing (CTF) laws. IBAN functionality may be restricted in jurisdictions with crypto limitations.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">8. Fees & Payments</h3>
              <p className="text-ak-muted leading-relaxed">
                Card plans (Silver, Gold, Platinum) are subject to one-time or renewal fees as described on the platform. Additional fees may apply for international transactions, withdrawals, and specific services. All fees will be disclosed in advance.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">9. User Conduct</h3>
              <p className="text-ak-muted leading-relaxed mb-4">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 text-ak-muted">
                <li>Use the platform for illegal activities (money laundering, fraud, terror financing, etc.);</li>
                <li>Attempt to access accounts that are not yours;</li>
                <li>Interfere with platform operations or reverse-engineer any part of our software.</li>
              </ul>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">10. Data Privacy & Security</h3>
              <p className="text-ak-muted leading-relaxed">
                We collect personal data in accordance with our Privacy Policy. User data is encrypted and stored securely. We implement KYC, transaction monitoring, and fraud detection tools. We may share data with regulators or banking partners as required by law.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">11. Termination</h3>
              <p className="text-ak-muted leading-relaxed">
                We reserve the right to suspend or terminate any account that violates these Terms or applicable laws. Users may also terminate their account at any time, subject to settlement of outstanding balances.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">12. Dispute Resolution</h3>
              <p className="text-ak-muted leading-relaxed">
                All disputes shall be handled under the laws of the United Arab Emirates (or your licensing jurisdiction). First-level resolution will be attempted through customer support. If unresolved, disputes may be escalated to competent courts or financial arbitration bodies.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">13. Changes to Terms</h3>
              <p className="text-ak-muted leading-relaxed">
                We may amend these Terms at any time. Users will be notified of major changes via email or in-app notification. Continued use after changes constitutes agreement to the updated terms.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">14. Contact Information</h3>
              <p className="text-ak-muted leading-relaxed mb-4">
                If you have questions or concerns, contact us at:
              </p>
              <div className="mt-6 p-6 bg-ak-beige-300/30 rounded-xl border border-ak-beige-300">
                <p className="text-ak-text mb-2"><strong>Email:</strong> support@aikeys.ai</p>
                <p className="text-ak-text"><strong>Address:</strong> Dubai, United Arab Emirates</p>
              </div>
            </ModernCard>
          </div>
        </ModernContainer>
      </ModernSection>
    </div>
  );
}
