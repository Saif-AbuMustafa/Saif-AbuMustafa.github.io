import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
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
import heroBackground from '@/assets/hero-bg.jpg';

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
      title: 'AI Keys Custodian Wallet',
      description: 'Secure crypto and fiat storage with AI-powered automation',
      href: '/wallet',
      color: 'fintech-blue'
    },
    {
      icon: Plane,
      title: 'AI Keys Travel Planner',
      description: 'AI-based travel planning with integrated payments',
      href: '/travel',
      color: 'fintech-cyan'
    },
    {
      icon: Truck,
      title: 'AI Keys Logistics',
      description: 'Smart logistics solutions with automated payments',
      href: '/logistics',
      color: 'fintech-purple'
    },
    {
      icon: GraduationCap,
      title: 'AI Keys Student Services',
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-fintech-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-fintech-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="text-center mb-16">
              {/* Badge */}
              <Badge 
                variant="outline" 
                className="mb-6 border-fintech-blue text-fintech-blue bg-fintech-blue/5 backdrop-blur-sm animate-fade-in"
              >
                Fintech Solutions • Solana Blockchain • Dubai, UAE
              </Badge>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 animate-slide-up">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Revolutionary AI-Powered
                </span>
                <br />
                <span className="text-foreground">
                  Fintech Solutions
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
                Empowering the future of finance with AI-driven custodian wallet, travel planning, logistics, and student services. 
                Built on Solana blockchain with full VARA compliance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white border-0 group min-w-[250px] h-14 text-lg"
                  asChild
                >
                  <Link to="/services">
                    Explore Our Ecosystem
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border hover:bg-accent/50 backdrop-blur-sm min-w-[250px] h-14 text-lg group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              {stats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <stat.icon className="h-10 w-10 mx-auto mb-4 text-fintech-blue group-hover:scale-110 transition-transform" />
                    <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                      <AnimatedCounter 
                        end={stat.value} 
                        prefix={stat.prefix} 
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-fintech-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fintech-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-fintech-blue text-fintech-blue">
                Our Ecosystem
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Comprehensive</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Financial Solutions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four interconnected platforms powered by AI to revolutionize how you manage finance, travel, logistics, and education
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-xl bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}>
                        <service.icon className={`h-8 w-8 text-${service.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-6">{service.description}</p>
                        <Button asChild variant="outline" className="group/btn">
                          <Link to={service.href}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild className="bg-gradient-primary text-white">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">AI KEYS</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built on cutting-edge technology with enterprise-grade security and regulatory compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/30 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-12 w-12 mx-auto mb-6 text-fintech-blue group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-3 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              Ready to Transform Your
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Financial Future?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
              Join thousands of users who trust AI KEYS for their financial, travel, logistics, and educational needs.
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
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}