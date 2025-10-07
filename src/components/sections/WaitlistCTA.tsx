import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { WaitlistModal } from '@/components/WaitlistModal';

export const WaitlistCTA = () => {
  const { t } = useTranslation();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section id="waitlist" className="py-16 md:py-24 bg-gradient-to-r from-ak-blue via-ak-blue-dark to-ak-blue text-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('home.waitlistCTA.title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t('home.waitlistCTA.subtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-ak-blue hover:bg-gray-100 text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => setIsWaitlistOpen(true)}
            >
              {t('home.waitlistCTA.button')}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};
