import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import { ModernSection, ModernContainer, ModernGrid } from '@/components/ui/ModernSection';
import { ModernCard, ModernCardContent } from '@/components/ui/ModernCard';
import { InteractiveSection } from '@/components/ui/InteractiveSection';
import { 
  Plane, 
  MapPin, 
  Calendar,
  CreditCard,
  Brain,
  ArrowRight,
  Globe,
  Camera,
  Compass,
  Shield,
  Clock,
  Users,
  Star,
  Map,
  Luggage,
  Hotel,
  Car,
  Utensils,
  Ticket,
  Smartphone,
  Wallet,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Travel() {
  const features = [
    {
      icon: Brain,
      title: 'AI Trip Planning',
      description: 'Our AI analyzes your preferences, budget, and travel history to create perfect itineraries',
      benefits: ['Personalized recommendations', 'Budget optimization', 'Real-time adjustments', 'Local insights']
    },
    {
      icon: CreditCard,
      title: 'Integrated Payments',
      description: 'Seamless payment system supporting crypto and fiat currencies worldwide',
      benefits: ['Multi-currency support', 'Best exchange rates', 'Instant settlements', 'Low fees']
    },
    {
      icon: Shield,
      title: 'Travel Protection',
      description: 'Comprehensive travel insurance and emergency support services',
      benefits: ['24/7 emergency support', 'Medical coverage', 'Trip cancellation', 'Lost luggage protection']
    },
    {
      icon: Smartphone,
      title: 'Mobile Experience',
      description: 'Complete travel companion app with offline capabilities',
      benefits: ['Offline maps', 'Real-time updates', 'Digital wallet', 'Emergency contacts']
    }
  ];

  const services = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'AI-powered flight search with best price guarantees',
      color: 'fintech-blue'
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Smart hotel recommendations based on your preferences',
      color: 'fintech-cyan'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Car rentals, transfers, and local transport solutions',
      color: 'fintech-purple'
    },
    {
      icon: Utensils,
      title: 'Dining',
      description: 'Restaurant recommendations and reservation management',
      color: 'fintech-gold'
    },
    {
      icon: Ticket,
      title: 'Activities',
      description: 'Tours, attractions, and experience bookings',
      color: 'fintech-blue'
    },
    {
      icon: Map,
      title: 'Itinerary Planning',
      description: 'Day-by-day travel plans optimized by AI',
      color: 'fintech-cyan'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Smart Recommendations',
      description: 'AI learns from your travel patterns to suggest perfect destinations and experiences',
      icon: Brain
    },
    {
      title: 'Dynamic Pricing',
      description: 'Real-time price monitoring and alerts for the best deals on flights and hotels',
      icon: TrendingUp
    },
    {
      title: 'Risk Assessment',
      description: 'AI-powered travel risk analysis including weather, safety, and health factors',
      icon: Shield
    },
    {
      title: 'Language Support',
      description: 'Real-time translation and local communication assistance powered by AI',
      icon: Globe
    }
  ];

  const useCases = [
    {
      title: 'Business Travel',
      description: 'Streamlined corporate travel management with expense tracking and compliance',
      features: ['Expense automation', 'Policy compliance', 'Preferred vendors', 'Reporting dashboard']
    },
    {
      title: 'Leisure Travel',
      description: 'Personalized vacation planning with family-friendly options and activities',
      features: ['Family packages', 'Activity planning', 'Local experiences', 'Photo sharing']
    },
    {
      title: 'Digital Nomads',
      description: 'Long-term travel solutions with co-working spaces and remote work support',
      features: ['Co-working access', 'Visa assistance', 'Long-term stays', 'Tax optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      quote: 'AI KEYS Travel planned our entire European business trip. The AI recommendations were spot-on!',
      rating: 5,
      destination: 'European Business Tour'
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'Entrepreneur',
      quote: 'The integrated payment system made traveling so much easier. No more currency exchange hassles.',
      rating: 5,
      destination: 'Southeast Asia Adventure'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader
        title="Keys Travel"
        subtitle=""
        description="Revolutionary AI-powered travel planning with integrated crypto payments. Plan, book, and experience your perfect journey with intelligent automation and seamless financial integration."
        badge="Live Now • AI-Powered • Global Coverage"
        background={heroBackground}
        showBackButton
        backTo="/services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-gradient-primary text-white h-14 px-8">
            <a href="https://keys-explorer.com/" target="_blank" rel="noopener noreferrer">
              <Plane className="mr-2 h-5 w-5" />
              Start Planning
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Camera className="mr-2 h-5 w-5" />
            View Demo
          </Button>
        </div>
      </PageHeader>

      {/* Core Features */}
      <InteractiveSection background="gradient" className="py-20 lg:py-32">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <ModernGrid cols={2} gap="xl">
            {features.map((feature, index) => (
              <ModernCard key={index} variant="premium" hover="lift" className="p-10 group">
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
        </ModernContainer>
      </InteractiveSection>

      {/* Travel Services */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white">
              Complete Travel <span className="bg-gradient-primary bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
              Everything you need for seamless travel planning and booking in one intelligent platform
            </p>
          </div>

          <ModernGrid cols={3} gap="lg">
            {services.map((service, index) => (
              <ModernCard key={index} variant="glass" hover="lift" className="text-center p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-ak-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="p-4 rounded-xl bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors mx-auto w-fit mb-8">
                    <service.icon className="h-10 w-10 text-ak-blue group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-bold mb-4 text-xl text-white">{service.title}</h3>
                  <p className="text-ak-muted leading-relaxed">{service.description}</p>
                </div>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </ModernSection>

      {/* AI Capabilities */}
      <InteractiveSection background="particles" className="py-20 lg:py-32">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
                Powered by <span className="bg-gradient-primary bg-clip-text text-transparent">Advanced AI</span>
              </h2>
              <p className="text-xl md:text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
                Our intelligent algorithms learn from millions of travel patterns to optimize your journey
              </p>
            </div>

            <ModernGrid cols={2} gap="xl">
              {aiCapabilities.map((capability, index) => (
                <ModernCard key={index} variant="glass" hover="lift" className="p-10 group">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-xl bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors">
                      <capability.icon className="h-10 w-10 text-ak-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-ak-text">{capability.title}</h3>
                      <p className="text-ak-muted text-lg leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </ModernCard>
              ))}
            </ModernGrid>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* Use Cases */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white">
                Perfect for <span className="bg-gradient-primary bg-clip-text text-transparent">Every Journey</span>
              </h2>
              <p className="text-xl md:text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
                Tailored solutions for different types of travelers and trip purposes
              </p>
            </div>

            <ModernGrid cols={3} gap="lg">
              {useCases.map((useCase, index) => (
                <ModernCard key={index} variant="premium" hover="lift" className="p-10 group text-center">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-ak-muted mb-8 text-lg leading-relaxed">{useCase.description}</p>
                  
                  <div className="space-y-4">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-ak-blue" />
                        <span className="text-ak-muted font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </ModernCard>
              ))}
            </ModernGrid>
          </div>
        </ModernContainer>
      </ModernSection>

      {/* Testimonials */}
      <InteractiveSection background="particles" className="py-20 lg:py-32">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
                Traveler <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
              </h2>
               <p className="text-xl md:text-2xl text-ak-muted max-w-3xl mx-auto leading-relaxed">
                What our users are saying about AI KEYS Travel
              </p>
            </div>

            <ModernGrid cols={2} gap="xl">
              {testimonials.map((testimonial, index) => (
                <ModernCard key={index} variant="glass" hover="lift" className="p-10 group">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-ak-muted mb-8 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-ak-text">{testimonial.name}</div>
                      <div className="text-ak-muted">{testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-ak-blue">{testimonial.destination}</div>
                    </div>
                  </div>
                </ModernCard>
              ))}
            </ModernGrid>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* Integration with Wallet */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="max-w-5xl mx-auto text-center">
            <div className="w-28 h-28 mx-auto mb-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Wallet className="h-14 w-14 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
              Seamlessly Integrated with
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI KEYS Wallet
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-ak-muted mb-16 max-w-4xl mx-auto leading-relaxed">
              Your travel expenses are automatically tracked and categorized in your AI KEYS Wallet, 
              with intelligent budgeting and expense optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button size="xl" variant="premium" asChild className="group">
                <Link to="/wallet">
                  <Wallet className="mr-2 h-5 w-5" />
                  Explore Wallet
                </Link>
              </Button>
              <Button size="xl" variant="glass" asChild className="group">
                <a href="https://keys-explorer.com/" target="_blank" rel="noopener noreferrer">
                  <Plane className="mr-2 h-5 w-5" />
                  Launch Travel App
                </a>
              </Button>
            </div>
          </div>
        </ModernContainer>
      </ModernSection>

      {/* CTA Section */}
      <InteractiveSection
        background="gradient"
        interactive={true}
        className="py-20 lg:py-32"
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-ak-text">
            Ready to Transform
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Travel Experience?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-ak-muted mb-16 max-w-4xl mx-auto leading-relaxed">
            Experience AI-powered travel planning with integrated crypto payments. Start planning your perfect journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button size="xl" variant="premium" asChild className="group">
              <a href="https://keys-explorer.com/" target="_blank" rel="noopener noreferrer">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Started Now
              </a>
            </Button>
            <Button size="xl" variant="glass" className="group">
              <Clock className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </InteractiveSection>

      <Footer />
    </div>
  );
}