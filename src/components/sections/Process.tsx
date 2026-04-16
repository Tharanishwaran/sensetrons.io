import { motion } from "framer-motion";
import { Lightbulb, Code2, Shield, Rocket, ArrowRight } from "lucide-react";

export const Process = () => {
    const steps = [
        { title: "Strategy", desc: "Understanding your vision and defining the technical roadmap for success.", icon: Lightbulb },
        { title: "Engineering", desc: "Building robust, scalable solutions using state-of-the-art technology.", icon: Code2 },
        { title: "Security", desc: "Rigorous testing and auditing to ensure your assets are protected.", icon: Shield },
        { title: "Growth", desc: "Continuous support and scaling as your business reaches new heights.", icon: Rocket }
    ];

    return (
        <section className="py-32 bg-[#0d0618] relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-foreground uppercase"
                    >
                        OUR <span className="text-secondary italic">PROCESS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-foreground/50 max-w-md text-right hidden md:block"
                    >
                        We follow a disciplined engineering approach to ensure
                        every project is delivered with the highest quality standards.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group p-10 glass-dark rounded-[2rem] border-white/5 hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-foreground transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                                    <step.icon size={32} />
                                </div>
                                <div className="flex items-center space-x-2 text-foreground/20 mb-4 text-xs font-black uppercase tracking-widest">
                                    <span>0{i + 1}</span>
                                    <div className="w-8 h-px bg-white/10" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tighter">{step.title}</h3>
                                <p className="text-foreground/40 text-sm leading-relaxed mb-6">
                                    {step.desc}
                                </p>
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-foreground/20 group-hover:text-secondary group-hover:border-secondary transition-all">
                                    <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
