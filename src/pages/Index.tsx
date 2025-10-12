import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import companyLogo from "@/assets/company-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src={companyLogo}
                alt="Senstrons Logo"
                className="w-8 h-8 object-contain"
                loading="lazy"
              />
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Senstrons
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Senstrons. Pioneering the future of technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
