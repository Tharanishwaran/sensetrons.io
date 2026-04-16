import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Hospital, Factory, ShoppingCart, Droplets, Shirt, Settings, CheckCircle } from "lucide-react";

const products = [
    {
        title: "Hospital Management System",
        icon: Hospital,
        badge: "badge-blue",
        badgeText: "Healthcare",
        color: "text-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        description: "Complete HMS covering OPD, IPD, billing, pharmacy, lab and more — built for clinics to multi-specialty hospitals.",
        features: ["Patient registration & OPD/IPD", "Pharmacy & Lab integration", "Billing & insurance claims", "Doctor scheduling & EMR", "Real-time analytics"],
        path: "/products/hospital",
    },
    {
        title: "Garments ERP",
        icon: Shirt,
        badge: "badge-orange",
        badgeText: "Textile",
        color: "text-orange-600",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        description: "End-to-end garment manufacturing ERP from raw material to dispatch — with style/size matrix and costing.",
        features: ["Style & size matrix management", "Production order tracking", "Raw material procurement", "Quality control checks", "Export documentation"],
        path: "/products/garments",
    },
    {
        title: "Manufacturing ERP",
        icon: Factory,
        badge: "badge-purple",
        badgeText: "Manufacturing",
        color: "text-purple-600",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        description: "Streamline production, inventory, and distribution for manufacturing businesses of any scale.",
        features: ["BOM & work order management", "Machine scheduling", "Inventory & costing", "Quality & compliance", "Dispatch & logistics"],
        path: "/products/manufacturing",
    },
    {
        title: "Borewell Management ERP",
        icon: Droplets,
        badge: "badge-teal",
        badgeText: "Water Industry",
        color: "text-teal-600",
        bg: "bg-teal-50 dark:bg-teal-900/20",
        description: "Purpose-built for borewell contractors — manage quotations, projects, invoicing and field teams with ease.",
        features: ["Site survey & quotation", "Work progress tracking", "Material & pump management", "Field staff coordination", "Customer billing & reports"],
        path: "/products/borewell",
    },
    {
        title: "Retail Billing ERP",
        icon: ShoppingCart,
        badge: "badge-green",
        badgeText: "Retail",
        color: "text-green-600",
        bg: "bg-green-50 dark:bg-green-900/20",
        description: "Lightning-fast POS with full inventory, GST billing, barcode and multi-store support for retail businesses.",
        features: ["Fast POS & barcode billing", "GST-compliant invoicing", "Multi-store inventory", "Customer loyalty programs", "Sales & profit reports"],
        path: "/products/retail",
    },
    {
        title: "Custom ERP Solutions",
        icon: Settings,
        badge: "badge-purple",
        badgeText: "Custom",
        color: "text-violet-600",
        bg: "bg-violet-50 dark:bg-violet-900/20",
        description: "Your business is unique. We build fully tailored ERP solutions designed around your exact workflows and processes.",
        features: ["Requirements analysis", "Custom module development", "System integration", "Data migration support", "Training & go-live support"],
        path: "/products/custom",
    },
];

export const ProductsSection = () => {
    return (
        <section className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="section-label mx-auto w-fit mb-4">Our ERP Products</div>
                    <h2 className="font-jakarta font-extrabold text-display-md text-foreground mb-4">
                        Purpose-Built ERP for{" "}
                        <span className="gradient-text">Every Industry</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stop fitting your business into generic software. Our industry-specific ERP
                        modules are built from the ground up for your exact workflows.
                    </p>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, i) => {
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                            >
                                <div className="card-product h-full flex flex-col">
                                    {/* Icon + badge */}
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`w-12 h-12 ${product.bg} rounded-xl flex items-center justify-center`}>
                                            <Icon size={24} className={product.color} />
                                        </div>
                                        <span className={product.badge}>{product.badgeText}</span>
                                    </div>

                                    <h3 className="font-jakarta font-bold text-[17px] text-foreground mb-2">{product.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{product.description}</p>

                                    {/* Features list */}
                                    <ul className="space-y-2 mb-6">
                                        {product.features.map((feat) => (
                                            <li key={feat} className="feature-check">
                                                <span className="feature-check-icon"><CheckCircle size={11} /></span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        to={product.path}
                                        className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 mt-auto"
                                    >
                                        View Details <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-14">
                    <p className="text-muted-foreground mb-4">Don't see your industry? We build custom solutions.</p>
                    <Link to="/contact" className="btn-primary px-8 py-3 text-base rounded-xl">
                        Talk to Our Team
                    </Link>
                </div>
            </div>
        </section>
    );
};
