import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        services: 'Services',
        technology: 'Technology',
        about: 'About',
        contact: 'Contact',
        wallet: 'Wallet',
        travel: 'Travel',
        logistics: 'Logistics',
        education: 'Education'
      },
      // Hero Section
      hero: {
        title: 'Revolutionary AI-Powered',
        subtitle: 'Fintech Solutions',
        description: 'Empowering the future of finance with AI-driven custodian wallet, travel planning, logistics, and student services. UAE licensed and built on Solana blockchain.',
        cta: 'Explore Our Ecosystem',
        watchDemo: 'Watch Demo',
        stats: {
          users: 'Active Users',
          transactions: 'Transactions',
          countries: 'Countries',
          uptime: 'Uptime'
        }
      },
      // Services
      services: {
        title: 'Our Comprehensive',
        subtitle: 'Financial Ecosystem',
        wallet: {
          title: 'Keys Custodian Wallet',
          description: 'Secure crypto and fiat storage with AI-powered automation and seamless transactions'
        },
        travel: {
          title: 'AI Keys Travel Planner',
          description: 'AI-based travel planning with integrated payments and personalized recommendations'
        },
        logistics: {
          title: 'AI Keys Logistics',
          description: 'Smart logistics solutions with automated payments and tracking systems'
        },
        education: {
          title: 'AI Keys Student Services',
          description: 'AI learning assistance and admission support with integrated financial services'
        }
      },
      // Technology
      technology: {
        title: 'Cutting-Edge Technology',
        subtitle: 'Built for the Future',
        ai: 'AI-Powered Automation',
        blockchain: 'Solana Blockchain',
        security: 'Enterprise Security',
        compliance: 'UAE Licensed & Regulated'
      },
      // Token
      token: {
        title: 'AI KEYS Token',
        subtitle: 'SPL Token on Solana',
        price: 'Current Price',
        change: '24h Change',
        volume: '24h Volume',
        marketCap: 'Market Cap'
      },
      // Footer
      footer: {
        company: 'AI KEYS Company',
        description: 'Revolutionary AI-powered fintech solutions based in Dubai, UAE',
        links: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          support: 'Support',
          careers: 'Careers'
        },
        contact: {
          title: 'Contact Us',
          address: 'B312 NASER AHMED SAEED MOHAMED ALAWADHI -UAE- License Number 1104443',
          email: 'info@aikeys.ai'
        }
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: 'الرئيسية',
        services: 'الخدمات',
        technology: 'التكنولوجيا',
        about: 'من نحن',
        contact: 'اتصل بنا',
        wallet: 'المحفظة',
        travel: 'السفر',
        logistics: 'اللوجستيات',
        education: 'التعليم'
      },
      // Hero Section
      hero: {
        title: 'حلول مالية ثورية',
        subtitle: 'مدعومة بالذكاء الاصطناعي',
        description: 'نمكن مستقبل التمويل بمحفظة الحراسة المدعومة بالذكاء الاصطناعي، وتخطيط السفر، واللوجستيات، وخدمات الطلاب. مرخص في الإمارات ومبني على بلوك تشين سولانا.',
        cta: 'استكشف نظامنا البيئي',
        watchDemo: 'مشاهدة العرض التوضيحي',
        stats: {
          users: 'المستخدمون النشطون',
          transactions: 'المعاملات',
          countries: 'البلدان',
          uptime: 'وقت التشغيل'
        }
      },
      // Services
      services: {
        title: 'نظامنا المالي',
        subtitle: 'الشامل',
        wallet: {
          title: 'محفظة الحراسة AI Keys',
          description: 'تخزين آمن للعملات المشفرة والنقدية مع أتمتة مدعومة بالذكاء الاصطناعي ومعاملات سلسة'
        },
        travel: {
          title: 'مخطط السفر AI Keys',
          description: 'تخطيط السفر القائم على الذكاء الاصطناعي مع المدفوعات المتكاملة والتوصيات الشخصية'
        },
        logistics: {
          title: 'لوجستيات AI Keys',
          description: 'حلول لوجستية ذكية مع مدفوعات آلية وأنظمة تتبع'
        },
        education: {
          title: 'خدمات الطلاب AI Keys',
          description: 'مساعدة التعلم بالذكاء الاصطناعي ودعم القبول مع الخدمات المالية المتكاملة'
        }
      },
      // Technology
      technology: {
        title: 'تكنولوجيا متطورة',
        subtitle: 'مبنية للمستقبل',
        ai: 'أتمتة مدعومة بالذكاء الاصطناعي',
        blockchain: 'بلوك تشين سولانا',
        security: 'أمان المؤسسات',
        compliance: 'مرخص ومنظم في الإمارات'
      },
      // Token
      token: {
        title: 'رمز AI KEYS',
        subtitle: 'رمز SPL على سولانا',
        price: 'السعر الحالي',
        change: 'التغيير 24 ساعة',
        volume: 'حجم 24 ساعة',
        marketCap: 'القيمة السوقية'
      },
      // Footer
      footer: {
        company: 'شركة AI KEYS',
        description: 'حلول مالية ثورية مدعومة بالذكاء الاصطناعي مقرها دبي، الإمارات العربية المتحدة',
        links: {
          privacy: 'سياسة الخصوصية',
          terms: 'شروط الخدمة',
          support: 'الدعم',
          careers: 'الوظائف'
        },
        contact: {
          title: 'اتصل بنا',
          address: 'B312 NASER AHMED SAEED MOHAMED ALAWADHI -UAE- License Number 1104443',
          email: 'info@aikeys.ai'
        }
      }
    }
  },
  fr: {
    translation: {
      // Navigation
      nav: {
        home: 'Accueil',
        services: 'Services',
        technology: 'Technologie',
        about: 'À propos',
        contact: 'Contact',
        wallet: 'Portefeuille',
        travel: 'Voyage',
        logistics: 'Logistique',
        education: 'Éducation'
      },
      // Hero Section
      hero: {
        title: 'Solutions Fintech',
        subtitle: 'Révolutionnaires IA',
        description: 'Propulser l\'avenir de la finance avec un portefeuille de garde alimenté par l\'IA, planification de voyage, logistique et services étudiants. Licencié aux EAU et construit sur blockchain Solana.',
        cta: 'Explorer Notre Écosystème',
        watchDemo: 'Voir la Démo',
        stats: {
          users: 'Utilisateurs Actifs',
          transactions: 'Transactions',
          countries: 'Pays',
          uptime: 'Temps de Fonctionnement'
        }
      },
      // Services
      services: {
        title: 'Notre Écosystème',
        subtitle: 'Financier Complet',
        wallet: {
          title: 'Portefeuille de Garde AI Keys',
          description: 'Stockage sécurisé crypto et fiat avec automatisation IA et transactions fluides'
        },
        travel: {
          title: 'Planificateur Voyage AI Keys',
          description: 'Planification de voyage basée sur l\'IA avec paiements intégrés et recommandations personnalisées'
        },
        logistics: {
          title: 'Logistique AI Keys',
          description: 'Solutions logistiques intelligentes avec paiements automatisés et systèmes de suivi'
        },
        education: {
          title: 'Services Étudiants AI Keys',
          description: 'Assistance apprentissage IA et support admission avec services financiers intégrés'
        }
      },
      // Technology
      technology: {
        title: 'Technologie de Pointe',
        subtitle: 'Construite pour l\'Avenir',
        ai: 'Automatisation IA',
        blockchain: 'Blockchain Solana',
        security: 'Sécurité Entreprise',
        compliance: 'Licencié et Réglementé aux EAU'
      },
      // Token
      token: {
        title: 'Token AI KEYS',
        subtitle: 'Token SPL sur Solana',
        price: 'Prix Actuel',
        change: 'Changement 24h',
        volume: 'Volume 24h',
        marketCap: 'Capitalisation'
      },
      // Footer
      footer: {
        company: 'AI KEYS Company',
        description: 'Solutions fintech révolutionnaires alimentées par l\'IA basées à Dubaï, EAU',
        links: {
          privacy: 'Politique de Confidentialité',
          terms: 'Conditions de Service',
          support: 'Support',
          careers: 'Carrières'
        },
        contact: {
          title: 'Nous Contacter',
          address: 'B312 NASER AHMED SAEED MOHAMED ALAWADHI -UAE- License Number 1104443',
          email: 'info@aikeys.ai'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;