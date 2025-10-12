import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import companyLogo from "@/assets/company-logo.svg";

const Navigation = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/30",
          "transition-all duration-700 ease-premium",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 group">
              <div className="relative transform-premium-hover">
                <img
                  src={companyLogo}
                  alt="Company Logo"
                  className="w-12 h-12 object-contain transition-all duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-lg blur-md transition-all duration-500" />
              </div>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent text-shadow-glow">
                Senstrons
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 transform relative group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
              <a 
                href="#services" 
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 transform relative group"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 transform relative group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";

export { Navigation };