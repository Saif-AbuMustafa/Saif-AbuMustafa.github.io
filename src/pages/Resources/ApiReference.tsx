import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Key, 
  Globe,
  CheckCircle,
  ArrowRight,
  Copy
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export default function ApiReference() {
  const apiEndpoints = [
    {
      category: 'Authentication',
      icon: Key,
      endpoints: [
        { method: 'POST', path: '/auth/login', description: 'User authentication' },
        { method: 'POST', path: '/auth/refresh', description: 'Refresh access token' },
        { method: 'POST', path: '/auth/logout', description: 'User logout' }
      ]
    },
    {
      category: 'Wallet Operations',
      icon: Database,
      endpoints: [
        { method: 'GET', path: '/wallet/balance', description: 'Get wallet balance' },
        { method: 'POST', path: '/wallet/transfer', description: 'Transfer funds' },
        { method: 'GET', path: '/wallet/history', description: 'Transaction history' }
      ]
    },
    {
      category: 'Travel Services',
      icon: Globe,
      endpoints: [
        { method: 'GET', path: '/travel/search', description: 'Search travel options' },
        { method: 'POST', path: '/travel/book', description: 'Book travel service' },
        { method: 'GET', path: '/travel/bookings', description: 'Get user bookings' }
      ]
    }
  ];

  const features = [
    'RESTful API design',
    'OAuth 2.0 authentication',
    'Rate limiting protection',
    'Comprehensive error handling',
    'Real-time webhooks',
    'SDKs for multiple languages'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHeader
        title="API Reference"
        subtitle="Developer Documentation"
        description="Complete API documentation for integrating with AI KEYS platform"
        badge="RESTful • Secure • Well Documented"
        background={heroBackground}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* API Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started with AI KEYS API</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    The AI KEYS API provides programmatic access to our platform's core functionality. 
                    Build powerful applications with secure, reliable, and scalable endpoints.
                  </p>
                  
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Base URL
                    </h4>
                    <div className="flex items-center justify-between bg-background p-3 rounded border">
                      <code className="text-sm">https://api.aikeys.ai/v1</code>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="text-center p-6">
                <h3 className="font-semibold mb-2">API Status</h3>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-600">All systems operational</span>
                </div>
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Status Page
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Authentication</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Include your API key in the Authorization header:
                </p>
                <div className="bg-muted p-3 rounded text-xs font-mono">
                  Authorization: Bearer YOUR_API_KEY
                </div>
              </Card>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="space-y-8">
            {apiEndpoints.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <category.icon className="h-6 w-6 text-fintech-blue" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div 
                        key={endpointIndex}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <Badge 
                            variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                            className="min-w-[60px] justify-center"
                          >
                            {endpoint.method}
                          </Badge>
                          <div>
                            <code className="text-sm font-mono">{endpoint.path}</code>
                            <p className="text-xs text-muted-foreground mt-1">
                              {endpoint.description}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SDK Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Official SDKs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Get started quickly with our official SDKs and libraries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {['JavaScript', 'Python', 'PHP', 'Go'].map((language, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">{language}</h4>
                    <Button variant="outline" size="sm">
                      <Code className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card className="mt-12 text-center p-8">
            <h3 className="text-xl font-semibold mb-4">Need Help with Integration?</h3>
            <p className="text-muted-foreground mb-6">
              Our developer support team is ready to help you build amazing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                Contact Developer Support
              </Button>
              <Button variant="outline">
                Join Developer Community
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}