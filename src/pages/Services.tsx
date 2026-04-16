import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceList } from "@/components/sections/ServiceList";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ParticleField } from "@/components/3d/ParticleField";
import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <ParticleField />
            <Navbar />
            <main>
                <ServiceList />
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Services;
