import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { ExternalLink, Github, Layers, Zap, Shield, Rocket } from "lucide-react";

interface ProjectsSectionProps extends React.HTMLAttributes<HTMLElement> { }

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
    ({ className, ...props }, ref) => {
        const projects = [
            {
                title: "Sensetrons ERP",
                category: "Enterprise Software",
                description: "A comprehensive Resource Planning system for the garment industry with integrated AI insights.",
                icon: Layers,
                tags: ["React", "TypeScript", "Node.js", "AI Integration"],
            },
            {
                title: "CryptoGuard",
                category: "Blockchain Security",
                description: "Real-time threat detection and smart contract audit platform for DeFi protocols.",
                icon: Shield,
                tags: ["Rust", "Solidity", "Web3", "Next.js"],
            },
            {
                title: "PulseAnalytics",
                category: "Data Software",
                description: "High-performance data visualization engine processing millions of events per second.",
                icon: Zap,
                tags: ["Go", "Python", "Recharts", "InfluxDB"],
            },
            {
                title: "AuraOS",
                category: "System Software",
                description: "A custom microkernel operating system designed for low-latency edge computing devices.",
                icon: Rocket,
                tags: ["C++", "Assembly", "Kernel", "RTOS"],
            }
        ];

        return (
            <section
                ref={ref}
                id="projects"
                className={cn("py-32 bg-background relative overflow-hidden", className)}
                {...props}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-20 animate-reveal">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Case <span className="text-primary italic">Studies</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Explore our track record of delivering high-impact solutions
                            to global clients across diverse industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, i) => (
                            <div
                                key={project.title}
                                className="group relative flex flex-col bg-secondary/30 rounded-3xl overflow-hidden hover-lift animate-reveal border border-white/5"
                                style={{ animationDelay: `${i * 150}ms` }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center relative overflow-hidden">
                                    <project.icon className="w-16 h-16 text-primary opacity-40 group-hover:scale-110 group-hover:opacity-100 group-hover:animate-float-subtle transition-all duration-500" />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80">{project.category}</span>
                                        <div className="flex space-x-3">
                                            <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                                            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-foreground/70 tracking-tight">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center animate-reveal">
                        <button className="px-8 py-4 glass-effect rounded-full font-bold text-lg hover-lift group border-primary/20">
                            Explore All Projects
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
);

ProjectsSection.displayName = "ProjectsSection";

export { ProjectsSection };
