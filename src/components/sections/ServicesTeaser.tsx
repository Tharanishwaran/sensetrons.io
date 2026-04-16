import { motion } from "framer-motion";
import {
    Code2, BrainCircuit, Smartphone,
    Cloud, Database, ShieldCheck, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        title: "Bespoke Engineering",
        desc: "Tailored software solutions designed for high-stakes business environments with precision and scalability.",
        icon: Code2,
    },
    {
        title: "AI Ecosystems",
        desc: "Intelligent automation and predictive systems powered by custom-trained neural networks.",
        icon: BrainCircuit,
    },
    {
        title: "Mobile Architecture",
        desc: "High-performance native and cross-platform mobile experiences built for the modern user.",
        icon: Smartphone,
    },
    {
        title: "Cloud Strategy",
        desc: "Scalable infrastructure and automated deployment pipelines for zero-downtime operations.",
        icon: Cloud,
    },
    {
        title: "Web3 & Security",
        desc: "Decentralized systems and smart contract audits for secure digital assets and DeFi.",
        icon: Database,
    },
    {
        title: "Strategic Consulting",
        desc: "Technical roadmaps and architecture reviews to future-proof and accelerate your business.",
        icon: ShieldCheck,
    }
];

export const ServicesTeaser = () => {
    return (
        <section className="py-28 relative overflow-hidden" style={{ background: 'hsl(var(--navy))' }}>
            {/* Background texture */}
            <div className="absolute inset-0 dot-grid-bg opacity-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/20 blur-[100px] rounded-full opacity-30" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}>
                        🚀 Innovative solutions, Measurable results
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white mb-5 font-montserrat"
                    >
                        We specialize in the following services
                    </motion.h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        End-to-end technical solutions enabling organizations to scale and innovate at speed.
                    </p>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="service-card-navy h-full flex flex-col">
                                {/* Icon + illustration row */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-primary/15 rounded-2xl flex items-center justify-center">
                                        <service.icon size={26} className="text-primary" style={{ color: 'hsl(210,100%,75%)' }} />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-40">
                                        <ArrowRight size={16} className="text-white" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>

                                <Link to="/services" className="text-blue-300 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200">
                                    Read more <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
