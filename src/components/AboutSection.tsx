import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AboutSectionProps extends React.HTMLAttributes<HTMLElement> {}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="about"
        className={cn(
          "py-32 relative overflow-hidden",
          "bg-background mesh-background",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Enhanced Content */}
              <div className="space-y-10">
                <div className="animate-slide-up-elegant">
                  <h2 className="text-5xl md:text-6xl font-bold mb-8 text-shadow-glow">
                    <span className="text-foreground leading-tight">Building the</span>
                    <br />
                    <span className="bg-gradient-primary bg-clip-text text-transparent leading-tight">
                      Digital Future
                    </span>
                  </h2>
                  <p className="text-2xl text-muted-foreground leading-relaxed">
                    Sensetrons stands at the forefront of technological innovation, 
                    combining expertise in artificial intelligence, blockchain, 
                    operating systems, and modern web technologies.
                  </p>
                </div>
                
                <div className="space-y-8 animate-slide-up-elegant" style={{animationDelay: '0.2s'}}>
                  <div className="group flex items-start space-x-6 p-6 glass-effect rounded-2xl border border-border/30 hover:shadow-3d transition-all duration-500 transform-premium-hover">
                    <div className="w-4 h-4 bg-gradient-primary rounded-full mt-2 shadow-glow group-hover:scale-150 transition-all duration-500" />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        Innovation-Driven
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        We push the boundaries of what's possible with cutting-edge 
                        research and development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-6 p-6 glass-effect rounded-2xl border border-border/30 hover:shadow-3d transition-all duration-500 transform-premium-hover">
                    <div className="w-4 h-4 bg-gradient-primary rounded-full mt-2 shadow-glow group-hover:scale-150 transition-all duration-500" />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        Technical Excellence
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        Our team combines deep technical knowledge with practical 
                        implementation expertise.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-6 p-6 glass-effect rounded-2xl border border-border/30 hover:shadow-3d transition-all duration-500 transform-premium-hover">
                    <div className="w-4 h-4 bg-gradient-primary rounded-full mt-2 shadow-glow group-hover:scale-150 transition-all duration-500" />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        Future-Focused
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        We build solutions that scale and adapt to tomorrow's 
                        technological landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced 3D Visual Element */}
              <div className="relative animate-slide-up-elegant" style={{animationDelay: '0.4s'}}>
                <div className="relative p-12 glass-effect rounded-3xl shadow-massive transform-premium-hover group border border-border/30">
                  {/* Enhanced Animated 3D Elements */}
                  <div className="w-full h-96 flex items-center justify-center relative">
                    <div className="relative w-40 h-40 animate-float-premium">
                      {/* Premium Cube Faces with enhanced effects */}
                      <div className="absolute inset-0 bg-gradient-primary rounded-2xl shadow-glow transform perspective-1200 rotate-x-12 rotate-y-12 group-hover:rotate-x-6 group-hover:rotate-y-6 transition-all duration-700" />
                      <div className="absolute inset-0 bg-primary-glow/40 rounded-2xl shadow-massive transform perspective-1200 rotate-x-12 rotate-y-12 translate-x-3 translate-y-3 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-700" />
                      <div className="absolute inset-0 glass-effect rounded-2xl border border-border/30 transform perspective-1200 rotate-x-12 rotate-y-12 translate-x-6 translate-y-6 group-hover:translate-x-9 group-hover:translate-y-9 transition-all duration-700" />
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-scale-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary-glow rounded-full animate-scale-pulse" style={{animationDelay: '1s'}} />
                    <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-primary rounded-full animate-scale-pulse" style={{animationDelay: '2s'}} />
                  </div>
                  
                  {/* Enhanced Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-12">
                    <div className="text-center group-hover:scale-110 transition-all duration-500">
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent text-shadow-glow">
                        2+
                      </div>
                      <div className="text-muted-foreground font-medium">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center group-hover:scale-110 transition-all duration-500" style={{transitionDelay: '0.1s'}}>
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent text-shadow-glow">
                        15+
                      </div>
                      <div className="text-muted-foreground font-medium">
                        Projects Delivered
                      </div>
                    </div>
                    <div className="text-center group-hover:scale-110 transition-all duration-500" style={{transitionDelay: '0.2s'}}>
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent text-shadow-glow">
                        24/7
                      </div>
                      <div className="text-muted-foreground font-medium">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Background Glow */}
                <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-3xl -z-10 animate-glow-pulse-premium" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background Elements */}
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-primary-glow opacity-10 blur-3xl animate-mesh-flow" />
        <div className="absolute bottom-0 right-0 w-2/5 h-3/4 bg-gradient-primary opacity-10 blur-3xl animate-float-premium" style={{animationDelay: '2s'}} />
      </section>
    );
  }
);

AboutSection.displayName = "AboutSection";

export { AboutSection };
