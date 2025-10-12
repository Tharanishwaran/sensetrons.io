import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import iconAI from "@/assets/icon-ai.png";
import iconBlockchain from "@/assets/icon-blockchain.png";
import iconOS from "@/assets/icon-os.png";
import iconWeb from "@/assets/icon-web.png";

interface ServicesSectionProps extends React.HTMLAttributes<HTMLElement> {}

const ServicesSection = forwardRef<HTMLElement, ServicesSectionProps>(
  ({ className, ...props }, ref) => {
    const services = [
      {
        title: "Artificial Intelligence",
        description: "Advanced AI solutions including machine learning, neural networks, and intelligent automation systems.",
        icon: iconAI,
        features: ["Machine Learning Models", "Neural Networks", "AI Automation", "Predictive Analytics"]
      },
      {
        title: "Blockchain Technology",
        description: "Secure, decentralized solutions for modern digital transactions and smart contract development.",
        icon: iconBlockchain,
        features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Cryptocurrency Systems"]
      },
      {
        title: "OS Kernel Development",
        description: "Low-level system programming and custom operating system kernel development.",
        icon: iconOS,
        features: ["Custom Kernels", "System Optimization", "Hardware Integration", "Performance Tuning"]
      },
      {
        title: "Web Technologies",
        description: "Modern web applications with cutting-edge frameworks and responsive design principles.",
        icon: iconWeb,
        features: ["React & Next.js", "Cloud Architecture", "API Development", "Progressive Web Apps"]
      }
    ];

    return (
      <section
        ref={ref}
        id="services"
        className={cn(
          "py-32 relative overflow-hidden",
          "bg-gradient-card",
          className
        )}
        {...props}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-primary rounded-full blur-3xl animate-float-premium" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary-glow/30 rounded-full blur-2xl animate-mesh-flow" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-slide-up-elegant">
              <span className="bg-gradient-primary bg-clip-text text-transparent text-shadow-glow">
                Our Expertise
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up-elegant" style={{animationDelay: '0.2s'}}>
              We specialize in cutting-edge technologies that drive innovation 
              and transform industries with premium solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative p-10 glass-effect rounded-3xl border border-border/30 shadow-massive hover:shadow-glow transition-all duration-700 transform-premium-hover overflow-hidden"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Premium 3D Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-700" />
                <div className="absolute -inset-1 bg-gradient-primary blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700" />
                
                {/* Enhanced Service Icon */}
                <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 w-20 h-20">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                
                {/* Service Title */}
                <h3 className="text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-all duration-500 text-shadow-glow">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground transition-colors duration-500">
                  {service.description}
                </p>
                
                {/* Enhanced Service Features */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className="flex items-center text-muted-foreground group-hover:text-foreground transition-all duration-500"
                      style={{transitionDelay: `${featureIndex * 0.1}s`}}
                    >
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mr-4 group-hover:shadow-glow group-hover:scale-125 transition-all duration-500" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Premium Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-primary rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-glow" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-primary opacity-5 blur-3xl animate-mesh-flow" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary-glow opacity-10 blur-2xl animate-float-premium" style={{animationDelay: '4s'}} />
      </section>
    );
  }
);

ServicesSection.displayName = "ServicesSection";

export { ServicesSection };