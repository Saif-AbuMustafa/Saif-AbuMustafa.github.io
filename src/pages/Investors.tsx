import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  DollarSign,
  BarChart3,
  Users,
  Globe,
  Target,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Investors() {
  const metrics = [
    { label: 'Total Funding', value: '$15M', icon: DollarSign },
    { label: 'Valuation', value: '$100M', icon: TrendingUp },
    { label: 'Revenue Growth', value: '300%', icon: BarChart3 },
    { label: 'Active Users', value: '50K+', icon: Users }
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Investor"
        subtitle="Relations"
        description="Join leading investors in the AI-powered fintech revolution. Discover investment opportunities in the future of finance."
        badge="Series A • High Growth • VARA Compliant"
        background={heroBackground}
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="premium" className="h-14 px-8">
            <TrendingUp className="mr-2 h-5 w-5" />
            Investment Deck
          </Button>
          <Button size="lg" variant="glass" className="h-14 px-8">
            <BarChart3 className="mr-2 h-5 w-5" />
            Financial Reports
          </Button>
        </div>
      </PageHeader>

      {/* Key Metrics */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                  <metric.icon className="h-12 w-12 mx-auto mb-4 text-ak-blue" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>

            {/* Key Investors */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Key <span className="bg-gradient-primary bg-clip-text text-transparent">Investors</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Backed by visionary investors who believe in the future of AI-powered fintech
              </p>
            </div>

            <div className="relative mb-20">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    {
                      name: 'Ali Al Yami',
                      title: 'Lead Investor & Strategic Advisor',
                      description: 'Visionary entrepreneur with extensive experience in fintech and blockchain innovation',
                      investment: 'Series A Lead'
                    },
                    {
                      name: 'Hussein Al Shammari',
                      title: 'Strategic Investor',
                      description: 'Technology executive and investor focused on AI and financial services transformation',
                      investment: 'Strategic Round'
                    },
                    {
                      name: 'Suhail Abu Mustafa',
                      title: 'Key Investor & Technology Advisor',
                      description: 'Strategic investor with deep expertise in emerging technologies and digital transformation initiatives',
                      investment: 'Growth Round'
                    },
                    {
                      name: 'Mohammed Mesmeh',
                      title: 'Key Investor & Market Strategist',
                      description: 'Experienced investor and business strategist focused on scaling innovative fintech solutions in global markets',
                      investment: 'Strategic Round'
                    },
                    {
                      name: 'Manei',
                      title: 'Angel Investor',
                      description: 'Early-stage investor and advisor specializing in emerging markets and fintech solutions',
                      investment: 'Seed Round'
                    }
                  ].map((investor, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm text-center h-full">
                        <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Users className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{investor.name}</h3>
                        <p className="text-sm text-ak-blue font-medium mb-3">{investor.title}</p>
                        <p className="text-sm text-muted-foreground mb-4">{investor.description}</p>
                        <Badge variant="outline" className="bg-ak-blue/10 text-ak-blue border-ak-blue/20">
                          {investor.investment}
                        </Badge>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-ak-white/90 border-ak-blue/20 hover:bg-ak-blue hover:text-white" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-ak-white/90 border-ak-blue/20 hover:bg-ak-blue hover:text-white" />
              </Carousel>
            </div>

            {/* Investment Opportunity */}
            <Card className="p-8 text-center bg-gradient-to-r from-ak-blue/10 to-ak-blue/5 border-ak-blue/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're looking for strategic investors who share our vision of revolutionizing finance through AI and blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="premium">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Request Investment Info
                </Button>
                <Button size="lg" variant="glass">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Meeting
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}