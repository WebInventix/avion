import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../public/images/white-logo.svg"

const navItems = [
  { label: "About", href: "/about" },
  { label: "Mandate", href: "/mandate" },
  { label: "Structure", href: "/structure" },
  { label: "Access", href: "/access" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <span className="text-[14px] leading-[20px] font-medium text-[rgb(155,115,59)] tracking-[0.3em]">
              {/* ARVION */}
              <img src={Logo} alt="Logo"  className="w-16 sm:w-20 md:w-24 h-auto object-contain"/>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[12px] leading-[16px] font-normal tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-[rgb(155,115,59)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-[12px] leading-[16px] font-normal tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-[rgb(155,115,59)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
