import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const Button = ({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: "bg-primary text-white hover:shadow-[0_0_30px_hsla(255,64%,55%,0.6)]",
        secondary: "bg-secondary text-background hover:shadow-[0_0_30px_hsla(171,100%,45%,0.6)]",
        outline: "bg-transparent border-2 border-white/20 text-white hover:border-white hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-8 py-4 text-sm font-bold",
        lg: "px-10 py-5 text-base font-bold",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative rounded-full transition-all duration-300 uppercase tracking-widest overflow-hidden group",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </motion.button>
    );
};
