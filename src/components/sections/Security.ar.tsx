import { Shield, FileText, Lock, RefreshCw } from 'lucide-react';

export const SecurityAr = () => {
  const securityFeatures = [
    {
      title: 'مشفّر أثناء النقل وفي حالة السكون',
      description: 'التشفير من طرف إلى طرف يحمي بياناتك في كل مرحلة',
      icon: Lock
    },
    {
      title: 'سير عمل KYC/AML متوافق مع ممارسات دول الخليج',
      description: 'امتثال كامل للأنظمة المالية الإقليمية',
      icon: FileText
    },
    {
      title: 'ضوابط الوصول وإمكانية المراجعة',
      description: 'تسجيل ومراقبة شاملة لجميع الأنشطة',
      icon: Shield
    },
    {
      title: 'مراجعات مستقلة وتحسين مستمر',
      description: 'تقييمات وتحديثات أمنية منتظمة',
      icon: RefreshCw
    }
  ];

  return (
    <section dir="rtl" id="security" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-[720px] lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              الأمان في جوهر التصميم
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              مبني على أمان على مستوى المؤسسات من الأساس، لضمان حماية بياناتك المالية
            </p>
            
            <div className="space-y-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization */}
          <div className="relative fade-up lg:order-1" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-semibold text-xl">بنية الأمان</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">التشفير نشط</span>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">فحص الامتثال</span>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-700/50 rounded-lg px-4 py-4">
                    <span className="font-medium">سجل المراجعة</span>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
