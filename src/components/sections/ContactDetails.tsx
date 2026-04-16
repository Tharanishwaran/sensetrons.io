import { motion } from "framer-motion";
import { Card3D } from "../ui/Card3D";
import { Mail, MessageSquare, PhoneCall, MapPin, Clock } from "lucide-react";

export const ContactDetails = () => {
    const contacts = [
        {
            label: "Email",
            title: "General Inquiries",
            value: "contact@sensetrons.io",
            icon: Mail,
            color: "purple"
        },
        {
            label: "Chat",
            title: "Direct Support 24/7",
            value: "Available via Slack/Discord",
            icon: MessageSquare,
            color: "cyan"
        },
        {
            label: "Call",
            title: "Technical Lead",
            value: "+91 7094399879",
            icon: PhoneCall,
            color: "white"
        }
    ];

    return (
        <section className="pt-60 pb-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-24 text-center"
                >
                    <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-6 block font-inter">Get In Touch</span>
                    <h1 className="text-6xl md:text-8xl font-bold text-foreground uppercase italic leading-[1.1]">
                        LET'S START A <br />
                        <span className="text-glow-purple text-primary">CONVERSATION</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {contacts.map((contact, i) => (
                        <Card3D key={i} delay={i * 0.1} glowColor={contact.color as any} className="text-center p-12">
                            <div className={cn(
                                "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8",
                                contact.color === "purple" ? "bg-primary/20 text-primary" :
                                    contact.color === "cyan" ? "bg-secondary/20 text-secondary" :
                                        "bg-white/10 text-foreground"
                            )}>
                                <contact.icon size={32} />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mb-2">{contact.label}</p>
                            <h3 className="text-xl font-bold text-foreground mb-2">{contact.value}</h3>
                            <p className="text-foreground/40 text-xs uppercase tracking-widest">{contact.title}</p>
                        </Card3D>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-dark rounded-[3rem] p-12 md:p-16 border-white/5"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-12 uppercase tracking-tight">Departmental Support</h2>
                        <div className="space-y-10">
                            {[
                                { label: "Engineering", email: "engineering@sensetrons.io", desc: "For technical queries and architecture reviews." },
                                { label: "Business", email: "growth@sensetrons.io", desc: "For partnerships and new project inquiries." },
                                { label: "Careers", email: "talent@sensetrons.io", desc: "Join our elite engineering team." }
                            ].map((dept, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <p className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">{dept.label}</p>
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">{dept.email}</h4>
                                    <p className="text-foreground/30 text-sm">{dept.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-dark rounded-[3rem] p-12 md:p-16 border-white/5 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-12 uppercase tracking-tight">Office Locations</h2>
                            <div className="flex items-start space-x-6 mb-12">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-2 uppercase">Technical Hub</h4>
                                    <p className="text-foreground/50 leading-relaxed">
                                        Innovators Plaza, Suite 400<br />
                                        Tech District, CA 94043
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary flex-shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-2 uppercase">Working Hours</h4>
                                    <p className="text-foreground/50 leading-relaxed">
                                        Mon — Fri: 9:00 AM – 6:00 PM<br />
                                        Sat — Sun: Distributed Support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");
