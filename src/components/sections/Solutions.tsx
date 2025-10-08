import { useTranslation } from 'react-i18next';
import remittanceImg from '@/assets/remittance-modern.png';
import cardsImg from '@/assets/cards-modern.png';
import checkoutImg from '@/assets/checkout-modern.png';

export const Solutions = () => {
  const { t } = useTranslation();
  
  const solutions = [
    {
      name: t('solutions.remittance.title', 'Cross-border transfers'),
      description: t('solutions.remittance.desc', 'Transfer money across borders with competitive rates and instant delivery to over 50 countries.'),
      image: remittanceImg,
    },
    {
      name: t('solutions.cards.title', 'Virtual & physical cards'),
      description: t('solutions.cards.desc', 'Get cards that work everywhere. Control spending with real-time notifications and freezing.'),
      image: cardsImg,
    },
    {
      name: t('solutions.checkout.title', 'Secure checkout'),
      description: t('solutions.checkout.desc', 'Pay securely online and in-store with advanced fraud protection and instant confirmations.'),
      image: checkoutImg,
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-20 space-y-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
            {t('solutions.heading', 'Everything you need')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {t('solutions.subheading', 'All your financial needs in one simple app')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div 
              key={solution.name}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-80 overflow-hidden bg-gray-50">
                <img 
                  src={solution.image}
                  alt={solution.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="p-10 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  {solution.name}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
