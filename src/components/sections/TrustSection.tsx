import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [

];

const stats = [
    { value: "50+", label: "Businesses Powered", sub: "Across India" },
    { value: "5+", label: "Industries Served", sub: "Healthcare to Manufacturing" },
    { value: "99.9%", label: "System Uptime", sub: "SLA Guaranteed" },
    { value: "2x", label: "Avg. Efficiency Gain", sub: "Reported by clients" },
];

export const TrustSection = () => {
    return (
        <section className="py-8 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((s, i) => (
                        <div key={s.label}
                            className="text-center p-6 rounded-2xl bg-surface border border-border"
                        >
                            <div className="text-4xl font-black gradient-text font-jakarta mb-1">{s.value}</div>
                            <div className="font-semibold text-foreground text-sm">{s.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Section header */}

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="card-base flex flex-col"
                        >
                            {/* Quote icon */}
                            <Quote size={24} className="text-primary/20 mb-4" />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {Array(t.rating).fill(0).map((_, j) => (
                                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1">"{t.text}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                                    <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                                </div>
                                <span className="ml-auto badge-blue">{t.industry}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
