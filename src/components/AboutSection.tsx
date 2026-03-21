import engineeringCoreImage from "@/assets/projects/engineering_core.png";
import companyLogo from "@/assets/company-logo.svg";
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

              <div className="relative animate-reveal [animation-delay:600ms]">
                <div className="aspect-square glass-effect rounded-[2.5rem] p-12 flex flex-col justify-center border border-primary/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Creative Identity Core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 flex items-center justify-center">
                    <div className="absolute inset-4 border-2 border-primary/10 rounded-full animate-spin-slow" />
                    <div className="absolute inset-8 border border-primary/30 rounded-full animate-spin-reverse" />
                    <div className="absolute inset-16 overflow-hidden rounded-full border border-white/10 shadow-massive rotate-12 transition-transform group-hover:rotate-0 duration-1000">
                      <img
                        src={engineeringCoreImage}
                        alt="Engineering Core"
                        className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    </div>
                    {/* Centered Logo Badge */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <div className="w-16 h-16 bg-background/60 backdrop-blur-xl rounded-2xl border border-primary/20 p-2 shadow-glow animate-float-subtle">
                        <img src={companyLogo} alt="Logo" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto relative z-10 flex justify-between items-end border-t border-primary/10 pt-10 opacity-60 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center">
                      <div className="text-4xl font-black text-primary">2+</div>
                      <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mt-1">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-primary">50+</div>
                      <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mt-1">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-primary">100%</div>
                      <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mt-1">Success</div>
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