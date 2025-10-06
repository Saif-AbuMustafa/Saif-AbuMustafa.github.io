import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  MapPin,
  Twitter,
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react';
import logo from '@/assets/keys-favicon.png';

export const Footer = () => {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t('footer.company'),
      links: [
        { label: t('nav.about'), href: '/about' },
        { label: t('nav.contact'), href: '/contact' }
      ]
    },
    {
      title: t('footer.legal'),
      links: [
         { label: t('footer.links.privacy'), href: '/legal/privacy' },
         { label: t('footer.links.terms'), href: '/legal/terms' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/AIKeysOfficial', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ai-keys', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-accent/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="AI KEYS Logo" className="h-10 w-10" />
                <div className="text-xl font-bold text-primary-navy">AI KEYS</div>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                {t('footer.description')}
              </p>

              <div className="space-y-3 mb-6">
                 <div className="flex items-center space-x-3 text-sm">
                   <MapPin className="h-4 w-4 text-primary-blue" />
                   <span>{t('footer.contact.address')}</span>
                 </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary-blue" />
                  <span>{t('footer.contact.email')}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="sm"
                    className="border-border/50 hover:bg-primary-blue/10 hover:border-primary-blue/50 group"
                    asChild
                  >
                    <a 
                      href={social.href} 
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4 group-hover:text-primary-blue transition-colors" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                     <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary-blue transition-colors text-sm"
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
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI KEYS. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
      </div>
    </footer>
  );
};
