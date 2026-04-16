import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactLeadGen } from "@/components/sections/ContactLeadGen";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";

export const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main className="pt-24">
                {/* Contact Hero */}
                <section className="py-20 bg-surface border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="font-jakarta font-extrabold text-display-xl text-foreground mb-6">
                                We're Here to <br />
                                <span className="gradient-text">Help You Grow</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Have questions about our ERP modules or need a custom solution?
                                Reach out and our team will be happy to assist.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <ContactLeadGen />

                {/* Direct info map-like layout */}
                <section className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Our Location",
                                    value: "Software Technology Park, Coimbatore, TN",
                                    sub: "Serving clients pan-India"
                                },
                                {
                                    icon: Clock,
                                    title: "Working Hours",
                                    value: "Monday – Saturday",
                                    sub: "9:30 AM – 6:30 PM IST"
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Support Desk",
                                    value: "support@sensetrons.io",
                                    sub: "Average response: 2 hours"
                                }
                            ].map((item, i) => (
                                <div key={item.title} className="p-10 rounded-3xl bg-surface border border-border group hover:border-primary/30 transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} className="text-primary" />
                                    </div>
                                    <h4 className="font-bold text-[11px] uppercase tracking-widest text-muted-foreground mb-4">{item.title}</h4>
                                    <p className="text-xl font-bold text-foreground mb-2">{item.value}</p>
                                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Map placeholder */}
                <section className="px-4 sm:px-6 pb-24">
                    <div className="max-w-7xl mx-auto h-[400px] rounded-[2.5rem] bg-muted border border-border overflow-hidden relative group">
                        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/0 transition-colors duration-500 z-10 flex items-center justify-center pointer-events-none">
                            <span className="bg-white/90 backdrop-blur-sm text-navy px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                                Interactive Office Map Coming Soon
                            </span>
                        </div>
                        <div className="absolute inset-0 grayscale contrast-125 opacity-40">
                            {/* Placeholder pattern for map */}
                            <div className="w-full h-full dot-grid" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
