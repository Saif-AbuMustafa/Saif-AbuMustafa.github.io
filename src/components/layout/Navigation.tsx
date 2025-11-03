import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { WaitlistModal } from '../WaitlistModal';
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

import logo from '@/assets/ai-keys-full-logo.png';

import { cn } from '@/lib/utils';

export const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [waitlistOpen, setWaitlistOpen] = React.useState(false);

  React.useEffect(() => {
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
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="AI KEYS Company Logo - Navigate to homepage" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
              loading="eager"
            />
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
              onClick={() => setWaitlistOpen(true)}
              variant="secondary"
              className="hidden md:inline-flex"
            >
              {t('waitlist.joinWaitlist')}
            </Button>
            
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
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden min-h-[48px] min-w-[48px]"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-ak-white border-ak-beige-300 transform transition-transform duration-300 ease-out"
              >
                <SheetHeader className="flex flex-row items-center justify-between">
                  <SheetTitle className="text-ak-text">{t('nav.services')}</SheetTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileOpen(false)}
                    className="min-h-[44px] min-w-[44px]"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </SheetHeader>
                <div className="flex flex-col space-y-2 mt-6">
                  {mainNavItems.map((item, index) => (
                    <div key={index}>
                      {item.trigger ? (
                        <div className="space-y-1">
                          <div className="font-medium text-sm text-[hsl(220,9%,46%)] px-3 py-2">
                            {item.label}
                          </div>
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              onClick={() => setIsMobileOpen(false)}
                              className={cn(
                                "flex items-center space-x-3 p-4 min-h-[48px] rounded-lg hover:bg-[hsl(36,30%,92%)] transition-colors group",
                                isActivePath(subItem.href) && "bg-[hsl(36,30%,92%)] text-[hsl(220,13%,23%)]"
                              )}
                            >
                              <subItem.icon className="h-5 w-5 text-[hsl(217,91%,60%)]" />
                              <div className="flex-1">
                                <div className="font-medium text-[hsl(220,13%,23%)]">{subItem.label}</div>
                                <div className="text-sm text-[hsl(220,9%,46%)]">{subItem.desc}</div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-[hsl(220,9%,46%)] group-hover:text-[hsl(220,13%,23%)]" />
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={cn(
                            "flex items-center space-x-3 p-4 min-h-[48px] rounded-lg hover:bg-[hsl(36,30%,92%)] transition-colors",
                            isActivePath(item.href) && "bg-[hsl(36,30%,92%)] text-[hsl(217,91%,60%)]"
                          )}
                        >
                          <item.icon className="h-5 w-5 text-[hsl(217,91%,60%)]" />
                          <span className="font-medium text-[hsl(220,13%,23%)]">{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <Button 
                    onClick={() => {
                      setIsMobileOpen(false);
                      setWaitlistOpen(true);
                    }}
                    variant="outline"
                    size="lg"
                    className="mt-6 w-full min-h-[48px]"
                  >
                    {t('waitlist.joinWaitlist')}
                  </Button>
                  
                  <Button 
                    asChild
                    size="lg"
                    className="mt-3 w-full min-h-[48px]"
                  >
                    <a href="https://keys-pay.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileOpen(false)}>
                      <Wallet className="h-5 w-5 mr-2" />
                      {t('common.getStarted')}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </header>
  );
};