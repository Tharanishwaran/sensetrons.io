import { motion } from "framer-motion";
import { Send, Phone, MessageCircle, MapPin, Mail, ChevronRight, ShieldCheck } from "lucide-react";

export const ContactLeadGen = () => {
    return (
        <section id="contact-demo" className="py-24 bg-surface dark:bg-navy-mid relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-label mb-4">Contact Us</div>
                        <h2 className="font-jakarta font-extrabold text-display-md text-foreground mb-6">
                            Ready to Modernize Your{" "}
                            <span className="gradient-text">Business Operations?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12 max-w-lg">
                            Schedule a personalized 15-minute demo with our product experts and see
                            how Sensetrons can solve your specific industry challenges.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: Phone,
                                    label: "Call Support",
                                    value: "+91 70943 99879",
                                    desc: "Mon - Sat, 9:30 AM - 6:30 PM",
                                    action: "tel:+917094399879",
                                    actionLabel: "Call Now",
                                    btnClass: "bg-blue-50 text-blue-600 hover:bg-blue-100"
                                },
                                {
                                    icon: MessageCircle,
                                    label: "WhatsApp Business",
                                    value: "+91 70943 99879",
                                    desc: "Get instant replies for sales queries",
                                    action: "https://wa.me/917094399879",
                                    actionLabel: "Chat on WhatsApp",
                                    btnClass: "bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-950/30"
                                },
                                {
                                    icon: Mail,
                                    label: "Email Enquiries",
                                    value: "contact@sensetrons.io",
                                    desc: "Response within 2 hours",
                                    action: "mailto:contact@sensetrons.io",
                                    actionLabel: "Email Us",
                                    btnClass: "bg-purple-50 text-purple-600 hover:bg-purple-100"
                                }
                            ].map((item) => (
                                <div key={item.label} className="group flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm group-hover:border-primary/30 transition-colors">
                                        <item.icon size={20} className="text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                                        <div className="text-xl font-bold text-foreground mb-1">{item.value}</div>
                                        <div className="text-sm text-muted-foreground mb-3">{item.desc}</div>
                                        <a
                                            href={item.action}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${item.btnClass}`}
                                        >
                                            {item.actionLabel} <ChevronRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Demo Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-background border border-border rounded-3xl p-8 lg:p-10 shadow-card-xl relative">
                            <h3 className="font-jakarta font-bold text-2xl text-foreground mb-2">Request a Demo</h3>
                            <p className="text-sm text-muted-foreground mb-8">Fill the form below and we'll get back to you within 24 hours.</p>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                        <input type="text" placeholder="Name" className="input-enterprise" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" className="input-enterprise" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Business Email</label>
                                    <input type="email" placeholder="name@company.com" className="input-enterprise" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Industry Type</label>
                                    <select className="input-enterprise appearance-none">
                                        <option>Select Industry</option>
                                        <option>Healthcare / Hospital</option>
                                        <option>Textile / Garments</option>
                                        <option>Manufacturing</option>
                                        <option>Borewell / Construction</option>
                                        <option>Retail / Billing</option>
                                        <option>Other / Custom</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Specific Requirements</label>
                                    <textarea rows={4} placeholder="Tell us about your business challenges..." className="input-enterprise resize-none"></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full py-4 text-base rounded-xl mt-4 shadow-brand-lg">
                                    Get Started Today <Send size={16} className="ml-2" />
                                </button>

                                <p className="text-[10px] text-center text-muted-foreground px-10">
                                    By clicking submit, you agree to our Privacy Policy and consent to being contacted by our sales team.
                                </p>
                            </form>
                        </div>

                        {/* Trust badge under form */}
                        <div className="mt-8 flex items-center justify-center gap-8 opacity-40 grayscale group hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={24} />
                                <span className="text-xs font-bold tracking-widest uppercase">SSL Secured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={24} />
                                <span className="text-xs font-bold tracking-widest uppercase">Based in India</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
