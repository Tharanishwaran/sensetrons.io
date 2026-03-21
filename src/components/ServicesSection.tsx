import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import {
  Code2,
  BrainCircuit,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck
} from "lucide-react";

interface ServicesSectionProps extends React.HTMLAttributes<HTMLElement> { }

const ServicesSection = forwardRef<HTMLElement, ServicesSectionProps>(
  ({ className, ...props }, ref) => {
    const services = [
      {
        title: "Bespoke Engineering",
        description: "Tailored software solutions designed for high-stakes business environments.",
        icon: Code2,
      },
      {
        title: "AI Ecosystems",
        description: "Intelligent automation and predictive systems powered by custom-trained neural networks.",
        icon: BrainCircuit,
      },
      {
        title: "Mobile Architecture",
        description: "High-performance native and cross-platform mobile experiences.",
        icon: Smartphone,
      },
      {
        title: "Cloud Strategy",
        description: "Scalable infrastructure and automated deployment for zero-downtime operations.",
        icon: Cloud,
      },
      {
        title: "Web3 & Security",
        description: "Decentralized systems and smart contract audits for secure digital assets.",
        icon: Database,
      },
      {
        title: "Strategic Consulting",
        description: "Technical roadmaps and architecture reviews to future-proof your business.",
        icon: ShieldCheck,
      }
    ];

    return (
      <section
        ref={ref}
        id="services"
        className={cn("py-32 bg-background relative overflow-hidden", className)}
        {...props}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20 animate-reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Our <span className="text-primary italic">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide end-to-end technical solutions that enable organizations
              to scale and innovate at speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group p-8 glass-effect rounded-2xl hover-lift animate-reveal border-white/5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ServicesSection.displayName = "ServicesSection";

export { ServicesSection };