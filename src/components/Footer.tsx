import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  MapPin, 
  Phone,
  Twitter,
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react';
import logo from '@/assets/keys-logo.png';

export const Footer = () => {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: t('nav.wallet'), href: '#wallet' },
        { label: t('nav.travel'), href: '#travel' },
        { label: t('nav.logistics'), href: '#logistics' },
        { label: t('nav.education'), href: '#education' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: t('footer.links.careers'), href: '#careers' },
        { label: 'Investors', href: '#investors' },
        { label: 'Press Kit', href: '#press' }
      ]
    },
    {
      title: 'Resources',
      links: [
         { label: 'Documentation', href: '/resources/docs' },
         { label: 'API Reference', href: '/resources/api' },
        { label: t('footer.links.support'), href: '#support' },
        { label: 'Status Page', href: '#status' }
      ]
    },
    {
      title: 'Legal',
      links: [
         { label: t('footer.links.privacy'), href: '/legal/privacy' },
         { label: t('footer.links.terms'), href: '/legal/terms' },
         { label: 'Cookie Policy', href: '/legal/cookies' },
         { label: 'Compliance', href: '/legal/compliance' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-accent/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="AI KEYS" className="h-10 w-10" />
                <div>
                  <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    AI KEYS
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('footer.company')}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                {t('footer.description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                 <div className="flex items-center space-x-3 text-sm">
                   <MapPin className="h-4 w-4 text-fintech-blue" />
                   <span>B312 NASER AHMED SAEED MOHAMED ALAWADHI -UAE- License Number 1104443</span>
                 </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-fintech-blue" />
                  <span>{t('footer.contact.email')}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="sm"
                    className="border-border/50 hover:bg-fintech-blue/10 hover:border-fintech-blue/50 group"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4 group-hover:text-fintech-blue transition-colors" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-fintech-blue transition-colors text-sm flex items-center group"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI KEYS Company. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </span>
              <span>•</span>
              <span>Waiting for VARA Approval</span>
              <span>•</span>
              <span>Built on Solana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};