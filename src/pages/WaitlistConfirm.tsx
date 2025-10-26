import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModernCard } from '@/components/ui/ModernCard';
import { InteractiveSection } from '@/components/ui/InteractiveSection';
import { BackgroundAnimations } from '@/components/ui/BackgroundAnimations';

const WaitlistConfirm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = React.useState<'loading' | 'success' | 'error' | 'already_confirmed'>('loading');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    const confirmWaitlist = async () => {
      const token = searchParams.get('token');
      
      if (!token) {
        setStatus('error');
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('waitlist-confirm', {
          body: { token },
        });

        if (error) throw error;

        if (data.message === 'already_confirmed') {
          setStatus('already_confirmed');
          setEmail(data.email);
        } else if (data.message === 'confirmed') {
          setStatus('success');
          setEmail(data.email);
        }
      } catch (error) {
        console.error('Confirmation error:', error);
        setStatus('error');
      }
    };

    confirmWaitlist();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <InteractiveSection background="gradient" className="py-20 w-full">
        <BackgroundAnimations variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg mx-auto">
            <ModernCard variant="premium" className="p-12 text-center">
              {status === 'loading' && (
                <div className="animate-fade-in">
                  <Loader2 className="h-20 w-20 text-ak-blue animate-spin mx-auto mb-8" />
                  <h1 className="text-3xl font-bold text-ak-text mb-4">{t('waitlist.confirming')}</h1>
                  <p className="text-lg text-ak-muted">{t('waitlist.confirmingDesc')}</p>
                </div>
              )}

              {status === 'success' && (
                <div className="animate-scale-in">
                  <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-8" />
                  <h1 className="text-3xl font-bold text-ak-text mb-4">{t('waitlist.confirmed')}</h1>
                  <p className="text-lg text-ak-muted mb-8 leading-relaxed">
                    {t('waitlist.confirmedDesc')} <strong className="text-ak-blue">{email}</strong>
                  </p>
                  <Button size="lg" variant="premium" onClick={() => navigate('/')} className="w-full">
                    {t('common.backToHome')}
                  </Button>
                </div>
              )}

              {status === 'already_confirmed' && (
                <div className="animate-scale-in">
                  <CheckCircle2 className="h-20 w-20 text-ak-blue mx-auto mb-8" />
                  <h1 className="text-3xl font-bold text-ak-text mb-4">{t('waitlist.alreadyConfirmed')}</h1>
                  <p className="text-lg text-ak-muted mb-8 leading-relaxed">{t('waitlist.alreadyConfirmedLongDesc')}</p>
                  <Button size="lg" variant="premium" onClick={() => navigate('/')} className="w-full">
                    {t('common.backToHome')}
                  </Button>
                </div>
              )}

              {status === 'error' && (
                <div className="animate-scale-in">
                  <XCircle className="h-20 w-20 text-red-500 mx-auto mb-8" />
                  <h1 className="text-3xl font-bold text-ak-text mb-4">{t('waitlist.confirmError')}</h1>
                  <p className="text-lg text-ak-muted mb-8 leading-relaxed">{t('waitlist.confirmErrorDesc')}</p>
                  <Button size="lg" variant="premium" onClick={() => navigate('/')} className="w-full">
                    {t('common.backToHome')}
                  </Button>
                </div>
              )}
            </ModernCard>
          </div>
        </div>
      </InteractiveSection>
    </div>
  );
};

export default WaitlistConfirm;
