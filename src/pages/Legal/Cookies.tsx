import { Navigation } from "@/components/layout/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Cookie Policy"
        subtitle="Keys Pay Cookie Policy"
        description="How we use cookies and similar technologies"
      />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This Cookie Policy explains how Keys Pay ("we," "us," or "our") uses cookies and similar technologies when you visit our website, use our mobile applications, or interact with our services. This policy explains what these technologies are, why we use them, and your rights to control their use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-muted-foreground">
                We also use similar technologies such as web beacons, pixels, and local storage to enhance your experience and analyze usage patterns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and user authentication. The website cannot function properly without these cookies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Performance & Analytics Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Functionality Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies allow the website to remember choices you make (such as language preferences) and provide enhanced, more personal features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Security Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies help us detect and prevent fraud, secure user sessions, and protect against unauthorized access to accounts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To authenticate users and prevent fraudulent use of user accounts</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze site traffic and optimize our website performance</li>
                <li>To provide personalized content and features</li>
                <li>To detect and prevent security threats and abuse</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We may use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Analytics providers (Google Analytics, etc.)</li>
                <li>Security services for fraud prevention</li>
                <li>Customer support tools</li>
                <li>Payment processing partners</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                These third parties have their own privacy policies and cookie policies that govern their use of your information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Cookie Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Browser Settings</h4>
                  <p className="text-muted-foreground">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Opt-Out Tools</h4>
                  <p className="text-muted-foreground">
                    For analytics cookies, you can opt out through:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Google Analytics Opt-out Browser Add-on</li>
                    <li>Network Advertising Initiative opt-out page</li>
                    <li>Digital Advertising Alliance opt-out page</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mobile App Settings</h4>
                  <p className="text-muted-foreground">
                    You can control data collection in our mobile apps through your device settings and our app's privacy settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookie Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Session Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies are temporary and are deleted when you close your browser.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Persistent Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies remain on your device for a specified period or until you delete them. They typically expire after 1-24 months.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of material changes through our website or app notifications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 <span className="font-medium">Email:</span> support@aikeys.ai</p>
                <p>📍 <span className="font-medium">Address:</span> Dubai, United Arab Emirates</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}