import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import arabBank from '@/assets/partners/arab-bank.svg';

const partners = [
  {
    name: 'Arab Bank (Switzerland) Ltd',
    logo: arabBank,
    subtitle: 'Private banking & digital asset custodian',
  },
  {
    name: 'Scalable Solutions',
    logo: '',
    subtitle: 'Digital asset infrastructure & exchange technology',
  },
  {
    name: 'Insource Contact Center',
    logo: '',
    subtitle: 'CX operations & support services',
  },
  {
    name: 'Bequant',
    logo: '',
    subtitle: 'Prime brokerage & trading infrastructure',
  },
  {
    name: 'Sumsub',
    logo: '',
    subtitle: 'KYC, KYB & AML onboarding platform',
  },
  {
    name: 'Chainalysis',
    logo: '',
    subtitle: 'Blockchain analytics & compliance monitoring',
  },
  {
    name: 'B2C2',
    logo: '',
    subtitle: 'Institutional liquidity provider',
  },
  {
    name: 'Unlimit',
    logo: '',
    subtitle: 'Cross-border payments & issuing',
  },
  {
    name: 'SH Finance',
    logo: '',
    subtitle: 'Financial advisory & services',
  },
];

export const PartnerGallery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Duplicate items for infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative py-24 overflow-hidden transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      )}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Trusted Partners & Ecosystem Providers
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We work with global leaders in security, compliance, and digital asset infrastructure to ensure a safe, scalable, and compliant user experience.
          </p>
        </div>

        {/* Infinite ticker container */}
        <div className="relative">
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollerRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={cn(
                'flex gap-16 py-8',
                !isPaused && 'animate-infinite-scroll'
              )}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-48 group"
                >
                  <div className="relative h-24 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 rounded-lg border border-border/50 group-hover:border-primary/50 transition-all duration-500">
                        <span className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors duration-300 px-4 text-center">
                          {partner.name}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {partner.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-infinite-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};
