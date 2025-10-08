import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  MapPin,
  Twitter,
  Linkedin
} from 'lucide-react';
import logo from '@/assets/keys-favicon.png';

export const Footer = () => {
  const { t } = useTranslation();

  // Link groups (preserving all existing links)
  const platformLinks = [
    { label: t('nav.wallet', 'Wallet'), href: '/wallet' },
    { label: t('nav.travel', 'Travel'), href: '/travel' },
    { label: t('nav.education', 'Education'), href: '/education' },
    { label: t('nav.logistics', 'Logistics'), href: '/logistics' },
    { label: t('nav.technology', 'Technology'), href: '/technology' },
    { label: t('nav.token', 'Token'), href: '/token' },
  ];

  const companyLinks = [
    { label: t('nav.about', 'About'), href: '/about' },
    { label: t('footer.links.careers', 'Careers'), href: '/careers' },
    { label: t('nav.contact', 'Contact'), href: '/contact' },
    { label: t('footer.links.investors', 'Investors'), href: '/investors' },
    { label: t('footer.links.pressKit', 'Press Kit'), href: '/press-kit' },
  ];

  const resourcesLinks = [
    { label: t('footer.links.docs', 'Documentation'), href: '/resources/docs' },
    { label: t('footer.links.api', 'API Reference'), href: '/resources/api' },
    { label: t('footer.links.status', 'Status Page'), href: '/resources/status' },
  ];

  const legalLinks = [
    { label: t('footer.links.privacy', 'Privacy Policy'), href: '/legal/privacy' },
    { label: t('footer.links.terms', 'Terms of Service'), href: '/legal/terms' },
    { label: t('footer.links.cookies', 'Cookie Policy'), href: '/legal/cookies' },
    { label: t('footer.links.compliance', 'Compliance'), href: '/legal/compliance' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/AIKeysOfficial', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ai-keys', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8 py-12 md:py-16 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="AI KEYS Logo" className="h-10 w-10" />
              <div className="text-xl font-bold text-gray-900">AI KEYS</div>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              {t('footer.description', 'UAE-based fintech platform delivering cross-border payments and AI-powered financial services across the GCC.')}
            </p>

            <div className="space-y-3 mb-6">
               <div className="flex items-center space-x-3 text-sm text-gray-600">
                 <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                 <span>{t('footer.contact.address', 'Dubai, United Arab Emirates')}</span>
               </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@aikeys.ai" className="hover:text-primary transition-colors">
                  {t('footer.contact.email', 'info@aikeys.ai')}
                </a>
              </div>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm"
                  className="border-gray-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary"
                  asChild
                >
                  <a 
                    href={social.href} 
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">{t('footer.platform', 'Platform')}</h3>
            <ul className="space-y-3">
              {platformLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors hover:underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">{t('footer.company', 'Company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors hover:underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">{t('footer.resources', 'Resources')}</h3>
              <ul className="space-y-3">
                {resourcesLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors hover:underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">{t('footer.legal', 'Legal')}</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors hover:underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} AI KEYS Investment in Technological Enterprises and Management CO. L.L.C. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="/legal/privacy" className="hover:text-primary transition-colors hover:underline">
              Privacy
            </a>
            <span>•</span>
            <a href="/legal/terms" className="hover:text-primary transition-colors hover:underline">
              Terms
            </a>
            <span>•</span>
            <a href="/legal/cookies" className="hover:text-primary transition-colors hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
