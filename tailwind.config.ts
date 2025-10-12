import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-subtle": "var(--gradient-subtle)",
        "gradient-card": "var(--gradient-card)",
        "gradient-mesh": "var(--gradient-mesh)",
      },
      boxShadow: {
        "3d": "var(--shadow-3d)",
        "elevated": "var(--shadow-elevated)",
        "glow": "var(--shadow-glow)",
        "massive": "var(--shadow-massive)",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "elastic": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-premium": {
          "0%, 100%": { transform: "var(--transform-float)" },
          "33%": { transform: "perspective(1200px) rotateX(-2deg) rotateY(2deg) translateY(-4px)" },
          "66%": { transform: "perspective(1200px) rotateX(4deg) rotateY(-4deg) translateY(-8px)" },
        },
        "slide-up-elegant": {
          "0%": { transform: "translateY(40px)", opacity: "0", filter: "blur(4px)" },
          "100%": { transform: "translateY(0)", opacity: "1", filter: "blur(0)" },
        },
        "glow-pulse-premium": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)" },
          "50%": { boxShadow: "0 0 60px hsl(var(--primary) / 0.6), 0 0 120px hsl(var(--primary) / 0.4)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "mesh-flow": {
          "0%, 100%": { transform: "translateX(0%) translateY(0%)" },
          "25%": { transform: "translateX(5%) translateY(-5%)" },
          "50%": { transform: "translateX(-5%) translateY(5%)" },
          "75%": { transform: "translateX(5%) translateY(5%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-premium": "float-premium 8s ease-in-out infinite",
        "slide-up-elegant": "slide-up-elegant 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "glow-pulse-premium": "glow-pulse-premium 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "scale-pulse": "scale-pulse 4s ease-in-out infinite",
        "mesh-flow": "mesh-flow 15s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
