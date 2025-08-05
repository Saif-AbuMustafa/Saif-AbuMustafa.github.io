import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Wallet, Plane, Truck, GraduationCap } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'services', icon: Wallet, href: '#services' },
    { key: 'technology', icon: Plane, href: '#technology' },
    { key: 'about', icon: Truck, href: '#about' },
    { key: 'contact', icon: GraduationCap, href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="AI KEYS" className="h-10 w-10 lg:h-12 lg:w-12" />
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI KEYS
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Fintech Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-200 group"
              >
                <item.icon className="h-4 w-4 group-hover:text-fintech-blue transition-colors" />
                <span>{t(`nav.${item.key}`)}</span>
              </a>
            ))}
          </nav>

          {/* Right side - Language Switcher and CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <Button 
              variant="default" 
              className="hidden sm:inline-flex bg-gradient-primary hover:opacity-90 text-white border-0"
            >
              {t('nav.wallet')}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{t(`nav.${item.key}`)}</span>
                </a>
              ))}
              <Button 
                variant="default" 
                className="mt-4 bg-gradient-primary text-white border-0 justify-start"
              >
                <Wallet className="h-4 w-4 mr-2" />
                {t('nav.wallet')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};