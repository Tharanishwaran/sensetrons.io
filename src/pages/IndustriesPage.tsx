import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Hospital, Shirt, Factory, Droplets, ShoppingCart, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactLeadGen } from "@/components/sections/ContactLeadGen";

const industries = [
    {
        id: "healthcare",
        title: "Healthcare",
        icon: Hospital,
        color: "text-blue-600",
        bg: "bg-blue-600/10",
        problems: ["Manual patient records", "Slow OPD billing", "Medicine wastage in pharmacy", "Fragmented lab reporting"],
        solution: "Enterprise HMS that centralizes everything from patient entry to discharge, ensuring zero billing leakage.",
        ctaPath: "/products/hospital"
    },
    {
        id: "textile",
        title: "Textile & Garments",
        icon: Shirt,
        color: "text-orange-600",
        bg: "bg-orange-600/10",
        problems: ["Style complexity tracking", "Raw material wastage", "Production delay blindspots", "Export documentation errors"],
        solution: "Garments-specific ERP with full style-size-color matrix and real-time floor performance tracking.",
        ctaPath: "/products/garments"
    },
    {
        id: "manufacturing",
        title: "Manufacturing",
        icon: Factory,
        color: "text-purple-600",
        bg: "bg-purple-600/10",
        problems: ["Unoptimized machine usage", "Supply chain gaps", "Manual BOM calculations", "High QC rejection rates"],
        solution: "Smart Manufacturing ERP with multi-level BOM, MES, and predictive analytics for zero-waste production.",
        ctaPath: "/products/manufacturing"
    },
    {
        id: "borewell",
        title: "Water & Borewell",
        icon: Droplets,
        color: "text-teal-600",
        bg: "bg-teal-600/10",
        problems: ["Rig management chaos", "Field staff miscommunication", "Inaccurate site billing", "Fuel & material leaks"],
        solution: "Groundbreaking mobile-first ERP for Rig owners with automated work logs and instant customer invoicing.",
        ctaPath: "/products/borewell"
    },
    {
        id: "retail",
        title: "Retail & Commerce",
        icon: ShoppingCart,
        color: "text-green-600",
        bg: "bg-green-600/10",
        problems: ["Inventory inaccuracy", "Long checkout queues", "Lack of customer loyalty data", "Multi-store synchronization errors"],
        solution: "Lightning-fast Retail POS with cloud-synced inventory and enterprise-level analytics across stores.",
        ctaPath: "/products/retail"
    }
];

const IndustriesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main className="pt-24">
                {/* Hero */}
                <section className="py-20 hero-bg border-b border-border overflow-hidden relative">
                    <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="section-label mx-auto w-fit mb-6">Vertical Domain Expertise</div>
                            <h1 className="font-jakarta font-extrabold text-display-xl text-foreground mb-6">
                                ERP Solutions for <br />
                                <span className="gradient-text">High-Stakes Industries</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                We don't just write code. We understand the specific operational headaches
                                of your industry—and build the precise tools to eliminate them.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Industry Cards */}
                <section className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="space-y-16">
                            {industries.map((ind, i) => {
                                const Icon = ind.icon;
                                return (
                                    <motion.div
                                        key={ind.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        className={`grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-12 items-center p-8 lg:p-12 rounded-[2.5rem] bg-surface border border-border group`}
                                    >
                                        <div className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                                            <div className={`w-16 h-16 ${ind.bg} rounded-2xl flex items-center justify-center mb-8`}>
                                                <Icon size={32} className={ind.color} />
                                            </div>
                                            <h2 className="font-jakarta font-extrabold text-display-sm text-foreground mb-6">{ind.title}</h2>

                                            <div className="bg-background/80 rounded-2xl p-6 border border-border mb-8">
                                                <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                                                    <Zap size={14} /> The Problem
                                                </h4>
                                                <ul className="space-y-3">
                                                    {ind.problems.map((prob) => (
                                                        <li key={prob} className="flex gap-3 text-sm text-muted-foreground">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                                                            {prob}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={i % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                                            <div className="p-8 lg:p-10 rounded-3xl bg-background border border-border shadow-card-lg relative overflow-hidden h-full">
                                                <div className="relative z-10 h-full flex flex-col">
                                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-4 flex items-center gap-2">
                                                        <CheckCircle2 size={14} /> The Solution
                                                    </h4>
                                                    <p className="text-xl font-medium text-foreground mb-10 leading-relaxed">
                                                        {ind.solution}
                                                    </p>

                                                    <div className="mt-auto flex flex-wrap gap-4">
                                                        <Link to={ind.ctaPath} className="btn-primary rounded-xl px-7 py-3">
                                                            Explore {ind.title} ERP <ArrowRight size={16} />
                                                        </Link>
                                                        <Link to="/contact" className="btn-outline rounded-xl px-7 py-3">
                                                            Talk to Specialist
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Decorative background circle */}
                                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Final Demo CTA */}
                <ContactLeadGen />
            </main>

            <Footer />
        </div>
    );
};

export default IndustriesPage;
