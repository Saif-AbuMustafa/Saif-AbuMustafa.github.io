import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WaitlistConfirm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'already_confirmed'>('loading');
  const [email, setEmail] = useState('');

  useEffect(() => {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ak-beige-50 to-ak-beige-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {status === 'loading' && (
          <>
            <Loader2 className="h-16 w-16 text-ak-blue animate-spin mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-ak-text mb-2">{t('waitlist.confirming')}</h1>
            <p className="text-ak-muted">{t('waitlist.confirmingDesc')}</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-ak-text mb-2">{t('waitlist.confirmed')}</h1>
            <p className="text-ak-muted mb-6">
              {t('waitlist.confirmedDesc')} <strong>{email}</strong>
            </p>
            <Button onClick={() => navigate('/')} className="w-full">
              {t('common.backToHome')}
            </Button>
          </>
        )}

        {status === 'already_confirmed' && (
          <>
            <CheckCircle2 className="h-16 w-16 text-ak-blue mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-ak-text mb-2">{t('waitlist.alreadyConfirmed')}</h1>
            <p className="text-ak-muted mb-6">{t('waitlist.alreadyConfirmedLongDesc')}</p>
            <Button onClick={() => navigate('/')} className="w-full">
              {t('common.backToHome')}
            </Button>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-ak-text mb-2">{t('waitlist.confirmError')}</h1>
            <p className="text-ak-muted mb-6">{t('waitlist.confirmErrorDesc')}</p>
            <Button onClick={() => navigate('/')} className="w-full">
              {t('common.backToHome')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}