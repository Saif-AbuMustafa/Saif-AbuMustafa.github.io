import { useTranslation } from 'react-i18next';

export const SolutionsGrid = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      name: t('home.solutions.wallet.name'),
      description: t('home.solutions.wallet.description'),
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
        </svg>
      ),
      features: [
        t('home.solutions.wallet.feature1'),
        t('home.solutions.wallet.feature2'),
        t('home.solutions.wallet.feature3'),
        t('home.solutions.wallet.feature4')
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: t('home.solutions.travel.name'),
      description: t('home.solutions.travel.description'),
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 2.944m-7.843 5.17A11.953 11.953 0 0112 8.056m-7.843-.344L12 8m7.843-.344L12 8" />
        </svg>
      ),
      features: [
        t('home.solutions.travel.feature1'),
        t('home.solutions.travel.feature2'),
        t('home.solutions.travel.feature3'),
        t('home.solutions.travel.feature4')
      ],
      color: "from-green-500 to-green-600"
    },
    {
      name: t('home.solutions.student.name'),
      description: t('home.solutions.student.description'),
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      features: [
        t('home.solutions.student.feature1'),
        t('home.solutions.student.feature2'),
        t('home.solutions.student.feature3'),
        t('home.solutions.student.feature4')
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: t('home.solutions.logistics.name'),
      description: t('home.solutions.logistics.description'),
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      features: [
        t('home.solutions.logistics.feature1'),
        t('home.solutions.logistics.feature2'),
        t('home.solutions.logistics.feature3'),
        t('home.solutions.logistics.feature4')
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            {t('home.solutions.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('home.solutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.name}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-200 hover:shadow-large hover:border-gray-300 transform hover:scale-105 transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
