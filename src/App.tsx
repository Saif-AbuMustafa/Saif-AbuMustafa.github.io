import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/layout/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Footer } from "@/components/Footer";
import { OptimizedCursor } from "@/components/ui/OptimizedCursor";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Wallet from "./pages/Wallet";
import Travel from "./pages/Travel";
import Logistics from "./pages/Logistics";
import Education from "./pages/Education";
import Technology from "./pages/Technology";
import Token from "./pages/Token";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Investors from "./pages/Investors";
import ProcessLogos from "./pages/ProcessLogos";
import WalletDocs from "./pages/Resources/WalletDocs";
import TravelDocs from "./pages/Resources/TravelDocs";
import LogisticsDocs from "./pages/Resources/LogisticsDocs";
import EducationDocs from "./pages/Resources/EducationDocs";
import StatusPage from "./pages/Resources/StatusPage";
import Documentation from "./pages/Resources/Documentation";
import ApiReference from "./pages/Resources/ApiReference";
import PressKit from "./pages/PressKit";
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import Cookies from "./pages/Legal/Cookies";
import Compliance from "./pages/Legal/Compliance";
import NotFound from "./pages/NotFound";
import WaitlistConfirm from "./pages/WaitlistConfirm";
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";

const queryClient = new QueryClient();

const AppContent = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on language
    const currentLang = i18n.language || 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Listen to language changes
    const handleLanguageChange = (lng: string) => {
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lng;
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedBackground />
      <OptimizedCursor />
      <div className="relative min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/education" element={<Education />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/token" element={<Token />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/process-logos" element={<ProcessLogos />} />
          <Route path="/resources/docs" element={<Documentation />} />
          <Route path="/resources/api" element={<ApiReference />} />
          <Route path="/resources/wallet" element={<WalletDocs />} />
          <Route path="/resources/travel" element={<TravelDocs />} />
          <Route path="/resources/logistics" element={<LogisticsDocs />} />
          <Route path="/resources/education" element={<EducationDocs />} />
          <Route path="/resources/status" element={<StatusPage />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          <Route path="/legal/compliance" element={<Compliance />} />
          <Route path="/waitlist/confirm" element={<WaitlistConfirm />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <AppContent />
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;