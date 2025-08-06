import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHeader
        title="Terms and Conditions"
        subtitle="Keys Pay Terms of Service"
        description="Terms and conditions for using Keys Pay services"
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
                These Terms and Conditions ("Terms") govern the use of the Keys Pay wallet, card services, virtual IBAN, and associated applications and features. By using Keys Pay, you ("User" or "You") agree to these Terms, our Privacy Policy, and any additional terms provided for specific services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Eligibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You must be at least 18 years old to open an individual account as a parent or guardian, OR 9–18 years old with consent and active supervision of a parent/guardian. Parental approval and ID verification are required for all accounts held by minors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Account Setup & Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All users must undergo KYC (Know Your Customer) procedures before activating services. You agree to provide accurate, complete, and updated registration information. Keys Pay reserves the right to suspend or terminate accounts that are incomplete, fraudulent, or misused.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Card Issuance & Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cards are issued by licensed financial institutions in cooperation with Keys Pay. Virtual and physical cards are to be used for personal, non-commercial use only. Lost or stolen cards must be reported immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Parental Control for Minors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For users under 18, all transactions are subject to real-time parental control. Parents can approve, block, limit, or freeze child accounts at any time. Keys Pay will not be held liable for unauthorized transactions if parent controls are disabled or bypassed.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Crypto and Fiat Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Keys Pay enables conversion between fiat currencies (AED, USD, etc.) and cryptocurrencies (e.g. $KEYES, USDT, SOL). Exchange rates are subject to market volatility and may include a service margin. You acknowledge that cryptocurrency values can fluctuate, and you accept all associated risks. We are not financial advisors. Crypto investments are your sole responsibility.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Virtual IBAN</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Users with verified identity and compliance clearance may be issued a Virtual IBAN. Virtual IBAN services are subject to applicable anti-money laundering (AML) and counter-terrorism financing (CTF) laws. IBAN functionality may be restricted in jurisdictions with crypto limitations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Fees & Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Card plans (Silver, Gold, Platinum) are subject to one-time or renewal fees as described on the platform. Additional fees may apply for international transactions, withdrawals, and specific services. All fees will be disclosed in advance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. User Conduct</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use the platform for illegal activities (money laundering, fraud, terror financing, etc.);</li>
                <li>Attempt to access accounts that are not yours;</li>
                <li>Interfere with platform operations or reverse-engineer any part of our software.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Data Privacy & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We collect personal data in accordance with our Privacy Policy. User data is encrypted and stored securely. We implement KYC, transaction monitoring, and fraud detection tools. We may share data with regulators or banking partners as required by law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate any account that violates these Terms or applicable laws. Users may also terminate their account at any time, subject to settlement of outstanding balances.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All disputes shall be handled under the laws of the United Arab Emirates (or your licensing jurisdiction). First-level resolution will be attempted through customer support. If unresolved, disputes may be escalated to competent courts or financial arbitration bodies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may amend these Terms at any time. Users will be notified of major changes via email or in-app notification. Continued use after changes constitutes agreement to the updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>14. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns, contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p><strong>Email:</strong> support@aikeys.ai</p>
                <p><strong>Address:</strong> Dubai, United Arab Emirates</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}