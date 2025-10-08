import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WaitlistModal } from '@/components/WaitlistModal';

export const WaitlistCTAAr = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section dir="rtl" id="waitlist" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          <div className="max-w-[840px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] tracking-tight">
              انضم إلى قائمة الانتظار اليوم
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
              كن من أوائل من يختبر مستقبل التمويل في دول الخليج. وصول أولوية للأعضاء الأوائل.
            </p>
            <Button 
              size="lg" 
              className="text-base px-8 py-6 h-14 bg-white text-primary hover:bg-gray-50" 
              onClick={() => setIsWaitlistOpen(true)}
            >
              احصل على وصول مبكر
            </Button>
          </div>
        </div>
      </section>
      
      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};
