import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        navy: "hsl(var(--navy))",
        "navy-mid": "hsl(var(--navy-mid))",
        surface: "hsl(var(--surface))",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        jakarta: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "700" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)",
        "card-md": "0 4px 6px -1px rgba(0,0,0,.07), 0 2px 4px -2px rgba(0,0,0,.05)",
        "card-lg": "0 10px 15px -3px rgba(0,0,0,.08), 0 4px 6px -4px rgba(0,0,0,.05)",
        "card-xl": "0 20px 25px -5px rgba(0,0,0,.08), 0 8px 10px -6px rgba(0,0,0,.04)",
        "brand": "0 0 0 3px hsla(221,83%,53%,.15)",
        "brand-lg": "0 8px 24px hsla(221,83%,53%,.25)",
        "glow-blue": "0 0 40px hsla(221,83%,53%,.2)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, hsl(221,83%,53%) 0%, hsl(258,70%,58%) 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, hsla(221,83%,53%,.12) 0%, hsla(258,70%,58%,.08) 100%)",
        "hero-radial": "radial-gradient(ellipse 80% 60% at 50% -10%, hsla(221,83%,53%,.14) 0%, transparent 60%)",
      },
      animation: {
        "float": "floatY 5s ease-in-out infinite",
        "marquee": "marqueeScroll 25s linear infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "gradient": "gradientMove 5s ease infinite",
        "spin-slow": "spin 16s linear infinite",
        "fade-up": "fadeUp .7s ease both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
