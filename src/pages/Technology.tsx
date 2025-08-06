import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Shield, 
  Zap, 
  Code,
  Database,
  Globe,
  Lock,
  TrendingUp,
  ArrowRight,
  Cpu,
  Network,
  CheckCircle,
  Blocks,
  Smartphone,
  Cloud,
  Eye,
  Users,
  BarChart3,
  Layers,
  GitBranch,
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

export default function Technology() {
  const techStack = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced machine learning algorithms for intelligent automation and prediction',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Natural Language Processing'],
      color: 'fintech-blue'
    },
    {
      icon: Blocks,
      title: 'Blockchain Infrastructure',
      description: 'Built on Solana for fast, scalable, and cost-effective transactions',
      technologies: ['Solana', 'Rust', 'Smart Contracts', 'Web3.js'],
      color: 'fintech-purple'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security with multiple layers of protection',
      technologies: ['Zero Trust', 'Multi-Factor Auth', 'End-to-End Encryption', 'Hardware Security'],
      color: 'fintech-cyan'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud infrastructure with global distribution',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Microservices'],
      color: 'fintech-gold'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced language understanding for seamless user interactions',
      applications: ['Chatbots', 'Document Analysis', 'Translation', 'Sentiment Analysis']
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and risk assessment',
      applications: ['Market Prediction', 'Risk Analysis', 'Fraud Detection', 'Trend Forecasting']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for enhanced security and automation',
      applications: ['Biometric Auth', 'Document Verification', 'Image Recognition', 'Video Analytics']
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks for complex pattern recognition and decision making',
      applications: ['Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems', 'Optimization']
    }
  ];

  const blockchainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second transaction finality with Solana\'s Proof of History',
      metrics: ['<0.4s', 'Transaction Time']
    },
    {
      icon: TrendingUp,
      title: 'Highly Scalable',
      description: 'Handles thousands of transactions per second',
      metrics: ['65,000+', 'TPS Capacity']
    },
    {
      icon: BarChart3,
      title: 'Low Cost',
      description: 'Minimal transaction fees for global accessibility',
      metrics: ['<$0.01', 'Average Fee']
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Decentralized validators worldwide for maximum reliability',
      metrics: ['1,000+', 'Validators']
    }
  ];

  const securityLayers = [
    {
      layer: 'Application Layer',
      features: ['Code Audits', 'Penetration Testing', 'Vulnerability Scanning', 'Security Headers'],
      icon: Code
    },
    {
      layer: 'Infrastructure Layer',
      features: ['DDoS Protection', 'Firewall Rules', 'VPN Access', 'Network Segmentation'],
      icon: Network
    },
    {
      layer: 'Data Layer',
      features: ['AES-256 Encryption', 'Data Classification', 'Backup Systems', 'Access Controls'],
      icon: Database
    },
    {
      layer: 'Identity Layer',
      features: ['Multi-Factor Auth', 'Biometric Verification', 'Role-Based Access', 'Session Management'],
      icon: Users
    }
  ];

  const developmentProcess = [
    {
      phase: 'Research & Design',
      description: 'Comprehensive research and user-centered design approach',
      tools: ['Figma', 'User Research', 'Prototyping', 'A/B Testing'],
      duration: '2-4 weeks'
    },
    {
      phase: 'Development',
      description: 'Agile development with continuous integration and deployment',
      tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      duration: '8-12 weeks'
    },
    {
      phase: 'Testing & QA',
      description: 'Comprehensive testing including security and performance',
      tools: ['Jest', 'Cypress', 'Security Audits', 'Load Testing'],
      duration: '2-3 weeks'
    },
    {
      phase: 'Deployment',
      description: 'Secure deployment with monitoring and analytics',
      tools: ['AWS', 'Docker', 'Monitoring', 'Analytics'],
      duration: '1 week'
    }
  ];

  const compliance = [
    {
      standard: 'VARA',
      description: 'UAE Virtual Asset Regulatory Authority compliance',
      scope: 'Cryptocurrency operations and digital asset management'
    },
    {
      standard: 'ISO 27001',
      description: 'International standard for information security management',
      scope: 'Information security policies and procedures'
    },
    {
      standard: 'SOC 2 Type II',
      description: 'Security and availability compliance certification',
      scope: 'Internal controls and security processes'
    },
    {
      standard: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      scope: 'Data privacy and protection for EU users'
    }
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Cutting-Edge"
        subtitle="Technology Stack"
        description="Built on the most advanced technologies in AI, blockchain, and cybersecurity. Our platform leverages cutting-edge innovations to deliver unparalleled performance, security, and user experience."
        badge="Enterprise Grade • AI-Powered • Blockchain Native"
        background={heroBackground}
        showBackButton
        backTo="/services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Code className="mr-2 h-5 w-5" />
            View Documentation
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8">
            <GitBranch className="mr-2 h-5 w-5" />
            Open Source
          </Button>
        </div>
      </PageHeader>

      {/* Technology Stack Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {techStack.map((tech, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${tech.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-3 rounded-xl bg-${tech.color}/10 group-hover:bg-${tech.color}/20 transition-colors`}>
                        <tech.icon className={`h-8 w-8 text-${tech.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                        <p className="text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {tech.technologies.map((technology, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className={`w-2 h-2 rounded-full bg-${tech.color}`} />
                          <span className="text-muted-foreground">{technology}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Technology Sections */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="ai" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-16">
                <TabsTrigger value="ai">AI & Machine Learning</TabsTrigger>
                <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ai">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">
                    <Brain className="inline h-8 w-8 mr-3 text-fintech-blue" />
                    Artificial Intelligence
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our AI systems leverage the latest advances in machine learning to provide intelligent 
                    automation, predictive analytics, and personalized experiences.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {aiCapabilities.map((capability, index) => (
                    <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                      <h4 className="text-xl font-semibold mb-3">{capability.title}</h4>
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {capability.applications.map((app, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-muted-foreground">{app}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="blockchain">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">
                    <Blocks className="inline h-8 w-8 mr-3 text-fintech-purple" />
                    Blockchain Infrastructure
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Built on Solana blockchain for maximum performance, scalability, and cost-effectiveness 
                    while maintaining enterprise-grade security.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {blockchainFeatures.map((feature, index) => (
                    <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                      <feature.icon className="h-12 w-12 mx-auto mb-4 text-fintech-purple" />
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      <div className="text-2xl font-bold text-fintech-purple">{feature.metrics[0]}</div>
                      <div className="text-xs text-muted-foreground">{feature.metrics[1]}</div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="security">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">
                    <Shield className="inline h-8 w-8 mr-3 text-fintech-cyan" />
                    Multi-Layer Security
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Enterprise-grade security with multiple layers of protection, regular audits, 
                    and compliance with international standards.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {securityLayers.map((layer, index) => (
                    <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-4">
                        <layer.icon className="h-6 w-6 text-fintech-cyan" />
                        <h4 className="text-xl font-semibold">{layer.layer}</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {layer.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="development">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">
                    <Code className="inline h-8 w-8 mr-3 text-fintech-gold" />
                    Development Process
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Agile development methodology with continuous integration, automated testing, 
                    and rapid deployment cycles.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {developmentProcess.map((phase, index) => (
                    <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold mb-2">{phase.phase}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                      <Badge variant="outline" className="mb-3">{phase.duration}</Badge>
                      <div className="space-y-1">
                        {phase.tools.map((tool, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground">{tool}</div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Compliance & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We adhere to the highest industry standards and regulatory requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {compliance.map((cert, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{cert.standard}</h3>
                      <p className="text-muted-foreground mb-3">{cert.description}</p>
                      <div className="text-sm text-fintech-blue">
                        <strong>Scope:</strong> {cert.scope}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Performance <span className="bg-gradient-primary bg-clip-text text-transparent">Metrics</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-time performance data from our production systems
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '99.99%', label: 'Uptime', icon: Server },
                { metric: '<100ms', label: 'API Response', icon: Zap },
                { metric: '50M+', label: 'Transactions', icon: BarChart3 },
                { metric: '256-bit', label: 'Encryption', icon: Lock }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-8 border-border/50 bg-card/30 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <stat.icon className="h-12 w-12 mx-auto mb-6 text-fintech-blue group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <CTABackground />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ready to Build the
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Future of Finance?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
              Join our team of world-class engineers building the next generation of AI-powered fintech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button size="lg" asChild className="bg-gradient-primary text-white h-14 px-8">
                <Link to="/careers">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Team
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8">
                <Code className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}