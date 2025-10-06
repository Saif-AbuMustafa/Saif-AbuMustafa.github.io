import { Lock, Shield, FileCheck, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Security = () => {
  const { t } = useTranslation();

  const practices = [
    {
      icon: Lock,
      titleKey: 'home.security.encryption.title',
      descKey: 'home.security.encryption.description',
    },
    {
      icon: Shield,
      titleKey: 'home.security.accessControl.title',
      descKey: 'home.security.accessControl.description',
    },
    {
      icon: FileCheck,
      titleKey: 'home.security.kyc.title',
      descKey: 'home.security.kyc.description',
    },
    {
      icon: RefreshCw,
      titleKey: 'home.security.review.title',
      descKey: 'home.security.review.description',
    },
  ];

  return (
    <section id="security" className="py-20 lg:py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
              {t('home.security.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.security.subtitle')}
            </p>
          </div>

          {/* Practices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-blue/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-navy mb-2">
                      {t(practice.titleKey)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(practice.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
