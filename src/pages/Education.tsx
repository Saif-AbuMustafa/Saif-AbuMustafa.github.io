import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  BookOpen,
  Brain,
  CreditCard,
  ArrowRight,
  Globe,
  Users,
  Award,
  Target,
  Clock,
  Star,
  Smartphone,
  Calculator,
  PiggyBank,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Education() {
  const features = [
    {
      icon: Brain,
      title: 'AI Learning Assistant',
      description: 'Personalized AI tutor that adapts to your learning style and pace',
      benefits: ['Personalized curriculum', 'Real-time feedback', 'Progress tracking', 'Adaptive learning']
    },
    {
      icon: Globe,
      title: 'Study Abroad Support',
      description: 'Complete assistance for international education opportunities',
      benefits: ['University selection', 'Visa assistance', 'Application support', 'Scholarship finder']
    },
    {
      icon: CreditCard,
      title: 'Educational Finance',
      description: 'Integrated financial solutions for education expenses',
      benefits: ['Student loans', 'Payment plans', 'Expense tracking', 'Budget management']
    },
    {
      icon: Award,
      title: 'Certification Tracking',
      description: 'Digital credentials and achievement management',
      benefits: ['Verified certificates', 'Skill assessment', 'Career mapping', 'Industry recognition']
    }
  ];

  const services = [
    {
      icon: BookOpen,
      title: 'AI Tutoring',
      description: 'One-on-one AI tutoring across all subjects',
      color: 'fintech-blue'
    },
    {
      icon: Calculator,
      title: 'Homework Help',
      description: 'Instant help with assignments and projects',
      color: 'fintech-cyan'
    },
    {
      icon: Globe,
      title: 'Language Learning',
      description: 'AI-powered language courses and conversation practice',
      color: 'fintech-purple'
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Personalized career path recommendations',
      color: 'fintech-gold'
    },
    {
      icon: PiggyBank,
      title: 'Scholarship Finder',
      description: 'AI-matched scholarship opportunities',
      color: 'fintech-blue'
    },
    {
      icon: Award,
      title: 'Skill Certification',
      description: 'Industry-recognized skill assessments',
      color: 'fintech-cyan'
    }
  ];

  const studentTypes = [
    {
      title: 'High School Students',
      description: 'College preparation and career exploration',
      features: ['SAT/ACT prep', 'College applications', 'Career exploration', 'Study skills'],
      icon: Users,
      stats: { improvement: '85%', satisfaction: '4.9/5' }
    },
    {
      title: 'University Students',
      description: 'Academic success and financial management',
      features: ['Course assistance', 'Research help', 'Budget tracking', 'Internship finder'],
      icon: GraduationCap,
      stats: { improvement: '78%', satisfaction: '4.8/5' }
    },
    {
      title: 'Working Professionals',
      description: 'Skill development and career advancement',
      features: ['Professional courses', 'Certification prep', 'Leadership training', 'Industry trends'],
      icon: TrendingUp,
      stats: { improvement: '92%', satisfaction: '4.9/5' }
    }
  ];

  const studyAbroadPrograms = [
    {
      country: 'United States',
      universities: '500+',
      scholarships: '$2.5M+',
      students: '1,200+',
      flag: '🇺🇸'
    },
    {
      country: 'United Kingdom',
      universities: '300+',
      scholarships: '$1.8M+',
      students: '800+',
      flag: '🇬🇧'
    },
    {
      country: 'Canada',
      universities: '200+',
      scholarships: '$1.2M+',
      students: '600+',
      flag: '🇨🇦'
    },
    {
      country: 'Australia',
      universities: '150+',
      scholarships: '$900K+',
      students: '400+',
      flag: '🇦🇺'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Computer Science Student',
      university: 'MIT',
      quote: 'AI KEYS helped me get into my dream university and manage my finances throughout my studies.',
      rating: 5,
      scholarship: '$50,000'
    },
    {
      name: 'Omar Hassan',
      role: 'MBA Student',
      university: 'London Business School',
      quote: 'The AI tutoring and study abroad support made my transition to studying in the UK seamless.',
      rating: 5,
      scholarship: '$75,000'
    }
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="AI KEYS"
        subtitle="Student Services"
        description="Revolutionary AI-powered educational platform with integrated financial services. From personalized learning to study abroad support, we empower students to achieve their academic and career goals."
        badge="Coming Q4 2024 • AI-Powered • Global Education"
        background={heroBackground}
        showBackButton
        backTo="/services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <GraduationCap className="mr-2 h-5 w-5" />
            Start Learning
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Globe className="mr-2 h-5 w-5" />
            Study Abroad
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
                    <div className="p-3 rounded-xl bg-fintech-gold/10 group-hover:bg-fintech-gold/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-fintech-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-fintech-gold" />
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

      {/* Educational Services */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">Learning Platform</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                AI-powered educational services designed to accelerate learning and career success
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

      {/* Student Types */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tailored for <span className="bg-gradient-primary bg-clip-text text-transparent">Every Student</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Customized learning experiences for different educational stages and career goals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {studentTypes.map((type, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                    <p className="text-muted-foreground mb-6">{type.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-fintech-gold">{type.stats.improvement}</div>
                      <div className="text-xs text-muted-foreground">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-fintech-blue">{type.stats.satisfaction}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Programs */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Study <span className="bg-gradient-primary bg-clip-text text-transparent">Abroad Programs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with top universities worldwide and secure scholarships with AI-powered matching
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {studyAbroadPrograms.map((program, index) => (
                <Card key={index} className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{program.flag}</div>
                  <h3 className="font-semibold mb-4">{program.country}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-fintech-blue">{program.universities}</div>
                      <div className="text-sm text-muted-foreground">Universities</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-fintech-cyan">{program.scholarships}</div>
                      <div className="text-sm text-muted-foreground">Scholarships</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-fintech-gold">{program.students}</div>
                      <div className="text-sm text-muted-foreground">Students Placed</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Student <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Real students achieving their dreams with AI KEYS Education
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
                      <div className="text-sm text-fintech-blue">{testimonial.university}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-fintech-gold">{testimonial.scholarship}</div>
                      <div className="text-sm text-muted-foreground">Scholarship</div>
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Education?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of students already using AI KEYS to accelerate their learning and achieve their dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}