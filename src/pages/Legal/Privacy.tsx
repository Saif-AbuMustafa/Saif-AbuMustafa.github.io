import { PageHeader } from '@/components/layout/PageHeader';
import { ModernSection, ModernContainer } from '@/components/ui/ModernSection';
import { ModernCard } from '@/components/ui/ModernCard';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Privacy Policy"
        subtitle="Keys Pay Privacy Policy"
        description="How Keys Pay collects, uses, stores, and protects your personal information"
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
                This Privacy Policy outlines how Keys Pay collects, uses, stores, and protects your personal information when you use our platform, including our website, mobile applications, virtual IBAN services, and payment cards. By using Keys Pay, you agree to the terms of this Privacy Policy.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">2. Information We Collect</h3>
              <ul className="list-disc list-inside space-y-2 text-ak-muted">
                <li><strong>Personal Identification Information:</strong> Name, date of birth, ID/passport, nationality, address, phone number, email.</li>
                <li><strong>Financial Information:</strong> Bank account details, card numbers, IBAN, crypto wallet addresses.</li>
                <li><strong>Usage Information:</strong> Login activity, transactions, location data, device identifiers.</li>
                <li><strong>Parental Control Information:</strong> Linked guardian/parent details for minors.</li>
                <li><strong>Communications:</strong> Customer support interactions, chat messages, and emails.</li>
              </ul>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">3. How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-2 text-ak-muted">
                <li>To verify identity and comply with KYC/AML requirements.</li>
                <li>To process fiat and crypto transactions securely.</li>
                <li>To issue and manage virtual IBANs and payment cards.</li>
                <li>To monitor usage for fraud prevention and service improvements.</li>
                <li>To enable parental controls for users under 18.</li>
                <li>To provide customer support and communicate important updates.</li>
              </ul>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">4. Sharing of Information</h3>
              <p className="text-ak-muted leading-relaxed mb-4">
                We do <strong>not sell your personal information</strong>.
              </p>
              <p className="text-ak-muted leading-relaxed mb-4">We may share data with:</p>
              <ul className="list-disc list-inside space-y-2 text-ak-muted">
                <li>Licensed banks and payment providers for card and IBAN services.</li>
                <li>Regulatory bodies (UAE Central Bank, VARA, etc.) if required by law.</li>
                <li>Compliance partners for fraud prevention and transaction monitoring.</li>
                <li>Legal authorities if ordered by court or in the case of suspicious activity.</li>
              </ul>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">5. Data Protection & Security</h3>
              <ul className="list-disc list-inside space-y-2 text-ak-muted">
                <li>Data is encrypted in transit and at rest.</li>
                <li>Multi-factor authentication is used to protect your account.</li>
                <li>Strict access control policies ensure only authorized staff handle sensitive data.</li>
                <li>We regularly test and monitor systems for security threats.</li>
              </ul>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">6. User Rights</h3>
              <p className="text-ak-muted leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-ak-muted">
                <li>Access your data.</li>
                <li>Correct or update incorrect data.</li>
                <li>Request deletion of your account and associated personal data (subject to compliance obligations).</li>
              </ul>
              <p className="text-ak-muted leading-relaxed mt-4">
                Parents or guardians can access, modify, or deactivate child accounts.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">7. Data Retention</h3>
              <p className="text-ak-muted leading-relaxed">
                We retain personal data for as long as necessary to provide our services and comply with legal, tax, and regulatory obligations. Inactive accounts may be archived or deleted after a certain period, except where legally restricted.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">8. Children's Privacy</h3>
              <p className="text-ak-muted leading-relaxed">
                Keys Pay allows minors (ages 9–18) to use the platform with <strong>explicit parental consent</strong>. All minor accounts must be linked to a verified parent or guardian. We do not knowingly collect information from minors without such consent.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">9. International Data Transfers</h3>
              <p className="text-ak-muted leading-relaxed">
                Your data may be stored or processed on servers outside your country, including in jurisdictions with different data protection laws. We ensure appropriate safeguards are in place, such as data encryption and contractual clauses.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">10. Changes to This Policy</h3>
              <p className="text-ak-muted leading-relaxed">
                We may update this Privacy Policy from time to time. Material changes will be communicated via email or in-app notifications. Continued use of Keys Pay constitutes acceptance of the revised policy.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">11. Contact Information</h3>
              <p className="text-ak-muted leading-relaxed mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-6 p-6 bg-ak-beige-300/30 rounded-xl border border-ak-beige-300">
                <p className="text-ak-text mb-2"><strong>📧 Email:</strong> support@aikeys.ai</p>
                <p className="text-ak-text"><strong>📍 Address:</strong> Dubai, United Arab Emirates</p>
              </div>
            </ModernCard>
          </div>
        </ModernContainer>
      </ModernSection>
    </div>
  );
}
