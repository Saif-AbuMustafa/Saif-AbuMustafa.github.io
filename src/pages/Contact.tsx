import { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MapPin, 
  Phone,
  MessageSquare,
  Calendar,
  Users,
  Clock,
  Send,
  Building,
  Globe,
  Headphones,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help from our team',
      contact: 'info@aikeys.ai',
      href: 'mailto:info@aikeys.ai',
      color: 'fintech-blue'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: '24/7 instant support',
      contact: 'Start Chat',
      href: '#chat',
      color: 'fintech-purple'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation',
      contact: 'Book Now',
      href: '#schedule',
      color: 'fintech-gold'
    }
  ];

  const offices = [
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: 'Dubai International Financial Centre\nGate Village 10, Level 2\nDubai, UAE',
      isHeadquarters: true
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: 'Canary Wharf\n25 Canada Square\nLondon E14 5LQ, UK',
      isHeadquarters: false
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: 'Marina Bay Financial Centre\n10 Marina Boulevard\nSingapore 018983',
      isHeadquarters: false
    }
  ];

  const supportTeams = [
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'General inquiries and account help',
      email: 'info@aikeys.ai',
      hours: '24/7 Support'
    },
    {
      icon: Users,
      title: 'Business Development',
      description: 'Partnerships and enterprise solutions',
      email: 'info@aikeys.ai',
      hours: 'Mon-Fri 9AM-6PM GST'
    },
    {
      icon: Building,
      title: 'Media & Press',
      description: 'Press inquiries and media kits',
      email: 'info@aikeys.ai',
      hours: 'Mon-Fri 9AM-6PM GST'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader
        title="Get in"
        subtitle="Touch"
        description="Ready to transform your financial future? Our team of experts is here to help you navigate the world of AI-powered fintech solutions."
        badge="24/7 Support • Global Offices • Expert Team"
        background={heroBackground}
        showBackButton
        backTo="/"
      />

      {/* Contact Methods */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="text-center p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${method.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`p-4 rounded-xl bg-${method.color}/10 group-hover:bg-${method.color}/20 transition-colors mx-auto w-fit mb-6`}>
                      <method.icon className={`h-8 w-8 text-${method.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h3 className="font-semibold mb-2 text-lg">{method.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{method.description}</p>
                    <Button variant="outline" size="sm" asChild className="group/btn">
                      <a href={method.href}>
                        {method.contact}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fintech-blue/5 to-fintech-cyan/5 opacity-50" />
                <div className="relative z-10">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl mb-2">Send us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  
                  <CardContent className="px-0 pb-0">
                    {isSubmitted ? (
                      <div className="text-center py-12 space-y-4">
                        <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-semibold">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for reaching out. We'll be in touch soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Name *</label>
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="bg-background/50 border-border/50 focus:border-fintech-blue"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Email *</label>
                            <Input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="bg-background/50 border-border/50 focus:border-fintech-blue"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Company</label>
                            <Input
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="bg-background/50 border-border/50 focus:border-fintech-blue"
                              placeholder="Your company"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Subject *</label>
                            <Input
                              required
                              value={formData.subject}
                              onChange={(e) => setFormData({...formData, subject: e.target.value})}
                              className="bg-background/50 border-border/50 focus:border-fintech-blue"
                              placeholder="What's this about?"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Message *</label>
                          <Textarea
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="bg-background/50 border-border/50 focus:border-fintech-blue min-h-[120px]"
                            placeholder="Tell us more about your inquiry..."
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          size="lg" 
                          disabled={isSubmitting}
                          className="w-full bg-gradient-primary text-white border-0 h-12"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </div>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Support Teams */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Support Teams</h3>
                  <div className="space-y-4">
                    {supportTeams.map((team, index) => (
                      <Card key={index} className="p-6 border-border/50 bg-card/30 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl bg-fintech-blue/10 group-hover:bg-fintech-blue/20 transition-colors">
                            <team.icon className="h-6 w-6 text-fintech-blue" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{team.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{team.description}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <a href={`mailto:${team.email}`} className="text-fintech-blue hover:underline">
                                {team.email}
                              </a>
                              <span className="text-muted-foreground flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {team.hours}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <Card className="p-6 border-border/50 bg-card/30 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Response Times</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fintech-blue mb-1">&lt; 1h</div>
                      <div className="text-sm text-muted-foreground">Live Chat</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fintech-cyan mb-1">&lt; 24h</div>
                      <div className="text-sm text-muted-foreground">Email</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Global <span className="bg-gradient-primary bg-clip-text text-transparent">Presence</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                With offices across major financial hubs, we're always close to our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card 
                  key={index}
                  className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  {office.isHeadquarters && (
                    <Badge className="absolute top-4 right-4 bg-fintech-gold/20 text-fintech-gold border-fintech-gold/30">
                      Headquarters
                    </Badge>
                  )}
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
                    <p className="text-fintech-blue font-medium mb-4">{office.country}</p>
                    <div className="text-sm text-muted-foreground whitespace-pre-line">
                      {office.address}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}