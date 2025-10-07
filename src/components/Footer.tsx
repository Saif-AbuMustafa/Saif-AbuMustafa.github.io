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

  const footerSections = [
    {
      title: t('footer.company', 'Company'),
      links: [
        { label: t('nav.about', 'About'), href: '/about' },
        { label: t('footer.links.careers', 'Careers'), href: '/careers' },
        { label: t('nav.contact', 'Contact'), href: '/contact' }
      ]
    },
    {
      title: t('footer.legal', 'Legal'),
      links: [
         { label: t('footer.links.privacy', 'Privacy'), href: '/legal/privacy' },
         { label: t('footer.links.terms', 'Terms'), href: '/legal/terms' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/AIKeysOfficial', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ai-keys', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8 py-16 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="AI KEYS Logo" className="h-10 w-10" />
              <div className="text-xl font-bold text-gray-900">AI KEYS</div>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              {t('footer.description', 'UAE-based fintech platform delivering cross-border payments and AI-powered financial services across the GCC.')}
            </p>

            <div className="space-y-3 mb-6">
               <div className="flex items-center space-x-3 text-sm text-gray-600">
                 <MapPin className="h-4 w-4 text-primary-blue flex-shrink-0" />
                 <span>{t('footer.contact.address', 'Dubai, United Arab Emirates')}</span>
               </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-primary-blue flex-shrink-0" />
                <a href="mailto:info@aikeys.ai" className="hover:text-primary-blue transition-colors">
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
                  className="border-gray-300 hover:bg-primary-blue/10 hover:border-primary-blue/50 hover:text-primary-blue"
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
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-gray-900">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                   <a 
                      href={link.href}
                      className="text-gray-600 hover:text-primary-blue transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} AI KEYS. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="/legal/privacy" className="hover:text-primary-blue transition-colors">
              Privacy
            </a>
            <span>•</span>
            <a href="/legal/terms" className="hover:text-primary-blue transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
