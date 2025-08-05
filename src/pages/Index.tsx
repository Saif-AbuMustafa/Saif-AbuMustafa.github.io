import { useEffect } from 'react';
import Home from './Home';
import '../i18n';

const Index = () => {
  useEffect(() => {
    // Set dark mode by default for professional fintech look
    document.documentElement.classList.add('dark');
  }, []);

  return <Home />;
};

export default Index;
