import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Shield, Cpu, CheckCircle } from "lucide-react";

export const AboutTeaser = () => {
    return (
        <section className="py-28 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left — Phone/Device Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Main device frame */}
                        <div className="relative mx-auto max-w-sm animate-float-y">
                            <div className="bg-[hsl(var(--navy))] rounded-[2.5rem] p-3 shadow-2xl">
                                <div className="bg-[hsl(220,40%,14%)] rounded-[2rem] overflow-hidden">
                                    {/* Mock app header */}
                                    <div className="px-6 pt-6 pb-4 border-b border-white/5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">sensetrons</p>
                                                <h3 className="text-white font-black text-lg">Operations Hub</h3>
                                            </div>
                                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                                <Cpu size={18} className="text-primary" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mock content */}
                                    <div className="p-6 space-y-4">
                                        {[
                                            { label: "System Health", value: "99.9%", bar: 99, color: "bg-green-400" },
                                            { label: "AI Accuracy", value: "98.2%", bar: 98, color: "bg-blue-400" },
                                            { label: "Uptime", value: "100%", bar: 100, color: "bg-violet-400" },
                                        ].map((item) => (
                                            <div key={item.label} className="bg-white/5 rounded-2xl p-4">
                                                <div className="flex justify-between text-xs text-white/60 mb-2">
                                                    <span className="font-semibold">{item.label}</span>
                                                    <span className="font-black text-white">{item.value}</span>
                                                </div>
                                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.bar}%` }} />
                                                </div>
                                            </div>
                                        ))}

                                        <div className="grid grid-cols-2 gap-3 mt-4">
                                            <div className="bg-primary/10 rounded-2xl p-4 text-center">
                                                <div className="text-2xl font-black text-primary">16+</div>
                                                <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Expertise</div>
                                            </div>
                                            <div className="bg-green-500/10 rounded-2xl p-4 text-center">
                                                <div className="text-2xl font-black text-green-400">4.5K</div>
                                                <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Active Users</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[80px] -z-10" />
                    </motion.div>

                    {/* Right — Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="section-label">
                            🎯 Your Gateway to Excellence
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground font-montserrat leading-[1.1]">
                            Defining the future of{" "}
                            <span className="text-transparent bg-clip-text"
                                style={{ backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))' }}>
                                software engineering!
                            </span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Embrace a new era of growth with Sensetrons. Our team integrates
                            innovation with powerful technology to deliver software solutions
                            that simplify operations, empower teams, and accelerate performance.
                        </p>

                        {/* Feature list */}
                        <div className="space-y-4 mb-10">
                            {[
                                "Emphasis on ROI-driven automation",
                                "Expert team with deep industry and technology expertise",
                                "Proven track record of driving business transformation",
                                "End-to-end support from design to deployment",
                            ].map((item) => (
                                <div key={item} className="feature-item">
                                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                                    <span className="text-foreground/80 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats row */}
                        <div className="flex gap-10 mb-10">
                            {[
                                { value: "2+", label: "Years Experience" },
                                { value: "50+", label: "Projects Delivered" },
                                { value: "100%", label: "Success Rate" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black text-foreground">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="btn-cz-primary">
                            Learn More About Us
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
