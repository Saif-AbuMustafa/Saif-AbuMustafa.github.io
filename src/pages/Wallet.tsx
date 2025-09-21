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
    { name: 'Solana', symbol: 'SOL', logo: '◉', color: 'fintech-purple' },
    { name: 'Bitcoin', symbol: 'BTC', logo: '₿', color: 'fintech-gold' },
    { name: 'Ethereum', symbol: 'ETH', logo: 'Ξ', color: 'fintech-blue' },
    { name: 'Polygon', symbol: 'MATIC', logo: '⬟', color: 'fintech-cyan' },
    { name: 'Cardano', symbol: 'ADA', logo: '♠', color: 'fintech-blue' },
    { name: 'Chainlink', symbol: 'LINK', logo: '🔗', color: 'fintech-blue' },
    { name: 'Polkadot', symbol: 'DOT', logo: '●', color: 'fintech-pink' },
    { name: 'Avalanche', symbol: 'AVAX', logo: '▲', color: 'fintech-red' }
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
              <ModernCard key={index} variant="premium" hover="lift" className="p-10 group animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start space-x-6 mb-8">
                  <div className="p-4 rounded-xl bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors group-hover:scale-110">
                    <feature.icon className="h-10 w-10 text-ak-blue transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-ak-text animate-slide-in-right" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>{feature.title}</h3>
                    <p className="text-ak-muted text-lg leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>{feature.description}</p>
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
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white animate-enter">
              Everything You Need in <span className="bg-gradient-primary bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.3s' }}>One Wallet</span>
            </h2>
            <p className="text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
              From basic transactions to advanced DeFi strategies, AI KEYS Wallet has you covered
            </p>
          </div>

          <ModernGrid cols={3} gap="lg">
            {walletFeatures.map((feature, index) => (
              <ModernCard key={index} variant="glass" hover="lift" className="text-center p-8 group hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.7}s` }}>
                <feature.icon className="h-16 w-16 mx-auto mb-8 text-ak-blue group-hover:scale-125 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1 + 0.8}s` }} />
                <h3 className="font-bold mb-4 text-xl text-white animate-slide-in-right" style={{ animationDelay: `${index * 0.1 + 0.9}s` }}>{feature.title}</h3>
                <p className="text-ak-muted leading-relaxed animate-fade-in" style={{ animationDelay: `${index * 0.1 + 1}s` }}>{feature.description}</p>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </ModernSection>

      {/* Token Information */}
      <ModernSection padding="xl">
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white animate-enter">
                AI KEYS <span className="bg-gradient-primary bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.3s' }}>Token</span>
              </h2>
              <p className="text-xl md:text-2xl text-ak-muted max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Native SPL token on Solana blockchain powering the entire AI KEYS ecosystem
              </p>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <TokenDisplay />
            </div>
          </div>
        </ModernContainer>
      </ModernSection>

      {/* Security & Compliance */}
      <InteractiveSection background="particles" className="py-20 lg:py-32">
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="security" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-16 bg-ak-beige-300/30">
                <TabsTrigger value="security" className="text-white data-[state=active]:bg-ak-blue data-[state=active]:text-ak-white">Security</TabsTrigger>
                <TabsTrigger value="supported" className="text-white data-[state=active]:bg-ak-blue data-[state=active]:text-ak-white">Supported Assets</TabsTrigger>
                <TabsTrigger value="testimonials" className="text-white data-[state=active]:bg-ak-blue data-[state=active]:text-ak-white">Testimonials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="security">
                <ModernGrid cols={2} gap="xl">
                  <ModernCard variant="glass" hover="lift" className="p-10">
                    <h3 className="text-3xl font-bold mb-6 text-white">
                      <Lock className="inline h-8 w-8 mr-3 text-ak-blue" />
                      Bank-Grade Security
                    </h3>
                    <p className="text-lg text-ak-muted mb-8 leading-relaxed">
                      Your assets are protected by the same security standards used by major financial institutions,
                      with additional blockchain-native security features.
                    </p>
                    <div className="space-y-4">
                      {securityFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-ak-muted font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </ModernCard>
                  <ModernCard variant="premium" hover="lift" className="p-10">
                    <h4 className="text-2xl font-bold mb-8 text-ak-text">Security Roadmap</h4>
                    <ModernGrid cols={2} gap="md">
                      {[
                        { name: 'Q1 2025', desc: 'VARA Application' },
                        { name: 'Q2 2025', desc: 'ISO 27001 Audit' },
                        { name: 'Q3 2025', desc: 'SOC 2 Type II' },
                        { name: 'Q4 2025', desc: 'Insurance Coverage' }
                      ].map((milestone, index) => (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shield className="h-8 w-8 text-white" />
                          </div>
                          <div className="font-bold text-ak-text mb-2">{milestone.name}</div>
                          <div className="text-sm text-ak-muted">{milestone.desc}</div>
                        </div>
                      ))}
                    </ModernGrid>
                  </ModernCard>
                </ModernGrid>
              </TabsContent>
              
              <TabsContent value="supported">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {supportedChains.map((chain, index) => (
                    <Card key={index} className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={cn(
                      "text-4xl mb-4 group-hover:scale-110 transition-transform text-ak-blue animate-scale-in"
                    )} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                      {chain.logo}
                    </div>
                    <h3 className="font-semibold mb-2 text-white animate-slide-in-right" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>{chain.name}</h3>
                    <Badge variant="outline" className="border-ak-blue text-ak-blue bg-ak-blue/5 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
                      {chain.symbol}
                    </Badge>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                  <p className="text-lg text-muted-foreground mb-6">
                    + Support for 100+ cryptocurrencies and tokens
                  </p>
                  <Button variant="outline" size="lg" className="hover-scale story-link">
                    View All Supported Assets
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="testimonials">
                <ModernGrid cols={2} gap="xl">
                  {testimonials.map((testimonial, index) => (
                    <ModernCard key={index} variant="glass" hover="lift" className="p-10">
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-ak-muted mb-8 leading-relaxed">"{testimonial.quote}"</blockquote>
                      <div>
                        <div className="text-lg font-bold text-ak-text">{testimonial.name}</div>
                        <div className="text-ak-muted">{testimonial.role}</div>
                      </div>
                    </ModernCard>
                  ))}
                </ModernGrid>
              </TabsContent>
            </Tabs>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* CTA Section */}
      <InteractiveSection
        background="gradient"
        interactive={true}
        className="py-20 lg:py-32"
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-ak-text">
            Start Your Crypto Journey
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              with AI KEYS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-ak-muted mb-16 max-w-4xl mx-auto leading-relaxed">
            Join thousands of users who trust AI KEYS Wallet for secure, intelligent cryptocurrency management.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button size="xl" variant="premium" className="group hover-scale story-link">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Now
            </Button>
            <Button size="xl" variant="glass" className="group hover-scale story-link" asChild>
              <a href="https://keys-pay.com">
                <QrCode className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Try Web App
              </a>
            </Button>
          </div>
        </div>
      </InteractiveSection>

      <Footer />
    </div>
  );
}