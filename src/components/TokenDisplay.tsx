import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

interface TokenData {
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
}

export const TokenDisplay = () => {
  const { t } = useTranslation();
  const [tokenData, setTokenData] = useState<TokenData>({
    price: 0.0234,
    change24h: 12.45,
    volume24h: 1250000,
    marketCap: 45600000
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - replace with real Solana token API
    const fetchTokenData = async () => {
      try {
        setIsLoading(true);
        // Simulated data - replace with actual API call to fetch SPL token data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data with slight variations to simulate real-time updates
        setTokenData(prev => ({
          price: prev.price + (Math.random() - 0.5) * 0.001,
          change24h: prev.change24h + (Math.random() - 0.5) * 2,
          volume24h: prev.volume24h + (Math.random() - 0.5) * 100000,
          marketCap: prev.marketCap + (Math.random() - 0.5) * 1000000
        }));
      } catch (error) {
        console.error('Error fetching token data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokenData();
    const interval = setInterval(fetchTokenData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value < 1 ? 4 : 2
    }).format(value);
  };

  const formatNumber = (value: number) => {
    if (value >= 1e9) return (value / 1e9).toFixed(2) + 'B';
    if (value >= 1e6) return (value / 1e6).toFixed(2) + 'M';
    if (value >= 1e3) return (value / 1e3).toFixed(2) + 'K';
    return value.toFixed(2);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
          {t('token.title')}
        </h2>
        <p className="text-muted-foreground">{t('token.subtitle')}</p>
        <Badge variant="outline" className="mt-2 border-fintech-blue text-fintech-blue">
          Solana SPL Token
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Price */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('token.price')}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-fintech-blue group-hover:animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <div className="h-8 w-20 bg-muted animate-pulse rounded" />
              ) : (
                formatCurrency(tokenData.price)
              )}
            </div>
          </CardContent>
        </Card>

        {/* 24h Change */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
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
                <div className="h-8 w-16 bg-muted animate-pulse rounded" />
              ) : (
                `${tokenData.change24h >= 0 ? '+' : ''}${tokenData.change24h.toFixed(2)}%`
              )}
            </div>
          </CardContent>
        </Card>

        {/* Volume */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('token.volume')}
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-fintech-cyan group-hover:animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <div className="h-8 w-16 bg-muted animate-pulse rounded" />
              ) : (
                `$${formatNumber(tokenData.volume24h)}`
              )}
            </div>
          </CardContent>
        </Card>

        {/* Market Cap */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('token.marketCap')}
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-fintech-gold group-hover:animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <div className="h-8 w-16 bg-muted animate-pulse rounded" />
              ) : (
                `$${formatNumber(tokenData.marketCap)}`
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live indicator */}
      <div className="flex items-center justify-center mt-6 gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-muted-foreground">Live Market Data</span>
      </div>
    </div>
  );
};