import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import companyLogo from "@/assets/company-logo.png";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "min-h-screen flex items-center justify-center relative overflow-hidden",
          "bg-gradient-subtle mesh-background",
          className
        )}
        {...props}
      >
        {/* Enhanced 3D Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float-premium" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-glow/30 rounded-full blur-2xl animate-float-premium" style={{animationDelay: '3s'}} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-mesh-flow" />
        </div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center bottom'
          }} />
        </div>
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Animated Logo Container */}
            <div className="mb-12 animate-slide-up-elegant">
              <div className="inline-block p-8 glass-effect rounded-3xl shadow-massive hover:shadow-glow transition-all duration-700 transform-premium-hover group">
                <img
                  src={companyLogo}
                  alt="Senstrons Logo"
                  className="w-24 h-24 mx-auto object-contain group-hover:scale-110 transition-all duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500" />
              </div>
            </div>
            
            {/* Enhanced Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up-elegant text-shadow-glow" style={{animationDelay: '0.2s'}}>
              <span className="bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Future-Ready
              </span>
              <br />
              <span className="text-foreground leading-tight">Technology</span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up-elegant leading-relaxed" style={{animationDelay: '0.4s'}}>
              Pioneering innovations in <span className="text-primary font-semibold">AI</span>, <span className="text-primary font-semibold">Blockchain</span>, <span className="text-primary font-semibold">OS Kernels</span>, and <span className="text-primary font-semibold">Web Technologies</span> 
              to shape tomorrow's digital landscape.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-elegant" style={{animationDelay: '0.6s'}}>
              <button className="group relative px-12 py-5 bg-gradient-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-massive hover:shadow-glow transition-all duration-500 transform-premium-hover overflow-hidden">
                <span className="relative z-10">Explore Solutions</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse-premium" />
                <div className="absolute -inset-1 bg-gradient-primary blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
              </button>
              
              <button className="group px-12 py-5 glass-effect text-foreground rounded-2xl font-bold text-lg border border-border/30 shadow-elevated hover:shadow-massive transition-all duration-500 transform-premium-hover">
                <span className="group-hover:text-primary transition-colors duration-300">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };