import { motion } from "framer-motion";
import { Card3D } from "../ui/Card3D";
import {
    Code2, BrainCircuit, Smartphone,
    Cloud, Database, ShieldCheck
} from "lucide-react";

export const ServiceList = () => {
    const services = [
        {
            title: "Bespoke Engineering",
            desc: "Tailored software solutions designed for high-stakes business environments. We solve the hard problems that off-the-shelf tools can't touch.",
            icon: Code2,
            features: ["Custom Software", "Enterprise Apps", "Legacy Migration"]
        },
        {
            title: "AI Ecosystems",
            desc: "Intelligent automation and predictive systems powered by custom-trained neural networks and deep-learning pipelines.",
            icon: BrainCircuit,
            features: ["Computer Vision", "NLP Engines", "Predicive Data Modeling"]
        },
        {
            title: "Mobile Architecture",
            desc: "High-performance native and cross-platform mobile experiences that feel seamless and intuitive on every device.",
            icon: Smartphone,
            features: ["iOS & Android", "React Native", "Native Performance"]
        },
        {
            title: "Cloud Strategy",
            desc: "Scalable infrastructure and automated deployment for zero-downtime operations and massive scalability.",
            icon: Cloud,
            features: ["AWS/Azure/GCP", "Kubernetes", "DevSecOps"]
        },
        {
            title: "Web3 & Security",
            desc: "Decentralized systems and smart contract audits for secure digital assets and decentralized governance.",
            icon: Database,
            features: ["Smart Contracts", "DeFi Protocols", "Blockchain Dev"]
        },
        {
            title: "Strategic Consulting",
            desc: "Technical roadmaps and architecture reviews to future-proof your business and optimize existing systems.",
            icon: ShieldCheck,
            features: ["Technical Audits", "AI Strategy", "Infra Design"]
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
                    <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Expertise</span>
                    <h1 className="text-6xl md:text-8xl font-bold text-foreground uppercase italic leading-[1.1]">
                        Technical <br />
                        <span className="text-glow-cyan text-secondary">Solutions</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, i) => (
                        <Card3D key={i} delay={i * 0.1} glowColor="cyan" className="h-full">
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-foreground uppercase tracking-tight">{service.title}</h3>
                                <p className="text-foreground/50 leading-relaxed mb-8">
                                    {service.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map(f => (
                                        <span key={f} className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 border border-white/5 px-3 py-1 rounded-full">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card3D>
                    ))}
                </div>
            </div>
        </section>
    );
};
