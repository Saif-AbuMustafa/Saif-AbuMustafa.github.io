import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHeader
        title="Privacy Policy"
        subtitle="Keys Pay Privacy Policy"
        description="How Keys Pay collects, uses, stores, and protects your personal information"
        background={heroBackground}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This Privacy Policy outlines how Keys Pay collects, uses, stores, and protects your personal information when you use our platform, including our website, mobile applications, virtual IBAN services, and payment cards. By using Keys Pay, you agree to the terms of this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Personal Identification Information:</strong> Name, date of birth, ID/passport, nationality, address, phone number, email.</li>
                <li><strong>Financial Information:</strong> Bank account details, card numbers, IBAN, crypto wallet addresses.</li>
                <li><strong>Usage Information:</strong> Login activity, transactions, location data, device identifiers.</li>
                <li><strong>Parental Control Information:</strong> Linked guardian/parent details for minors.</li>
                <li><strong>Communications:</strong> Customer support interactions, chat messages, and emails.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To verify identity and comply with KYC/AML requirements.</li>
                <li>To process fiat and crypto transactions securely.</li>
                <li>To issue and manage virtual IBANs and payment cards.</li>
                <li>To monitor usage for fraud prevention and service improvements.</li>
                <li>To enable parental controls for users under 18.</li>
                <li>To provide customer support and communicate important updates.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Sharing of Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We do <strong>not sell your personal information</strong>.
              </p>
              <p className="text-muted-foreground mb-4">We may share data with:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Licensed banks and payment providers for card and IBAN services.</li>
                <li>Regulatory bodies (UAE Central Bank, VARA, etc.) if required by law.</li>
                <li>Compliance partners for fraud prevention and transaction monitoring.</li>
                <li>Legal authorities if ordered by court or in the case of suspicious activity.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Data Protection & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Data is encrypted in transit and at rest.</li>
                <li>Multi-factor authentication is used to protect your account.</li>
                <li>Strict access control policies ensure only authorized staff handle sensitive data.</li>
                <li>We regularly test and monitor systems for security threats.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. User Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access your data.</li>
                <li>Correct or update incorrect data.</li>
                <li>Request deletion of your account and associated personal data (subject to compliance obligations).</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Parents or guardians can access, modify, or deactivate child accounts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We retain personal data for as long as necessary to provide our services and comply with legal, tax, and regulatory obligations. Inactive accounts may be archived or deleted after a certain period, except where legally restricted.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Keys Pay allows minors (ages 9–18) to use the platform with <strong>explicit parental consent</strong>. All minor accounts must be linked to a verified parent or guardian. We do not knowingly collect information from minors without such consent.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your data may be stored or processed on servers outside your country, including in jurisdictions with different data protection laws. We ensure appropriate safeguards are in place, such as data encryption and contractual clauses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Material changes will be communicated via email or in-app notifications. Continued use of Keys Pay constitutes acceptance of the revised policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p><strong>📧 Email:</strong> support@aikeys.ai</p>
                <p><strong>📍 Address:</strong> Dubai, United Arab Emirates</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}