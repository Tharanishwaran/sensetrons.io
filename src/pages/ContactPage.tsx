import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
            <Navigation />

            <main className="pt-32">
                <div className="container mx-auto px-6 mb-20 animate-reveal">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic text-primary">Let's Connect</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Ready to take your digital presence to the next level?
                        Reach out and let's start a conversation about your future.
                    </p>
                </div>

                <ContactSection />

                {/* Office Info Section */}
                <section className="py-32 border-t border-border bg-secondary/10">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-reveal">
                            <div>
                                <h4 className="text-xl font-bold mb-4 tracking-tight">Technical Hub</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Innovators Plaza, Suite 400<br />
                                    Tech District, CA 94043
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-4 tracking-tight">Hours of Operation</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                                    Sat - Sun: Distributed Support
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-4 tracking-tight">Direct Support</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Engineering: engineering@sensetrons.io<br />
                                    Business: growth@sensetrons.io
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
