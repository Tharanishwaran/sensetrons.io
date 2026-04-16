import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PlatformFeatures } from "@/components/sections/PlatformFeatures";
import { PricingSection } from "@/components/sections/PricingSection";
import { AboutCompanySection } from "@/components/sections/AboutCompanySection";
import { ContactLeadGen } from "@/components/sections/ContactLeadGen";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <TrustSection />
                <ProductsSection />
                <PlatformFeatures />
                <AboutCompanySection />
                <PricingSection />
                <ContactLeadGen />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
