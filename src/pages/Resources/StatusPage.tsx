import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Activity,
  Server,
  Database,
  Smartphone,
  Globe
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export default function StatusPage() {
  const currentStatus = 'operational'; // operational, degraded, down

  const services = [
    {
      name: 'AI KEYS Wallet',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'None',
      description: 'Core wallet services and transactions'
    },
    {
      name: 'Travel Platform',
      status: 'operational',
      uptime: '99.97%',
      lastIncident: '2 days ago',
      description: 'Flight and hotel booking services'
    },
    {
      name: 'Logistics Network',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: 'None',
      description: 'Package tracking and delivery management'
    },
    {
      name: 'Education Portal',
      status: 'operational',
      uptime: '99.98%',
      lastIncident: 'None',
      description: 'Learning management and course delivery'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.96%',
      lastIncident: '1 day ago',
      description: 'Developer API and integrations'
    },
    {
      name: 'Mobile Applications',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: 'None',
      description: 'iOS and Android mobile apps'
    }
  ];

  const recentIncidents = [
    {
      title: 'API Rate Limiting Issues',
      status: 'resolved',
      date: '2024-01-15 14:30 UTC',
      duration: '23 minutes',
      impact: 'Some API requests experienced delays'
    },
    {
      title: 'Travel Search Slow Response',
      status: 'resolved',
      date: '2024-01-14 09:15 UTC',
      duration: '1 hour 12 minutes',
      impact: 'Travel search took longer than usual'
    },
    {
      title: 'Scheduled Maintenance',
      status: 'completed',
      date: '2024-01-10 02:00 UTC',
      duration: '2 hours',
      impact: 'Planned database optimization'
    }
  ];

  const metrics = [
    { label: 'Overall Uptime', value: '99.98%', icon: Activity },
    { label: 'Response Time', value: '142ms', icon: Clock },
    { label: 'Active Users', value: '47,892', icon: Smartphone },
    { label: 'API Calls/min', value: '15.2K', icon: Server }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'down':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Operational</Badge>;
      case 'degraded':
        return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Degraded</Badge>;
      case 'down':
        return <Badge className="bg-red-500/10 text-red-600 border-red-500/20">Down</Badge>;
      case 'resolved':
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Resolved</Badge>;
      case 'completed':
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Completed</Badge>;
      default:
        return <Badge className="bg-gray-500/10 text-gray-600 border-gray-500/20">Unknown</Badge>;
    }
  };

  return (
    <div className="pt-20">
      <PageHeader
        title="System"
        subtitle="Status"
        description="Real-time status and performance monitoring for all AI KEYS services and infrastructure."
        badge="Live Updates • 99.98% Uptime • Global Monitoring"
        background={heroBackground}
        showBackButton
        backTo="/about"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="text-lg font-semibold">All Systems Operational</span>
          </div>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <Globe className="mr-2 h-5 w-5" />
            Subscribe to Updates
          </Button>
        </div>
      </PageHeader>

      {/* Metrics Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <metric.icon className="h-8 w-8 mx-auto mb-3 text-fintech-blue" />
                  <div className="text-2xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Service Status</h2>
            
            <div className="grid gap-4">
              {services.map((service, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      {getStatusBadge(service.status)}
                      <div className="text-sm text-muted-foreground">
                        Uptime: <span className="font-medium">{service.uptime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Recent Incidents</h2>
              <Button variant="outline">
                View All Incidents
              </Button>
            </div>

            <div className="space-y-4">
              {recentIncidents.map((incident, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold">{incident.title}</h3>
                        {getStatusBadge(incident.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{incident.impact}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{incident.date}</span>
                        <span>Duration: {incident.duration}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get notified about service updates, maintenance windows, and incidents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white">
                <Globe className="mr-2 h-5 w-5" />
                Subscribe to Status Updates
              </Button>
              <Button size="lg" variant="outline">
                <Database className="mr-2 h-5 w-5" />
                Historical Data
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}