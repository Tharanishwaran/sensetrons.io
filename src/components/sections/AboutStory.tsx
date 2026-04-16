import { motion } from "framer-motion";
import { SceneCanvas } from "../3d/SceneCanvas";

export const AboutStory = () => {
    return (
        <section className="relative pt-60 pb-32 overflow-hidden">
            <SceneCanvas />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Story</span>
                        <h1 className="text-6xl md:text-8xl font-bold text-foreground uppercase italic leading-[1.1]">
                            Engineering a <br />
                            <span className="text-glow-purple text-primary">Smarter World</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-2xl text-foreground/60 font-light leading-relaxed mb-12"
                    >
                        Sensetrons was founded on the principle that technical complexity
                        should never be a barrier to innovation. We exist at the intersection
                        of visionary design and rigorous engineering.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { label: "Vision", text: "To build a smarter and safer digital world through convergence of AI and Security." },
                            { label: "Mission", text: "To transform data into actionable intelligence and infrastructures into adaptive systems." },
                            { label: "Values", text: "Technical mastery, partner-centric focus, and continuous innovation." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                            >
                                <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">{item.label}</h4>
                                <p className="text-foreground/40 text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
