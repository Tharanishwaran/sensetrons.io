import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AboutSectionProps extends React.HTMLAttributes<HTMLElement> { }

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="about"
        className={cn(
          "py-32 relative overflow-hidden bg-background",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div className="animate-reveal">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Beyond Code: <br />
                    <span className="text-primary tracking-tighter">Engineering Excellence</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                    For 2 years, Sensetrons has been at the forefront of digital transformation,
                    bridging the gap between complex technical challenges and elegant software solutions.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      title: "Innovation Driven",
                      desc: "We don't just follow trends; we set them through rigorous R&D."
                    },
                    {
                      title: "Technical Mastery",
                      desc: "Our engineers possess deep expertise in modern tech stacks and architectures."
                    },
                    {
                      title: "Partner-Centric",
                      desc: "We treat your project as our own, ensuring long-term success and scalability."
                    }
                  ].map((item, i) => (
                    <div
                      key={item.title}
                      className="p-6 glass-effect rounded-2xl hover-lift animate-reveal"
                      style={{ animationDelay: `${(i + 3) * 100}ms` }}
                    >
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
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
                    <div className="text-center">
                      <div className="text-6xl font-black text-primary mb-2">100%</div>
                      <div className="text-sm uppercase tracking-[0.2em] font-bold text-muted-foreground">Client Success</div>
                    </div>
                  </div>
                </div>

                {/* Decorative blob */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

AboutSection.displayName = "AboutSection";

export { AboutSection };
