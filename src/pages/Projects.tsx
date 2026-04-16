import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { TechEdge } from "@/components/sections/TechEdge";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ParticleField } from "@/components/3d/ParticleField";
import { useEffect } from "react";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <ParticleField />
            <Navbar />
            <main>
                <ProjectShowcase />
                <TechEdge />
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
