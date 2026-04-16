import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { ExternalLink, Github, Layers, Zap, Shield, Rocket } from "lucide-react";

interface ProjectsSectionProps extends React.HTMLAttributes<HTMLElement> { }

import erpImage from "@/assets/projects/erp.png";
import securityImage from "@/assets/projects/security.png";
import meshImage from "@/assets/projects/mesh.png";
import kernelImage from "@/assets/projects/kernel.png";

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
    ({ className, ...props }, ref) => {
        const projects = [
            {
                title: "Sensetrons ERP",
                category: "Enterprise Software",
                description: "A comprehensive Resource Planning system for the garment industry with integrated AI insights.",
                icon: Layers,
                image: erpImage,
                tags: ["React", "TypeScript", "Node.js", "AI Integration"],
            },
            {
                title: "CryptoGuard",
                category: "Blockchain Security",
                description: "Real-time threat detection and smart contract audit platform for DeFi protocols.",
                icon: Shield,
                image: securityImage,
                tags: ["Rust", "Solidity", "Web3", "Next.js"],
            },
            {
                title: "PulseAnalytics",
                category: "Data Software",
                description: "High-performance data visualization engine processing millions of events per second.",
                icon: Zap,
                image: meshImage,
                tags: ["Go", "Python", "Recharts", "InfluxDB"],
            },
            {
                title: "AuraOS",
                category: "System Software",
                description: "A custom microkernel operating system designed for low-latency edge computing devices.",
                icon: Rocket,
                image: kernelImage,
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
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center text-primary border border-white/10">
                                        <project.icon className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="p-8 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80">{project.category}</span>
                                        <div className="flex space-x-3">
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
                        <Link to="/projects" className="px-8 py-4 glass-effect rounded-full font-bold text-lg hover-lift group border-primary/20 inline-block">
                            Explore All Projects
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
);

ProjectsSection.displayName = "ProjectsSection";

export { ProjectsSection };
