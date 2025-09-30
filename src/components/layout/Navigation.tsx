import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  Wallet, 
  Plane, 
  Truck, 
  GraduationCap,
  Building,
  Code,
  Coins,
  Phone,
  Users,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

import logo from '@/assets/keys-favicon.png';

import { cn } from '@/lib/utils';

export const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { 
      label: t('nav.home'), 
      href: '/', 
      icon: Building 
    },
    { 
      label: t('nav.about'), 
      href: '/about', 
      icon: Building 
    },
    {
      label: t('nav.services'),
      trigger: true,
      items: [
        { label: t('nav.services'), href: '/services', icon: Building, desc: t('services.description') },
        { label: t('services.wallet.title'), href: '/wallet', icon: Wallet, desc: t('services.wallet.description') },
        { label: t('services.travel.title'), href: '/travel', icon: Plane, desc: t('services.travel.description') },
        { label: t('services.logistics.title'), href: '/logistics', icon: Truck, desc: t('services.logistics.description') },
        { label: t('services.education.title'), href: '/education', icon: GraduationCap, desc: t('services.education.description') }
      ]
    },
    { 
      label: t('nav.technology'), 
      href: '/technology', 
      icon: Code 
    },
    { 
      label: t('nav.token'), 
      href: '/token', 
      icon: Coins 
    },
    {
      label: t('about.title'),
      trigger: true,
      items: [
        { label: t('nav.careers'), href: '/careers', icon: Users, desc: t('common.learnMore') },
        { label: t('nav.investors'), href: '/investors', icon: TrendingUp, desc: t('common.learnMore') },
        { label: t('nav.contact'), href: '/contact', icon: Phone, desc: t('contact.subtitle') }
      ]
    }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? 'bg-ak-white/95 backdrop-blur-xl shadow-xl border-b border-ak-beige-300/50' 
          : 'bg-ak-white/90 backdrop-blur-md shadow-lg border-b border-ak-beige-300/30'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="AI KEYS Company Logo - Navigate to homepage" 
                className="h-12 w-12 transition-transform group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-ak-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI KEYS
              </span>
              <span className="text-xs text-black hidden sm:block">
                {t('hero.subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              {mainNavItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.trigger ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          "bg-transparent hover:bg-ak-beige-100 data-[state=open]:bg-ak-beige-100",
                          "text-ak-text hover:text-ak-blue font-medium transition-all duration-200"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-ak-white border border-ak-beige-300 shadow-xl">
                        <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2 bg-ak-white">
                          {item.items?.map((subItem, subIndex) => (
                            <NavigationMenuLink key={subIndex} asChild>
                              <Link
                                to={subItem.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-ak-beige-100 hover:text-ak-text focus:bg-ak-beige-100 focus:text-ak-text group border border-transparent hover:border-ak-beige-300/50",
                                  isActivePath(subItem.href) && "bg-ak-beige-100 text-ak-text border-ak-blue/30"
                                )}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="p-2 rounded-lg bg-ak-blue/10 group-hover:bg-ak-blue/20 transition-colors">
                                    <subItem.icon className="h-4 w-4 text-ak-blue" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium leading-none text-ak-text">
                                      {subItem.label}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-ak-muted mt-1">
                                      {subItem.desc}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-ak-beige-100 hover:text-ak-blue focus:bg-ak-beige-100 focus:text-ak-blue focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          isActivePath(item.href) 
                            ? 'text-ak-blue bg-ak-beige-100 font-semibold' 
                            : 'text-ak-text hover:text-ak-blue'
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <Button 
              asChild
              className="inline-flex bg-ak-blue hover:bg-ak-blue/90 text-white border-0 shadow-lg"
            >
              <a href="https://keys-pay.com" target="_blank" rel="noopener noreferrer">
                <Wallet className="h-4 w-4 mr-2" />
                {t('common.getStarted')}
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-ak-white border-ak-beige-300">
                <SheetHeader>
                  <SheetTitle className="text-ak-text">{t('nav.services')}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {mainNavItems.map((item, index) => (
                    <div key={index}>
                      {item.trigger ? (
                        <div className="space-y-2">
                          <div className="font-medium text-sm text-ak-muted px-2">
                            {item.label}
                          </div>
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              onClick={() => setIsMobileOpen(false)}
                              className={cn(
                                "flex items-center space-x-3 p-3 rounded-lg hover:bg-ak-beige-100 transition-colors group",
                                isActivePath(subItem.href) && "bg-ak-beige-100 text-ak-text"
                              )}
                            >
                              <subItem.icon className="h-5 w-5 text-ak-blue" />
                              <div className="flex-1">
                                <div className="font-medium text-ak-text">{subItem.label}</div>
                                <div className="text-sm text-ak-muted">{subItem.desc}</div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-ak-muted group-hover:text-ak-text" />
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={cn(
                            "flex items-center space-x-3 p-3 rounded-lg hover:bg-ak-beige-100 transition-colors",
                            isActivePath(item.href) && "bg-ak-beige-100 text-ak-blue"
                          )}
                        >
                          <item.icon className="h-5 w-5 text-ak-blue" />
                          <span className="font-medium text-ak-text">{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <Button 
                    asChild
                    className="mt-6 bg-gradient-primary text-white border-0"
                  >
                    <a href="https://keys-pay.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileOpen(false)}>
                      <Wallet className="h-4 w-4 mr-2" />
                      {t('common.getStarted')}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};