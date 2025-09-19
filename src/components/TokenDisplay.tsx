import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import { TokenApiService, type TokenPrice } from '@/services/tokenApi';
import { useToast } from '@/components/ui/use-toast';

interface TokenData extends TokenPrice {
  change24h: number;
}

export const TokenDisplay = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [tokenData, setTokenData] = useState<TokenData>({
    price: 0.001344,
    change24h: -2.45,
    volume24h: 1250000,
    marketCap: 67000000,
    priceChange24h: -2.45,
    lastUpdated: Date.now()
  });
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        setIsLoading(true);
        const priceData = await TokenApiService.getTokenPrice();
        
        setTokenData({
          ...priceData,
          change24h: priceData.priceChange24h,
        });
      } catch (error) {
        console.error('Error fetching token data:', error);
        toast({
          title: "Connection Error",
          description: "Using cached data. Live updates temporarily unavailable.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokenData();
    const interval = setInterval(fetchTokenData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [toast]);

  const copyContractAddress = async () => {
    const address = TokenApiService.getContractAddress();
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Could not copy address to clipboard",
        variant: "destructive",
      });
    }
  };

  const formatCurrency = (value: number) => TokenApiService.formatPrice(value);
  const formatNumber = (value: number) => TokenApiService.formatNumber(value);
  const platformLinks = TokenApiService.getPlatformLinks();

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent">
          KEYS Token (KEYS)
        </h2>
        <p className="text-xl text-ak-muted">Real-time market data for KEYS on Solana blockchain</p>
        <div className="flex flex-col items-center gap-2 mt-6">
          <Badge variant="outline" className="border-ak-blue/30 text-ak-blue bg-ak-blue/5">
            Solana SPL Token
          </Badge>
          
          {/* Contract Address */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm text-ak-muted">Contract:</span>
            <code className="text-xs bg-ak-beige-300/20 text-ak-text px-3 py-1 rounded font-mono">
              {TokenApiService.getContractAddress().slice(0, 8)}...{TokenApiService.getContractAddress().slice(-8)}
            </code>
            <Button
              size="sm"
              variant="ghost"
              onClick={copyContractAddress}
              className="h-6 w-6 p-0 text-ak-text hover:text-ak-blue"
            >
              {copied ? (
                <CheckCircle className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Price */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-ak-beige-300/30 bg-ak-white/10 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-ak-muted">
              {t('token.price')}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-ak-blue group-hover:animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ak-text">
              {isLoading ? (
                <div className="h-8 w-20 bg-ak-beige-300/20 animate-pulse rounded" />
              ) : (
                formatCurrency(tokenData.price)
              )}
            </div>
          </CardContent>
        </Card>

        {/* 24h Change */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-ak-beige-300/30 bg-ak-white/10 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-ak-muted">
              {t('token.change')}
            </CardTitle>
            {tokenData.change24h >= 0 ? (
              <TrendingUp className="h-4 w-4 text-green-500 group-hover:animate-bounce" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 group-hover:animate-bounce" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${tokenData.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {isLoading ? (
                <div className="h-8 w-16 bg-ak-beige-300/20 animate-pulse rounded" />
              ) : (
                `${tokenData.change24h >= 0 ? '+' : ''}${tokenData.change24h.toFixed(2)}%`
              )}
            </div>
          </CardContent>
        </Card>

        {/* Volume */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-ak-beige-300/30 bg-ak-white/10 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-ak-muted">
              {t('token.volume')}
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-ak-blue group-hover:animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ak-text">
              {isLoading ? (
                <div className="h-8 w-16 bg-ak-beige-300/20 animate-pulse rounded" />
              ) : (
                `$${formatNumber(tokenData.volume24h)}`
              )}
            </div>
          </CardContent>
        </Card>

        {/* Market Cap */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-ak-beige-300/30 bg-ak-white/10 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-ak-muted">
              {t('token.marketCap')}
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-ak-blue group-hover:animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ak-text">
              {isLoading ? (
                <div className="h-8 w-16 bg-ak-beige-300/20 animate-pulse rounded" />
              ) : (
                `$${formatNumber(tokenData.marketCap)}`
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Links & Live Indicator */}
      <div className="mt-8 space-y-6">
        {/* Trading Platforms */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 text-ak-text">Trade KEYS</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(platformLinks.raydium, '_blank')}
              className="border-ak-blue/30 text-ak-blue bg-ak-blue/5 hover:bg-ak-blue hover:text-ak-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Raydium
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(platformLinks.jupiter, '_blank')}
              className="border-ak-blue/30 text-ak-blue bg-ak-blue/5 hover:bg-ak-blue hover:text-ak-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Jupiter
            </Button>
          </div>
        </div>

        {/* Analytics Platforms */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 text-ak-text">Analytics & Info</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(platformLinks.solscan, '_blank')}
              className="border-ak-blue/30 text-ak-blue bg-ak-blue/5 hover:bg-ak-blue hover:text-ak-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Solscan
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(platformLinks.rugcheck, '_blank')}
              className="border-ak-blue/30 text-ak-blue bg-ak-blue/5 hover:bg-ak-blue hover:text-ak-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Rugcheck
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(platformLinks.geckoterminal, '_blank')}
              className="border-ak-blue/30 text-ak-blue bg-ak-blue/5 hover:bg-ak-blue hover:text-ak-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              GeckoTerminal
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 text-ak-text">Community</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(platformLinks.twitter, '_blank')}
              className="border-blue-500/30 text-blue-600 bg-blue-500/5 hover:bg-blue-500 hover:text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(platformLinks.telegram, '_blank')}
              className="border-blue-400/30 text-blue-500 bg-blue-400/5 hover:bg-blue-400 hover:text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Telegram
            </Button>
          </div>
        </div>

        {/* Live indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-ak-muted">
            Live Market Data • Last updated: {new Date(tokenData.lastUpdated).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
};