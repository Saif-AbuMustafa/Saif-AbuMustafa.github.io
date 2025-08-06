import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { CTABackground } from '@/components/ui/CTABackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TokenDisplay } from '@/components/TokenDisplay';
import { TokenApiService } from '@/services/tokenApi';
import { 
  Coins, 
  TrendingUp, 
  BarChart3,
  DollarSign,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Download,
  ExternalLink,
  PieChart,
  Activity,
  Target,
  Wallet,
  Lock,
  CheckCircle,
  Calendar,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

interface TokenMetrics {
  price: number;
  marketCap: number;
  volume24h: number;
  holders: number;
  totalSupply: number;
  circulatingSupply: number;
}

export default function Token() {
  const [tokenMetrics, setTokenMetrics] = useState<TokenMetrics>({
    price: 0.001344,
    marketCap: 67000000,
    volume24h: 1250000,
    holders: 600,
    totalSupply: 50000000000, // 50B tokens
    circulatingSupply: 36000000000 // 72% circulating based on rugcheck data
  });

  useEffect(() => {
    const fetchRealTokenData = async () => {
      try {
        const [priceData, tokenInfo] = await Promise.all([
          TokenApiService.getTokenPrice(),
          TokenApiService.getTokenInfo()
        ]);
        
        setTokenMetrics(prev => ({
          ...prev,
          price: priceData.price,
          marketCap: priceData.marketCap,
          volume24h: priceData.volume24h,
          holders: tokenInfo.holders,
          totalSupply: tokenInfo.totalSupply,
          circulatingSupply: tokenInfo.totalSupply * 0.72 // 72% based on LP locked data
        }));
      } catch (error) {
        console.error('Error fetching real token data:', error);
      }
    };

    fetchRealTokenData();
  }, []);

  const tokenomics = [
    {
      category: 'Public Sale',
      percentage: 35,
      amount: 350000000,
      color: 'fintech-blue',
      description: 'Available for public trading and liquidity'
    },
    {
      category: 'Team & Advisors',
      percentage: 20,
      amount: 200000000,
      color: 'fintech-purple',
      description: 'Locked for 2 years with vesting schedule'
    },
    {
      category: 'Development',
      percentage: 25,
      amount: 250000000,
      color: 'fintech-cyan',
      description: 'Platform development and improvements'
    },
    {
      category: 'Marketing',
      percentage: 10,
      amount: 100000000,
      color: 'fintech-gold',
      description: 'Marketing and community growth'
    },
    {
      category: 'Reserve',
      percentage: 10,
      amount: 100000000,
      color: 'fintech-blue',
      description: 'Strategic reserve and partnerships'
    }
  ];

  const utilities = [
    {
      icon: Wallet,
      title: 'Payment Medium',
      description: 'Use AI KEYS tokens for all platform transactions with reduced fees',
      benefits: ['50% fee discount', 'Priority processing', 'Instant settlements']
    },
    {
      icon: Users,
      title: 'Governance Rights',
      description: 'Vote on platform upgrades and strategic decisions',
      benefits: ['Voting power', 'Proposal submission', 'Community governance']
    },
    {
      icon: TrendingUp,
      title: 'Staking Rewards',
      description: 'Stake tokens to earn yield and platform benefits',
      benefits: ['Up to 12% APY', 'Compound rewards', 'Exclusive features']
    },
    {
      icon: Shield,
      title: 'Premium Features',
      description: 'Access advanced AI features and analytics',
      benefits: ['AI insights', 'Advanced tools', 'Priority support']
    }
  ];

  const roadmap = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      title: 'Token Launch',
      description: 'Initial token launch on Solana blockchain',
      milestones: ['Smart contract deployment', 'Initial DEX listing', 'Community building']
    },
    {
      quarter: 'Q2 2024',
      status: 'in-progress',
      title: 'Platform Integration',
      description: 'Token integration across AI KEYS services',
      milestones: ['Wallet integration', 'Payment processing', 'Staking mechanism']
    },
    {
      quarter: 'Q3 2024',
      status: 'upcoming',
      title: 'Governance Launch',
      description: 'Decentralized governance implementation',
      milestones: ['DAO structure', 'Voting system', 'Proposal mechanism']
    },
    {
      quarter: 'Q4 2024',
      status: 'upcoming',
      title: 'Ecosystem Expansion',
      description: 'Cross-chain integration and partnerships',
      milestones: ['Bridge development', 'Partner integrations', 'Yield farming']
    }
  ];

  const partnerships = [
    {
      name: 'Solana Foundation',
      type: 'Blockchain Infrastructure',
      description: 'Built on Solana for fast, secure transactions',
      logo: '◎'
    },
    {
      name: 'Raydium',
      type: 'Primary DEX',
      description: 'Main liquidity pool with 72% locked LP tokens',
      logo: '🚀'
    },
    {
      name: 'Jupiter',
      type: 'Aggregated Trading',
      description: 'Best price discovery across Solana DEXs',
      logo: '🪐'
    },
    {
      name: 'FluxBot',
      type: 'Trading Bot',
      description: 'Automated trading integration via Telegram',
      logo: '🤖'
    }
  ];

  const platformLinks = TokenApiService.getPlatformLinks();

  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value < 1 ? 4 : 2
    }).format(value);
  };

  return (
    <div className="pt-20">
      <PageHeader
        title="AI KEYS"
        subtitle="Token (SPL)"
        description="The native utility token powering the entire AI KEYS ecosystem. Built on Solana blockchain for fast, secure, and cost-effective transactions with comprehensive utility across all platform services."
        badge="Live on Solana • SPL Token • Fully Audited"
        background={heroBackground}
        showBackButton
        backTo="/services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-white h-14 px-8"
            onClick={() => window.open(platformLinks.raydium, '_blank')}
          >
            <Coins className="mr-2 h-5 w-5" />
            Buy on Raydium
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8"
            onClick={() => window.open(platformLinks.jupiter, '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Trade on Jupiter
          </Button>
        </div>
      </PageHeader>

      {/* Live Token Data */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <TokenDisplay />
        </div>
      </section>

      {/* Token Metrics */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Token <span className="bg-gradient-primary bg-clip-text text-transparent">Metrics</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-time metrics and statistics for AI KEYS token
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  label: 'Total Supply', 
                  value: formatNumber(tokenMetrics.totalSupply), 
                  icon: Coins,
                  color: 'fintech-blue'
                },
                { 
                  label: 'Circulating Supply', 
                  value: formatNumber(tokenMetrics.circulatingSupply), 
                  icon: Activity,
                  color: 'fintech-cyan'
                },
                { 
                  label: 'Token Holders', 
                  value: formatNumber(tokenMetrics.holders), 
                  icon: Users,
                  color: 'fintech-purple'
                },
                { 
                  label: 'Market Cap', 
                  value: `$${formatNumber(tokenMetrics.marketCap)}`, 
                  icon: TrendingUp,
                  color: 'fintech-gold'
                },
                { 
                  label: '24h Volume', 
                  value: `$${formatNumber(tokenMetrics.volume24h)}`, 
                  icon: BarChart3,
                  color: 'fintech-blue'
                },
                { 
                  label: 'Current Price', 
                  value: formatCurrency(tokenMetrics.price), 
                  icon: DollarSign,
                  color: 'fintech-cyan'
                }
              ].map((metric, index) => (
                <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <metric.icon className={`h-10 w-10 mx-auto mb-4 text-${metric.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Token <span className="bg-gradient-primary bg-clip-text text-transparent">Distribution</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transparent and sustainable token distribution model
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Pie Chart Representation */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-conic from-fintech-blue via-fintech-purple via-fintech-cyan via-fintech-gold to-fintech-blue shadow-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-background rounded-full shadow-inner flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">1B</div>
                      <div className="text-sm text-muted-foreground">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribution Details */}
              <div className="space-y-6">
                {tokenomics.map((item, index) => (
                  <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full bg-${item.color}`}></div>
                        <h3 className="font-semibold">{item.category}</h3>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{item.percentage}%</div>
                        <div className="text-sm text-muted-foreground">{formatNumber(item.amount)}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Token <span className="bg-gradient-primary bg-clip-text text-transparent">Utility</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Multiple use cases and benefits within the AI KEYS ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {utilities.map((utility, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-fintech-blue/10 group-hover:bg-fintech-blue/20 transition-colors">
                      <utility.icon className="h-8 w-8 text-fintech-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{utility.title}</h3>
                      <p className="text-muted-foreground">{utility.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {utility.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Development <span className="bg-gradient-primary bg-clip-text text-transparent">Roadmap</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our planned milestones and upcoming features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roadmap.map((phase, index) => (
                <Card key={index} className={`p-6 border-border/50 bg-card/50 backdrop-blur-sm relative ${
                  phase.status === 'completed' ? 'border-green-500/50' : 
                  phase.status === 'in-progress' ? 'border-fintech-blue/50' : 
                  'border-border/50'
                }`}>
                  <Badge 
                    variant={phase.status === 'completed' ? 'default' : 'outline'}
                    className={`mb-4 ${
                      phase.status === 'completed' ? 'bg-green-500 text-white' :
                      phase.status === 'in-progress' ? 'border-fintech-blue text-fintech-blue' :
                      'border-muted-foreground text-muted-foreground'
                    }`}
                  >
                    {phase.quarter}
                  </Badge>
                  
                  <h3 className="font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                  
                  <div className="space-y-2">
                    {phase.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs">
                        {phase.status === 'completed' ? (
                          <CheckCircle className="h-3 w-3 text-green-500" />
                        ) : (
                          <div className="w-3 h-3 rounded-full border border-muted-foreground" />
                        )}
                        <span className="text-muted-foreground">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 lg:py-32 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strategic <span className="bg-gradient-primary bg-clip-text text-transparent">Partnerships</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Collaborating with leading platforms and protocols in the Solana ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerships.map((partner, index) => (
                <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="font-semibold mb-2">{partner.name}</h3>
                  <Badge variant="outline" className="mb-3 text-xs">{partner.type}</Badge>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How to <span className="bg-gradient-primary bg-clip-text text-transparent">Buy AI KEYS</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Simple steps to purchase AI KEYS tokens and join our ecosystem
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: '1',
                  title: 'Setup Wallet',
                  description: 'Install Phantom or Solflare wallet and fund with SOL'
                },
                {
                  step: '2',
                  title: 'Visit DEX',
                  description: 'Go to Raydium or Jupiter and connect your wallet'
                },
                {
                  step: '3',
                  title: 'Swap Tokens',
                  description: 'Exchange SOL for AI KEYS tokens instantly'
                }
              ].map((step, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white h-14 px-8"
                onClick={() => window.open(platformLinks.raydium, '_blank')}
              >
                <Coins className="mr-2 h-5 w-5" />
                Buy on Raydium
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8"
                onClick={() => window.open(platformLinks.geckoterminal, '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View on GeckoTerminal
              </Button>
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
              Join the AI KEYS
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Revolution
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
              Be part of the future of AI-powered finance. Get AI KEYS tokens and unlock exclusive benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white h-14 px-8"
                onClick={() => window.open(platformLinks.jupiter, '_blank')}
              >
                <Wallet className="mr-2 h-5 w-5" />
                Start Trading
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8"
                onClick={() => window.open(platformLinks.solscan, '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Contract
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}