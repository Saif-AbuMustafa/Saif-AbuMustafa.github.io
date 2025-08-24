import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
        badge="Coming Q2 2024 • AI-Powered • Global Coverage"
        background={heroBackground}
        showBackButton
        backTo="/services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Calendar className="mr-2 h-5 w-5" />
            Join Waitlist
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Camera className="mr-2 h-5 w-5" />
            View Demo
          </Button>
        </div>
      </PageHeader>

      {/* Core Features */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-fintech-cyan/10 group-hover:bg-fintech-cyan/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-fintech-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-fintech-cyan" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Services */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Travel <span className="bg-gradient-primary bg-clip-text text-transparent">Ecosystem</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for seamless travel planning and booking in one intelligent platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/30 backdrop-blur-sm group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`p-4 rounded-xl bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors mx-auto w-fit mb-6`}>
                      <service.icon className={`h-8 w-8 text-${service.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h3 className="font-semibold mb-3 text-lg">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powered by <span className="bg-gradient-primary bg-clip-text text-transparent">Advanced AI</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our intelligent algorithms learn from millions of travel patterns to optimize your journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiCapabilities.map((capability, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-fintech-purple/10 group-hover:bg-fintech-purple/20 transition-colors">
                      <capability.icon className="h-8 w-8 text-fintech-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Perfect for <span className="bg-gradient-primary bg-clip-text text-transparent">Every Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored solutions for different types of travelers and trip purposes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-fintech-cyan" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Traveler <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                What our beta users are saying about AI KEYS Travel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-fintech-cyan">{testimonial.destination}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Wallet */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Wallet className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Seamlessly Integrated with
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI KEYS Wallet
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Your travel expenses are automatically tracked and categorized in your AI KEYS Wallet, 
              with intelligent budgeting and expense optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary text-white">
                <Link to="/wallet">
                  <Wallet className="mr-2 h-5 w-5" />
                  Explore Wallet
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Join Travel Waitlist
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
              Ready to Transform
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Travel Experience?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Be among the first to experience AI-powered travel planning with integrated crypto payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
                <Users className="mr-2 h-5 w-5" />
                Join Waitlist
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}