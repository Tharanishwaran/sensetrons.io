import { motion } from "framer-motion";
import { Cloud, ShieldCheck, BrainCircuit, BarChart3, Users2, Zap, Smartphone, Globe } from "lucide-react";

const capabilities = [
    {
        title: "Enterprise Cloud-Based",
        desc: "Access your business data from anywhere, securely hosted on high-performance cloud infrastructure.",
        icon: Cloud,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
        title: "AI-Powered Insights",
        desc: "Automated business intelligence and prediction modules to help you make data-driven decisions.",
        icon: BrainCircuit,
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
        title: "Real-time Analytics",
        desc: "Dynamic dashboards with live tracking of inventory, sales, and operations metrics.",
        icon: BarChart3,
        color: "text-green-500",
        bg: "bg-green-50 dark:bg-green-950/30"
    },
    {
        title: "Highly Secure & Scalable",
        desc: "End-to-end encryption and role-based access control. Scale from a single store to a multi-city operation.",
        icon: ShieldCheck,
        color: "text-indigo-500",
        bg: "bg-indigo-50 dark:bg-indigo-950/30"
    },
    {
        title: "Role-Based Access",
        desc: "Assign specific permissions for staff, managers, and admins to ensure data data integrity and security.",
        icon: Users2,
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-950/30"
    },
    {
        title: "Lightning Fast Performance",
        desc: "Optimized for speed. No lag, even with thousands of concurrent entries and transactions.",
        icon: Zap,
        color: "text-yellow-600",
        bg: "bg-yellow-50 dark:bg-yellow-950/30"
    },
    {
        title: "Mobile Ready",
        desc: "Native mobile apps and responsive web interfaces keep you connected on the go.",
        icon: Smartphone,
        color: "text-teal-500",
        bg: "bg-teal-50 dark:bg-teal-950/30"
    },
    {
        title: "24/7 Global Support",
        desc: "Dedicated technical support team to assist with implementation and daily operations.",
        icon: Globe,
        color: "text-rose-500",
        bg: "bg-rose-50 dark:bg-rose-950/30"
    }
];

export const PlatformFeatures = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <div className="section-label mx-auto w-fit mb-4">Platform Capabilities</div>
                    <h2 className="font-jakarta font-extrabold text-display-md text-foreground mb-4">
                        Powerful Features for the{" "}
                        <span className="gradient-text">Modern Enterprise</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Beyond industry modules, our core platform provides a robust foundation for
                        performance, security, and growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="p-6 rounded-2xl border border-border bg-surface hover:bg-background transition-all duration-300 hover:shadow-card-lg group"
                        >
                            <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon size={22} className={item.color} />
                            </div>
                            <h3 className="font-jakarta font-bold text-base text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
