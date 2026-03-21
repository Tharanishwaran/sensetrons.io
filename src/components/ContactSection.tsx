import { cn } from "@/lib/utils";
import { forwardRef } from "react";

import { Mail, MessageSquare, Phone } from "lucide-react";

interface ContactSectionProps extends React.HTMLAttributes<HTMLElement> { }

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="contact"
        className={cn("py-32 bg-background relative overflow-hidden", className)}
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
                <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">contact@sensetrons.com</p>
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
                <p className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">+91 7094399879</p>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";

export { ContactSection };
