import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  MapPin,
  Twitter,
  Linkedin
} from 'lucide-react';
import logo from '@/assets/keys-favicon.png';

export const FooterAr = () => {
  const footerSections = [
    {
      title: 'الشركة',
      links: [
        { label: 'من نحن', href: '/about' },
        { label: 'الوظائف', href: '/careers' },
        { label: 'اتصل بنا', href: '/contact' },
        { label: 'المستثمرون', href: '/investors' },
        { label: 'المواد الصحفية', href: '/press-kit' }
      ]
    },
    {
      title: 'المنتجات',
      links: [
        { label: 'المحفظة', href: '/wallet' },
        { label: 'السفر', href: '/travel' },
        { label: 'التعليم', href: '/education' },
        { label: 'اللوجستيات', href: '/logistics' },
        { label: 'الرمز', href: '/token' }
      ]
    },
    {
      title: 'القانونية',
      links: [
        { label: 'سياسة الخصوصية', href: '/legal/privacy' },
        { label: 'شروط الخدمة', href: '/legal/terms' },
        { label: 'سياسة ملفات تعريف الارتباط', href: '/legal/cookies' },
        { label: 'الامتثال', href: '/legal/compliance' }
      ]
    },
    {
      title: 'الموارد',
      links: [
        { label: 'التوثيق', href: '/resources/docs' },
        { label: 'مرجع API', href: '/resources/api' },
        { label: 'صفحة الحالة', href: '/resources/status' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/AIKeysOfficial', label: 'تويتر' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ai-keys', label: 'لينكدإن' }
  ];

  return (
    <footer dir="rtl" className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8 py-12 md:py-16 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <img src={logo} alt="AI KEYS Logo" className="h-10 w-10" />
              <div className="text-xl font-bold text-gray-900">AI KEYS</div>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              منصة تقنية مالية مقرها الإمارات تقدم المدفوعات عبر الحدود وخدمات مالية مدعومة بالذكاء الاصطناعي عبر دول الخليج.
            </p>

            <div className="space-y-3 mb-6">
               <div className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600">
                 <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                 <span>دبي، الإمارات العربية المتحدة</span>
               </div>
              <div className="flex items-center space-x-3 space-x-reverse text-sm text-gray-600">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@aikeys.ai" className="hover:text-primary transition-colors">
                  info@aikeys.ai
                </a>
              </div>
            </div>

            <div className="flex space-x-3 space-x-reverse">
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
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-gray-900">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                   <a 
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary transition-colors hover:underline"
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
          <div className="text-sm text-gray-600 text-center md:text-right">
            © {new Date().getFullYear()} AI KEYS Investment in Technological Enterprises and Management CO. L.L.C. جميع الحقوق محفوظة.
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="/legal/privacy" className="hover:text-primary transition-colors hover:underline">
              الخصوصية
            </a>
            <span>•</span>
            <a href="/legal/terms" className="hover:text-primary transition-colors hover:underline">
              الشروط
            </a>
            <span>•</span>
            <a href="/legal/cookies" className="hover:text-primary transition-colors hover:underline">
              ملفات تعريف الارتباط
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
