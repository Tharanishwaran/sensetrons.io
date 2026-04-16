import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Mail, Headphones, Cloud } from "lucide-react";

export const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main className="pt-24">
                <section className="py-20 bg-surface border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="font-jakarta font-extrabold text-display-xl text-foreground mb-6">
                                Integrated ERP, <br />
                                <span className="gradient-text">Simple Pricing</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Choose the plan that aligns with your business goals.
                                No hidden fees, no complexity.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <PricingSection />

                {/* FAQ / Trust section in pricing */}
                <section className="py-24 bg-background border-t border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                {
                                    icon: ShieldCheck,
                                    title: "Secure Payments",
                                    desc: "Multiple payment options available including Net Banking and UPI."
                                },
                                {
                                    icon: Cloud,
                                    title: "Cloud Infrastructure",
                                    desc: "All plans include secure cloud hosting on AWS/Azure servers."
                                },
                                {
                                    icon: Headphones,
                                    title: "Dedicated Support",
                                    desc: "Real people reachable via phone and WhatsApp during business hours."
                                },
                                {
                                    icon: Mail,
                                    title: "Enterprise Customization",
                                    desc: "Need something unique? We build bespoke modules on request."
                                }
                            ].map((item) => (
                                <div key={item.title} className="text-center group">
                                    <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mx-auto mb-6 border border-border group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="font-bold text-lg text-foreground mb-3">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Simple FAQ row */}
                <section className="py-24 bg-surface">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <h2 className="font-jakarta font-extrabold text-3xl text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                { q: "Do you offer a free trial?", a: "Yes, we offer a 14-day fully functional trial for all our retail and hospital software modules." },
                                { q: "Can I upgrade my plan later?", a: "Absolutely. You can upgrade or downgrade your plan at any time through your admin dashboard." },
                                { q: "What kind of support is provided?", a: "Basic plans have email support. Professional and Enterprise plans include priority phone and video call support." },
                                { q: "Is on-site implementation available?", a: "Yes, for our Enterprise clients, we provide on-site setup, data migration, and team training." }
                            ].map((faq) => (
                                <div key={faq.q} className="p-6 rounded-2xl bg-background border border-border">
                                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-primary" /> {faq.q}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed pl-6">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PricingPage;
