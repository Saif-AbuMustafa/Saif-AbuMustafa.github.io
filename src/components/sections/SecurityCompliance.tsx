import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const SecurityCompliance = () => {
  const { t } = useTranslation();

  const securityFeatures = [
    {
      titleKey: 'home.security.feature1.title',
      descKey: 'home.security.feature1.description',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      titleKey: 'home.security.feature2.title',
      descKey: 'home.security.feature2.description',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      titleKey: 'home.security.feature3.title',
      descKey: 'home.security.feature3.description',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      titleKey: 'home.security.feature4.title',
      descKey: 'home.security.feature4.description',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              {t('home.security.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('home.security.subtitle')}
            </p>
            
            <div className="space-y-6">
              {securityFeatures.map((feature) => (
                <div key={feature.titleKey} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-primary-blue flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-600">
                      {t(feature.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="secondary" asChild>
                <Link to="/legal/compliance">
                  {t('home.security.cta')}
                </Link>
              </Button>
            </div>
          </div>

          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-large border-0">
              <div className="bg-gradient-to-br from-primary-navy to-primary-800 rounded-xl p-6 text-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-lg">{t('home.security.visualization.title')}</div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center bg-primary-700 rounded-lg px-4 py-3">
                    <span>{t('home.security.visualization.item1')}</span>
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex justify-between items-center bg-primary-700 rounded-lg px-4 py-3">
                    <span>{t('home.security.visualization.item2')}</span>
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex justify-between items-center bg-primary-700 rounded-lg px-4 py-3">
                    <span>{t('home.security.visualization.item3')}</span>
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
