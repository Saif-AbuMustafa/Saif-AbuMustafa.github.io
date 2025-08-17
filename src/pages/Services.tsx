import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
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
  Smartphone,
  CreditCard,
  Brain,
  BarChart3,
  Users,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Services() {
  const services = [
    {
      icon: Wallet,
      title: 'AI Keys Custodian Wallet',
      description: 'Secure crypto and fiat storage with AI-powered automation and seamless transactions',
      href: '/wallet',
      color: 'fintech-blue',
      features: ['Multi-Chain Support', 'AI Automation', 'DeFi Integration', 'Instant Swaps'],
      comingSoon: false,
      highlight: 'Live Now'
    },
    {
      icon: Plane,
      title: 'AI Keys Travel Planner',
      description: 'AI-based travel planning with integrated payments and personalized recommendations',
      href: '/travel',
      color: 'fintech-cyan',
      features: ['AI Trip Planning', 'Integrated Payments', 'Real-time Booking', 'Expense Tracking'],
      comingSoon: true,
      highlight: 'Q2 2024'
    },
    {
      icon: Truck,
      title: 'AI Keys Logistics',
      description: 'Smart logistics solutions with automated payments and tracking systems',
      href: '/logistics',
      color: 'fintech-purple',
      features: ['Smart Routing', 'Payment Automation', 'Real-time Tracking', 'Supply Chain AI'],
      comingSoon: true,
      highlight: 'Q3 2024'
    },
    {
      icon: GraduationCap,
      title: 'AI Keys Student Services',
      description: 'AI learning assistance and admission support with integrated financial services',
      href: '/education',
      color: 'fintech-gold',
      features: ['AI Learning Assistant', 'Admission Support', 'Financial Aid', 'Study Abroad'],
      comingSoon: true,
      highlight: 'Q4 2024'
    }
  ];

  const integrations = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Enterprise-level security with multi-factor authentication and cold storage'
    },
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Smart algorithms that learn and adapt to your preferences and behaviors'
    },
    {
      icon: Smartphone,
      title: 'Seamless Integration',
      description: 'One platform for all your financial, travel, logistics, and educational needs'
    },
    {
      icon: CreditCard,
      title: 'Payment Solutions',
      description: 'Integrated Visa, MasterCard, and AMEX support for global transactions'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced AI models for predictive analytics and personalized experiences'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards and insights for informed decision making'
    }
  ];

  const useCases = [
    {
      title: 'Digital Nomads',
      description: 'Complete financial ecosystem for location-independent professionals',
      features: ['Global payments', 'Travel planning', 'Crypto management', 'Tax optimization']
    },
    {
      title: 'Students',
      description: 'Educational support with integrated financial management',
      features: ['Study abroad funding', 'AI tutoring', 'Scholarship finder', 'Budget tracking']
    },
    {
      title: 'Businesses',
      description: 'Enterprise solutions for modern companies',
      features: ['Supply chain finance', 'Employee payments', 'Crypto treasury', 'Global expansion']
    },
    {
      title: 'Investors',
      description: 'Professional-grade tools for crypto and traditional investing',
      features: ['Portfolio management', 'DeFi yields', 'Risk analysis', 'Tax reporting']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader
        title="Our Comprehensive"
        subtitle="Financial Ecosystem"
        description="Four interconnected platforms powered by AI to revolutionize how you manage finance, travel, logistics, and education. Built on Solana blockchain with full VARA compliance."
        badge="Four Core Services • AI-Powered • VARA Compliant"
        background={heroBackground}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-gradient-primary text-white">
            <a href="https://aikeys-hub.com">
              <Wallet className="mr-2 h-5 w-5" />
              Launch Wallet
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden"
                >
                  {/* Status Badge */}
                  <Badge 
                    variant={service.comingSoon ? "secondary" : "default"}
                    className={`absolute top-6 right-6 z-10 ${
                      service.comingSoon 
                        ? 'bg-fintech-gold/20 text-fintech-gold border-fintech-gold/30' 
                        : 'bg-green-500/20 text-green-500 border-green-500/30'
                    }`}
                  >
                    {service.highlight}
                  </Badge>

                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`p-4 rounded-xl bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}>
                        <service.icon className={`h-10 w-10 text-${service.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
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
                      asChild
                      variant={service.comingSoon ? "outline" : "default"}
                      className={`w-full group/btn ${
                        service.comingSoon 
                          ? 'border-border hover:bg-accent/50' 
                          : 'bg-gradient-primary hover:opacity-90 text-white border-0'
                      }`}
                      disabled={service.comingSoon}
                    >
                      <Link to={service.href}>
                        {service.comingSoon ? 'Coming Soon' : 'Explore Service'}
                        {!service.comingSoon && (
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        )}
                      </Link>
                    </Button>
                  </CardContent>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Platform <span className="bg-gradient-primary bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Powerful features that work seamlessly across all our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/30 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <integration.icon className="h-12 w-12 mx-auto mb-6 text-fintech-blue group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-3 text-lg">{integration.title}</h3>
                  <p className="text-muted-foreground">{integration.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Perfect for <span className="bg-gradient-primary bg-clip-text text-transparent">Every User</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored solutions for different user types and needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-fintech-blue/10 group-hover:bg-fintech-blue/20 transition-colors">
                      <Users className="h-8 w-8 text-fintech-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-fintech-blue" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden mouse-follow-container">
        <CTABackground />
        <MouseFollower />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ready to Experience the
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Future of Finance?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
              Start with our AI Keys Wallet and unlock access to the entire ecosystem of services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button size="lg" asChild className="bg-gradient-primary text-white h-14 px-8">
                <a href="https://aikeys-hub.com">
                  <Wallet className="mr-2 h-5 w-5" />
                  Launch Wallet
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8">
                <Link to="/contact">
                  <Clock className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}