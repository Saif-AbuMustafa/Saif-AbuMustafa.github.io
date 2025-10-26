import { PageHeader } from '@/components/layout/PageHeader';
import { ModernSection, ModernContainer, ModernGrid } from '@/components/ui/ModernSection';
import { ModernCard } from '@/components/ui/ModernCard';
import { InteractiveSection } from '@/components/ui/InteractiveSection';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
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
      <PageHeader
        title="Documentation"
        subtitle="Resources & Guides"
        description="Comprehensive documentation to help you get the most out of AI KEYS platform"
        badge="Always Updated • Comprehensive • Developer Friendly"
        background={heroBackground}
        showBackButton
      />

      <ModernSection padding="xl">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          
          {/* Quick Links */}
          <ModernGrid cols={3} gap="lg" className="mb-20">
            <ModernCard variant="glass" hover="lift" className="text-center p-8 group">
              <Shield className="h-12 w-12 text-ak-blue mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 text-ak-text">Security Guide</h3>
              <p className="text-ak-muted leading-relaxed mb-6">
                Learn about our security measures and best practices
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Guide
              </Button>
            </ModernCard>
            
            <ModernCard variant="glass" hover="lift" className="text-center p-8 group">
              <Zap className="h-12 w-12 text-ak-blue mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 text-ak-text">Quick Start</h3>
              <p className="text-ak-muted leading-relaxed mb-6">
                Get up and running with AI KEYS in minutes
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Start Now
              </Button>
            </ModernCard>
            
            <ModernCard variant="glass" hover="lift" className="text-center p-8 group">
              <Globe className="h-12 w-12 text-ak-blue mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 text-ak-text">API Reference</h3>
              <p className="text-ak-muted leading-relaxed mb-6">
                Complete API documentation for developers
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Browse API
              </Button>
            </ModernCard>
          </ModernGrid>

          {/* Documentation Sections */}
          <div className="space-y-8 animate-fade-in">
            {documentSections.map((section, index) => (
              <ModernCard key={index} variant="glass" hover="lift" className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 rounded-xl bg-ak-blue/10">
                    <section.icon className="h-8 w-8 text-ak-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-ak-text">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.documents.map((doc, docIndex) => (
                    <div 
                      key={docIndex}
                      className="flex items-center justify-between p-4 border border-ak-beige-300 rounded-xl hover:bg-ak-beige-300/20 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-ak-muted" />
                        <div>
                          <h4 className="font-medium text-sm text-ak-text">{doc.name}</h4>
                          <p className="text-xs text-ak-muted">
                            {doc.type} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-ak-blue">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </ModernCard>
            ))}
          </div>

          {/* Support Section */}
          <ModernCard variant="premium" hover="lift" className="mt-16 text-center p-12">
            <h3 className="text-3xl font-bold mb-6 text-ak-text">Need Additional Help?</h3>
            <p className="text-xl text-ak-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="premium">
                <Mail className="h-5 w-5 mr-2" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="h-5 w-5 mr-2" />
                Request Documentation
              </Button>
            </div>
          </ModernCard>
        </ModernContainer>
      </ModernSection>
    </div>
  );
}