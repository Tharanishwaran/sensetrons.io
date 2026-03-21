import { Navigation } from "@/components/Navigation";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const ProjectsPage = () => {
    const techStack = [
        "React", "Node.js", "TypeScript", "Python", "Rust", "Go",
        "AWS", "PostgreSQL", "Docker", "Kubernetes", "Redis", "Solidity"
    ];

    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
            <Navigation />

            <main className="pt-32">
                <div className="container mx-auto px-6 mb-20 animate-reveal">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic text-primary">Case Studies</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        A curated selection of our work across enterprise software,
                        blockchain ecosystems, and data-intensive applications.
                    </p>
                </div>

                <ProjectsSection />

                {/* Tech Stack Section */}
                <section className="py-32 border-t border-border bg-secondary/10">
                    <div className="container mx-auto px-6 text-center animate-reveal">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Our <span className="text-primary italic">Technical Edge</span></h2>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {techStack.map((tech) => (
                                <span key={tech} className="px-6 py-3 glass-effect rounded-full text-sm font-bold border-white/5 hover-lift">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-12 text-muted-foreground max-w-2xl mx-auto">
                            We select the most appropriate technologies for each project,
                            prioritizing performance, security, and long-term maintainability.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
