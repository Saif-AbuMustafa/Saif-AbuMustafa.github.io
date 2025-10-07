import { CheckCircle } from 'lucide-react';

export const HowItWorksAR = () => {
  const steps = [
    {
      number: "01",
      title: "التسجيل",
      description: "أنشئ حسابك في دقائق مع التحقق البسيط"
    },
    {
      number: "02",
      title: "اختر منتجك",
      description: "اختر من البطاقات أو التحويلات أو حلول الدفع"
    },
    {
      number: "03",
      title: "ابدأ المعاملات",
      description: "أرسل وأنفق وأدِر أموالك عبر الحدود"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-ak-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-arabic">
              كيف يعمل
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-arabic">
              ابدأ في ثلاث خطوات بسيطة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10" style={{ top: '3rem' }} />
            
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="w-24 h-24 rounded-full bg-ak-blue flex items-center justify-center mb-6 relative z-10">
                    <span className="text-3xl font-bold text-white font-arabic">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-arabic">
                    {step.description}
                  </p>
                  
                  {/* Check icon */}
                  <CheckCircle className="w-6 h-6 text-success-500 mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};