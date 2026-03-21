import { cn } from "@/lib/utils";
import { forwardRef } from "react";

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
            <h2 className="text-5xl md:text-6xl font-black mb-8 animate-reveal tracking-tighter">
              <span className="text-foreground leading-tight">Ready to</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent leading-tight uppercase font-outfit">
                Transform Your Vision?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-20 max-w-3xl mx-auto animate-reveal leading-relaxed opacity-80" style={{ animationDelay: '200ms' }}>
              Let's discuss how our expertise in AI, blockchain, OS development,
              and web technologies can bridge the gap between idea and industry reality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
              {[
                {
                  emoji: "📧",
                  label: "Email Us",
                  value: "contact@sensetrons.com",
                  delay: "300ms"
                },
                {
                  emoji: "💬",
                  label: "Live Chat",
                  value: "Available 24/7",
                  delay: "400ms"
                },
                {
                  emoji: "📞",
                  label: "Call Us",
                  value: "+91 7094399879",
                  delay: "500ms"
                }
              ].map((item) => (
                <div
                  key={item.label}
                  className="group relative p-10 glass-effect rounded-[2.5rem] border border-white/5 shadow-massive hover:shadow-primary/10 transition-all duration-500 overflow-hidden animate-reveal"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="text-6xl mb-8 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                    {item.emoji}
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-3 font-outfit uppercase tracking-tight group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-lg group-hover:text-foreground transition-all">
                    {item.value}
                  </p>

                  {/* Subtle hover glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            <div className="animate-reveal" style={{ animationDelay: '600ms' }}>
              <button className="px-12 py-5 bg-primary text-white rounded-full font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30 uppercase tracking-tighter">
                Start Your Project
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Background Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-float-subtle" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10 animate-float-subtle" style={{ animationDelay: '2s' }} />
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";

export { ContactSection };
