import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import heroMockup from '@/assets/hero-phone-transparent.png';
import virtualCard from '@/assets/card-transparent.png';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Clean minimal background - N26 style */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-24 md:py-32">
          {/* Content Column */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-5 py-2.5 border border-gray-200 animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                {t('hero.badge', 'UAE-Based Fintech Platform')}
              </span>
            </div>

            {/* Headline - N26 style large and bold */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t('hero.title1', 'The first wallet')}
              <br />
              <span className="text-primary">{t('hero.title2', 'you\'ll love')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle', 'Bank, send and spend in one beautifully simple app trusted across the GCC.')}
            </p>

            {/* CTA Button - Single prominent button like N26 */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="h-14 px-10 text-base font-semibold rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                asChild
              >
                <a href="#waitlist" className="group inline-flex items-center justify-center">
                  {t('hero.cta.primary', 'Join the waitlist')}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Device Mockup - Right side with smooth animation */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-md">
              {/* Main app mockup */}
              <img 
                src={heroMockup}
                alt="AI KEYS mobile wallet app interface"
                className="w-full h-auto drop-shadow-2xl"
                width={600}
                height={800}
                loading="eager"
              />
              
              {/* Floating card visual */}
              <img 
                src={virtualCard}
                alt="AI KEYS virtual card"
                className="absolute -right-4 md:-right-8 top-16 w-36 md:w-44 h-auto drop-shadow-2xl transform rotate-6 animate-float"
                width={192}
                height={121}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
