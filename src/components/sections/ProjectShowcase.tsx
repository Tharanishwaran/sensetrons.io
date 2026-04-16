import { motion } from "framer-motion";
import { Card3D } from "../ui/Card3D";
import {
    Server, Cpu, Activity,
    Layers, Shield, ArrowUpRight, Github
} from "lucide-react";
import erpImage from "@/assets/projects/erp.png";
import securityImage from "@/assets/projects/security.png";
import meshImage from "@/assets/projects/mesh.png";
import kernelImage from "@/assets/projects/kernel.png";
import aiEngineImage from "@/assets/projects/ai_engine.png";

export const ProjectShowcase = () => {
    const projects = [
        {
            title: "Sensetrons ERP",
            category: "Enterprise Software",
            desc: "Resource Planning for global garment manufacturers with AI supply chain optimization.",
            icon: Layers,
            image: erpImage,
            tags: ["React", "PostgreSQL", "AI"],
            glow: "purple"
        },
        {
            title: "CryptoGuard",
            category: "Cybersecurity",
            desc: "Real-time smart contract auditing and threat detection systems for EVM networks.",
            icon: Shield,
            image: securityImage,
            tags: ["Rust", "Web3", "EVM"],
            glow: "cyan"
        },
        {
            title: "Aura Mesh",
            category: "Infrastructure",
            desc: "High-performance service mesh for microservices observability and traffic management.",
            icon: Server,
            image: meshImage,
            tags: ["Go", "gRPC", "Envoy"],
            glow: "white"
        },
        {
            title: "Sentinel AI",
            category: "Observability",
            desc: "AI-based system observability platform with predictive failure analysis.",
            icon: Activity,
            image: aiEngineImage,
            tags: ["Python", "PyTorch", "Grafana"],
            glow: "purple"
        },
        {
            title: "Nova Kernel",
            category: "System Software",
            desc: "L4-based microkernel designed for ultra-low latency edge computing scenarios.",
            icon: Cpu,
            image: kernelImage,
            tags: ["C++", "ASM", "RTOS"],
            glow: "cyan"
        }
    ];

    return (
        <section className="pt-60 pb-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-24"
                >
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Portfolio</span>
                    <h1 className="text-6xl md:text-8xl font-bold text-foreground uppercase italic leading-[1.1]">
                        Technical <br />
                        <span className="text-glow-purple text-primary">Engagements</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, i) => (
                        <Card3D key={i} delay={i * 0.1} glowColor={project.glow as any} className="overflow-hidden">
                            <div className="flex flex-col lg:flex-row h-full">
                                <div className="lg:w-2/5 relative min-h-[300px]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0d0618]/20 to-[#0d0618]" />
                                    <div className="absolute top-6 left-6 w-12 h-12 glass rounded-2xl flex items-center justify-center text-foreground">
                                        <project.icon size={24} />
                                    </div>
                                </div>

                                <div className="lg:w-3/5 p-10 flex flex-col justify-center">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4">{project.category}</p>
                                    <h3 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-tighter group-hover:text-glow-cyan transition-all">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground/40 text-sm leading-relaxed mb-8">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 glass rounded-full text-[10px] font-bold text-foreground/60">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <button className="text-foreground/40 hover:text-foreground transition-colors"><Github size={20} /></button>
                                        <button className="text-foreground/40 hover:text-foreground transition-colors flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
                                            <span>Case Study</span>
                                            <ArrowUpRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card3D>
                    ))}
                </div>
            </div>
        </section>
    );
};
