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
        title="Terms of Service"
        subtitle="Service Agreement"
        description="Terms and conditions for using AI KEYS services"
        background={heroBackground}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using AI KEYS services, you accept and agree to be bound by the terms 
                and provision of this agreement. These terms apply to all users of the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                AI KEYS provides AI-powered fintech solutions including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Custodian wallet services for crypto and fiat currencies</li>
                <li>AI-powered travel planning and booking</li>
                <li>Smart logistics solutions</li>
                <li>Educational services and support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Users are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Maintaining the confidentiality of account information</li>
                <li>Providing accurate and up-to-date information</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Using the service in accordance with these terms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI KEYS shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, contact us at:
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