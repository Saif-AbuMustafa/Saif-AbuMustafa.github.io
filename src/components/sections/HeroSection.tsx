import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 -left-10 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-20 animate-float-slow" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30 animate-float-slower" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            {/* GCC Focus Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft border border-gray-200 mb-8">
              <div className="w-2 h-2 bg-success-500 rounded-full" />
              <span className="text-sm font-medium text-gray-700">
                {t('home.hero.badge')}
              </span>
            </div>

            {/* Real Product Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6">
              {t('home.hero.headline1')}
              <span className="text-primary-blue block">{t('home.hero.headline2')}</span>
            </h1>

            {/* Real Value Proposition */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {t('home.hero.subheadline')}
            </p>

            {/* Product Feature Highlights */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="bg-white rounded-lg px-4 py-2 shadow-soft border border-gray-200 text-sm font-medium text-gray-700">
                {t('home.hero.feature1')}
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-soft border border-gray-200 text-sm font-medium text-gray-700">
                {t('home.hero.feature2')}
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-soft border border-gray-200 text-sm font-medium text-gray-700">
                {t('home.hero.feature3')}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/services">
                  {t('home.hero.primaryCTA')}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/contact">
                  {t('home.hero.secondaryCTA')}
                </Link>
              </Button>
            </div>
          </div>

          {/* Product Visualization */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Card Tier Visualization */}
              <div className="bg-white rounded-2xl p-6 shadow-large border-0 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-md mx-auto mb-3"></div>
                  <div className="font-semibold text-gray-900">{t('home.hero.card1.title')}</div>
                  <div className="text-sm text-gray-600">{t('home.hero.card1.subtitle')}</div>
                </div>
              </div>
              
              {/* Remittance Visualization */}
              <div className="bg-white rounded-2xl p-6 shadow-large border-0 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-teal rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">{t('home.hero.card2.title')}</div>
                  <div className="text-sm text-gray-600">{t('home.hero.card2.subtitle')}</div>
                </div>
              </div>

              {/* Checkout Visualization */}
              <div className="bg-white rounded-2xl p-6 shadow-large border-0 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-warning-500 to-warning-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">{t('home.hero.card3.title')}</div>
                  <div className="text-sm text-gray-600">{t('home.hero.card3.subtitle')}</div>
                </div>
              </div>

              {/* AI Apps Visualization */}
              <div className="bg-white rounded-2xl p-6 shadow-large border-0 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">{t('home.hero.card4.title')}</div>
                  <div className="text-sm text-gray-600">{t('home.hero.card4.subtitle')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
