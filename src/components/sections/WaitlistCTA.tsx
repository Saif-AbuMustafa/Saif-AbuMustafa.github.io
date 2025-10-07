import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { WaitlistModal } from '@/components/WaitlistModal';

export const WaitlistCTA = () => {
  const { t } = useTranslation();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section id="waitlist" className="py-16 md:py-24 bg-primary-blue text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          <div className="max-w-[840px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t('waitlist.heading', 'Join the waitlist today')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
              {t('waitlist.subheading', 'Be among the first to experience the future of GCC finance. Priority access for early members.')}
            </p>
            <Button 
              size="lg" 
              className="text-base px-8 py-6 h-14 bg-white text-primary-blue hover:bg-gray-50" 
              onClick={() => setIsWaitlistOpen(true)}
            >
              {t('waitlist.cta', 'Get early access')}
            </Button>
          </div>
        </div>
      </section>
      
      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};
