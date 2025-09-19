import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { ModernCard, ModernCardContent } from '@/components/ui/ModernCard';
import { ModernSection, ModernContainer, ModernGrid } from '@/components/ui/ModernSection';
import { ModernHero } from '@/components/ui/ModernHero';
import { InteractiveSection } from '@/components/ui/InteractiveSection';
import { TextOverlay } from '@/components/ui/TextOverlay';
import { 
  ArrowRight, 
  Play, 
  Users, 
  TrendingUp, 
  Globe, 
  Shield,
  Wallet,
  Plane,
  Truck,
  GraduationCap,
  Zap,
  Brain,
  Lock,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import premiumHeroBg from '@/assets/premium-hero-bg.jpg';
import premiumSectionBg from '@/assets/premium-section-bg.jpg';

export default function Home() {
  const stats = [
    { icon: Users, value: 50000, suffix: '+', label: 'Active Users' },
    { icon: TrendingUp, value: 2.5, suffix: 'M+', prefix: '$', label: 'Transactions' },
    { icon: Globe, value: 45, suffix: '+', label: 'Countries' },
    { icon: Shield, value: 99.9, suffix: '%', label: 'Uptime', decimals: 1 }
  ];

  const services = [
    {
      icon: Wallet,
      title: 'Keys Custodian Wallet',
      description: 'Secure crypto and fiat storage with AI-powered automation',
      href: '/wallet',
      color: 'fintech-blue'
    },
    {
      icon: Plane,
      title: 'Keys Travel Planner',
      description: 'AI-based travel planning with integrated payments',
      href: '/travel',
      color: 'fintech-cyan'
    },
    {
      icon: Truck,
      title: 'Keys Logistics',
      description: 'Smart logistics solutions with automated payments',
      href: '/logistics',
      color: 'fintech-purple'
    },
    {
      icon: GraduationCap,
      title: 'Keys Student Services',
      description: 'AI learning assistance and educational support',
      href: '/education',
      color: 'fintech-gold'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Advanced machine learning algorithms automate your financial tasks'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security with multi-layer protection protocols'
    },
    {
      icon: CheckCircle,
      title: 'DIFC',
      description: 'Aligned with DIFCs innovation and financial regulations'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built on Solana blockchain for instant transactions'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ModernHero
        title="Revolutionary AI-Powered"
        subtitle="Fintech Solutions"
        description="Empowering the future of finance with AI-driven custodian wallet, travel planning, logistics, and student services. Built on Solana blockchain with full VARA compliance."
        badge="Fintech Solutions • Solana Blockchain • Dubai, UAE"
        background={premiumHeroBg}
        backgroundVariant="gradient"
      >
        <BackgroundAnimations variant="hero" />
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Button 
            size="xl" 
            variant="premium"
            className="min-w-[280px] group"
            asChild
          >
            <Link to="/services">
              Explore Our Ecosystem
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            variant="glass" 
            size="xl" 
            className="min-w-[280px] group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Stats Section inside Hero */}
        <ModernGrid cols={4} gap="lg" className="mt-16">
          {stats.map((stat, index) => (
            <ModernCard key={index} variant="glass" hover="lift" className="text-center p-8">
              <stat.icon className="h-12 w-12 mx-auto mb-6 text-fintech-blue group-hover:scale-125 transition-all duration-500" />
              <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-primary bg-clip-text text-transparent">
                <AnimatedCounter 
                  end={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </ModernCard>
          ))}
        </ModernGrid>
      </ModernHero>

      {/* Services Preview */}
      <InteractiveSection
        background="mesh"
        interactive={true}
        className="py-20 lg:py-32"
      >
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <TextOverlay variant="glass" position="center" className="mb-20">
            <Badge variant="outline" className="mb-6 border-ak-blue text-ak-blue bg-ak-blue/5 px-6 py-2 text-sm font-medium">
              Our Ecosystem
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              <span className="text-ak-text">Comprehensive</span>
              <br />
              <span className="bg-gradient-to-r from-ak-blue to-ak-blue/70 bg-clip-text text-transparent">
                Financial Solutions
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-ak-text/70 max-w-4xl mx-auto leading-relaxed">
              Four interconnected platforms powered by AI to revolutionize how you manage finance, travel, logistics, and education
            </p>
          </TextOverlay>

          <ModernGrid cols={2} gap="xl" className="mb-20">
            {services.map((service, index) => (
              <ModernCard 
                key={index}
                variant="premium" 
                hover="lift"
                className="group relative overflow-hidden"
              >
                <ModernCardContent className="p-10">
                  <div className="flex items-start space-x-8">
                    <div className={cn(
                      "p-5 rounded-2xl transition-all duration-500 group-hover:scale-110 bg-ak-blue/10 group-hover:bg-ak-blue/20"
                    )}>
                      <service.icon className="h-10 w-10 transition-all duration-500 text-ak-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-ak-text">{service.title}</h3>
                      <p className="text-lg text-ak-text/70 mb-8 leading-relaxed">{service.description}</p>
                      <Button asChild size="lg" className="group/btn bg-ak-blue hover:bg-ak-blue/90 text-white">
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ModernCardContent>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-ak-blue/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </ModernCard>
            ))}
          </ModernGrid>

          <div className="text-center">
            <Button size="xl" variant="premium" asChild className="group bg-ak-blue hover:bg-ak-blue/90 text-white">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* Features */}
      <InteractiveSection
        background="particles"
        className="py-20 lg:py-32 bg-accent/5"
      >
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <TextOverlay variant="medium" position="center" className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
              Why Choose <span className="bg-gradient-to-r from-ak-blue to-ak-blue/70 bg-clip-text text-transparent">AI KEYS</span>
            </h2>
            <p className="text-xl md:text-2xl text-ak-text/70 max-w-4xl mx-auto leading-relaxed">
              Built on cutting-edge technology with enterprise-grade security and regulatory compliance
            </p>
          </TextOverlay>

          <ModernGrid cols={4} gap="xl">
            {features.map((feature, index) => (
              <ModernCard key={index} variant="glass" hover="lift" className="text-center p-10 group">
                <feature.icon className="h-16 w-16 mx-auto mb-8 text-ak-blue group-hover:scale-125 transition-all duration-500" />
                <h3 className="font-bold mb-4 text-xl text-ak-text">{feature.title}</h3>
                <p className="text-ak-text/70 leading-relaxed">{feature.description}</p>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </InteractiveSection>

      {/* CTA Section */}
      <InteractiveSection
        background="gradient"
        interactive={true}
        className="py-20 lg:py-32"
      >
        <div className="relative z-10 container mx-auto px-4">
          <TextOverlay variant="strong" position="center">
            <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in tracking-tight">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-ak-blue to-ak-blue/70 bg-clip-text text-transparent">
                Financial Future?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-ak-text/80 mb-16 max-w-3xl mx-auto animate-slide-up leading-relaxed">
              Join thousands of users who trust AI KEYS for their financial, travel, logistics, and educational needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in">
              <Button size="xl" variant="premium" asChild className="group bg-ak-blue hover:bg-ak-blue/90 text-white">
                <a href="https://keys-pay.com">
                  <Wallet className="mr-2 h-6 w-6" />
                  Launch Wallet
                </a>
              </Button>
              <Button size="xl" variant="glass" asChild className="group border-ak-blue text-ak-blue hover:bg-ak-blue/10">
                <Link to="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </TextOverlay>
        </div>
      </InteractiveSection>
    </div>
  );
}
