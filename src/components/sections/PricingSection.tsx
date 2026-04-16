import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
    {
        name: "Basic",
        price: "₹1,999",
        period: "per month",
        desc: "Perfect for single location small businesses and retail shops.",
        features: [
            "Up to 5 Users",
            "Single Location Support",
            "Basic Inventory Management",
            "GST Ready Billing",
            "Email Support",
            "Daily Data Backups"
        ],
        buttonText: "Start with Basic",
        popular: false
    },
    {
        name: "Professional",
        price: "₹4,999",
        period: "per month",
        desc: "Ideal for growing enterprises with multiple departments.",
        features: [
            "Unlimited Users",
            "Multi-Location Support",
            "Advanced Analytics & AI",
            "Comprehensive ERP Modules",
            "Priority Support (24/7)",
            "Custom Dashboard Reports",
            "API Access"
        ],
        buttonText: "Go Professional",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "tailored pricing",
        desc: "Bespoke solutions for large-scale manufacturing and hospital chains.",
        features: [
            "Fully Custom Modules",
            "Dedicated Server Hosting",
            "On-site Implementation",
            "Custom Integration (Tally, SAP)",
            "Dedicated Account Manager",
            "White-label Branding",
            "SLA Guarantee"
        ],
        buttonText: "Contact Sales",
        popular: false
    }
];

export const PricingSection = () => {
    return (
        <section className="py-24 bg-surface relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <div className="section-label mx-auto w-fit mb-4">Transparent Pricing</div>
                    <h2 className="font-jakarta font-extrabold text-display-md text-foreground mb-4">
                        Scalable Plans for{" "}
                        <span className="gradient-text">Businesses of All Sizes</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Whether you're a startup retail store or a massive manufacturing plant,
                        we have a plan that fits your scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`pricing-card ${plan.popular ? 'popular' : ''} flex flex-col h-full`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="font-jakarta font-bold text-xl text-foreground mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-3">
                                    <span className="text-4xl font-black text-foreground">{plan.price}</span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-sm text-muted-foreground">{plan.period}</span>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
                            </div>

                            <div className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex gap-3 text-sm text-foreground/80">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/contact"
                                className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all ${plan.popular
                                        ? 'bg-primary text-white shadow-brand-lg hover:shadow-brand hover:brightness-110'
                                        : 'bg-muted text-foreground hover:bg-border'
                                    }`}
                            >
                                {plan.buttonText}
                            </Link>

                            <div className="mt-4 flex items-center justify-center gap-1.5 opacity-50">
                                <Info size={12} />
                                <span className="text-[10px] font-medium uppercase tracking-tight">Requires annual commitment</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Comparison Link */}
                <div className="mt-16 text-center">
                    <button className="text-primary font-bold text-sm hover:underline">
                        View full feature comparison table →
                    </button>
                </div>
            </div>
        </section>
    );
};
