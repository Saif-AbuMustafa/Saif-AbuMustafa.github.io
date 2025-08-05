import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet, 
  Plane, 
  Truck, 
  GraduationCap, 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe,
  Smartphone
} from 'lucide-react';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Wallet,
      key: 'wallet',
      color: 'fintech-blue',
      features: ['Crypto & Fiat Storage', 'AI Automation', 'Multi-Chain Support', 'DeFi Integration'],
      comingSoon: false
    },
    {
      icon: Plane,
      key: 'travel',
      color: 'fintech-cyan',
      features: ['AI Trip Planning', 'Integrated Payments', 'Real-time Booking', 'Expense Tracking'],
      comingSoon: true
    },
    {
      icon: Truck,
      key: 'logistics',
      color: 'fintech-purple',
      features: ['Smart Routing', 'Payment Automation', 'Real-time Tracking', 'Supply Chain AI'],
      comingSoon: true
    },
    {
      icon: GraduationCap,
      key: 'education',
      color: 'fintech-gold',
      features: ['AI Learning Assistant', 'Admission Support', 'Financial Aid', 'Study Abroad'],
      comingSoon: true
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-fintech-blue text-fintech-blue">
              Our Ecosystem
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">{t('services.title')}</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('services.subtitle')}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered financial solutions designed for the modern digital economy
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={service.key}
                className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden"
              >
                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 z-10 bg-fintech-gold/20 text-fintech-gold border-fintech-gold/30"
                  >
                    Coming Soon
                  </Badge>
                )}

                {/* Card Content */}
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}>
                      <service.icon className={`h-8 w-8 text-${service.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {t(`services.${service.key}.title`)}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">
                        {t(`services.${service.key}.description`)}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className={`w-2 h-2 rounded-full bg-${service.color}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant={service.comingSoon ? "outline" : "default"}
                    className={`w-full group/btn ${
                      service.comingSoon 
                        ? 'border-border hover:bg-accent/50' 
                        : 'bg-gradient-primary hover:opacity-90 text-white border-0'
                    }`}
                    disabled={service.comingSoon}
                  >
                    {service.comingSoon ? 'Notify Me' : 'Learn More'}
                    {!service.comingSoon && (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </CardContent>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </Card>
            ))}
          </div>

          {/* Integration Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-border/50 bg-card/30 backdrop-blur-sm">
              <Shield className="h-12 w-12 mx-auto mb-4 text-fintech-blue" />
              <h3 className="font-semibold mb-2">Bank-Grade Security</h3>
              <p className="text-sm text-muted-foreground">Enterprise-level security with multi-factor authentication</p>
            </Card>

            <Card className="text-center p-6 border-border/50 bg-card/30 backdrop-blur-sm">
              <Zap className="h-12 w-12 mx-auto mb-4 text-fintech-cyan" />
              <h3 className="font-semibold mb-2">AI-Powered Automation</h3>
              <p className="text-sm text-muted-foreground">Smart algorithms that learn and adapt to your preferences</p>
            </Card>

            <Card className="text-center p-6 border-border/50 bg-card/30 backdrop-blur-sm">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-fintech-purple" />
              <h3 className="font-semibold mb-2">Seamless Integration</h3>
              <p className="text-sm text-muted-foreground">One platform for all your financial and lifestyle needs</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};