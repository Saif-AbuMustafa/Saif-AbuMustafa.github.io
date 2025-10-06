import { UserPlus, CreditCard, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: UserPlus,
      numberKey: 'home.howItWorks.step1.number',
      titleKey: 'home.howItWorks.step1.title',
      descKey: 'home.howItWorks.step1.description',
    },
    {
      icon: CreditCard,
      numberKey: 'home.howItWorks.step2.number',
      titleKey: 'home.howItWorks.step2.title',
      descKey: 'home.howItWorks.step2.description',
    },
    {
      icon: Send,
      numberKey: 'home.howItWorks.step3.number',
      titleKey: 'home.howItWorks.step3.title',
      descKey: 'home.howItWorks.step3.description',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
              {t('home.howItWorks.title')}
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {t(step.numberKey)}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
