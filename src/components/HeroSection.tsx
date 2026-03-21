import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import companyLogo from "@/assets/company-logo.svg";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> { }

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "min-h-[100vh] flex items-center justify-center relative overflow-hidden",
          "bg-background mesh-background",
          className
        )}
        {...props}
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-float-subtle" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-float-subtle" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Company Logo Display */}
            <div className="flex justify-center mb-10 animate-reveal">
              <div className="w-54 h-64 bg-black border border-white/5 shadow-massive rounded-[3.5rem] p-12 flex items-center justify-center transition-all duration-300">
                <img
                  src={companyLogo}
                  alt="Sensetrons Logo"
                  className="w-full h-full object-contain brightness-110"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-reveal">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                2 Years of Engineering Excellence
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 animate-reveal [animation-delay:200ms] tracking-tight leading-[1.1]">
              Engineering the <span className="text-primary text-glow">Digital Future</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-reveal [animation-delay:400ms] leading-relaxed">
              Sensetrons is a premier software studio delivering bespoke solutions
              in AI, Blockchain, and Enterprise Architecture. We build the systems
              that power tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-reveal [animation-delay:600ms]">
              <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 hover-lift shadow-lg shadow-primary/20 cursor-pointer">
                View Our Portfolio
              </a>
              <a href="#services" className="px-8 py-4 glass-effect text-foreground rounded-full font-bold text-lg hover:bg-white/5 transition-all duration-300 hover-lift cursor-pointer">
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
          </div>
        </div> */}
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };