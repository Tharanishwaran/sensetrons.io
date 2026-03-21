import companyLogo from "@/assets/company-logo.svg";

export const Footer = () => {
    return (
        <footer className="py-20 bg-secondary/30 border-t border-border mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src={companyLogo}
                                alt="Sensetrons"
                                className="w-8 h-8 object-contain brightness-0 invert opacity-80"
                                loading="lazy"
                            />
                            <span className="text-xl font-bold tracking-tight">
                                Sensetrons
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Engineering the digital future with 2 years of technical excellence
                            and visionary software design.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Solutions</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="/services" className="hover:text-primary transition-colors">Custom Software</a></li>
                            <li><a href="/services" className="hover:text-primary transition-colors">AI & ML Systems</a></li>
                            <li><a href="/services" className="hover:text-primary transition-colors">Blockchain Dev</a></li>
                            <li><a href="/services" className="hover:text-primary transition-colors">Cloud Strategy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Company</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="/about" className="hover:text-primary transition-colors">About Story</a></li>
                            <li><a href="/projects" className="hover:text-primary transition-colors">Case Studies</a></li>
                            <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Legal</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><button className="hover:text-primary transition-colors">Privacy Policy</button></li>
                            <li><button className="hover:text-primary transition-colors">Terms of Service</button></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                    <p>© 2026 Sensetrons Engineering. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <button className="hover:text-primary transition-colors">Twitter</button>
                        <button className="hover:text-primary transition-colors">LinkedIn</button>
                        <button className="hover:text-primary transition-colors">GitHub</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
