import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ContactSectionProps extends React.HTMLAttributes<HTMLElement> {}

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="contact"
        className={cn(
          "py-32 relative overflow-hidden",
          "bg-gradient-subtle mesh-background",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-slide-up-elegant text-shadow-glow">
              <span className="text-foreground leading-tight">Ready to</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Transform Your Vision?
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto animate-slide-up-elegant leading-relaxed" style={{animationDelay: '0.2s'}}>
              Let's discuss how our expertise in AI, blockchain, OS development, 
              and web technologies can bring your ideas to life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              <div className="group p-8 glass-effect rounded-3xl border border-border/30 shadow-massive hover:shadow-glow transition-all duration-700 transform-premium-hover animate-slide-up-elegant" style={{animationDelay: '0.3s'}}>
                <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  📧
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">Email Us</h3>
                <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">hello@senstrons.com</p>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-700" />
              </div>
              
              <div className="group p-8 glass-effect rounded-3xl border border-border/30 shadow-massive hover:shadow-glow transition-all duration-700 transform-premium-hover animate-slide-up-elegant" style={{animationDelay: '0.4s'}}>
                <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  💬
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">Live Chat</h3>
                <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">Available 24/7</p>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-700" />
              </div>
              
              <div className="group p-8 glass-effect rounded-3xl border border-border/30 shadow-massive hover:shadow-glow transition-all duration-700 transform-premium-hover animate-slide-up-elegant" style={{animationDelay: '0.5s'}}>
                <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  📞
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">Call Us</h3>
                <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">+1 (555) 123-4567</p>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-700" />
              </div>
            </div>
            
            <button className="group relative px-16 py-6 bg-gradient-primary text-primary-foreground rounded-3xl font-bold text-xl shadow-massive hover:shadow-glow transition-all duration-700 transform-premium-hover overflow-hidden animate-slide-up-elegant" style={{animationDelay: '0.6s'}}>
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-glow-pulse-premium" />
              <div className="absolute -inset-2 bg-gradient-primary blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700" />
            </button>
          </div>
        </div>
        
        {/* Enhanced Background Elements */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-primary opacity-15 rounded-full blur-3xl animate-float-premium" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-glow opacity-20 rounded-full blur-2xl animate-float-premium" style={{animationDelay: '4s'}} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-xl animate-mesh-flow" />
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";

export { ContactSection };