import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
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
import heroBackground from '@/assets/hero-bg.jpg';

export default function Careers() {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Lead AI development for our fintech platform'
    },
    {
      title: 'Blockchain Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain Solana smart contracts'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap'
    }
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Join Our"
        subtitle="Team"
        description="Be part of the revolution in AI-powered fintech. We're looking for passionate individuals to help shape the future of finance."
        badge="Remote-First • Competitive Benefits • Equity"
        background={heroBackground}
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Users className="mr-2 h-5 w-5" />
            View Positions
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Building className="mr-2 h-5 w-5" />
            Our Culture
          </Button>
        </div>
      </PageHeader>

      {/* Open Positions */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Open <span className="bg-gradient-primary bg-clip-text text-transparent">Positions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <p className="text-muted-foreground mb-2">{position.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <Badge variant="outline">{position.department}</Badge>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button variant="outline">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}