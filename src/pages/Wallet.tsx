import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import { ModernSection, ModernContainer, ModernGrid } from '@/components/ui/ModernSection';
import { ModernCard, ModernCardContent } from '@/components/ui/ModernCard';
import { InteractiveSection } from '@/components/ui/InteractiveSection';
import { 
  Wallet, 
  Shield, 
  Zap, 
  Smartphone,
  CreditCard,
  Brain,
  ArrowRight,
  Download,
  QrCode,
  Globe,
  Lock,
  TrendingUp,
  Repeat,
  Send,
  Eye,
  CheckCircle,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import { TokenDisplay } from '@/components/TokenDisplay';
import heroBackground from '@/assets/hero-bg.jpg';
import { cn } from '@/lib/utils';

export default function WalletPage() {
  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Multi-signature wallets, cold storage, and biometric authentication',
      details: ['Hardware security modules', 'Multi-factor authentication', 'Insurance coverage', 'Regulatory compliance']
    },
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Smart portfolio management and automated trading strategies',
      details: ['Portfolio optimization', 'Risk management', 'Yield farming automation', 'Tax optimization']
    },
    {
      icon: Zap,
      title: 'Lightning Fast Transactions',
      description: 'Built on Solana for instant and low-cost transactions',
      details: ['Sub-second settlements', 'Low transaction fees', 'High throughput', 'Solana integration']
    },
    {
      icon: Globe,
      title: 'Multi-Chain Support',
      description: 'Support for Bitcoin, Ethereum, Solana and 100+ cryptocurrencies',
      details: ['Cross-chain swaps', 'Bridge integration', 'DeFi protocols', 'NFT support']
    }
  ];

  const walletFeatures = [
    {
      icon: Send,
      title: 'Send & Receive',
      description: 'Instantly send crypto to anyone, anywhere in the world'
    },
    {
      icon: Repeat,
      title: 'Swap Tokens',
      description: 'Exchange between 100+ cryptocurrencies at best rates'
    },
    {
      icon: TrendingUp,
      title: 'Earn Yield',
      description: 'Stake tokens and participate in DeFi protocols'
    },
    {
      icon: Eye,
      title: 'Portfolio Tracking',
      description: 'Real-time portfolio analytics and performance metrics'
    },
    {
      icon: CreditCard,
      title: 'Fiat Integration',
      description: 'Buy crypto with credit cards and bank transfers'
    },
    {
      icon: QrCode,
      title: 'QR Payments',
      description: 'Pay merchants and friends with simple QR codes'
    }
  ];

  const securityFeatures = [
    'Multi-signature wallet architecture',
    'Hardware security module integration',
    'Biometric authentication (Face ID, Touch ID)',
    'End-to-end encryption',
    'Cold storage for large amounts',
    'Insurance coverage up to $1M',
    'Regular security audits',
    'VARA compliance and regulation'
  ];

  const supportedChains = [
    { name: 'Solana', symbol: 'SOL', logo: '◎', color: 'fintech-purple' },
    { name: 'Bitcoin', symbol: 'BTC', logo: '₿', color: 'fintech-gold' },
    { name: 'Ethereum', symbol: 'ETH', logo: 'Ξ', color: 'fintech-blue' },
    { name: 'Polygon', symbol: 'MATIC', logo: '◊', color: 'fintech-cyan' }
  ];

  const testimonials = [
    {
      name: 'Sarah Al-Mansouri',
      role: 'Digital Entrepreneur',
      quote: 'AI KEYS Wallet has revolutionized how I manage my crypto portfolio. The AI features are incredible!',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      role: 'DeFi Investor',
      quote: 'The security and ease of use are unmatched. Perfect for both beginners and advanced users.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader
        title="Keys Pay"
        subtitle=""
        description="The world's most advanced AI-powered custodian wallet. Secure crypto and fiat storage with intelligent automation, built on Solana blockchain with full VARA compliance."
        badge="Live Now • VARA Compliant • Solana Powered"
        background={heroBackground}
        showBackButton
        backTo="/services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
            <Download className="mr-2 h-5 w-5" />
            Download Wallet
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8" asChild>
            <a href="https://keys-pay.com">
              <QrCode className="mr-2 h-5 w-5" />
              Web App
            </a>
          </Button>
        </div>
      </PageHeader>

      {/* Features Overview */}
      <InteractiveSection background="gradient" className="py-20 lg:py-32">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <ModernGrid cols={2} gap="xl">
            {features.map((feature, index) => (
              <ModernCard key={index} variant="premium" hover="lift" className="p-10 group">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="p-4 rounded-xl bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors">
                    <feature.icon className="h-10 w-10 text-ak-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-ak-text">{feature.title}</h3>
                    <p className="text-ak-muted text-lg leading-relaxed mb-6">{feature.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-ak-muted font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </InteractiveSection>

      {/* Wallet Features */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-ak-text">
              Everything You Need in <span className="bg-gradient-primary bg-clip-text text-transparent">One Wallet</span>
            </h2>
            <p className="text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed">
              From basic transactions to advanced DeFi strategies, AI KEYS Wallet has you covered
            </p>
          </div>

          <ModernGrid cols={3} gap="lg">
            {walletFeatures.map((feature, index) => (
              <ModernCard key={index} variant="glass" hover="lift" className="text-center p-8 group">
                <feature.icon className="h-16 w-16 mx-auto mb-8 text-ak-blue group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-4 text-xl text-ak-text">{feature.title}</h3>
                <p className="text-ak-muted leading-relaxed">{feature.description}</p>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </ModernSection>

      {/* Token Information */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI KEYS <span className="bg-gradient-primary bg-clip-text text-transparent">Token</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Native SPL token on Solana blockchain powering the entire AI KEYS ecosystem
              </p>
            </div>
            
            <TokenDisplay />
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="security" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-16">
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="supported">Supported Assets</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="security">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">
                      <Lock className="inline h-8 w-8 mr-3 text-fintech-blue" />
                      Bank-Grade Security
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      Your assets are protected by the same security standards used by major financial institutions,
                      with additional blockchain-native security features.
                    </p>
                    <div className="space-y-4">
                      {securityFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                    <h4 className="text-xl font-semibold mb-6">Security Roadmap</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { name: 'Q1 2025', desc: 'VARA Application' },
                        { name: 'Q2 2025', desc: 'ISO 27001 Audit' },
                        { name: 'Q3 2025', desc: 'SOC 2 Type II' },
                        { name: 'Q4 2025', desc: 'Insurance Coverage' }
                      ].map((milestone, index) => (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Shield className="h-8 w-8 text-white" />
                          </div>
                          <div className="font-medium text-sm mb-1">{milestone.name}</div>
                          <div className="text-xs text-muted-foreground">{milestone.desc}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="supported">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {supportedChains.map((chain, index) => (
                    <Card key={index} className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className={cn(
                    "text-4xl mb-4 group-hover:scale-110 transition-transform",
                    chain.color === 'fintech-blue' && 'text-fintech-blue',
                    chain.color === 'fintech-cyan' && 'text-fintech-cyan',
                    chain.color === 'fintech-purple' && 'text-fintech-purple',
                    chain.color === 'fintech-gold' && 'text-fintech-gold'
                  )}>
                    {chain.logo}
                  </div>
                  <h3 className="font-semibold mb-2">{chain.name}</h3>
                  <Badge variant="outline" className={cn(
                    chain.color === 'fintech-blue' && 'border-fintech-blue text-fintech-blue',
                    chain.color === 'fintech-cyan' && 'border-fintech-cyan text-fintech-cyan', 
                    chain.color === 'fintech-purple' && 'border-fintech-purple text-fintech-purple',
                    chain.color === 'fintech-gold' && 'border-fintech-gold text-fintech-gold'
                  )}>
                        {chain.symbol}
                      </Badge>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <p className="text-lg text-muted-foreground mb-6">
                    + Support for 100+ cryptocurrencies and tokens
                  </p>
                  <Button variant="outline" size="lg">
                    View All Supported Assets
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="testimonials">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden mouse-follow-container">
        <CTABackground />
        <MouseFollower />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your Crypto Journey
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                with AI KEYS
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of users who trust AI KEYS Wallet for secure, intelligent cryptocurrency management.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white h-14 px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8" asChild>
                <a href="https://keys-pay.com">
                  <QrCode className="mr-2 h-5 w-5" />
                  Try Web App
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}