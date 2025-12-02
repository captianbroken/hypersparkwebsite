import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gated Community", href: "/gated-community" },
  { name: "CCTV", href: "/cctv" },
  { name: "Home Automation", href: "/home-automation" },
  { name: "Internet", href: "/internet" },
  { name: "Network Security", href: "/network-security" },
  { name: "Contact Us", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color based on page and scroll state
  const navTextClass = isHomePage && !isScrolled
    ? "text-white hover:text-tertiary"
    : "text-secondary hover:text-primary";

  const activeNavClass = isHomePage && !isScrolled 
    ? "text-tertiary font-semibold" 
    : "text-primary font-semibold";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 pulse-glow" style={{ background: 'var(--gradient-button)' }}>
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className={cn(
              "text-2xl font-bold transition-colors",
              isHomePage && !isScrolled ? "text-white" : "gradient-text"
            )}>HyperSpark</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "hover-underline transition-colors",
                    location.pathname === item.href
                      ? activeNavClass
                      : navTextClass
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isHomePage && !isScrolled ? "text-white" : "text-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isHomePage && !isScrolled ? "text-white" : "text-foreground")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background/95 backdrop-blur-lg rounded-lg mt-2 shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-2 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      location.pathname === item.href
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};