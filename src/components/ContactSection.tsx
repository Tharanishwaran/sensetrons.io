import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Mail, MessageSquare, PhoneCall, ArrowUpRight } from "lucide-react";

interface ContactSectionProps extends React.HTMLAttributes<HTMLElement> { }

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="contact"
        className={cn("py-40 bg-background relative overflow-hidden", className)}
        {...props}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 animate-reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                Let's start a <span className="text-primary italic">conversation</span>.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-70">
                Whether you have a fully-formed idea or just a spark of innovation,
                we're here to engineer your next success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  title: "General Inquiries",
                  value: "contact@sensetrons.com",
                  delay: "100ms"
                },
                {
                  icon: MessageSquare,
                  label: "Chat",
                  title: "Support 24/7",
                  value: "Available now",
                  delay: "200ms"
                },
                {
                  icon: PhoneCall,
                  label: "Call",
                  title: "Technical Lead",
                  value: "+91 7094399879",
                  delay: "300ms"
                }
              ].map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 animate-reveal text-center"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary/60 transition-colors">
                      {item.label}
                    </div>
                    <div className="text-lg font-bold text-foreground group-hover:translate-y-[-2px] transition-transform flex items-center justify-center">
                      {item.value}
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-60 transition-all" />
                    </div>
                    <div className="text-xs text-muted-foreground opacity-60">
                      {item.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center animate-reveal" style={{ animationDelay: '400ms' }}>
              <button className="inline-flex items-center space-x-4 bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/10">
                <span>Start Your Project</span>
                <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Grid Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px] -z-20" />
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";

export { ContactSection };
