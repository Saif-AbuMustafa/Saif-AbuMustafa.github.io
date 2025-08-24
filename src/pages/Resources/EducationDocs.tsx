import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  BookOpen,
  Users,
  Award,
  Video,
  FileText,
  Lightbulb,
  Target
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export default function EducationDocs() {
  const programs = [
    {
      title: 'Financial Literacy Basics',
      description: 'Master the fundamentals of personal finance, budgeting, and investment',
      icon: BookOpen,
      features: ['12 Video Modules', 'Interactive Quizzes', 'Certificate of Completion']
    },
    {
      title: 'Cryptocurrency Mastery',
      description: 'Deep dive into blockchain technology, trading, and DeFi protocols',
      icon: Award,
      features: ['Advanced Trading', 'DeFi Strategies', 'Risk Management']
    },
    {
      title: 'AI in Finance',
      description: 'Learn how artificial intelligence is transforming financial services',
      icon: Lightbulb,
      features: ['AI Tools Overview', 'Practical Applications', 'Future Trends']
    },
    {
      title: 'Entrepreneurship & FinTech',
      description: 'Build and scale your own financial technology startup',
      icon: Target,
      features: ['Business Planning', 'Regulatory Compliance', 'Funding Strategies']
    }
  ];

  const stats = [
    { label: 'Students Enrolled', value: '25K+', icon: Users },
    { label: 'Course Completion Rate', value: '94%', icon: Award },
    { label: 'Average Rating', value: '4.8/5', icon: GraduationCap },
    { label: 'Certificates Issued', value: '18K+', icon: FileText }
  ];

  const learningPaths = [
    {
      title: 'Beginner Path',
      duration: '4-6 weeks',
      courses: 5,
      description: 'Start your financial education journey with core concepts'
    },
    {
      title: 'Advanced Path',
      duration: '8-12 weeks',
      courses: 12,
      description: 'Deep dive into complex financial instruments and strategies'
    },
    {
      title: 'Professional Path',
      duration: '16-20 weeks',
      courses: 20,
      description: 'Comprehensive program for finance professionals and entrepreneurs'
    }
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Keys Education Services"
        subtitle=""
        description="Empower your financial future with comprehensive education programs. Learn about blockchain, AI, traditional finance, and emerging technologies from industry experts."
        badge="Expert-Led • Interactive Learning • Certified Programs"
        background={heroBackground}
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <GraduationCap className="mr-2 h-5 w-5" />
            Enroll Now
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Video className="mr-2 h-5 w-5" />
            Free Preview
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

            {/* Programs */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Education <span className="bg-gradient-primary bg-clip-text text-transparent">Programs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive courses designed by industry experts to advance your financial knowledge
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {programs.map((program, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <program.icon className="h-8 w-8 text-fintech-blue" />
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Learning Paths */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Learning Paths</CardTitle>
                <p className="text-muted-foreground">
                  Choose the path that matches your experience level and goals
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {learningPaths.map((path, index) => (
                    <div key={index} className="p-6 bg-muted/50 rounded-lg text-center">
                      <h3 className="text-xl font-semibold mb-3">{path.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="text-sm text-muted-foreground">Duration: {path.duration}</div>
                        <div className="text-sm text-muted-foreground">{path.courses} Courses</div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Curriculum
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden mouse-follow-container">
        <CTABackground />
        <MouseFollower />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">Start Your Learning Journey Today</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Join thousands of students who are advancing their careers with AI KEYS Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-gradient-primary text-white">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse All Courses
              </Button>
              <Button size="lg" variant="outline">
                Talk to Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}