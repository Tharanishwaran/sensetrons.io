import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { productsData } from "@/data/products";
import { ArrowRight, CheckCircle2, Target } from "lucide-react";
import { ContactLeadGen } from "@/components/sections/ContactLeadGen";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = productId ? productsData[productId] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    if (!product) {
        return <Navigate to="/" />;
    }

    const Icon = product.icon;

    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className={`py-20 lg:py-32 ${product.bg} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                        {/* Adjusted grid to give more weight to the image (1.2fr) */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className={`w-12 h-12 bg-background rounded-2xl shadow-sm flex items-center justify-center`}>
                                        <Icon size={24} className={product.color} />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">{product.industry} Solution</span>
                                </div>

                                <h1 className="font-jakarta font-extrabold text-display-lg text-foreground mb-8 leading-tight">
                                    {product.title}
                                </h1>

                                <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-5">
                                    <a href="#contact-demo" className="btn-primary px-10 py-4 text-base rounded-2xl shadow-brand-lg">
                                        Book a Free Demo
                                    </a>
                                    <Link to="/pricing" className="btn-outline px-10 py-4 text-base rounded-2xl hover:bg-background">
                                        View Pricing
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Industry Image Card (Bigger & Text-free) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                {/* Increased aspect ratio or container size could work, but grid adjustment is better. 
                                    Using aspect-[16/10] for a cinematic look. */}
                                <div className="relative aspect-[16/10] bg-navy rounded-[3rem] shadow-card-2xl overflow-hidden border-8 border-white/50 dark:border-navy-mid group">
                                    <motion.img
                                        src={product.heroImage}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />

                                    {/* Clean glassy overlay with zero text */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />

                                    {/* Reflection/Glow Effect */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                                </div>

                                {/* Subtle Floating badge for polish (Purely visual, no text as requested) */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Capabilities */}
                <section className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-jakarta font-extrabold text-3xl text-foreground mb-4">Core Platform Capabilities</h2>
                            <p className="text-muted-foreground">Every feature is built for deep control and real-time visibility.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {product.features.map((feature) => (
                                <div key={feature.title} className="p-8 rounded-3xl bg-surface border border-border hover:border-primary/30 hover:shadow-card-lg transition-all group">
                                    <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border group-hover:bg-primary group-hover:text-white transition-colors">
                                        <feature.icon size={26} />
                                    </div>
                                    <h3 className="font-jakarta font-bold text-lg text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integration & Benefits */}
                <section className="py-24 bg-surface border-y border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h3 className="font-jakarta font-extrabold text-3xl text-foreground mb-10 flex items-center gap-3">
                                    <Target className="text-primary" size={28} />
                                    Operational Excellence
                                </h3>
                                <div className="space-y-6">
                                    {product.benefits.map((benefit) => (
                                        <div key={benefit} className="flex gap-4 items-center p-6 rounded-2xl bg-background border border-border">
                                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 size={18} className="text-green-600" />
                                            </div>
                                            <p className="text-foreground font-semibold">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-navy rounded-[3rem] p-12 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="font-jakarta font-extrabold text-3xl mb-12">Who is this for?</h3>
                                    <div className="space-y-4">
                                        {product.useCases.map((uc) => (
                                            <div key={uc} className="flex items-center gap-4 py-3 border-b border-white/10 last:border-0">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <span className="font-bold text-lg">{uc}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12">
                                        <a href="#contact-demo" className="btn-primary bg-white text-navy hover:bg-white/90 px-8 py-4 rounded-xl text-base">
                                            Talk to Specialist <ArrowRight size={18} className="ml-2 inline" />
                                        </a>
                                    </div>
                                </div>

                                {/* Abstract background circle */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                </section>

                <ContactLeadGen />
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
