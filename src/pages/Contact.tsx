import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ParticleField } from "@/components/3d/ParticleField";
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <ParticleField />
            <Navbar />
            <main>
                <ContactDetails />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
