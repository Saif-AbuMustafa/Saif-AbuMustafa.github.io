import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const GlobalPlatform = () => {
  const { t } = useTranslation();

  const platformFeatures = [
    {
      titleKey: 'home.platform.feature1.title',
      descKey: 'home.platform.feature1.description',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      titleKey: 'home.platform.feature2.title',
      descKey: 'home.platform.feature2.description',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      titleKey: 'home.platform.feature3.title',
      descKey: 'home.platform.feature3.description',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      titleKey: 'home.platform.feature4.title',
      descKey: 'home.platform.feature4.description',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-navy mb-4">
            {t('home.platform.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('home.platform.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {platformFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-blue flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Callout */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">
              {t('home.platform.partnership.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('home.platform.partnership.description')}
            </p>
            <Button variant="secondary">
              {t('home.platform.partnership.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
