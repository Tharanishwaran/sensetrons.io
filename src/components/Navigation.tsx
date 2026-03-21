import { cn } from "@/lib/utils";
import { forwardRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "@/assets/company-logo.svg";

const Navigation = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
      { name: "About", path: "/#about", hash: "#about" },
      { name: "Services", path: "/#services", hash: "#services" },
      { name: "Projects", path: "/projects", hash: "#projects" },
      { name: "Contact", path: "/#contact", hash: "#contact" }
    ];

    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 py-2 shadow-2xl shadow-primary/5"
            : "bg-transparent py-4",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4 group animate-reveal">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center p-0.5 shadow-lg transition-all duration-300">
                <img
                  src={companyLogo}
                  alt="Sensetrons"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-foreground font-outfit uppercase">
                Sensetrons
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8 animate-reveal">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={isHome ? item.hash : item.path}
                  className="text-base font-bold text-muted-foreground hover:text-foreground transition-all duration-300 relative group py-2 font-outfit tracking-tight"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 tracking-tight font-outfit text-center"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";

export { Navigation };