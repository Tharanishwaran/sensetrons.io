import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import erpImage from "@/assets/projects/erp.png";
import securityImage from "@/assets/projects/security.png";
import meshImage from "@/assets/projects/mesh.png";

const projects = [
    {
        title: "Sensetrons ERP",
        category: "Enterprise Software",
        image: erpImage,
        desc: "A full-featured ERP system for SMEs with modules for operations, inventory, and analytics.",
    },
    {
        title: "CryptoGuard",
        category: "Cybersecurity",
        image: securityImage,
        desc: "Advanced smart contract auditing and threat detection platform for Web3 assets.",
    },
    {
        title: "Aura Mesh",
        category: "Infrastructure",
        image: meshImage,
        desc: "Distributed mesh networking infrastructure for zero-latency cloud-native deployments.",
    }
];

export const FeaturedProjects = () => {
    return (
        <section className="py-28 bg-background relative overflow-hidden">
            <div className="absolute inset-0 dot-grid-bg opacity-40 dark:opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="section-label mb-4">
                            🏆 Our Work
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black text-foreground font-montserrat"
                        >
                            Selected Case Studies
                        </motion.h2>
                    </div>
                    <Link to="/projects" className="btn-cz-outline flex-shrink-0">
                        View All Projects
                    </Link>
                </div>

                {/* Project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                                <div className="absolute top-4 right-4 w-10 h-10 bg-background rounded-xl shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <ExternalLink size={16} className="text-primary" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{project.category}</p>
                                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
                                <Link to="/projects"
                                    className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200">
                                    View Case Study <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
