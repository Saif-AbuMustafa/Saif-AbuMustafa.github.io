import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Image,
  FileText,
  Video,
  Mail,
  Calendar,
  Award,
  Users
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export default function PressKit() {
  const assets = [
    {
      category: 'Logos & Brand Assets',
      icon: Image,
      items: [
        { name: 'AI KEYS Logo Pack', format: 'ZIP', size: '15.2 MB', description: 'High-resolution logos in multiple formats' },
        { name: 'Brand Guidelines', format: 'PDF', size: '8.7 MB', description: 'Complete brand identity guidelines' },
        { name: 'Icon Set', format: 'ZIP', size: '5.1 MB', description: 'Product icons and symbols' },
        { name: 'Color Palette', format: 'ASE', size: '1.2 MB', description: 'Official brand colors for design' }
      ]
    },
    {
      category: 'Photos & Screenshots',
      icon: Image,
      items: [
        { name: 'Product Screenshots', format: 'ZIP', size: '45.3 MB', description: 'App and platform interface screenshots' },
        { name: 'Team Photos', format: 'ZIP', size: '32.1 MB', description: 'High-resolution team and office photos' },
        { name: 'Event Photos', format: 'ZIP', size: '28.9 MB', description: 'Conference and event photography' },
        { name: 'Office Photos', format: 'ZIP', size: '21.4 MB', description: 'Workspace and culture photography' }
      ]
    },
    {
      category: 'Documents & Factsheets',
      icon: FileText,
      items: [
        { name: 'Company Factsheet', format: 'PDF', size: '2.3 MB', description: 'Key company information and statistics' },
        { name: 'Product Overview', format: 'PDF', size: '4.1 MB', description: 'Comprehensive product descriptions' },
        { name: 'Financial Information', format: 'PDF', size: '1.8 MB', description: 'Public financial data and metrics' },
        { name: 'Awards & Recognition', format: 'PDF', size: '3.2 MB', description: 'Industry awards and achievements' }
      ]
    },
    {
      category: 'Video & Multimedia',
      icon: Video,
      items: [
        { name: 'Company Intro Video', format: 'MP4', size: '125 MB', description: '2-minute company overview video' },
        { name: 'Product Demo Reel', format: 'MP4', size: '89 MB', description: 'Platform demonstration highlights' },
        { name: 'CEO Interview Clips', format: 'ZIP', size: '256 MB', description: 'Recent media interview segments' },
        { name: 'B-Roll Footage', format: 'ZIP', size: '432 MB', description: 'Raw footage for media use' }
      ]
    }
  ];

  const keyFacts = [
    { label: 'Founded', value: '2023' },
    { label: 'Headquarters', value: 'Dubai, UAE' },
    { label: 'Employees', value: '50+' },
    { label: 'Funding Raised', value: '$15M Series A' },
    { label: 'Active Users', value: '50,000+' },
    { label: 'Countries Served', value: '25+' },
    { label: 'Regulatory Status', value: 'VARA Compliant' },
    { label: 'Partnerships', value: '100+ Global Partners' }
  ];

  const leadership = [
    {
      name: 'Ahmed Al Nufie',
      title: 'Chief Executive Officer',
      bio: 'Serial entrepreneur with extensive leadership experience across three successful oil and gas companies in Saudi Arabia, bringing operational excellence to fintech innovation.',
      contact: 'ceo@aikeys.ai'
    },
    {
      name: 'Tito Guevara',
      title: 'Chief Strategic Officer',
      bio: 'Computer Engineering consultant with deep expertise in emerging technologies, leading strategic research and development initiatives across AI and blockchain solutions.',
      contact: 'cso@aikeys.ai'
    },
    {
      name: 'Saifudeen Abu Mustafa',
      title: 'Chief Operations Officer',
      bio: 'Electrical Engineering and AI graduate from Brunel University London, specializing in blockchain technology with operational expertise.',
      contact: 'coo@aikeys.ai'
    }
  ];

  const recentNews = [
    {
      date: 'January 2024',
      title: 'AI KEYS Raises $15M Series A for AI-Powered Financial Platform',
      outlet: 'TechCrunch'
    },
    {
      date: 'December 2023',
      title: 'UAE-Based AI KEYS Receives VARA Compliance Approval',
      outlet: 'Arabian Business'
    },
    {
      date: 'November 2023',
      title: 'AI KEYS Partners with Major Airlines for Travel Payment Solutions',
      outlet: 'Financial Times'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Press"
        subtitle="Kit"
        description="Comprehensive media resources, company information, and assets for journalists, partners, and media professionals covering AI KEYS."
        badge="Media Resources • High-Resolution Assets • Latest Updates"
        background={heroBackground}
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Download className="mr-2 h-5 w-5" />
            Download All Assets
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Mail className="mr-2 h-5 w-5" />
            Media Contact
          </Button>
        </div>
      </PageHeader>

      {/* Quick Facts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Company at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {keyFacts.map((fact, index) => (
                <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="text-lg font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">
                    {fact.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{fact.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Media Assets</h2>
            
            <div className="space-y-8">
              {assets.map((category, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <category.icon className="h-6 w-6 text-fintech-blue" />
                      <span>{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-4 border rounded-lg bg-background/50">
                          <div className="flex-1">
                            <h4 className="font-medium mb-1">{item.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                              <Badge variant="outline" className="text-xs">{item.format}</Badge>
                              <span>{item.size}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-sm text-fintech-blue font-medium mb-3">{leader.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Recent Media Coverage</h2>
            
            <div className="space-y-6">
              {recentNews.map((news, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline">{news.date}</Badge>
                        <Badge className="bg-fintech-blue/10 text-fintech-blue border-fintech-blue/20">
                          {news.outlet}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold">{news.title}</h3>
                    </div>
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">
                View All Press Coverage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
            <p className="text-xl text-muted-foreground mb-8">
              For interviews, product demos, or additional information, please contact our media team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Mail className="h-8 w-8 text-fintech-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Press Contact</h3>
                <p className="text-muted-foreground">press@aikeys.ai</p>
              </Card>
              <Card className="p-6">
                <Calendar className="h-8 w-8 text-fintech-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Interview Requests</h3>
                <p className="text-muted-foreground">Schedule via Calendly</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}