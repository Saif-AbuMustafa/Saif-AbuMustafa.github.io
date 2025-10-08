import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import heroMockup from '@/assets/hero-app-mockup.png';
import virtualCard from '@/assets/virtual-card.png';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      {/* Subtle Background - behind content only */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/30" />
      <div className="absolute top-1/4 -left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30 floating" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40 floating" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center py-16 md:py-24">
          {/* Content Column */}
          <div className="text-left max-w-[720px]">
            {/* GCC Focus Badge */}
            <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200 mb-8 fade-up">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm font-medium text-gray-700">
                {t('hero.badge', 'UAE-Based Fintech Platform')}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight fade-up" style={{ animationDelay: '0.1s' }}>
              {t('hero.title1', 'Money, made simple')}
              <span className="text-primary block">{t('hero.title2', 'across the GCC')}</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-[600px] fade-up" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle', 'Send and spend across borders with virtual & physical cards and a trusted checkout experience.')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="text-base px-8 py-6 h-14 bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#waitlist" className="group">
                  {t('hero.cta.primary', 'Join the waitlist')}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6 h-14 border-2 hover:bg-gray-50" asChild>
                <a href="#security">
                  {t('hero.cta.secondary', 'See security practices')}
                </a>
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 fade-up" style={{ animationDelay: '0.4s' }}>
              <span className="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                {t('hero.features.remittance', 'Cross-border transfers')}
              </span>
              <span className="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                {t('hero.features.cards', 'Virtual & physical cards')}
              </span>
              <span className="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                {t('hero.features.checkout', 'Merchant payments')}
              </span>
            </div>
          </div>

          {/* Device Mockup - Right side */}
          <div className="relative lg:pl-12 fade-up" style={{ animationDelay: '0.5s' }}>
            {/* Main app mockup */}
            <img 
              src={heroMockup}
              alt="AI KEYS mobile wallet app interface"
              className="w-full max-w-[600px] h-auto drop-shadow-2xl floating mx-auto"
              width={600}
              height={400}
              loading="eager"
            />
            
            {/* Floating card visual */}
            <img 
              src={virtualCard}
              alt="AI KEYS virtual card"
              className="absolute -right-8 md:-right-12 top-12 w-40 md:w-48 h-auto drop-shadow-2xl transform rotate-6 floating"
              style={{ animationDelay: '1s' }}
              width={192}
              height={121}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
