import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card3DProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: "purple" | "cyan" | "white";
    delay?: number;
}

export const Card3D = ({ children, className, glowColor = "purple", delay = 0 }: Card3DProps) => {
    const glowStyles = {
        purple: "hover:shadow-[0_0_50px_hsla(255,64%,55%,0.3)]",
        cyan: "hover:shadow-[0_0_50px_hsla(171,100%,45%,0.3)]",
        white: "hover:shadow-[0_0_50px_hsla(0,0%,100%,0.2)]",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="1.5rem"
                scale={1.02}
                transitionSpeed={1500}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className={cn(
                    "card-3d group cursor-pointer",
                    glowStyles[glowColor],
                    className
                )}
            >
                <div className="relative z-10 translate-z-10 transform-gpu">
                    {children}
                </div>
            </Tilt>
        </motion.div>
    );
};
