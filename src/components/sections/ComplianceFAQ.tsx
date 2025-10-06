import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export const ComplianceFAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Get FAQ items from translations
  const faqCount = 7; // We'll define 7 FAQ items
  const faqs = Array.from({ length: faqCount }, (_, i) => ({
    question: t(`home.faq.items.${i}.question`),
    answer: t(`home.faq.items.${i}.answer`),
  }));

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
              {t('home.faq.title')}
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className={cn(
                    "border-2 rounded-lg transition-all duration-300 overflow-hidden",
                    isOpen 
                      ? "border-primary-blue shadow-medium" 
                      : "border-gray-200 hover:border-primary-blue/50"
                  )}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-primary-navy pr-4">
                      {faq.question}
                    </span>
                    <div className={cn(
                      "flex-shrink-0 p-2 rounded-full transition-all",
                      isOpen 
                        ? "bg-primary-blue rotate-180" 
                        : "bg-gray-200"
                    )}>
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-white" />
                      ) : (
                        <Plus className="h-5 w-5 text-primary-blue" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="p-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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
