import { motion } from "framer-motion";

export const TechEdge = () => {
    const techs = [
        "React", "Node.js", "TypeScript", "Python", "Rust", "Go",
        "AWS", "PostgreSQL", "Docker", "Kubernetes", "Redis", "Solidity",
        "Tailwind", "Three.js", "GSAP", "Framer Motion", "gRPC", "Envoy"
    ];

    return (
        <section className="py-32 bg-[#0d0618]/50 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-foreground mb-20 uppercase"
                >
                    OUR TECHNICAL <span className="text-secondary italic">EDGE</span>
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {techs.map((tech, i) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderColor: "#00e8c6"
                            }}
                            className="px-8 py-4 glass rounded-full text-sm font-bold border-white/5 text-foreground/60 cursor-default transition-all duration-300"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>

                <p className="mt-20 text-foreground/30 max-w-2xl mx-auto font-light leading-relaxed">
                    We select the most appropriate technologies for each project,
                    prioritizing performance, security, and long-term maintainability.
                </p>
            </div>
        </section>
    );
};
