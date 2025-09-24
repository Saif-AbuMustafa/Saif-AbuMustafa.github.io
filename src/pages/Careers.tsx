import { PageHeader } from '@/components/layout/PageHeader';
import { ModernCard, ModernCardContent } from '@/components/ui/ModernCard';
import { ModernSection, ModernContainer, ModernGrid } from '@/components/ui/ModernSection';
import { InteractiveSection } from '@/components/ui/InteractiveSection';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MapPin,
  ArrowRight,
  Building,
  Zap,
  Globe,
  Heart,
  Target,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Careers() {
  const positions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Dubai, UAE / Remote',
      type: 'Full-time',
      description: 'Lead development of our fintech platform with React, Node.js, and blockchain integration'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage cloud infrastructure, CI/CD pipelines, and ensure 99.9% uptime'
    },
    {
      title: 'Product Designer (UI/UX)',
      department: 'Design',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Create intuitive user experiences for our financial products and mobile apps'
    },
    {
      title: 'Business Development Manager',
      department: 'Business',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Drive partnerships and expand our market presence in MENA region'
    },
    {
      title: 'Customer Success Manager',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure customer satisfaction and drive product adoption for enterprise clients'
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Dubai, UAE / Remote',
      type: 'Full-time',
      description: 'Lead digital marketing campaigns and brand awareness in fintech space'
    },
    {
      title: 'Compliance Officer',
      department: 'Legal',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Ensure regulatory compliance across all products and maintain VARA standards'
    },
    {
      title: 'Data Scientist',
      department: 'AI/ML',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build AI models for fraud detection, risk assessment, and user behavior analysis'
    },
    {
      title: 'QA Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure product quality through automated testing and comprehensive QA processes'
    },
    {
      title: 'Finance Manager',
      department: 'Finance',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Manage financial planning, reporting, and funding operations for rapid growth'
    }
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Join Our"
        subtitle="Team"
        description="Be part of the revolution in AI-powered fintech. We're looking for passionate individuals to help shape the future of finance."
        badge="Remote-First • Competitive Benefits • Equity"
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="premium" className="h-14 px-8">
            <Users className="mr-2 h-5 w-5" />
            View Positions
          </Button>
          <Button size="lg" variant="glass" className="h-14 px-8">
            <Building className="mr-2 h-5 w-5" />
            Our Culture
          </Button>
        </div>
      </PageHeader>

      {/* Open Positions */}
      <InteractiveSection
        background="particles"
        className="py-20 lg:py-32"
      >
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
                Open <span className="bg-gradient-primary bg-clip-text text-transparent">Positions</span>
              </h2>
              <p className="text-xl md:text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
                Join our team of innovators building the future of AI-powered fintech
              </p>
            </div>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <ModernCard key={index} variant="glass" hover="lift" className="p-8 group">
                  <ModernCardContent className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-ak-text">{position.title}</h3>
                      <p className="text-lg text-ak-muted mb-4 leading-relaxed">{position.description}</p>
                      <div className="flex items-center space-x-6 text-sm">
                        <Badge variant="outline" className="border-ak-blue text-ak-blue bg-ak-blue/5">{position.department}</Badge>
                        <span className="flex items-center text-ak-muted">
                          <MapPin className="h-4 w-4 mr-2 text-ak-blue" />
                          {position.location}
                        </span>
                        <span className="text-ak-muted">{position.type}</span>
                      </div>
                    </div>
                    <Button variant="premium" size="lg" className="bg-ak-blue hover:bg-ak-blue/90 text-white group/btn">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </ModernCardContent>
                </ModernCard>
              ))}
            </div>
          </div>
        </ModernContainer>
      </InteractiveSection>
    </div>
  );
}