import { useState } from 'react';
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

const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Test key - replace in production

export const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    country: '',
    city: '',
    heard_channel: '',
    heard_detail: '',
    consent: false,
  });

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
      // Get reCAPTCHA token
      const recaptchaToken = await new Promise<string>((resolve) => {
        (window as any).grecaptcha.ready(() => {
          (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' }).then((token: string) => {
            resolve(token);
          });
        });
      });

      // Get UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const utm_source = urlParams.get('utm_source') || undefined;
      const utm_medium = urlParams.get('utm_medium') || undefined;
      const utm_campaign = urlParams.get('utm_campaign') || undefined;
      const referrer_url = document.referrer || undefined;

      const { data, error } = await supabase.functions.invoke('waitlist-submit', {
        body: {
          ...formData,
          locale: i18n.language,
          recaptcha_token: recaptchaToken,
          utm_source,
          utm_medium,
          utm_campaign,
          referrer_url,
        },
      });

      if (error) throw error;

      if (data.status === 'confirmed') {
        toast({
          title: t('waitlist.alreadyConfirmed'),
          description: t('waitlist.alreadyConfirmedDesc'),
        });
      } else if (data.message === 'confirmation_resent') {
        toast({
          title: t('waitlist.confirmationResent'),
          description: t('waitlist.confirmationResentDesc'),
        });
      } else {
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