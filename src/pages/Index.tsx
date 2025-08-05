import { useEffect } from 'react';
import '../i18n';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Technology } from '@/components/Technology';
import { TokenDisplay } from '@/components/TokenDisplay';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set dark mode by default for professional fintech look
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <section id="token" className="py-20 lg:py-32">
          <TokenDisplay />
        </section>
        <Technology />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
