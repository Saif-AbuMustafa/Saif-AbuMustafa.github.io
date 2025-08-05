import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Book, 
  FileText, 
  Code, 
  Download,
  ExternalLink,
  Shield,
  Zap,
  Globe,
  Mail
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Documentation() {
  const documentSections = [
    {
      title: 'Getting Started',
      icon: Book,
      documents: [
        { name: 'Platform Overview', type: 'PDF', size: '2.1 MB' },
        { name: 'Account Setup Guide', type: 'PDF', size: '1.8 MB' },
        { name: 'Security Best Practices', type: 'PDF', size: '1.2 MB' }
      ]
    },
    {
      title: 'Developer Resources',
      icon: Code,
      documents: [
        { name: 'API Documentation', type: 'PDF', size: '4.5 MB' },
        { name: 'SDK Integration Guide', type: 'PDF', size: '3.2 MB' },
        { name: 'Webhook Configuration', type: 'PDF', size: '1.1 MB' }
      ]
    },
    {
      title: 'Product Guides',
      icon: FileText,
      documents: [
        { name: 'Wallet User Manual', type: 'PDF', size: '2.8 MB' },
        { name: 'Travel Planning Guide', type: 'PDF', size: '2.1 MB' },
        { name: 'Logistics Platform Guide', type: 'PDF', size: '1.9 MB' },
        { name: 'Educational Services Manual', type: 'PDF', size: '2.3 MB' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHeader
        title="Documentation"
        subtitle="Resources & Guides"
        description="Comprehensive documentation to help you get the most out of AI KEYS platform"
        badge="Always Updated • Comprehensive • Developer Friendly"
        background={heroBackground}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-fintech-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Security Guide</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Learn about our security measures and best practices
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Guide
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <Zap className="h-12 w-12 text-fintech-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Quick Start</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get up and running with AI KEYS in minutes
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Start Now
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <Globe className="h-12 w-12 text-fintech-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">API Reference</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complete API documentation for developers
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Browse API
              </Button>
            </Card>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-8">
            {documentSections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <section.icon className="h-6 w-6 text-fintech-blue" />
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.documents.map((doc, docIndex) => (
                      <div 
                        key={docIndex}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <h4 className="font-medium text-sm">{doc.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Support Section */}
          <Card className="mt-12 text-center p-8">
            <h3 className="text-xl font-semibold mb-4">Need Additional Help?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Request Documentation
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}