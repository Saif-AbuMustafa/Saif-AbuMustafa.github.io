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

import logo from '@/assets/2.png'; //this is the logo in the navigation bar in the website

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
      label: 'Home', 
      href: '/', 
      icon: Building 
    },
    { 
      label: 'About', 
      href: '/about', 
      icon: Building 
    },
    {
      label: 'Services',
      trigger: true,
      items: [
        { label: 'Overview', href: '/services', icon: Building, desc: 'All our services' },
        { label: 'AI Keys Wallet', href: '/wallet', icon: Wallet, desc: 'Secure crypto & fiat storage' },
        { label: 'Travel Planner', href: '/travel', icon: Plane, desc: 'AI-powered travel solutions' },
        { label: 'Logistics', href: '/logistics', icon: Truck, desc: 'Smart logistics automation' },
        { label: 'Student Services', href: '/education', icon: GraduationCap, desc: 'Educational AI assistance' }
      ]
    },
    { 
      label: 'Technology', 
      href: '/technology', 
      icon: Code 
    },
    { 
      label: 'AI KEYS Token', 
      href: '/token', 
      icon: Coins 
    },
    {
      label: 'Company',
      trigger: true,
      items: [
        { label: 'Careers', href: '/careers', icon: Users, desc: 'Join our team' },
        { label: 'Investors', href: '/investors', icon: TrendingUp, desc: 'Investment opportunities' },
        { label: 'Contact', href: '/contact', icon: Phone, desc: 'Get in touch' }
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
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="AI KEYS" 
                className="h-12 w-12 transition-transform group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-fintech-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI KEYS
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Fintech Solutions
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
                          "bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50",
                          "text-foreground/80 hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                          {item.items?.map((subItem, subIndex) => (
                            <NavigationMenuLink key={subIndex} asChild>
                              <Link
                                to={subItem.href}
                                className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="p-2 rounded-lg bg-fintech-blue/10 group-hover:bg-fintech-blue/20 transition-colors">
                                    <subItem.icon className="h-4 w-4 text-fintech-blue" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium leading-none">
                                      {subItem.label}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
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
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          isActivePath(item.href) 
                            ? 'text-foreground bg-accent/50' 
                            : 'text-foreground/80'
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
              className="hidden sm:inline-flex bg-gradient-primary hover:opacity-90 text-white border-0"
            >
              <a href="https://aikeys-hub.com">
                <Wallet className="h-4 w-4 mr-2" />
                Launch Wallet
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {mainNavItems.map((item, index) => (
                    <div key={index}>
                      {item.trigger ? (
                        <div className="space-y-2">
                          <div className="font-medium text-sm text-muted-foreground px-2">
                            {item.label}
                          </div>
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                            >
                              <subItem.icon className="h-5 w-5 text-fintech-blue" />
                              <div className="flex-1">
                                <div className="font-medium">{subItem.label}</div>
                                <div className="text-sm text-muted-foreground">{subItem.desc}</div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={cn(
                            "flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors",
                            isActivePath(item.href) && "bg-accent"
                          )}
                        >
                          <item.icon className="h-5 w-5 text-fintech-blue" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <Button 
                    asChild
                    className="mt-6 bg-gradient-primary text-white border-0"
                  >
                    <a href="https://aikeys-hub.com" onClick={() => setIsMobileOpen(false)}>
                      <Wallet className="h-4 w-4 mr-2" />
                      Launch Wallet
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