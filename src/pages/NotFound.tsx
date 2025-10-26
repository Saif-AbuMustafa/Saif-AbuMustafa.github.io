import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { InteractiveSection } from "@/components/ui/InteractiveSection";
import { BackgroundAnimations } from "@/components/ui/BackgroundAnimations";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <InteractiveSection background="gradient" className="py-20 w-full">
        <BackgroundAnimations variant="hero" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-black mb-8 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ak-text animate-slide-up">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-ak-muted mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button size="lg" variant="premium" asChild className="group">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Back to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.history.back()} className="group">
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </InteractiveSection>
    </div>
  );
};

export default NotFound;
