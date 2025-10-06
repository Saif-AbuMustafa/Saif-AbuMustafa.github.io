import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const GlobalReach = () => {
  const { t } = useTranslation();

  const regions = [
    { 
      nameKey: 'home.global.region1.name',
      descKey: 'home.global.region1.description',
      statusKey: 'home.global.region1.status',
      statusClass: 'bg-success-100 text-success-800'
    },
    { 
      nameKey: 'home.global.region2.name',
      descKey: 'home.global.region2.description',
      statusKey: 'home.global.region2.status',
      statusClass: 'bg-blue-100 text-blue-800'
    },
    { 
      nameKey: 'home.global.region3.name',
      descKey: 'home.global.region3.description',
      statusKey: 'home.global.region3.status',
      statusClass: 'bg-gray-100 text-gray-800'
    },
    { 
      nameKey: 'home.global.region4.name',
      descKey: 'home.global.region4.description',
      statusKey: 'home.global.region4.status',
      statusClass: 'bg-gray-100 text-gray-800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            {t('home.global.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('home.global.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {regions.map((region, index) => (
            <div 
              key={region.nameKey}
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-medium transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-teal rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {t(region.nameKey).substring(0, 3)}
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  {t(region.nameKey)}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {t(region.descKey)}
                </p>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${region.statusClass}`}>
                  {t(region.statusKey)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remittance Focus */}
        <div className="mt-16 bg-gradient-to-r from-primary-navy to-primary-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('home.global.remittance.title')}</h3>
              <p className="text-primary-200 mb-6">
                {t('home.global.remittance.description')}
              </p>
              <Button variant="secondary" className="bg-white text-primary-navy hover:bg-gray-100" asChild>
                <Link to="/services">
                  {t('home.global.remittance.cta')}
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm text-primary-200">{t('home.global.remittance.stat1')}</div>
              </div>
              <div className="bg-primary-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">{t('home.global.remittance.stat2value')}</div>
                <div className="text-sm text-primary-200">{t('home.global.remittance.stat2')}</div>
              </div>
              <div className="bg-primary-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">{t('home.global.remittance.stat3value')}</div>
                <div className="text-sm text-primary-200">{t('home.global.remittance.stat3')}</div>
              </div>
              <div className="bg-primary-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">{t('home.global.remittance.stat4value')}</div>
                <div className="text-sm text-primary-200">{t('home.global.remittance.stat4')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
