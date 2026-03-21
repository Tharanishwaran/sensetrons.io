import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
    Server, Cpu, Activity, Zap, Box, Brain,
    ExternalLink, Layers, Shield
} from "lucide-react";
import erpImage from "@/assets/projects/erp.png";
import securityImage from "@/assets/projects/security.png";
import meshImage from "@/assets/projects/mesh.png";
import kernelImage from "@/assets/projects/kernel.png";
import aiEngineImage from "@/assets/projects/ai_engine.png";

const ProjectsPage = () => {
    const projects = [
        {
            title: "Sensetrons ERP",
            category: "Enterprise Software",
            description: "Resource Planning for global garment manufacturers with AI supply chain optimization.",
            icon: Layers,
            image: erpImage,
            tags: ["React", "PostgreSQL", "AI"]
        },
        {
            title: "CryptoGuard",
            category: "Cybersecurity",
            description: "Real-time smart contract auditing and threat detection systems.",
            icon: Shield,
            image: securityImage,
            tags: ["Rust", "Web3", "EVM"]
        },
        {
            title: "Aura Mesh",
            category: "Infrastructure",
            description: "High-performance service mesh for microservices observability and traffic management.",
            icon: Server,
            image: meshImage,
            tags: ["Go", "gRPC", "Envoy"]
        },
        {
            title: "Sentinel AI",
            category: "Observability",
            description: "AI-based system observability platform with predictive failure analysis.",
            icon: Activity,
            image: aiEngineImage,
            tags: ["Python", "PyTorch", "Grafana"]
        },
        {
            title: "Nova Kernel",
            category: "System Software",
            description: "L4-based microkernel designed for ultra-low latency edge computing.",
            icon: Cpu,
            image: kernelImage,
            tags: ["C++", "ASM", "RTOS"]
        },
        {
            title: "X-Drive Systems",
            category: "Low-level",
            description: "Custom high-performance drivers for specialized industrial hardware.",
            icon: Box,
            image: aiEngineImage, // Placeholder
            tags: ["C", "Drivers", "Hardware"]
        }
    ];

    const techStack = [
        "React", "Node.js", "TypeScript", "Python", "Rust", "Go",
        "AWS", "PostgreSQL", "Docker", "Kubernetes", "Redis", "Solidity"
    ];

    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
            <Navigation />

            <main className="pt-32">
                <div className="container mx-auto px-6 mb-20 animate-reveal">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic text-primary">Technical <br />Case Studies</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        A deep dive into our engineering projects across low-level infrastructure,
                        AI observability, and high-performance systems.
                    </p>
                </div>

                <div className="container mx-auto px-6 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <div
                                key={project.title}
                                className="group relative flex flex-col bg-secondary/30 rounded-3xl overflow-hidden hover-lift animate-reveal border border-white/5"
                                style={{ animationDelay: `${i * 100}ms` }}
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
                </div>

                {/* Tech Stack Section */}
                <section className="py-32 border-t border-border bg-secondary/10">
                    <div className="container mx-auto px-6 text-center animate-reveal">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Our <span className="text-primary italic">Technical Edge</span></h2>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {techStack.map((tech) => (
                                <span key={tech} className="px-6 py-3 glass-effect rounded-full text-sm font-bold border-white/5 hover-lift">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-12 text-muted-foreground max-w-2xl mx-auto">
                            We select the most appropriate technologies for each project,
                            prioritizing performance, security, and long-term maintainability.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
