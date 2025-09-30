import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { CTABackground } from '@/components/ui/CTABackground';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { ModernCard, ModernCardContent } from '@/components/ui/ModernCard';
import { ModernSection, ModernContainer, ModernGrid } from '@/components/ui/ModernSection';
import { ModernHero } from '@/components/ui/ModernHero';
import { InteractiveSection } from '@/components/ui/InteractiveSection';

import { 
  ArrowRight, 
  Play, 
  Users, 
  TrendingUp, 
  Globe, 
  Shield,
  Wallet,
  Plane,
  Truck,
  GraduationCap,
  Zap,
  Brain,
  Lock,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';
import premiumHeroBg from '@/assets/premium-hero-bg.jpg';
import premiumSectionBg from '@/assets/premium-section-bg.jpg';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: 50000, suffix: '+', label: t('home.stats.users') },
    { icon: TrendingUp, value: 2.5, suffix: 'M+', prefix: '$', label: t('home.stats.transactions') },
    { icon: Globe, value: 45, suffix: '+', label: t('home.stats.countries') },
    { icon: Shield, value: 99.9, suffix: '%', label: t('home.stats.uptime'), decimals: 1 }
  ];

  const services = [
    {
      icon: Wallet,
      title: t('home.services.wallet.title'),
      description: t('home.services.wallet.description'),
      href: '/wallet',
      color: 'fintech-blue'
    },
    {
      icon: Plane,
      title: t('home.services.travel.title'),
      description: t('home.services.travel.description'),
      href: '/travel',
      color: 'fintech-cyan'
    },
    {
      icon: Truck,
      title: t('home.services.logistics.title'),
      description: t('home.services.logistics.description'),
      href: '/logistics',
      color: 'fintech-purple'
    },
    {
      icon: GraduationCap,
      title: t('home.services.education.title'),
      description: t('home.services.education.description'),
      href: '/education',
      color: 'fintech-gold'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: t('home.features.ai.title'),
      description: t('home.features.ai.description')
    },
    {
      icon: Lock,
      title: t('home.features.security.title'),
      description: t('home.features.security.description')
    },
    {
      icon: CheckCircle,
      title: t('home.features.compliance.title'),
      description: t('home.features.compliance.description')
    },
    {
      icon: Zap,
      title: t('home.features.speed.title'),
      description: t('home.features.speed.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ModernHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        badge={t('hero.badge')}
        background={premiumHeroBg}
        backgroundVariant="gradient"
      >
        <BackgroundAnimations variant="hero" />
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Button 
            size="xl" 
            variant="premium"
            className="min-w-[280px] group"
            asChild
          >
            <Link to="/services">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            variant="glass" 
            size="xl" 
            className="min-w-[280px] group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            {t('hero.watchDemo')}
          </Button>
        </div>

        {/* Stats Section inside Hero */}
        <ModernGrid cols={4} gap="lg" className="mt-16">
          {stats.map((stat, index) => (
            <ModernCard key={index} variant="glass" hover="lift" className="text-center p-8">
              <stat.icon className="h-12 w-12 mx-auto mb-6 text-ak-blue group-hover:scale-125 transition-all duration-500" />
              <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-primary bg-clip-text text-transparent">
                <AnimatedCounter 
                  end={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-sm font-medium text-black">
                {stat.label}
              </div>
            </ModernCard>
          ))}
        </ModernGrid>
      </ModernHero>

      {/* Services Preview */}
      <InteractiveSection
        background="mesh"
        interactive={true}
        className="py-20 lg:py-32"
      >
        <BackgroundAnimations variant="section" />
        <ModernContainer>
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-ak-blue text-ak-blue bg-ak-blue/5 px-6 py-2 text-sm font-medium">
              {t('home.servicesBadge')}
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              <span className="text-black">{t('home.servicesTitleTop')}</span>
              <br />
              <span className="bg-gradient-to-r from-ak-blue to-ak-blue/70 bg-clip-text text-transparent">
                {t('home.servicesTitleBottom')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
              {t('home.servicesDescription')}
            </p>
          </div>

          <ModernGrid cols={2} gap="xl" className="mb-20">
            {services.map((service, index) => (
              <ModernCard 
                key={index}
                variant="premium" 
                hover="lift"
                className="group relative overflow-hidden"
              >
                <ModernCardContent className="p-10">
                  <div className="flex items-start space-x-8">
                    <div className={cn(
                      "p-5 rounded-2xl transition-all duration-500 group-hover:scale-110 bg-ak-blue/10 group-hover:bg-ak-blue/20"
                    )}>
                      <service.icon className="h-10 w-10 transition-all duration-500 text-ak-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                      <p className="text-lg text-black/70 mb-8 leading-relaxed">{service.description}</p>
                      <Button asChild size="lg" className="group/btn bg-ak-blue hover:bg-ak-blue/90 text-white">
                        <Link to={service.href}>
                          {t('common.learnMore')}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ModernCardContent>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-ak-blue/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </ModernCard>
            ))}
          </ModernGrid>

          <div className="text-center">
            <Button size="xl" variant="premium" asChild className="group bg-ak-blue hover:bg-ak-blue/90 text-white">
              <Link to="/services">
                {t('home.viewAllServices')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ModernContainer>
      </InteractiveSection>

      {/* Features */}
      <InteractiveSection
        background="particles"
        className="py-20 lg:py-32 bg-accent/5"
      >
        <BackgroundAnimations variant="subtle" />
        <ModernContainer>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
              <span className="text-ak-blue">{t('home.whyTitleTop')}</span> <span className="bg-gradient-to-r from-ak-blue to-ak-blue/70 bg-clip-text text-transparent">{t('home.whyTitleBrand')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
              {t('home.whyDescription')}
            </p>
          </div>

          <ModernGrid cols={4} gap="xl">
            {features.map((feature, index) => (
              <ModernCard key={index} variant="glass" hover="lift" className="text-center p-10 group">
                <feature.icon className="h-16 w-16 mx-auto mb-8 text-ak-blue group-hover:scale-125 transition-all duration-500" />
                <h3 className="font-bold mb-4 text-xl text-black">{feature.title}</h3>
                <p className="text-black/70 leading-relaxed">{feature.description}</p>
              </ModernCard>
            ))}
          </ModernGrid>
        </ModernContainer>
      </InteractiveSection>

      {/* CTA Section */}
      <InteractiveSection
        background="gradient"
        interactive={true}
        className="py-20 lg:py-32"
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in tracking-tight" style={{ WebkitTextStroke: '2px black' }}>
            {t('home.ctaTitleTop')}
            <br />
            <span className="bg-gradient-to-r from-ak-blue to-ak-blue/70 bg-clip-text text-transparent">
              {t('home.ctaTitleBottom')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-black/80 mb-16 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            {t('home.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in">
            <Button size="xl" variant="premium" asChild className="group bg-ak-blue hover:bg-ak-blue/90 text-white">
              <a href="https://keys-pay.com">
                <Wallet className="mr-2 h-6 w-6" />
                {t('home.launchWallet')}
              </a>
            </Button>
            <Button size="xl" variant="glass" asChild className="group border-ak-blue text-ak-blue hover:bg-ak-blue/10">
              <Link to="/contact">
                {t('home.contactSales')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </InteractiveSection>
    </div>
  );
}
