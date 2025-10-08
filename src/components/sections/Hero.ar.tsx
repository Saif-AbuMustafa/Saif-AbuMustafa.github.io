import { Button } from '@/components/ui/button';

export const HeroAr = () => {
  return (
    <section dir="rtl" className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      {/* Subtle Background - behind content only */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/30" />
      <div className="absolute top-1/4 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30 floating" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40 floating" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center py-16 md:py-24">
          {/* Content Column */}
          <div className="text-right max-w-[720px] lg:order-2">
            {/* GCC Focus Badge */}
            <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200 mb-8 fade-up">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm font-medium text-gray-700">
                منصة مالية تقنية مقرها الإمارات
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight fade-up" style={{ animationDelay: '0.1s' }}>
              المال صار أبسط
              <span className="text-primary block">في الخليج</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-[600px] fade-up" style={{ animationDelay: '0.2s' }}>
              حوّل وأنفق عبر الحدود باستخدام البطاقات الافتراضية والفيزيائية وتجربة دفع موثوقة.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="text-base px-8 py-6 h-14 bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#waitlist" className="group">
                  انضم إلى قائمة الانتظار
                  <svg className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6 h-14 border-2 hover:bg-gray-50" asChild>
                <a href="#security">
                  اطّلع على ممارسات الأمان
                </a>
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 fade-up" style={{ animationDelay: '0.4s' }}>
              <span className="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                تحويلات عبر الحدود
              </span>
              <span className="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                بطاقات افتراضية وفيزيائية
              </span>
              <span className="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                مدفوعات تجار
              </span>
            </div>
          </div>

          {/* Device Mockup - Left side (order-1 for RTL) */}
          <div className="relative lg:pr-12 lg:order-1 fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl shadow-2xl overflow-hidden floating">
              {/* Mock device frame */}
              <div className="absolute inset-8 bg-white rounded-2xl shadow-lg p-6">
                {/* Mock app interface */}
                <div className="space-y-4">
                  <div className="h-3 bg-gray-200 rounded w-3/4 mr-auto"></div>
                  <div className="h-24 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-gray-100 rounded-lg"></div>
                    <div className="h-20 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div className="h-16 bg-primary/5 rounded-lg"></div>
                </div>
              </div>
              
              {/* Floating card visual */}
              <div className="absolute -left-4 top-12 w-48 h-32 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform -rotate-6 floating" style={{ animationDelay: '1s' }}>
                <div className="p-4 text-white">
                  <div className="w-10 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded mb-2"></div>
                  <div className="text-xs opacity-70 mb-1">بطاقة AI KEYS</div>
                  <div className="text-sm font-semibold">•••• 8472</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
