import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Lightbulb, Code2, Shield, Rocket } from "lucide-react";

const AboutPage = () => {
    const steps = [
        { title: "Strategy", desc: "Understanding your vision and defining the technical roadmap for success.", icon: Lightbulb },
        { title: "Engineering", desc: "Building robust, scalable solutions using state-of-the-art technology.", icon: Code2 },
        { title: "Security", desc: "Rigorous testing and auditing to ensure your assets are protected.", icon: Shield },
        { title: "Growth", desc: "Continuous support and scaling as your business reaches new heights.", icon: Rocket }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
            <Navigation />

            <main className="pt-32">
                <div className="container mx-auto px-6 mb-20 animate-reveal">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic text-primary">Our Story</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        A team of passionate engineers dedicated to building the future of
                        decentralized systems, AI, and mission-critical software.
                    </p>
                </div>

                <AboutSection />

                {/* Process Section */}
                <section className="py-32 border-t border-border bg-secondary/10">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mb-16 animate-reveal">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our <span className="text-primary italic">Process</span></h2>
                            <p className="text-lg text-muted-foreground">
                                We follow a disciplined engineering approach to ensure
                                every project is delivered with the highest quality standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, i) => (
                                <div key={step.title}
                                    className="group p-8 glass-effect rounded-2xl hover-lift animate-reveal border-white/5"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <step.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
