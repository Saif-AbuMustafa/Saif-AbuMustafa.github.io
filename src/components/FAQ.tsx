import { useState } from 'react';
import { Plus, Minus, Shield, Clock, Zap, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ElementType;
}

const faqs: FAQItem[] = [
  {
    question: "Where is AI KEYS launching first?",
    answer: "AI KEYS is launching in the GCC region, starting with the UAE. We're building a financial platform specifically designed for the Middle East market with plans to expand across MENA and globally.",
    icon: Shield
  },
  {
    question: "When will physical cards be available?",
    answer: "Virtual cards are available now. Physical cards will launch in phased rollout beginning Q3 2025, starting with select regions in the GCC.",
    icon: Clock
  },
  {
    question: "How are fees structured?",
    answer: "We believe in transparency. Detailed fee schedules will be published before service launch. Our goal is competitive, clear pricing with no hidden charges.",
    icon: Lock
  },
  {
    question: "How is my data protected?",
    answer: "We use enterprise-grade encryption for all data in transit and at rest. Our platform follows strict security protocols with regular audits and compliance with regional regulations.",
    icon: Shield
  },
  {
    question: "What currencies are supported?",
    answer: "We support major GCC currencies (AED, SAR, QAR, KWD, BHD, OMR) and major international currencies including USD, EUR, and GBP for cross-border transfers.",
    icon: Zap
  },
  {
    question: "How do I get early access?",
    answer: "Join our waitlist to get priority access when we launch. Waitlist members will receive exclusive benefits and early access to new features.",
    icon: Zap
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Got questions?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about AI KEYS
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon || Shield;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden",
                  isOpen 
                    ? "border-primary shadow-lg" 
                    : "border-gray-100 hover:border-gray-200"
                )}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-5 flex-1">
                    <div className={cn(
                      "p-3 rounded-xl transition-colors",
                      isOpen 
                        ? "bg-primary" 
                        : "bg-gray-50"
                    )}>
                      <Icon className={cn(
                        "h-6 w-6 transition-colors",
                        isOpen ? "text-white" : "text-primary"
                      )} />
                    </div>
                    <span className="text-xl font-bold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={cn(
                    "ml-4 p-2.5 rounded-full transition-all",
                    isOpen 
                      ? "bg-primary rotate-180" 
                      : "bg-gray-100"
                  )}>
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-white" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>
                
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-8 pb-8 pl-24">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center p-12 bg-white rounded-3xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full text-base font-semibold bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};
