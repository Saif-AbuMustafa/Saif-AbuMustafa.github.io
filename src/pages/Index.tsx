import { useEffect } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/Footer';
import Home from './Home';
import '../i18n';

const Index = () => {
  useEffect(() => {
    // Set dark mode by default for professional fintech look
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
