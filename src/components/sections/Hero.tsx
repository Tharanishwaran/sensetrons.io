import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, PlayCircle, Star, TrendingUp, Shield, Users } from "lucide-react";

const trustLogos = [
    "HOSPITAL CHAIN", "TEXTILE CO.", "STEEL MFG", "WATER CORP", "RETAIL GROUP", "PHARMA LTD",
];

const socialProof = [
    { icon: Users, value: "50+", label: "Active Clients" },
    { icon: TrendingUp, value: "5+", label: "Industries" },
    { icon: Shield, value: "99.9%", label: "Uptime SLA" },
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg pt-16">
            {/* Subtle grid bg */}
            <div className="absolute inset-0 dot-grid opacity-50 dark:opacity-20 pointer-events-none" />

            {/* Soft blob accents */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, hsla(258,70%,58%,.08) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, hsla(221,83%,53%,.07) 0%, transparent 70%)" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-12 xl:gap-20 items-center">

                    {/* LEFT — Copy */}
                    <div>
                        {/* Kicker badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2.5 mb-6"
                        >
                            <span className="section-label">🏢 Enterprise ERP Platform</span>
                            <span className="badge badge-green">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Trusted by 50+ Businesses
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="font-jakarta font-extrabold text-display-lg lg:text-display-xl text-foreground leading-[1.08] mb-5"
                        >
                            All-in-One ERP Solutions{" "}
                            <span className="gradient-text-animated">
                                for Every Industry
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
                        >
                            From Hospitals to Manufacturing — Powering Businesses with Smart,
                            Scalable Software. Built for Indian enterprises, trusted across 5+ industries.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="flex flex-wrap items-center gap-3 mb-10"
                        >
                            <Link to="/contact" className="btn-primary px-7 py-3 text-base rounded-xl">
                                Request a Free Demo <ArrowRight size={16} />
                            </Link>
                            <Link to="/products/hospital" className="btn-outline px-7 py-3 text-base rounded-xl">
                                Explore Products
                            </Link>
                            <button className="btn-ghost flex items-center gap-2 text-sm">
                                <PlayCircle size={18} className="text-primary" />
                                Watch 2-min tour
                            </button>
                        </motion.div>

                        {/* Trust checks */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45, duration: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            {["No setup fee", "Free onboarding", "Dedicated support"].map((t) => (
                                <span key={t} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                                    {t}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — Dashboard preview card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative anim-float">
                            {/* Main dashboard card */}
                            <div className="bg-navy rounded-2xl shadow-card-xl overflow-hidden border border-white/8">
                                {/* Window chrome */}
                                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/8">
                                    <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                                    <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                                    <div className="flex-1 ml-3 h-5 bg-white/8 rounded-md text-[10px] text-white/30 flex items-center px-2 font-mono">
                                        sensetrons.io/dashboard
                                    </div>
                                </div>

                                {/* Dashboard content */}
                                <div className="p-5">
                                    {/* Header row */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Operations Hub</p>
                                            <p className="text-white font-bold text-sm mt-0.5">Real-time ERP Dashboard</p>
                                        </div>
                                        <div className="flex items-center gap-1 px-2.5 py-1 bg-green-500/15 rounded-full">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-green-400 text-[10px] font-bold">LIVE</span>
                                        </div>
                                    </div>

                                    {/* KPI grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        {[
                                            { label: "Revenue Today", value: "₹2.4L", change: "+12%", color: "text-green-400", bg: "bg-green-500/10" },
                                            { label: "Orders", value: "247", change: "+8%", color: "text-blue-400", bg: "bg-blue-500/10" },
                                            { label: "Inventory", value: "98.2%", change: "Optimized", color: "text-violet-400", bg: "bg-violet-500/10" },
                                            { label: "Staff Active", value: "84", change: "of 96", color: "text-orange-400", bg: "bg-orange-500/10" },
                                        ].map((kpi) => (
                                            <div key={kpi.label} className={`${kpi.bg} rounded-xl p-3`}>
                                                <p className="text-white/40 text-[10px] font-medium mb-1">{kpi.label}</p>
                                                <p className={`text-xl font-black ${kpi.color}`}>{kpi.value}</p>
                                                <p className="text-white/30 text-[10px] mt-0.5">{kpi.change}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Activity list */}
                                    <div className="space-y-2">
                                        {[
                                            { event: "New order received", dept: "Billing", time: "2m ago" },
                                            { event: "Stock alert: Paracetamol", dept: "Inventory", time: "5m ago" },
                                            { event: "Invoice #2841 paid", dept: "Finance", time: "12m ago" },
                                        ].map((a, i) => (
                                            <div key={i} className="flex items-center gap-3 px-3 py-2 bg-white/4 rounded-lg">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                                <span className="text-white/70 text-xs flex-1">{a.event}</span>
                                                <span className="text-white/30 text-[10px] bg-white/5 px-2 py-0.5 rounded">{a.dept}</span>
                                                <span className="text-white/30 text-[10px]">{a.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating KPI badge — top right */}
                            <div className="absolute -top-5 -right-5 bg-background border border-border rounded-xl px-4 py-3 shadow-card-lg">
                                <div className="flex items-center gap-2">
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm font-bold">4.9/5</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground mt-0.5">Client Satisfaction</p>
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute -bottom-5 -left-5 bg-background border border-border rounded-xl px-4 py-3 shadow-card-lg">
                                <p className="text-xs font-bold text-foreground">50+ Businesses</p>
                                <p className="text-[10px] text-muted-foreground">Running on Sensetrons ERP</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.6 }}
                    className="mt-20 pt-10 border-t border-border grid grid-cols-3 md:grid-cols-3 gap-8 max-w-lg"
                >
                    {socialProof.map((s) => (
                        <div key={s.label} className="stat-item text-left">
                            <div className="stat-number">{s.value}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Client logo marquee strip */}
            <div className="w-full border-t border-border bg-surface/50 py-6 mt-4 overflow-hidden">
                <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Trusted by businesses across India
                </p>
                <div className="flex overflow-hidden">
                    <div className="logo-marquee gap-16 items-center whitespace-nowrap">
                        {[...trustLogos, ...trustLogos].map((logo, i) => (
                            <span key={i} className="text-sm font-black text-muted-foreground/40 tracking-widest inline-block px-8">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
