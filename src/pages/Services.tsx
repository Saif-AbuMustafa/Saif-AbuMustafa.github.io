
import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import { ModernSection, ModernContainer, ModernGrid } from '@/components/ui/ModernSection';
import { ModernCard, ModernCardContent } from '@/components/ui/ModernCard';
import { InteractiveSection } from '@/components/ui/InteractiveSection';
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
import premiumHeroBg from '@/assets/premium-hero-bg.jpg';
import { cn } from '@/lib/utils';

export default function Services() {
  const services = [
    {
      icon: Wallet,
      title: 'Keys Custodian Wallet',
      description: 'Secure crypto and fiat storage with AI-powered automation and seamless transactions',
      href: '/wallet',
      color: 'ak-blue',
      features: ['Multi-Chain Support', 'AI Automation', 'DeFi Integration', 'Instant Swaps'],
      comingSoon: false,
      highlight: 'Live Now'
    },
    {
      icon: Plane,
      title: 'Keys Travel Planner',
      description: 'AI-based travel planning with integrated payments and personalized recommendations',
      href: '/travel',
      color: 'ak-blue',
      features: ['AI Trip Planning', 'Integrated Payments', 'Real-time Booking', 'Expense Tracking'],
      comingSoon: false,
      highlight: 'Live Now'
    },
    {
      icon: Truck,
      title: 'Keys Logistics',
      description: 'Smart logistics solutions with automated payments and tracking systems',
      href: '/logistics',
      color: 'ak-blue',
      features: ['Smart Routing', 'Payment Automation', 'Real-time Tracking', 'Supply Chain AI'],
      comingSoon: true,
      highlight: 'Coming Soon'
    },
    {
      icon: GraduationCap,
      title: 'Keys Student Services',
      description: 'AI learning assistance and admission support with integrated financial services',
      href: '/education',
      color: 'ak-blue',
      features: ['AI Learning Assistant', 'Admission Support', 'Financial Aid', 'Study Abroad'],
      comingSoon: true,
      highlight: 'Coming Soon'
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
      <InteractiveSection background="gradient" className="py-20">
        <BackgroundAnimations variant="hero" />
        <ModernContainer>
          <div className="text-center max-w-6xl mx-auto py-20">
            {/* Badge */}
            <Badge 
              variant="outline" 
              className="mb-8 border-ak-blue/30 text-ak-blue bg-ak-blue/5 backdrop-blur-sm animate-fade-in px-6 py-2 text-sm font-medium"
            >
              Four Core Services • AI-Powered • VARA Compliant
            </Badge>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-slide-up tracking-tight">
              <span className="text-ak-text">Our Comprehensive</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Financial Ecosystem
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-ak-muted max-w-4xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Four interconnected platforms powered by AI to revolutionize how you manage finance, travel, logistics, and education. Built on Solana blockchain with full VARA compliance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="xl" variant="premium" asChild>
                <a href="https://keys-pay.com">
                  <Wallet className="mr-2 h-5 w-5" />
                  Launch Wallet
                </a>
              </Button>
              <Button size="xl" variant="glass" asChild>
                <Link to="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* Services Grid */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <ModernGrid cols={2} gap="xl">
            {services.map((service, index) => (
              <ModernCard 
                key={index}
                variant="premium" 
                hover="lift"
                className="group relative overflow-hidden"
              >
                {/* Status Badge */}
                <Badge 
                  variant={service.comingSoon ? "secondary" : "default"}
                  className={`absolute top-6 right-6 z-10 ${
                    service.comingSoon 
                      ? 'bg-ak-beige-300/50 text-ak-muted border-ak-beige-300' 
                      : 'bg-green-500/20 text-green-600 border-green-500/30'
                  }`}
                >
                  {service.highlight}
                </Badge>

                <ModernCardContent className="p-10">
                  <div className="flex items-start space-x-6 mb-8">
                     <div className="p-4 rounded-xl bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors">
                       <service.icon className="h-10 w-10 text-ak-blue group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-ak-text">{service.title}</h3>
                      <p className="text-ak-muted text-lg leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                         <div className="w-2 h-2 rounded-full bg-ak-blue" />
                        <span className="text-ak-muted font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    asChild
                    variant={service.comingSoon ? "outline" : "premium"}
                    className="w-full group/btn"
                    disabled={service.comingSoon}
                  >
                    <Link to={service.href}>
                      {service.comingSoon ? 'Coming Soon' : 'Explore Service'}
                      {!service.comingSoon && (
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                    </Link>
                  </Button>
                </ModernCardContent>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </ModernSection>

      {/* Platform Integrations */}
      <InteractiveSection background="mesh" className="py-20 lg:py-32">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
              Platform <span className="bg-gradient-primary bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
              Powerful features that work seamlessly across all our services
            </p>
          </div>

          <ModernGrid cols={3} gap="lg">
            {integrations.map((integration, index) => (
              <ModernCard key={index} variant="glass" hover="lift" className="text-center p-8 group">
                <integration.icon className="h-16 w-16 mx-auto mb-8 text-ak-blue group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-4 text-xl text-ak-text">{integration.title}</h3>
                <p className="text-ak-muted leading-relaxed">{integration.description}</p>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </InteractiveSection>

      {/* Use Cases */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
              Perfect for <span className="bg-gradient-primary bg-clip-text text-transparent">Every User</span>
            </h2>
            <p className="text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
              Tailored solutions for different user types and needs
            </p>
          </div>

          <ModernGrid cols={2} gap="xl">
            {useCases.map((useCase, index) => (
              <ModernCard key={index} variant="premium" hover="lift" className="p-10 group">
                <div className="flex items-start space-x-6">
                   <div className="p-4 rounded-xl bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors">
                     <Users className="h-10 w-10 text-ak-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-ak-text">{useCase.title}</h3>
                    <p className="text-ak-muted mb-6 text-lg leading-relaxed">{useCase.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-ak-blue" />
                          <span className="text-ak-muted font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </ModernSection>

      {/* CTA Section */}
      <InteractiveSection background="gradient" className="py-20 lg:py-32" interactive={true}>
        <BackgroundAnimations variant="hero" />
        <ModernContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in tracking-tight">
              Ready to Experience the
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Future of Finance?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-ak-muted mb-16 max-w-3xl mx-auto animate-slide-up leading-relaxed">
              Start with our Keys Wallet and unlock access to the entire ecosystem of services.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in">
              <Button size="xl" variant="premium" asChild>
                <a href="https://keys-pay.com">
                  <Wallet className="mr-2 h-5 w-5" />
                  Launch Wallet
                </a>
              </Button>
              <Button size="xl" variant="glass" asChild>
                <Link to="/contact">
                  <Clock className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </ModernContainer>
      </InteractiveSection>
    </div>
  );
}
