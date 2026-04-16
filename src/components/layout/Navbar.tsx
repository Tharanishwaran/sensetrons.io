import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import companyLogo from "@/assets/company-logo.svg";
import { ThemeToggle } from "../ui/ThemeToggle";
import {
    Menu, X, ChevronDown, Hospital, Factory, ShoppingCart, Droplets, Shirt, Settings,
    LayoutDashboard, Globe, Phone
} from "lucide-react";

const products = [
    { name: "Hospital Management", icon: Hospital, path: "/products/hospital", desc: "Complete HMS for clinics & hospitals" },
    { name: "Garments ERP", icon: Shirt, path: "/products/garments", desc: "Production to billing for textile" },
    { name: "Manufacturing ERP", icon: Factory, path: "/products/manufacturing", desc: "End-to-end manufacturing ops" },
    { name: "Borewell ERP", icon: Droplets, path: "/products/borewell", desc: "Water industry management" },
    { name: "Retail Billing ERP", icon: ShoppingCart, path: "/products/retail", desc: "POS & inventory for retail" },
    { name: "Custom ERP", icon: Settings, path: "/products/custom", desc: "Tailored to your business needs" },
];

const navItems = [
    { name: "Products", hasDropdown: true },
    { name: "Industries", path: "/industries" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setProductsOpen(false);
    }, [location.pathname]);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setProductsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
                    : "bg-background/60 backdrop-blur-sm"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={companyLogo} alt="Sensetrons" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <span className="text-[15px] font-black tracking-tight text-foreground font-jakarta leading-none">
                                Sensetrons
                            </span>
                            <span className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-muted-foreground leading-none mt-0.5">
                                Software Solutions
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1" ref={dropdownRef}>
                        {/* Products Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setProductsOpen(!productsOpen)}
                                className={cn("nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-muted transition-colors",
                                    productsOpen && "bg-muted text-foreground")}
                            >
                                Products
                                <ChevronDown size={14} className={cn("transition-transform duration-200", productsOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-0 mt-2 w-[480px] bg-background border border-border rounded-2xl shadow-card-xl p-4 grid grid-cols-2 gap-2"
                                    >
                                        {products.map((p) => (
                                            <Link key={p.name} to={p.path}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                                            >
                                                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors">
                                                    <p.icon size={18} className="text-primary" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-foreground">{p.name}</div>
                                                    <div className="text-xs text-muted-foreground mt-0.5">{p.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                        <div className="col-span-2 pt-2 mt-1 border-t border-border flex justify-between items-center">
                                            <span className="text-xs text-muted-foreground">Building a unique solution?</span>
                                            <Link to="/products/custom" className="text-xs font-semibold text-primary hover:underline">
                                                Custom ERP →
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navItems.filter(n => !n.hasDropdown).map((item) => (
                            <Link key={item.name} to={item.path!}
                                className={cn("nav-link px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium",
                                    location.pathname === item.path && "text-foreground bg-muted")}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <a href="tel:+917094399879" className="btn-ghost text-sm hidden lg:flex items-center gap-1.5">
                            <Phone size={14} />
                            +91 70943 99879
                        </a>
                        <Link to="/contact" className="btn-primary text-sm">
                            Request Demo
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-t border-border overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-3 py-2">Products</div>
                            {products.map((p) => (
                                <Link key={p.name} to={p.path}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                                >
                                    <p.icon size={16} className="text-primary" />
                                    <span className="text-sm font-medium">{p.name}</span>
                                </Link>
                            ))}
                            <div className="h-px bg-border my-2" />
                            {navItems.filter(n => !n.hasDropdown).map((item) => (
                                <Link key={item.name} to={item.path!}
                                    className="block px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <Link to="/contact" className="btn-primary w-full text-center">
                                Request Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
