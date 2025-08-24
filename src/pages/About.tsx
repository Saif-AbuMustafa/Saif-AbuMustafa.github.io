import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { 
  Users, 
  TrendingUp, 
  Globe, 
  Award,
  Target,
  Eye,
  Heart,
  Lightbulb,
  ArrowRight,
  Building,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

export default function About() {
  const stats = [
    { icon: Users, value: 50000, suffix: '+', label: 'Global Users' },
    { icon: TrendingUp, value: 2.5, suffix: 'M+', prefix: '$', label: 'Transaction Volume' },
    { icon: Globe, value: 45, suffix: '+', label: 'Countries Served' },
    { icon: Award, value: 15, suffix: '+', label: 'Industry Awards' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible in fintech, leveraging AI and blockchain to create revolutionary solutions.'
    },
    {
      icon: Heart,
      title: 'Customer Centric',
      description: 'Every decision we make is guided by our commitment to delivering exceptional value and experience to our users.'
    },
    {
      icon: CheckCircle,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of security and regulatory compliance to protect our users\' assets and data.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We embrace change and continuously evolve our technology and services to meet emerging market needs.'
    }
  ];

  const milestones = [
    {
      year: 'October 2024',
      title: 'Token Launch',
      description: 'Launched AI KEYS token on Solana blockchain with successful initial offering'
    },
    {
      year: 'March 2025',
      title: 'Company Founded in UAE',
      description: 'AI KEYS was officially established in Dubai with VARA registration and compliance'
    },
    {
      year: 'May 2025',
      title: 'KEYS Pay & Travel Created',
      description: 'Developed KEYS Pay payment system and KEYS Travel booking platform'
    },
    {
      year: 'August 2025',
      title: 'Applications Launched',
      description: 'Successfully launched KEYS Pay and KEYS Travel applications to the public'
    }
  ];

  const leadership = [
    {
      name: 'Ahmed Al Nufie',
      role: 'Chief Executive Officer',
      bio: 'Entrepreneur for 3 different companies in oil and gas in KSA with extensive operational expertise..'
    },
    {
      name: 'Tito Guevara',
      role: 'R&D Head',
      bio: 'Consultant in Computer Engineering leading our research and development initiatives.'
    },
    {
      name: 'Naresh Joshi',
      role: 'Chief Technology Officer',
      bio: 'Software engineer and IT company owner driving our technological innovation'
    },
    {
      name: 'Saifudeen Abu Mustafa',
      role: 'Chief AI Officer',
      bio: 'PhD in Machine Learning from MIT, pioneering AI applications in financial services.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <PageHeader
        title="About"
        subtitle="AI KEYS"
        description="We're revolutionizing the global financial ecosystem by merging artificial intelligence with secure, accessible, and versatile digital asset management."
        badge="Dubai, UAE • Since 2025"
        background={heroBackground}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-gradient-primary text-white">
            <Link to="/careers">
              <Users className="mr-2 h-5 w-5" />
              Join Our Team
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Company Stats */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-fintech-blue group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    <AnimatedCounter 
                      end={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-8 w-8 text-fintech-blue" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize the global financial ecosystem by merging artificial intelligence with secure, 
                  accessible, and versatile digital asset management, creating a world where financial services 
                  are intelligent, seamless, and universally accessible.
                </p>
              </Card>

              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="h-8 w-8 text-fintech-cyan" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to empower users with an AI-driven, all-in-one financial platform that securely 
                  manages cryptocurrencies, facilitates fiat payments, and automates financial processes — ensuring 
                  ease of use, transparency, and full regulatory compliance.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Core Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide every decision we make and every solution we build
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-fintech-blue/10 group-hover:bg-fintech-blue/20 transition-colors">
                      <value.icon className="h-8 w-8 text-fintech-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our mission to revolutionize fintech
              </p>
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-8 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 border-fintech-blue text-fintech-blue">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced leaders driving innovation in AI-powered financial services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                    <Badge variant="outline" className="mb-4 border-fintech-blue text-fintech-blue">
                      {leader.role}
                    </Badge>
                    <p className="text-muted-foreground">{leader.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Building className="h-12 w-12 mx-auto mb-4 text-fintech-blue" />
                  <h3 className="font-semibold mb-2">Headquarters</h3>
                  <p className="text-muted-foreground">Dubai, UAE</p>
                </div>
                <div>
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-fintech-cyan" />
                  <h3 className="font-semibold mb-2">Founded</h3>
                  <p className="text-muted-foreground">March 2025</p>
                </div>
                <div>
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-fintech-gold" />
                  <h3 className="font-semibold mb-2">Regulation</h3>
                  <p className="text-muted-foreground">VARA Compliant</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden mouse-follow-container">
        <CTABackground />
        <MouseFollower />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Join Our Mission to Transform
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Global Finance
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
              Whether you're looking to partner with us, join our team, or use our services, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button size="lg" asChild className="bg-gradient-primary text-white">
                <Link to="/careers">
                  <Users className="mr-2 h-5 w-5" />
                  View Careers
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/investors">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Investor Relations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}