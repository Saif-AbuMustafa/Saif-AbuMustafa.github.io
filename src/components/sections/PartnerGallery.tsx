import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import arabBank from '@/assets/partners/arab-bank.svg';

interface Partner {
  name: string;
  logo?: string;
  subtitle: string;
}

const partners: Partner[] = [
  {
    name: 'Arab Bank (Switzerland) Ltd',
    logo: arabBank,
    subtitle: 'Private banking & digital asset custodian',
  },
  {
    name: 'Scalable Solutions',
    subtitle: 'Digital asset infrastructure & exchange technology',
  },
  {
    name: 'Insource Contact Center',
    subtitle: 'CX operations & support services',
  },
  {
    name: 'Bequant',
    subtitle: 'Prime brokerage & trading infrastructure',
  },
  {
    name: 'Sumsub',
    subtitle: 'KYC, KYB & AML onboarding platform',
  },
  {
    name: 'Chainalysis',
    subtitle: 'Blockchain analytics & compliance monitoring',
  },
  {
    name: 'B2C2',
    subtitle: 'Institutional liquidity provider',
  },
  {
    name: 'Unlimit',
    subtitle: 'Cross-border payments & issuing',
  },
  {
    name: 'SH Finance',
    subtitle: 'Financial advisory & services',
  },
];

export const PartnerGallery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
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

  // Handle mouse/touch drag
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  // Triple the partners for seamless infinite scroll
  const triplePartners = [...partners, ...partners, ...partners];

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative py-20 overflow-hidden transition-all duration-1000 ease-out bg-white',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="container mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Trusted Partners & Ecosystem Providers
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work with global leaders in security, compliance, and digital asset infrastructure to ensure a safe, scalable, and compliant user experience.
          </p>
        </div>

        {/* Ticker track transparent */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) setIsPaused(false);
            handleDragEnd();
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="relative py-12 z-0"
          >
            <div
              className={cn(
                'flex items-center gap-20',
                !isPaused && !isDragging && 'animate-ticker-scroll'
              )}
              style={{
                animationPlayState: isPaused || isDragging ? 'paused' : 'running',
                willChange: 'transform',
              }}
            >
              {triplePartners.map((partner, index) => (
                <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-ticker-scroll {
          animation: ticker-scroll 30s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ticker-scroll {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
};

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-56 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Logo container with spotlight effect */}
        <div
          className={cn(
            'h-20 flex items-center justify-center mb-3 transition-all duration-500 ease-out',
            'transform-gpu',
            isHovered ? 'scale-110' : 'scale-100'
          )}
          style={{ willChange: 'transform' }}
        >
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={partner.name}
              className={cn(
                'max-h-16 w-auto object-contain transition-all duration-500',
                'grayscale opacity-60',
                'group-hover:grayscale-0 group-hover:opacity-100',
                'dark:brightness-0 dark:invert',
                'dark:group-hover:brightness-100 dark:group-hover:invert-0'
              )}
              loading="lazy"
            />
          ) : (
            <div className="text-center px-4">
              <div
                className={cn(
                  'text-lg font-bold tracking-tight transition-all duration-500',
                  'text-gray-500 group-hover:text-gray-900'
                )}
              >
                {partner.name}
              </div>
            </div>
          )}
        </div>

        {/* Subtitle */}
        <p
          className={cn(
            'text-center text-xs leading-relaxed transition-all duration-300',
            'text-gray-500',
            'group-hover:text-gray-900'
          )}
        >
          {partner.subtitle}
        </p>
      </div>
    </div>
  );
};
