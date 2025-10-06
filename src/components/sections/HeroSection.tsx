import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20 md:py-32 overflow-hidden">
      {/* Background Elements - Subtle geometric patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            {/* Platform Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft border border-gray-200 mb-8">
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                {t('home.hero.platformStatus')}
              </span>
            </div>

            {/* Headline - Verified Scope */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6">
              {t('home.hero.headline')}
            </h1>

            {/* Subheadline - Truthful Value Proposition */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {t('home.hero.subheadline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/#waitlist">
                  {t('home.hero.primaryCTA')}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8" asChild>
                <Link to="/#security">
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('home.hero.secondaryCTA')}
                </Link>
              </Button>
            </div>

            {/* Feature Highlights - Verified Capabilities */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="text-sm text-gray-700">{t('home.hero.feature1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="text-sm text-gray-700">{t('home.hero.feature2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="text-sm text-gray-700">{t('home.hero.feature3')}</span>
              </div>
            </div>
          </div>

          {/* Visual Column - Abstract Platform Representation */}
          <div className="relative">
            <Card className="p-6 shadow-large border-0 overflow-hidden">
              {/* Abstract Data Flow Visualization */}
              <div className="bg-gradient-to-br from-primary-navy to-primary-800 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-medium">AI Keys Workflow</div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Abstract Process Flow */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-primary-800 rounded px-3 py-2">
                    <span className="text-xs">Payment Input</span>
                    <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between bg-primary-800 rounded px-3 py-2">
                    <span className="text-xs">AI Processing</span>
                    <div className="w-2 h-2 bg-warning-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center justify-between bg-primary-800 rounded px-3 py-2">
                    <span className="text-xs">Secure Output</span>
                    <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Security Indicator */}
              <div className="absolute -top-2 -right-2 bg-white text-primary-navy px-3 py-1 rounded-full text-sm font-medium shadow-medium border">
                Secure Platform
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
