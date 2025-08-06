import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet, 
  CreditCard,
  Shield,
  Smartphone,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Globe
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export default function WalletDocs() {
  const features = [
    {
      title: 'Multi-Currency Support',
      description: 'Support for AED, USD, EUR and 15+ cryptocurrencies including $KEYES token',
      icon: Globe
    },
    {
      title: 'Instant Transactions',
      description: 'Lightning-fast transfers with real-time settlement and confirmation',
      icon: ArrowRight
    },
    {
      title: 'Bank-Grade Security',
      description: 'Multi-signature wallets, biometric authentication, and cold storage',
      icon: Shield
    },
    {
      title: 'Virtual & Physical Cards',
      description: 'Instant virtual cards and premium physical cards with global acceptance',
      icon: CreditCard
    }
  ];

  const specifications = [
    { label: 'Supported Currencies', value: '20+ Fiat & Crypto' },
    { label: 'Transaction Speed', value: '< 3 seconds' },
    { label: 'Daily Limits', value: 'Up to $100,000' },
    { label: 'Card Acceptance', value: 'Worldwide Visa/Mastercard' },
    { label: 'Security Level', value: 'Bank-Grade Encryption' },
    { label: 'Mobile App', value: 'iOS & Android' }
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="AI KEYS"
        subtitle="Wallet"
        description="Next-generation digital wallet combining traditional banking with crypto innovation. Seamlessly manage fiat and digital assets in one secure platform."
        badge="Multi-Currency • VARA Compliant • Global Cards"
        background={heroBackground}
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Smartphone className="mr-2 h-5 w-5" />
            Download App
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Wallet className="mr-2 h-5 w-5" />
            View Demo
          </Button>
        </div>
      </PageHeader>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Wallet <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the future of digital finance with our comprehensive wallet solution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <feature.icon className="h-12 w-12 mb-4 text-fintech-blue" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>

            {/* Specifications */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium">{spec.label}</span>
                      <Badge variant="outline">{spec.value}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="relative py-20 overflow-hidden">
        <CTABackground />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Join thousands of users who trust AI KEYS Wallet for their financial needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-gradient-primary text-white">
                <DollarSign className="mr-2 h-5 w-5" />
                Open Wallet Account
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}