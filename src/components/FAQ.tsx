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
    question: "How secure is AI KEYS?",
    answer: "AI KEYS uses enterprise-grade encryption with AES-256 and SSL/TLS protocols. We're GDPR compliant, SOC 2 certified, and maintain 99.9% uptime with regular security audits. Your data is encrypted both in transit and at rest.",
    icon: Shield
  },
  {
    question: "What integrations does AI KEYS support?",
    answer: "AI KEYS integrates seamlessly with major financial platforms, travel booking systems, logistics providers, and educational platforms. Our REST API allows for custom integrations with your existing tools and workflows.",
    icon: Zap
  },
  {
    question: "How long does setup take?",
    answer: "Most users are up and running in under 15 minutes. Our intuitive onboarding process requires no technical expertise. For enterprise deployments, our team provides white-glove setup and training.",
    icon: Clock
  },
  {
    question: "What's included in the free trial?",
    answer: "Our 14-day free trial includes full access to all features with no credit card required. You'll get unlimited transactions, all integrations, priority support, and access to our learning resources.",
    icon: Lock
  },
  {
    question: "Can I export my data?",
    answer: "Absolutely. You have complete control over your data. Export at any time in multiple formats (CSV, JSON, PDF). We believe your data belongs to you and make it easy to transfer or backup.",
    icon: Shield
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support with 24-hour response time. Premium plans get priority support with 2-hour response time, live chat, and dedicated account management. Enterprise clients receive 24/7 phone support.",
    icon: Zap
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[hsl(217,91%,60%)]/10 rounded-full mb-6">
              <span className="text-[hsl(217,91%,60%)] font-semibold text-sm">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[hsl(220,13%,23%)]">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-xl text-[hsl(220,9%,46%)] max-w-2xl mx-auto">
              Everything you need to know about AI KEYS and how it can transform your workflow
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
                    "border-2 rounded-lg transition-all duration-300 overflow-hidden",
                    isOpen 
                      ? "border-[hsl(217,91%,60%)] shadow-lg" 
                      : "border-[hsl(36,20%,85%)] hover:border-[hsl(217,91%,60%)]/50"
                  )}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-[hsl(36,30%,92%)]/30 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className={cn(
                        "p-3 rounded-lg transition-colors",
                        isOpen 
                          ? "bg-[hsl(217,91%,60%)]" 
                          : "bg-[hsl(217,91%,60%)]/10"
                      )}>
                        <Icon className={cn(
                          "h-5 w-5 transition-colors",
                          isOpen ? "text-white" : "text-[hsl(217,91%,60%)]"
                        )} />
                      </div>
                      <span className="text-lg font-semibold text-[hsl(220,13%,23%)]">
                        {faq.question}
                      </span>
                    </div>
                    <div className={cn(
                      "ml-4 p-2 rounded-full transition-all",
                      isOpen 
                        ? "bg-[hsl(217,91%,60%)] rotate-180" 
                        : "bg-[hsl(36,30%,92%)]"
                    )}>
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-white" />
                      ) : (
                        <Plus className="h-5 w-5 text-[hsl(217,91%,60%)]" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="p-6 pt-0 pl-20 pr-6">
                      <p className="text-[hsl(220,9%,46%)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-[hsl(217,91%,60%)]/5 to-[hsl(224,76%,48%)]/5 rounded-lg border border-[hsl(217,91%,60%)]/20">
            <h3 className="text-2xl font-bold text-[hsl(220,13%,23%)] mb-3">
              Still have questions?
            </h3>
            <p className="text-[hsl(220,9%,46%)] mb-6">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center h-11 min-h-[44px] px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
