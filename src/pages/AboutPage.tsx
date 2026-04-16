import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutCompanySection } from "@/components/sections/AboutCompanySection";
import { motion } from "framer-motion";
import { Rocket, Shield, Zap, Users, Globe2, HeartHandshake } from "lucide-react";

export const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main className="pt-24">
                {/* Hero */}
                <section className="py-20 hero-bg border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="section-label mx-auto w-fit mb-6">About Sensetrons</div>
                            <h1 className="font-jakarta font-extrabold text-display-xl text-foreground mb-6">
                                Powering Indian Businesses <br />
                                <span className="gradient-text">Through Innovation</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                We're not just a software company. We're your technical partners in
                                transforming traditional workflows into digital success stories.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <AboutCompanySection />

                {/* Values Section */}
                <section className="py-24 bg-surface border-t border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-jakarta font-extrabold text-3xl text-foreground mb-4">Core Principles that Drive Us</h2>
                            <p className="text-muted-foreground max-w-xl mx-auto">The values we live by every day at our engineering hub.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                {
                                    icon: HeartHandshake,
                                    title: "Integrity First",
                                    desc: "We prioritize long-term trust over short-term gains. Transparency is at the heart of every interaction."
                                },
                                {
                                    icon: Rocket,
                                    title: "Practical Innovation",
                                    desc: "We don't build tech for tech's sake. We build features that solve actual business problems."
                                },
                                {
                                    icon: Zap,
                                    title: "Agility",
                                    desc: "Small enough to be fast, large enough to be reliable. We deploy and iterate at lightning speeds."
                                },
                                {
                                    icon: Shield,
                                    title: "Security Native",
                                    desc: "Data privacy and security are not features—they are the foundation of everything we build."
                                },
                                {
                                    icon: Users,
                                    title: "Empathy Driven",
                                    desc: "We listen to the floor workers, the managers, and the owners to build software people actually love to use."
                                },
                                {
                                    icon: Globe2,
                                    title: "Scalability Mindset",
                                    desc: "Every line of code we write is optimized for your growth—from 1 store to 1,000 locations."
                                }
                            ].map((value, i) => (
                                <div key={value.title} className="p-8 rounded-3xl bg-background border border-border hover:shadow-card-lg transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                        <value.icon size={24} className="text-primary" />
                                    </div>
                                    <h4 className="font-bold text-xl text-foreground mb-4">{value.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-24 bg-background">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="p-12 lg:p-16 rounded-[3rem] bg-navy text-white text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="font-jakarta font-extrabold text-4xl mb-6">Join the Future of ERP</h2>
                                <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                                    Become part of the growing list of enterprises that trust Sensetrons
                                    to power their mission-critical operations.
                                </p>
                                <Link to="/contact" className="btn-primary bg-white text-navy hover:bg-white/90 px-10 py-4 text-base rounded-2xl">
                                    Let's Start a Conversation
                                </Link>
                            </div>

                            {/* Background blur blobs */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
