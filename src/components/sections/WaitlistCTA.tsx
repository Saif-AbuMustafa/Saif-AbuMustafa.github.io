import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { WaitlistModal } from '@/components/WaitlistModal';

export const WaitlistCTA = () => {
  const { t } = useTranslation();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section id="waitlist" className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              {t('waitlist.heading', 'Ready to get started?')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {t('waitlist.subheading', 'Join thousands already on the waitlist. Be first to experience the future of finance in the GCC.')}
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="h-14 px-10 text-base font-semibold rounded-full bg-white text-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300" 
                onClick={() => setIsWaitlistOpen(true)}
              >
                {t('waitlist.cta', 'Join the waitlist')}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};
