import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  Package,
  MapPin,
  Clock,
  Brain,
  ArrowRight,
  Globe,
  Shield,
  BarChart3,
  Zap,
  Users,
  Building,
  Plane,
  Ship,
  Factory,
  Warehouse,
  Route,
  CreditCard,
  Smartphone,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Logistics() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Route Optimization',
      description: 'Advanced algorithms optimize delivery routes in real-time for maximum efficiency',
      benefits: ['Reduced fuel costs', 'Faster deliveries', 'Lower emissions', 'Dynamic rerouting']
    },
    {
      icon: CreditCard,
      title: 'Automated Payment Systems',
      description: 'Smart contracts and automated payments streamline financial transactions',
      benefits: ['Instant settlements', 'Multi-currency support', 'Smart contracts', 'Fraud protection']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Comprehensive tracking and analytics for complete supply chain visibility',
      benefits: ['Live tracking', 'Performance metrics', 'Predictive analytics', 'Custom reports']
    },
    {
      icon: Shield,
      title: 'Secure Supply Chain',
      description: 'Blockchain-based security ensures transparency and prevents fraud',
      benefits: ['Immutable records', 'Chain of custody', 'Anti-counterfeiting', 'Compliance tracking']
    }
  ];

  const services = [
    {
      icon: Truck,
      title: 'Ground Transportation',
      description: 'Efficient road freight solutions with AI-optimized routing',
      color: 'fintech-blue'
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast air cargo services for time-sensitive shipments',
      color: 'fintech-cyan'
    },
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight for large volume shipments',
      color: 'fintech-purple'
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      description: 'Smart warehouse management with automated systems',
      color: 'fintech-gold'
    },
    {
      icon: Package,
      title: 'Last Mile Delivery',
      description: 'AI-optimized final delivery to end customers',
      color: 'fintech-blue'
    },
    {
      icon: Factory,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and control',
      color: 'fintech-cyan'
    }
  ];

  const technologies = [
    {
      title: 'Machine Learning',
      description: 'Predictive analytics for demand forecasting and inventory optimization',
      icon: Brain,
      applications: ['Demand prediction', 'Inventory optimization', 'Quality control', 'Risk assessment']
    },
    {
      title: 'IoT Integration',
      description: 'Connected sensors for real-time monitoring and data collection',
      icon: Smartphone,
      applications: ['Temperature monitoring', 'Location tracking', 'Condition alerts', 'Asset management']
    },
    {
      title: 'Blockchain Security',
      description: 'Immutable records and smart contracts for transparent operations',
      icon: Shield,
      applications: ['Supply chain transparency', 'Smart contracts', 'Payment automation', 'Compliance verification']
    },
    {
      title: 'Route Optimization',
      description: 'AI algorithms that continuously optimize delivery routes and schedules',
      icon: Route,
      applications: ['Dynamic routing', 'Traffic optimization', 'Fuel efficiency', 'Delivery scheduling']
    }
  ];

  const industries = [
    {
      title: 'E-commerce',
      description: 'Fulfillment solutions for online retailers with same-day delivery options',
      icon: Building,
      metrics: { efficiency: '40%', cost: '25%', speed: '60%' }
    },
    {
      title: 'Manufacturing',
      description: 'Just-in-time delivery and raw material supply chain management',
      icon: Factory,
      metrics: { efficiency: '35%', cost: '30%', speed: '45%' }
    },
    {
      title: 'Healthcare',
      description: 'Temperature-controlled logistics for pharmaceuticals and medical supplies',
      icon: Shield,
      metrics: { efficiency: '50%', cost: '20%', speed: '70%' }
    },
    {
      title: 'Retail',
      description: 'Multi-channel distribution and inventory management solutions',
      icon: Users,
      metrics: { efficiency: '45%', cost: '35%', speed: '55%' }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      value: '30%',
      description: 'Average reduction in logistics costs through AI optimization'
    },
    {
      icon: Clock,
      title: 'Faster Delivery',
      value: '50%',
      description: 'Improvement in delivery times with smart routing'
    },
    {
      icon: BarChart3,
      title: 'Efficiency Gain',
      value: '40%',
      description: 'Increase in operational efficiency through automation'
    },
    {
      icon: Shield,
      title: 'Reduced Errors',
      value: '90%',
      description: 'Decrease in shipping errors with AI verification'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader
        title="Keys Logistics"
        subtitle=""
        description="Revolutionary smart logistics solutions powered by AI and blockchain technology. Optimize your supply chain with automated payments, real-time tracking, and intelligent route optimization."
        badge="Coming Q3 2024 • AI-Powered • Blockchain Secured"
        background={heroBackground}
        showBackButton
        backTo="/services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Package className="mr-2 h-5 w-5" />
            Request Demo
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <BarChart3 className="mr-2 h-5 w-5" />
            View Case Studies
          </Button>
        </div>
      </PageHeader>

      {/* Core Features */}
      <InteractiveSection background="gradient" className="py-20 lg:py-32">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
                Revolutionary <span className="bg-gradient-primary bg-clip-text text-transparent">Smart Features</span>
              </h2>
              <p className="text-xl text-ak-muted max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                AI-powered logistics solutions that transform your supply chain operations
              </p>
            </div>
            <ModernGrid cols={2} gap="xl">
              {features.map((feature, index) => (
                <ModernCard key={index} variant="premium" hover="lift" className="p-10 group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="p-4 rounded-xl bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors">
                      <feature.icon className="h-10 w-10 text-ak-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-ak-text">{feature.title}</h3>
                      <p className="text-ak-muted text-lg leading-relaxed mb-6">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-ak-blue" />
                        <span className="text-ak-muted font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </ModernCard>
              ))}
            </ModernGrid>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* Key Benefits */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
                Measurable <span className="bg-gradient-primary bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Real performance improvements our clients experience with AI KEYS Logistics
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/30 backdrop-blur-sm group hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.7}s` }}>
                  <benefit.icon className="h-12 w-12 mx-auto mb-6 text-fintech-purple group-hover:scale-125 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1 + 0.8}s` }} />
                  <div className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent animate-enter" style={{ animationDelay: `${index * 0.1 + 0.9}s` }}>
                    {benefit.value}
                  </div>
                  <h3 className="font-semibold mb-3 text-white animate-slide-in-right" style={{ animationDelay: `${index * 0.1 + 1}s` }}>{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1 + 1.1}s` }}>{benefit.description}</p>
                </Card>
              ))}
            </ModernGrid>
          </div>
        </ModernContainer>
      </ModernSection>

      {/* Logistics Services */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white animate-enter">
                Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.3s' }}>Logistics Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                End-to-end logistics solutions covering every aspect of your supply chain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/30 backdrop-blur-sm group hover:shadow-lg transition-all duration-300 relative overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.7}s` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`p-4 rounded-xl bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors mx-auto w-fit mb-6 group-hover:scale-110`}>
                      <service.icon className={`h-8 w-8 text-${service.color} transition-transform`} />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg text-white animate-slide-in-right" style={{ animationDelay: `${index * 0.1 + 0.8}s` }}>{service.title}</h3>
                    <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.9}s` }}>{service.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white animate-enter">
                Advanced <span className="bg-gradient-primary bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.3s' }}>Technology Stack</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Cutting-edge technologies that power our intelligent logistics platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.7}s` }}>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-fintech-gold/10 group-hover:bg-fintech-gold/20 transition-colors group-hover:scale-110">
                      <tech.icon className="h-8 w-8 text-fintech-gold transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white animate-slide-in-right" style={{ animationDelay: `${index * 0.2 + 0.8}s` }}>{tech.title}</h3>
                      <p className="text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.9}s` }}>{tech.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {tech.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white animate-enter">
                Industry <span className="bg-gradient-primary bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.3s' }}>Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Tailored logistics solutions for different industries and business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.7}s` }}>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-fintech-blue/10 group-hover:bg-fintech-blue/20 transition-colors group-hover:scale-110">
                      <industry.icon className="h-8 w-8 text-fintech-blue transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white animate-slide-in-right" style={{ animationDelay: `${index * 0.2 + 0.8}s` }}>{industry.title}</h3>
                      <p className="text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.9}s` }}>{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fintech-blue mb-1">+{industry.metrics.efficiency}</div>
                      <div className="text-xs text-muted-foreground">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fintech-cyan mb-1">-{industry.metrics.cost}</div>
                      <div className="text-xs text-muted-foreground">Cost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fintech-purple mb-1">+{industry.metrics.speed}</div>
                      <div className="text-xs text-muted-foreground">Speed</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Ecosystem */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Globe className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white animate-enter">
              Integrated with
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.3s' }}>
                AI KEYS Ecosystem
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Seamlessly connects with AI KEYS Wallet for automated payments and financial management, 
              providing a complete business solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <Button size="lg" asChild className="bg-gradient-primary text-white hover-scale story-link">
                <Link to="/wallet">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Explore Payments
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover-scale story-link">
                <Package className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Revolutionize
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Supply Chain?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join forward-thinking companies already using AI KEYS Logistics to optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
                <Truck className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}