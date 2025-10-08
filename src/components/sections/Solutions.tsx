import { useTranslation } from 'react-i18next';
import remittanceImg from '@/assets/remittance-illustration.png';
import cardsImg from '@/assets/cards-illustration.png';
import checkoutImg from '@/assets/checkout-illustration.png';

export const Solutions = () => {
  const { t } = useTranslation();
  
  const solutions = [
    {
      name: t('solutions.remittance.title', 'Remittance'),
      description: t('solutions.remittance.desc', 'Cross-border transfers with transparent fees and clear timelines'),
      image: remittanceImg,
    },
    {
      name: t('solutions.cards.title', 'Cards'),
      description: t('solutions.cards.desc', 'Virtual & physical cards for everyday spend and online checkout'),
      image: cardsImg,
    },
    {
      name: t('solutions.checkout.title', 'Checkout'),
      description: t('solutions.checkout.desc', 'Friction-light checkout that helps you convert more'),
      image: checkoutImg,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="text-center mb-16 max-w-[840px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            {t('solutions.heading', 'Built for real-world payments')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {t('solutions.subheading', 'Three core products designed for the way money moves today')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div 
              key={solution.name}
              className="group cursor-pointer fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <div className="w-full aspect-square mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-6">
                  <img 
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
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
