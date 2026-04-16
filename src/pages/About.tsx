import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutStory } from "@/components/sections/AboutStory";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ParticleField } from "@/components/3d/ParticleField";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <ParticleField />
            <Navbar />
            <main>
                <AboutStory />
                <Process />
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
};

export default About;
