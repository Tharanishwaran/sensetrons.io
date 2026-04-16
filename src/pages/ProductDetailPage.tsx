import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { productsData } from "@/data/products";
import { ArrowRight, CheckCircle2, LayoutDashboard, Target } from "lucide-react";
import { ContactLeadGen } from "@/components/sections/ContactLeadGen";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = productId ? productsData[productId] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    if (!product) {
        return <Navigate to="/#products" />;
    }

    const Icon = product.icon;

    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className={`py-20 ${product.bg} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-12 h-12 bg-background rounded-2xl shadow-sm flex items-center justify-center`}>
                                        <Icon size={24} className={product.color} />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{product.industry} Solution</span>
                                </div>

                                <h1 className="font-jakarta font-extrabold text-display-lg text-foreground mb-6 leading-tight">
                                    {product.title}
                                </h1>

                                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <a href="#contact-demo" className="btn-primary px-8 py-3.5 text-base rounded-xl">
                                        Book a Personalized Demo
                                    </a>
                                    <Link to="/pricing" className="btn-outline px-8 py-3.5 text-base rounded-xl">
                                        View Pricing Plans
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="aspect-[16/10] bg-navy rounded-2xl shadow-card-xl overflow-hidden border-8 border-navy-mid flex items-center justify-center p-12 text-center">
                                    <div className="space-y-4">
                                        <LayoutDashboard size={80} className="text-primary/20 mx-auto" />
                                        <p className="text-white/40 text-sm font-jakarta tracking-wide">
                                            Interactive {product.title} Dashboard <br />
                                            Preview available in live demo
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Main Features Grid */}
                <section className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <div className="section-label mx-auto w-fit mb-4">Core Capabilities</div>
                            <h2 className="font-jakarta font-extrabold text-display-md text-foreground mb-4">
                                Built for your daily workflows
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {product.features.map((feature, i) => (
                                <div key={feature.title} className="group">
                                    <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-6 border border-border group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                                        <feature.icon size={26} className="text-primary" />
                                    </div>
                                    <h3 className="font-jakarta font-bold text-lg text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits & Use Cases (The Enterprise Split) */}
                <section className="py-24 bg-surface border-y border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Benefits */}
                            <div>
                                <h3 className="font-jakarta font-extrabold text-3xl text-foreground mb-8 flex items-center gap-3">
                                    <Target className="text-primary" size={28} />
                                    Why Choose {product.title}?
                                </h3>
                                <div className="space-y-5">
                                    {product.benefits.map((benefit) => (
                                        <div key={benefit} className="flex gap-4 items-start p-5 rounded-2xl bg-background border border-border shadow-sm">
                                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle2 size={16} className="text-green-600" />
                                            </div>
                                            <p className="text-foreground/90 font-medium leading-relaxed">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Use Cases */}
                            <div>
                                <h3 className="font-jakarta font-extrabold text-3xl text-foreground mb-8">
                                    Best for...
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.useCases.map((uc) => (
                                        <div key={uc} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/20 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center mb-4">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            <p className="font-bold text-foreground">{uc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 p-8 rounded-3xl bg-primary text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h4 className="font-jakarta font-bold text-xl mb-4">Ready to see it in action?</h4>
                                        <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                            Our specialists can walk you through the system with your actual business data samples.
                                            Zero commitments required.
                                        </p>
                                        <a href="#contact-demo" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-bold text-sm shadow-lg hover:shadow-white/20 transition-all">
                                            Schedule Free Live Demo <ArrowRight size={16} />
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Contact / Demo Form */}
                <ContactLeadGen />
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
