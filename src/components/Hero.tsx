import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Users, TrendingUp, Globe, Shield } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: '50K+', label: t('hero.stats.users') },
    { icon: TrendingUp, value: '$2.5M+', label: t('hero.stats.transactions') },
    { icon: Globe, value: '45+', label: t('hero.stats.countries') },
    { icon: Shield, value: '99.9%', label: t('hero.stats.uptime') }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-fintech-blue/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-fintech-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <Badge 
              variant="outline" 
              className="mb-6 border-fintech-blue text-fintech-blue bg-fintech-blue/5 backdrop-blur-sm animate-fade-in"
            >
              VARA Compliant • Solana Blockchain • Dubai, UAE
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
              <br />
              <span className="text-foreground">
                {t('hero.subtitle')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white border-0 group min-w-[200px]"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-accent/50 backdrop-blur-sm min-w-[200px] group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {t('hero.watchDemo')}
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-fintech-blue group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-fintech-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-fintech-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};