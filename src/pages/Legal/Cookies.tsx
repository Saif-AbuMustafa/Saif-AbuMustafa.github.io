import { PageHeader } from "@/components/layout/PageHeader";
import { ModernSection, ModernContainer } from '@/components/ui/ModernSection';
import { ModernCard } from '@/components/ui/ModernCard';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Cookie Policy"
        subtitle="Keys Pay Cookie Policy"
        description="How we use cookies and similar technologies"
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
                This Cookie Policy explains how Keys Pay ("we," "us," or "our") uses cookies and similar technologies when you visit our website, use our mobile applications, or interact with our services. This policy explains what these technologies are, why we use them, and your rights to control their use.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">2. What Are Cookies?</h3>
              <p className="text-ak-muted leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-ak-muted leading-relaxed">
                We also use similar technologies such as web beacons, pixels, and local storage to enhance your experience and analyze usage patterns.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">3. Types of Cookies We Use</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Essential Cookies</h4>
                  <p className="text-ak-muted leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and user authentication. The website cannot function properly without these cookies.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Performance & Analytics Cookies</h4>
                  <p className="text-ak-muted leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Functionality Cookies</h4>
                  <p className="text-ak-muted leading-relaxed">
                    These cookies allow the website to remember choices you make (such as language preferences) and provide enhanced, more personal features.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Security Cookies</h4>
                  <p className="text-ak-muted leading-relaxed">
                    These cookies help us detect and prevent fraud, secure user sessions, and protect against unauthorized access to accounts.
                  </p>
                </div>
              </div>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">4. How We Use Cookies</h3>
              <ul className="list-disc list-inside space-y-2 text-ak-muted">
                <li>To authenticate users and prevent fraudulent use of user accounts</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze site traffic and optimize our website performance</li>
                <li>To provide personalized content and features</li>
                <li>To detect and prevent security threats and abuse</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">5. Third-Party Cookies</h3>
              <p className="text-ak-muted leading-relaxed mb-4">
                We may use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-ak-muted">
                <li>Analytics providers (Google Analytics, etc.)</li>
                <li>Security services for fraud prevention</li>
                <li>Customer support tools</li>
                <li>Payment processing partners</li>
              </ul>
              <p className="text-ak-muted leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie policies that govern their use of your information.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">6. Your Cookie Choices</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Browser Settings</h4>
                  <p className="text-ak-muted leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Opt-Out Tools</h4>
                  <p className="text-ak-muted leading-relaxed mb-3">
                    For analytics cookies, you can opt out through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-ak-muted">
                    <li>Google Analytics Opt-out Browser Add-on</li>
                    <li>Network Advertising Initiative opt-out page</li>
                    <li>Digital Advertising Alliance opt-out page</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Mobile App Settings</h4>
                  <p className="text-ak-muted leading-relaxed">
                    You can control data collection in our mobile apps through your device settings and our app's privacy settings.
                  </p>
                </div>
              </div>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">7. Cookie Retention</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Session Cookies</h4>
                  <p className="text-ak-muted leading-relaxed">
                    These cookies are temporary and are deleted when you close your browser.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-ak-text">Persistent Cookies</h4>
                  <p className="text-ak-muted leading-relaxed">
                    These cookies remain on your device for a specified period or until you delete them. They typically expire after 1-24 months.
                  </p>
                </div>
              </div>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">8. Updates to This Policy</h3>
              <p className="text-ak-muted leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of material changes through our website or app notifications.
              </p>
            </ModernCard>

            <ModernCard variant="glass" hover="lift" className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ak-text">9. Contact Information</h3>
              <p className="text-ak-muted leading-relaxed mb-4">
                If you have questions about this Cookie Policy, please contact us:
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
