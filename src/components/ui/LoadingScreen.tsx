import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import companyLogo from "@/assets/company-logo.svg";

export const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
                >
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-32 h-32 relative z-10"
                        >
                            <img src={companyLogo} alt="Logo" className="w-full h-full object-contain" />
                        </motion.div>

                        {/* Particle burst simulation */}
                        <motion.div
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 4, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/40 rounded-full blur-3xl"
                        />

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute -bottom-10 left-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
