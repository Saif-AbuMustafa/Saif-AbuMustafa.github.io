import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  Package,
  MapPin,
  Clock,
  Shield,
  BarChart3,
  Globe,
  CheckCircle
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export default function LogisticsDocs() {
  const services = [
    {
      title: 'Last-Mile Delivery',
      description: 'Fast and reliable delivery to end customers with real-time tracking',
      icon: Truck,
      features: ['Same Day Delivery', 'GPS Tracking', 'Proof of Delivery']
    },
    {
      title: 'Warehouse Management',
      description: 'Smart inventory management with AI-powered optimization',
      icon: Package,
      features: ['Automated Sorting', 'Inventory Analytics', 'Climate Control']
    },
    {
      title: 'Route Optimization',
      description: 'AI-driven route planning for maximum efficiency and cost savings',
      icon: MapPin,
      features: ['Real-time Traffic', 'Fuel Optimization', 'Multi-stop Planning']
    },
    {
      title: 'Supply Chain Analytics',
      description: 'Comprehensive insights and reporting for data-driven decisions',
      icon: BarChart3,
      features: ['Performance Metrics', 'Cost Analysis', 'Predictive Analytics']
    }
  ];

  const metrics = [
    { label: 'Delivery Success Rate', value: '99.5%', icon: CheckCircle },
    { label: 'Average Delivery Time', value: '4.2 hours', icon: Clock },
    { label: 'Coverage Areas', value: '150+ Cities', icon: Globe },
    { label: 'Package Security', value: '100%', icon: Shield }
  ];

  const industries = [
    'E-commerce & Retail',
    'Healthcare & Pharmaceuticals',
    'Automotive Parts',
    'Food & Beverage',
    'Electronics & Technology',
    'Fashion & Apparel'
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="AI KEYS"
        subtitle="Logistics"
        description="Revolutionary logistics platform powered by AI and blockchain technology. Optimize your supply chain with intelligent routing, real-time tracking, and seamless payment integration."
        badge="AI-Powered • Real-time Tracking • Blockchain Verified"
        background={heroBackground}
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Truck className="mr-2 h-5 w-5" />
            Request Quote
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Package className="mr-2 h-5 w-5" />
            Track Shipment
          </Button>
        </div>
      </PageHeader>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <metric.icon className="h-10 w-10 mx-auto mb-4 text-fintech-blue" />
                  <div className="text-2xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>

            {/* Services */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Logistics <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end logistics management with cutting-edge technology and intelligent automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

            {/* Industries */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Industries We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading companies that trust AI KEYS Logistics for their critical operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white">
                <BarChart3 className="mr-2 h-5 w-5" />
                Get Custom Quote
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}