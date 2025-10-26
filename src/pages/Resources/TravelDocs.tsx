
import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  Hotel,
  Car,
  MapPin,
  Clock,
  Shield,
  Star,
  Globe
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export default function TravelDocs() {
  const services = [
    {
      title: 'Flight Booking',
      description: 'Book flights worldwide with competitive prices and instant confirmation',
      icon: Plane,
      features: ['500+ Airlines', 'Best Price Guarantee', 'Instant Booking']
    },
    {
      title: 'Hotel Reservations',
      description: 'Premium accommodations from budget-friendly to luxury resorts',
      icon: Hotel,
      features: ['1M+ Properties', 'Verified Reviews', 'Flexible Cancellation']
    },
    {
      title: 'Car Rentals',
      description: 'Reliable transportation options in 180+ countries worldwide',
      icon: Car,
      features: ['Global Coverage', 'Insurance Included', '24/7 Support']
    },
    {
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for medical, trip cancellation, and more',
      icon: Shield,
      features: ['Medical Coverage', 'Trip Protection', 'Emergency Assistance']
    }
  ];

  const stats = [
    { label: 'Countries Covered', value: '195+', icon: Globe },
    { label: 'Bookings Per Month', value: '50K+', icon: Clock },
    { label: 'Customer Rating', value: '4.9/5', icon: Star },
    { label: 'Response Time', value: '< 2 mins', icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Keys Travel"
        subtitle=""
        description="Your AI-powered travel companion. Book flights, hotels, cars, and travel insurance with intelligent recommendations and seamless payment integration."
        badge="Global Coverage • AI-Powered • Instant Booking"
        background={heroBackground}
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Plane className="mr-2 h-5 w-5" />
            Start Planning
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <MapPin className="mr-2 h-5 w-5" />
            Explore Destinations
          </Button>
        </div>
      </PageHeader>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-fintech-blue" />
                  <div className="text-2xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Services */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Travel <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for seamless travel experiences, powered by AI recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <service.icon className="h-8 w-8 text-fintech-blue" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-xl text-muted-foreground">
                Book your entire trip in minutes with AI-powered recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Tell Us Your Plans', description: 'Share your destination, dates, and preferences' },
                { step: '2', title: 'Get AI Recommendations', description: 'Receive personalized travel options and deals' },
                { step: '3', title: 'Book & Pay Securely', description: 'Complete booking with your Keys wallet' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-scale-in">
              <Button size="lg" className="bg-gradient-primary text-white">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden mouse-follow-container">
        <CTABackground />
        <MouseFollower />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready for Your Next Adventure?</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Discover the world with AI-powered travel planning and seamless payments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-gradient-primary text-white">
                <Plane className="mr-2 h-5 w-5" />
                Start Planning
              </Button>
              <Button size="lg" variant="outline">
                <MapPin className="mr-2 h-5 w-5" />
                Explore Destinations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
