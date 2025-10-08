import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      number: "01",
      title: t('howItWorks.step1.title', 'Sign Up'),
      description: t('howItWorks.step1.desc', 'Create your account in minutes with simple verification')
    },
    {
      number: "02",
      title: t('howItWorks.step2.title', 'Choose Your Product'),
      description: t('howItWorks.step2.desc', 'Select from cards, remittance, or checkout solutions')
    },
    {
      number: "03",
      title: t('howItWorks.step3.title', 'Start Transacting'),
      description: t('howItWorks.step3.desc', 'Send, spend, and manage your finances across borders')
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              {t('howItWorks.heading', 'How it works')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t('howItWorks.subheading', 'Get started in minutes')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Number badge */}
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};