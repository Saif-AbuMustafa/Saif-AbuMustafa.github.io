import { ArrowUpDown, CreditCard, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const Solutions = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: ArrowUpDown,
      titleKey: 'home.solutions.remittance.title',
      descKey: 'home.solutions.remittance.description',
    },
    {
      icon: CreditCard,
      titleKey: 'home.solutions.cards.title',
      descKey: 'home.solutions.cards.description',
    },
    {
      icon: ShoppingCart,
      titleKey: 'home.solutions.checkout.title',
      descKey: 'home.solutions.checkout.description',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
              {t('home.solutions.title')}
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={index}
                  className="border-gray-200 hover:shadow-medium transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-blue" />
                    </div>
                    <CardTitle className="text-xl text-primary-navy">
                      {t(solution.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {t(solution.descKey)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
