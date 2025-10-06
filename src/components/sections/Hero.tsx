import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6">
            {t('home.hero.headline')}
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('home.hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8"
              asChild
            >
              <Link to="/#waitlist">
                {t('home.hero.primaryCTA')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8"
              asChild
            >
              <Link to="/#security">
                <Shield className="mr-2 h-5 w-5" />
                {t('home.hero.secondaryCTA')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
