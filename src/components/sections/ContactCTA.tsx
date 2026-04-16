import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Clock, Mail, ArrowRight, Send } from "lucide-react";

export const ContactCTA = () => {
    return (
        <section className="py-0 relative overflow-hidden" style={{ background: 'hsl(var(--navy))' }}>
            <div className="absolute inset-0 dot-grid-bg opacity-10" />

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — CTA Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-montserrat leading-[1.1]">
                            Let's discuss how to streamline
                            <span className="text-blue-300"> your business</span> with technology.
                        </h2>

                        {/* Email Signup */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-10">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-white/40 transition-colors"
                            />
                            <Link to="/contact"
                                className="px-6 py-3.5 bg-primary text-white rounded-xl font-bold text-sm flex items-center gap-2 justify-center hover:bg-primary/90 transition-colors whitespace-nowrap">
                                Get in Touch! <Send size={14} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {[
                            {
                                icon: Phone,
                                label: "Call on:",
                                value: "+91 70943 99879",
                            },
                            {
                                icon: Clock,
                                label: "Time:",
                                value: "9:30am to 6:30pm (Sunday close)",
                            },
                            {
                                icon: Mail,
                                label: "Email:",
                                value: "contact@sensetrons.io",
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-5">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon size={20} className="text-blue-300" />
                                </div>
                                <div>
                                    <span className="text-white/50 text-xs uppercase tracking-widest font-bold">{item.label}</span>
                                    <p className="text-white font-semibold mt-0.5">{item.value}</p>
                                </div>
                            </div>
                        ))}

                        <Link to="/contact" className="inline-flex items-center gap-2 text-blue-300 font-bold mt-4 hover:gap-3 transition-all duration-200">
                            View All Contact Options <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative airplane icon */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="white">
                    <path d="M10 10L190 100L10 190L50 100Z" />
                </svg>
            </div>
        </section>
    );
};
