import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RECAPTCHA_SITE_KEY = "6LfqUtorAAAAAEeSzFuvOoWwi1VD9doy5Dz_un9Q"; // v3 site key (public)

export const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    country: '',
    city: '',
    heard_channel: '',
    heard_detail: '',
    consent: false,
  });

  // Helper function to get reCAPTCHA token with retry
  const getRecaptchaTokenWithRetry = async (action = 'waitlist_submit', attempts = 3): Promise<string> => {
    const grecaptcha = (window as any).grecaptcha;
    if (!grecaptcha || typeof grecaptcha.execute !== 'function') {
      throw new Error('reCAPTCHA not loaded. Please refresh and try again.');
    }

    await new Promise<void>((resolve) => grecaptcha.ready(() => resolve()));
    
    let delay = 200;
    for (let i = 0; i < attempts; i++) {
      try {
        console.log(`reCAPTCHA attempt ${i + 1}/${attempts} - hostname:`, window.location.hostname, 'site key:', RECAPTCHA_SITE_KEY);
        const token: string = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
        console.log('reCAPTCHA token length:', token?.length || 0);
        
        if (token && token.length > 50) {
          return token; // Valid token
        }
      } catch (err) {
        console.error(`reCAPTCHA attempt ${i + 1} failed:`, err);
      }
      
      if (i < attempts - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
    
    throw new Error('browser-error');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: t('waitlist.error'),
        description: t('waitlist.consentRequired'),
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      // Get reCAPTCHA token with retry
      let recaptchaToken: string;
      try {
        recaptchaToken = await getRecaptchaTokenWithRetry('waitlist_submit', 3);
      } catch (err: any) {
        toast({
          title: t('waitlist.error'),
          description: err.message || 'reCAPTCHA: browser error — please try again.',
          variant: 'destructive',
        });
        setLoading(false);
        return;
      }

      // Get UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const utm_source = urlParams.get('utm_source') || undefined;
      const utm_medium = urlParams.get('utm_medium') || undefined;
      const utm_campaign = urlParams.get('utm_campaign') || undefined;
      const referrer_url = document.referrer || undefined;

      const payload = {
        email: formData.email,
        country: formData.country,
        city: formData.city,
        heard_channel: formData.heard_channel,
        heard_detail: formData.heard_detail,
        locale: i18n.language,
        recaptchaToken,
        utm_source,
        utm_medium,
        utm_campaign,
        referrer_url,
      };

      const SUPABASE_URL = "https://iytinmioziskeqewnelm.supabase.co";
      const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5dGlubWlvemlza2VxZXduZWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTE5NjUsImV4cCI6MjA2OTk4Nzk2NX0.K_EzCsIZ_GaV9kSSXjFyNwkWOayYc3LZrQDktMvnKwA";

      const res = await fetch(`${SUPABASE_URL}/functions/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const respJson = await res.json().catch(() => ({}));

      if (!res.ok) {
        const errorData = respJson;
        let errorMessage = 'Submission failed';
        let errorDetail = '';

        // Handle specific error types
        if (errorData.error === 'recaptcha_failed') {
          errorMessage = 'reCAPTCHA verification failed';
          errorDetail = `Codes: ${errorData.codes?.join(', ') || 'unknown'}`;
        } else if (errorData.error === 'recaptcha_action_mismatch') {
          errorMessage = 'reCAPTCHA action mismatch';
          errorDetail = `Expected: ${errorData.expected}, Got: ${errorData.got}`;
        } else if (errorData.error === 'recaptcha_hostname_mismatch') {
          errorMessage = 'reCAPTCHA hostname not allowed';
          errorDetail = `Hostname: ${errorData.hostname}`;
        } else if (errorData.error === 'db_error') {
          errorMessage = 'Database error';
          errorDetail = errorData.detail || '';
        } else if (errorData.error === 'email_error') {
          errorMessage = 'Failed to send confirmation email';
          errorDetail = errorData.detail || '';
        } else if (errorData.error === 'config_missing') {
          errorMessage = 'Server configuration error';
          errorDetail = errorData.detail || '';
        } else if (errorData.error === 'invalid_email') {
          errorMessage = 'Invalid email address';
        } else if (errorData.error === 'missing_required_fields') {
          errorMessage = 'Missing required fields';
        } else if (errorData.error) {
          errorMessage = errorData.error;
        }

        toast({
          title: t('waitlist.error'),
          description: errorDetail ? `${errorMessage} — ${errorDetail}` : errorMessage,
          variant: 'destructive',
        });
        setLoading(false);
        return;
      }

      if (respJson.alreadyConfirmed) {
        toast({
          title: t('waitlist.alreadyConfirmed'),
          description: t('waitlist.alreadyConfirmedDesc'),
        });
      } else if (respJson.ok) {
        setSuccess(true);
      }
    } catch (error: any) {
      console.error('Waitlist submission error:', error);
      
      toast({
        title: t('waitlist.error'),
        description: error.message || t('waitlist.errorDesc'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setFormData({
      email: '',
      country: '',
      city: '',
      heard_channel: '',
      heard_detail: '',
      consent: false,
    });
  };

  if (success) {
    return (
      <Dialog open={open} onOpenChange={(isOpen) => {
        onOpenChange(isOpen);
        if (!isOpen) resetForm();
      }}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center text-center space-y-4 py-6">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <DialogTitle className="text-2xl">{t('waitlist.successTitle')}</DialogTitle>
            <p className="text-muted-foreground">{t('waitlist.successDesc')}</p>
            <Button onClick={() => {
              onOpenChange(false);
              resetForm();
            }}>
              {t('common.close')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('waitlist.title')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t('waitlist.email')} *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t('waitlist.emailPlaceholder')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">{t('waitlist.country')} *</Label>
            <Select required value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
              <SelectTrigger>
                <SelectValue placeholder={t('waitlist.selectCountry')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AE">United Arab Emirates</SelectItem>
                <SelectItem value="SA">Saudi Arabia</SelectItem>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="GB">United Kingdom</SelectItem>
                <SelectItem value="FR">France</SelectItem>
                <SelectItem value="DE">Germany</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">{t('waitlist.city')}</Label>
            <Input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder={t('waitlist.cityPlaceholder')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="heard_channel">{t('waitlist.heardChannel')} *</Label>
            <Select required value={formData.heard_channel} onValueChange={(value) => setFormData({ ...formData, heard_channel: value })}>
              <SelectTrigger>
                <SelectValue placeholder={t('waitlist.selectChannel')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twitter">X/Twitter</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="search">Search Engine</SelectItem>
                <SelectItem value="friend_referral">Friend/Referral</SelectItem>
                <SelectItem value="event_money2020">Event (Money20/20)</SelectItem>
                <SelectItem value="press_news">Press/News</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.heard_channel && (
            <div className="space-y-2">
              <Label htmlFor="heard_detail">{t('waitlist.heardDetail')}</Label>
              <Textarea
                id="heard_detail"
                value={formData.heard_detail}
                onChange={(e) => setFormData({ ...formData, heard_detail: e.target.value })}
                placeholder={t('waitlist.heardDetailPlaceholder')}
                rows={3}
              />
            </div>
          )}

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            />
            <Label htmlFor="consent" className="text-sm leading-snug cursor-pointer">
              {t('waitlist.consent')} <a href="/legal/privacy" target="_blank" className="text-blue-600 hover:underline">{t('waitlist.privacyPolicy')}</a>
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t('waitlist.submit')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};