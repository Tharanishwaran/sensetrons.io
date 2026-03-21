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
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Let's Build Something <span className="text-primary italic">Extraordinary</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you have a fully-formed idea or just a spark of innovation,
                our team is ready to help you engineer the future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-reveal [animation-delay:200ms]">
              {[
                { icon: Mail, label: "Email Us", value: "hello@sensetrons.com" },
                { icon: MessageSquare, label: "Live Chat", value: "Available 24/7" },
                { icon: Phone, label: "Call Us", value: "+91 " }
              ].map((item, i) => (
                <div key={item.label} className="p-8 glass-effect rounded-2xl text-center hover-lift border-white/5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">{item.label}</div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="text-center animate-reveal [animation-delay:400ms]">
              <button className="px-12 py-5 bg-primary text-primary-foreground rounded-full font-bold text-xl hover:opacity-90 transition-all duration-300 hover-lift shadow-xl shadow-primary/20">
                Start Your Project
              </button>
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