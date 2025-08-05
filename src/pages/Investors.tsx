import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign,
  BarChart3,
  Users,
  Globe,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <TrendingUp className="mr-2 h-5 w-5" />
            Investment Deck
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <BarChart3 className="mr-2 h-5 w-5" />
            Financial Reports
          </Button>
        </div>
      </PageHeader>

      {/* Key Metrics */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                  <metric.icon className="h-12 w-12 mx-auto mb-4 text-fintech-blue" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}