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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 max-w-[720px] mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-[1.15] tracking-tight">
              {t('howItWorks.heading', 'How It Works')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('howItWorks.subheading', 'Get started in three simple steps')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10" style={{ top: '3rem' }} />
            
            {steps.map((step, index) => (
              <div key={index} className="relative fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-6 relative z-10">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Check icon */}
                  <CheckCircle className="w-6 h-6 text-success mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};