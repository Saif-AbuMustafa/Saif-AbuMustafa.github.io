import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Blocks,
  Lock,
  Cpu,
  Network,
  CheckCircle
} from 'lucide-react';

export const Technology = () => {
  const { t } = useTranslation();

  const techStack = [
    {
      icon: Brain,
      title: t('technology.ai'),
      description: 'Advanced machine learning algorithms for intelligent automation',
      color: 'fintech-blue',
      features: ['Natural Language Processing', 'Predictive Analytics', 'Smart Routing', 'Risk Assessment']
    },
    {
      icon: Blocks,
      title: t('technology.blockchain'),
      description: 'Built on Solana for fast, scalable, and cost-effective transactions',
      color: 'fintech-purple',
      features: ['SPL Token Standard', 'DeFi Integration', 'Cross-Chain Bridge', 'Smart Contracts']
    },
    {
      icon: Shield,
      title: t('technology.security'),
      description: 'Military-grade encryption and multi-layer security protocols',
      color: 'fintech-cyan',
      features: ['End-to-End Encryption', 'Multi-Sig Wallets', 'Biometric Auth', 'Cold Storage']
    },
    {
      icon: CheckCircle,
      title: t('technology.compliance'),
      description: 'Full regulatory compliance with VARA and international standards',
      color: 'fintech-gold',
      features: ['VARA Approved', 'KYC/AML Compliant', 'ISO 27001', 'SOC 2 Type II']
    }
  ];

  const infrastructure = [
    { icon: Cpu, label: 'High-Performance Computing', value: '99.99% Uptime' },
    { icon: Network, label: 'Global Network', value: '45+ Countries' },
    { icon: Lock, label: 'Security Audits', value: 'Quarterly Reviews' },
    { icon: Zap, label: 'Transaction Speed', value: '<0.4s Average' }
  ];

  return (
    <section id="technology" className="py-20 lg:py-32 relative overflow-hidden bg-accent/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-fintech-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fintech-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-fintech-purple text-fintech-purple">
              Advanced Technology
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">{t('technology.title')}</span>
              <br />
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                {t('technology.subtitle')}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by cutting-edge AI, blockchain technology, and enterprise-grade security infrastructure
            </p>
          </div>

          {/* Technology Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {techStack.map((tech, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-3 rounded-xl bg-${tech.color}/10 group-hover:bg-${tech.color}/20 transition-colors`}>
                      <tech.icon className={`h-8 w-8 text-${tech.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                      <p className="text-muted-foreground text-sm">{tech.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-${tech.color}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${tech.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </Card>
            ))}
          </div>

          {/* Infrastructure Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {infrastructure.map((item, index) => (
              <Card key={index} className="text-center p-6 border-border/50 bg-card/30 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                <item.icon className="h-8 w-8 mx-auto mb-3 text-fintech-blue group-hover:scale-110 transition-transform" />
                <div className="text-lg font-semibold mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>

          {/* Compliance Badges */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-semibold text-center mb-8">Regulatory Compliance & Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'VARA', desc: 'UAE Virtual Asset Regulatory Authority' },
                { name: 'ISO 27001', desc: 'Information Security Management' },
                { name: 'SOC 2', desc: 'Security & Availability Standards' },
                { name: 'GDPR', desc: 'Data Protection Compliance' }
              ].map((cert, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-medium text-sm mb-1">{cert.name}</div>
                  <div className="text-xs text-muted-foreground">{cert.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};