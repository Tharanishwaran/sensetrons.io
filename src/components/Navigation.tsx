import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "@/assets/company-logo.svg";

const Navigation = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50",
          "transition-all duration-500",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src={companyLogo}
                  alt="Sensetrons"
                  className="w-10 h-10 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300"
                  loading="eager"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                Sensetrons
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "About", path: "/about", hash: "#about" },
                { name: "Services", path: "/services", hash: "#services" },
                { name: "Projects", path: "/projects", hash: "#projects" },
                { name: "Contact", path: "/contact", hash: "#contact" }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={isHome ? item.hash : item.path}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-300 hover-lift"
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