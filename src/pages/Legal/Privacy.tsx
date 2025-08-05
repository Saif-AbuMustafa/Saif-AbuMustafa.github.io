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
        subtitle="Your Privacy Matters"
        description="Learn how AI KEYS protects and handles your personal information"
        background={heroBackground}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal information (name, email address, phone number)</li>
                <li>Financial information for KYC compliance</li>
                <li>Transaction data and wallet information</li>
                <li>Device and usage information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Process transactions and provide customer service</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Prevent fraud and enhance security</li>
                <li>Communicate with you about our services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. All sensitive data 
                is encrypted and stored securely.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p><strong>Email:</strong> info@aikeys.ai</p>
                <p><strong>Address:</strong> B312 NASER AHMED SAEED MOHAMED ALAWADHI -UAE- License Number 1104443</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}