import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Wallet from "./pages/Wallet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/travel" element={<div>Travel Page - Coming Soon</div>} />
          <Route path="/logistics" element={<div>Logistics Page - Coming Soon</div>} />
          <Route path="/education" element={<div>Education Page - Coming Soon</div>} />
          <Route path="/technology" element={<div>Technology Page - Coming Soon</div>} />
          <Route path="/token" element={<div>Token Page - Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Page - Coming Soon</div>} />
          <Route path="/careers" element={<div>Careers Page - Coming Soon</div>} />
          <Route path="/investors" element={<div>Investors Page - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
