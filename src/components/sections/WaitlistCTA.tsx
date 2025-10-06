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
      <section id="waitlist" className="py-20 lg:py-32 bg-gradient-to-br from-primary-navy to-primary-800 text-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t('home.waitlistCTA.title')}
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('home.waitlistCTA.subtitle')}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8"
              onClick={() => setIsWaitlistOpen(true)}
            >
              {t('home.waitlistCTA.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};
