import { Navigation } from "@/components/Navigation";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

const ServicesPage = () => {
    const consultingFeatures = [
        { title: "Technical Audit", desc: "In-depth review of your existing codebase and infrastructure." },
        { title: "Architecture Design", desc: "Blueprinting scalable, future-proof systems for your growth." },
        { title: "AI Strategy", desc: "Mapping out how artificial intelligence can optimize your operations." },
        { title: "Security Protocols", desc: "Implementing industry-standard defense mechanisms." }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
            <Navigation />

            <main className="pt-32">
                <div className="container mx-auto px-6 mb-20 animate-reveal">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic text-primary">Services</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        From custom software engineering to specialized AI research,
                        we provide the tools for your digital evolution.
                    </p>
                </div>

                <ServicesSection />

                {/* Consulting Section */}
                <section className="py-32 border-t border-border">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="animate-reveal">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Strategic <br /><span className="text-primary italic">Technical Consulting</span></h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    Our expertise goes beyond writing code. We help you navigate the
                                    complex technological landscape to make informed decisions that
                                    drive long-term value.
                                </p>
                                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all hover-lift">
                                    Schedule a Consultation
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-reveal">
                                {consultingFeatures.map((f, i) => (
                                    <div key={f.title} className="p-6 bg-secondary/20 rounded-2xl border border-white/5 hover-lift">
                                        <h4 className="font-bold mb-2">{f.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ServicesPage;
