import { Link } from "react-router-dom";
import companyLogo from "@/assets/company-logo.svg";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Youtube, MessageCircle, ArrowRight } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-20 pb-10 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2.5 mb-6 group">
                            <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-white/10 p-1">
                                <img src={companyLogo} alt="Sensetrons" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-black tracking-tight text-white font-jakarta">
                                Sensetrons<span className="text-primary">.</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                            Sensetrons Software Solutions is a premier software engineering firm
                            dedicated to building the future of industry-specific ERP ecosystems
                            for Indian enterprises. Reliable, Scalable, Intelligent.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-white/60">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Phone size={14} className="text-primary" />
                                </div>
                                +91 70943 99879
                            </div>
                            <div className="flex items-center gap-3 text-sm text-white/60">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Mail size={14} className="text-primary" />
                                </div>
                                contact@sensetrons.io
                            </div>
                        </div>
                    </div>

                    {/* Links Col 1: ERP Products */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-6">ERP Products</h4>
                        <ul className="space-y-4">
                            {["Hospital", "Garments", "Manufacturing", "Borewell", "Retail", "Custom"].map((p) => (
                                <li key={p}>
                                    <Link to={`/products/${p.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors text-sm font-medium">
                                        {p} ERP
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Col 2: Industries */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-6">Industries</h4>
                        <ul className="space-y-4">
                            {["Healthcare", "Textile", "Manufacturing", "Water Industry", "Retail Chain"].map((i) => (
                                <li key={i}>
                                    <Link to="/industries" className="text-white/60 hover:text-primary transition-colors text-sm font-medium">
                                        {i}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Col 3: Company */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["About Story", "Our Team", "Pricing Plans", "Career", "Contact"].map((c) => (
                                <li key={c}>
                                    <Link to={c === "About Story" ? "/about" : c === "Pricing Plans" ? "/pricing" : "/contact"}
                                        className="text-white/60 hover:text-primary transition-colors text-sm font-medium">
                                        {c}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Col 4: Platform */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-6">Connect</h4>
                        <div className="flex flex-wrap gap-2.5">
                            {[
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: MessageCircle, href: "#" },
                            ].map((social, i) => (
                                <a key={i} href={social.href} className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-primary transition-all duration-300">
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                        <div className="mt-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/30 mb-4">Newsletter</h4>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-primary/50" />
                                <button className="p-2 bg-primary rounded-lg hover:brightness-110 transition-all"><ArrowRight size={14} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
                        © 2024–2026 Sensetrons Software Solutions Private Limited. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="#" className="text-white/30 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest">Privacy Policy</Link>
                        <Link to="#" className="text-white/30 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest">Terms of Service</Link>
                        <Link to="#" className="text-white/30 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
