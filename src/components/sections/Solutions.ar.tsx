import { CreditCard, Send, ShoppingCart } from 'lucide-react';

export const SolutionsAr = () => {
  const solutions = [
    {
      name: 'التحويلات',
      description: 'تحويلات عبر الحدود برسوم شفافة وجداول زمنية واضحة',
      icon: Send,
    },
    {
      name: 'البطاقات',
      description: 'بطاقات افتراضية وفيزيائية للإنفاق اليومي والدفع عبر الإنترنت',
      icon: CreditCard,
    },
    {
      name: 'الدفع',
      description: 'تجربة دفع سلسة تساعدك على زيادة التحويلات',
      icon: ShoppingCart,
    }
  ];

  return (
    <section dir="rtl" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="text-center mb-16 max-w-[840px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            مصمّم لمدفوعات العالم الحقيقي
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            ثلاثة منتجات أساسية مصممة لطريقة تحرك الأموال اليوم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div 
              key={solution.name}
              className="group cursor-pointer fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-8 h-8 text-primary" />
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
