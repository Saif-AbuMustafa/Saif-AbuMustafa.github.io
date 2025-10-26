import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import { ModernSection, ModernContainer, ModernGrid } from '@/components/ui/ModernSection';
import { ModernCard, ModernCardContent } from '@/components/ui/ModernCard';
import { ModernHero } from '@/components/ui/ModernHero';
import { InteractiveSection } from '@/components/ui/InteractiveSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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
import premiumHeroBg from '@/assets/premium-hero-bg.jpg';

export default function About() {
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
      bio: 'Serial entrepreneur with extensive leadership experience across three successful oil and gas companies in Saudi Arabia, bringing operational excellence to fintech innovation.'
    },
    {
      name: 'Tito Guevara',
      role: 'Chief Strategic Officer',
      bio: 'Computer Engineering consultant with deep expertise in emerging technologies, leading strategic research and development initiatives across AI and blockchain solutions.'
    },
    {
      name: 'Naresh Joshi',
      role: 'Chief Technology Officer',
      bio: 'Seasoned software engineer and IT company founder, driving technological innovation and architecting scalable fintech solutions.'
    },
    {
      name: 'Saifudeen Abu Mustafa',
      role: 'Chief Operations Officer',
      bio: 'Electrical Engineering and AI graduate from Brunel University London, specializing in blockchain technology with operational expertise.'
    },
    {
      name: 'Mohammed Abdelwahhab',
      role: 'Chief Legal Officer',
      bio: 'Distinguished legal expert with PhD in International Law from Egypt, ensuring comprehensive regulatory compliance and legal strategy across global markets.'
    },
    {
      name: 'Hassan Yousef',
      role: 'Chief Financial Officer',
      bio: 'Accomplished finance executive with over 20 years of experience in financial management and strategic planning, currently pursuing doctoral studies in advanced financial theory.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <ModernHero
        title="About"
        subtitle="AI KEYS"
        description="We're revolutionizing the global financial ecosystem by merging artificial intelligence with secure, accessible, and versatile digital asset management."
        badge="Dubai, UAE • Since 2025"
      >
        <div className="flex flex-col sm:flex-row gap-6">
          <Button 
            size="lg" 
            className="h-14 px-10 text-base font-semibold rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
            asChild
          >
            <Link to="/careers" className="inline-flex items-center justify-center">
              <Users className="mr-2 h-5 w-5" />
              Join Our Team
            </Link>
          </Button>
          <Button 
            size="lg"
            className="h-14 px-10 text-base font-semibold rounded-full bg-white border-2 border-gray-200 hover:border-primary text-gray-900 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/contact" className="group inline-flex items-center justify-center">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </ModernHero>

      {/* Vision & Mission */}
      <ModernSection padding="xl">
        <ModernContainer>
          <ModernGrid cols={2} gap="xl">
            <ModernCard variant="premium" hover="lift" className="p-10">
              <div className="flex items-center space-x-4 mb-8">
                <Eye className="h-10 w-10 text-ak-blue" />
                <h2 className="text-4xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To revolutionize the global financial ecosystem by merging artificial intelligence with secure, 
                accessible, and versatile digital asset management, creating a world where financial services 
                are intelligent, seamless, and universally accessible.
              </p>
            </ModernCard>

            <ModernCard variant="premium" hover="lift" className="p-10">
              <div className="flex items-center space-x-4 mb-8">
                <Target className="h-10 w-10 text-ak-blue" />
                <h2 className="text-4xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to empower users with an AI-driven, all-in-one financial platform that securely 
                manages cryptocurrencies, facilitates fiat payments, and automates financial processes — ensuring 
                ease of use, transparency, and full regulatory compliance.
              </p>
            </ModernCard>
          </ModernGrid>
        </ModernContainer>
      </ModernSection>

      {/* Company Values */}
      <InteractiveSection background="particles" className="py-20 lg:py-32">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Core Values</span>
              </h2>
              <p className="text-xl md:text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
                The principles that guide every decision we make and every solution we build
              </p>
            </div>

            <ModernGrid cols={2} gap="xl">
              {values.map((value, index) => (
                <ModernCard key={index} variant="glass" hover="lift" className="p-10 group">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-xl bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors">
                      <value.icon className="h-10 w-10 text-ak-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-ak-text">{value.title}</h3>
                      <p className="text-lg text-ak-muted leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </ModernCard>
              ))}
            </ModernGrid>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* Company Timeline */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-xl md:text-2xl text-ak-muted max-w-3xl mx-auto leading-relaxed">
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
                    <Badge variant="outline" className="mb-2 border-ak-blue text-ak-blue bg-ak-blue/5">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModernContainer>
      </ModernSection>

      {/* Leadership Team */}
      <InteractiveSection background="particles" className="py-20 lg:py-32">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
                Leadership <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl md:text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
                Experienced leaders driving innovation in AI-powered financial services
              </p>
            </div>

            <div className="relative">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  duration: 20,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {leadership.map((leader, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <ModernCard variant="glass" hover="lift" className="p-10 group text-center h-full">
                        <div className="w-28 h-28 bg-gradient-primary rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Users className="h-14 w-14 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-ak-text">{leader.name}</h3>
                        <Badge variant="outline" className="mb-6 border-ak-blue text-ak-blue bg-ak-blue/5">
                          {leader.role}
                        </Badge>
                        <p className="text-ak-muted leading-relaxed">{leader.bio}</p>
                      </ModernCard>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-ak-white/90 border-ak-blue/20 hover:bg-ak-blue hover:text-white transition-all duration-200 will-change-transform" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-ak-white/90 border-ak-blue/20 hover:bg-ak-blue hover:text-white transition-all duration-200 will-change-transform" />
              </Carousel>
            </div>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* Company Info */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="max-w-5xl mx-auto">
            <ModernCard variant="premium" className="p-12">
              <ModernGrid cols={3} gap="xl" className="text-center">
                <div>
                  <Building className="h-16 w-16 mx-auto mb-6 text-ak-blue" />
                  <h3 className="text-xl font-bold mb-3 text-white">Headquarters</h3>
                  <p className="text-ak-muted text-lg">Dubai, UAE</p>
                </div>
                <div>
                  <MapPin className="h-16 w-16 mx-auto mb-6 text-ak-blue" />
                  <h3 className="text-xl font-bold mb-3 text-white">Founded</h3>
                  <p className="text-ak-muted text-lg">March 2025</p>
                </div>
                <div>
                  <Lightbulb className="h-16 w-16 mx-auto mb-6 text-ak-blue" />
                  <h3 className="text-xl font-bold mb-3 text-white">AI-Powered</h3>
                  <p className="text-ak-muted text-lg">Advanced Technology</p>
                </div>
              </ModernGrid>
            </ModernCard>
          </div>
        </ModernContainer>
      </ModernSection>

      {/* CTA */}
      <InteractiveSection
        background="gradient"
        interactive={true}
        className="py-20 lg:py-32"
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in tracking-tight text-ak-text">
            Join Our Mission to Transform
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Global Finance
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-ak-muted mb-16 max-w-4xl mx-auto animate-slide-up leading-relaxed">
            Whether you're looking to partner with us, join our team, or use our services, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in">
            <Button size="xl" variant="premium" asChild className="group">
              <Link to="/careers">
                <Users className="mr-2 h-6 w-6" />
                View Careers
              </Link>
            </Button>
            <Button size="xl" variant="glass" asChild className="group">
              <Link to="/investors">
                <TrendingUp className="mr-2 h-5 w-5" />
                Investor Relations
              </Link>
            </Button>
          </div>
        </div>
      </InteractiveSection>
    </div>
  );
}