import { motion } from "framer-motion";
import { Target, Eye, Users, ShieldCheck, HeartPulse, Award } from "lucide-react";

export const AboutCompanySection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Story / Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-label mb-4">Our Heritage</div>
                        <h2 className="font-jakarta font-extrabold text-display-md text-foreground mb-6">
                            Engineering Trust Through{" "}
                            <span className="gradient-text">Software Excellence</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Founded in 2024, Sensetrons Software Solutions was born out of a simple observation:
                                Indian enterprises were struggling with generic software that didn't understand
                                their specific operational nuances.
                            </p>
                            <p>
                                We started with a mission to build "Intelligent Software for Practical Business".
                                Today, we empower over 50 clients across healthcare, textiles, and manufacturing
                                with tailor-made ERP ecosystems that don't just store data, but drive growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            {[
                                { icon: Users, label: "Expert Team", value: "15+ Engineers" },
                                { icon: Award, label: "Client retention", value: "98%" },
                            ].map((stat) => (
                                <div key={stat.label} className="p-4 rounded-xl bg-surface border border-border">
                                    <stat.icon size={20} className="text-primary mb-2" />
                                    <div className="text-2xl font-black text-foreground">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card-xl bg-surface border border-border">
                            {/* Placeholder for founder/team image or illustrative graphic */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                    <HeartPulse size={40} className="text-primary" />
                                </div>
                                <h3 className="font-jakarta font-bold text-xl mb-4 italic">"Our goal is to make enterprise-grade technology accessible to every growing business in India."</h3>
                                <p className="text-sm font-bold text-foreground">Founder & CEO</p>
                                <p className="text-xs text-muted-foreground">Sensetrons Software Solutions</p>
                            </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                    </motion.div>
                </div>

                {/* Vision / Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Our Vision",
                            icon: Eye,
                            desc: "To become India's most trusted provider of industry-specific ERP ecosystems, enabling businesses to achieve 100% operational transparency.",
                            gradient: "from-blue-500/10 to-transparent",
                            iconColor: "text-blue-500"
                        },
                        {
                            title: "Our Mission",
                            icon: Target,
                            desc: "Designing and deploying high-performance, secure, and intuitive software solutions that simplify complex business workflows for every industry.",
                            gradient: "from-purple-500/10 to-transparent",
                            iconColor: "text-purple-500"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-3xl border border-border relative overflow-hidden bg-gradient-to-br ${item.gradient}`}
                        >
                            <item.icon size={32} className={`${item.iconColor} mb-6`} />
                            <h3 className="font-jakarta font-extrabold text-2xl text-foreground mb-4">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
