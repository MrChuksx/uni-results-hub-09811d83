import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((i) => i.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled && "bg-background/80 backdrop-blur-md border-b border-border"
      )}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => smoothScroll(e, "#")}
          className="text-xl font-bold text-primary font-mono"
        >
          MC
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className={cn(
                    "text-sm transition-colors",
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <span className="font-mono text-primary text-xs mr-1">0{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="sm" className="font-mono text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="/resume.pdf" download>
              <FileDown className="mr-1.5 h-3.5 w-3.5" /> Resume
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => { smoothScroll(e, item.href); setMenuOpen(false); }}
            className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            <span className="font-mono text-primary text-sm mr-2">0{i + 1}.</span>
            {item.label}
          </a>
        ))}
        <Button variant="outline" size="lg" className="font-mono text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4" asChild>
          <a href="/resume.pdf" download>
            <FileDown className="mr-2 h-4 w-4" /> Resume
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
