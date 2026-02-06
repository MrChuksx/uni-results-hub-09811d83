import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled && "bg-background/80 backdrop-blur-md border-b border-border"
      )}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary font-mono">
          MC
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="font-mono text-primary text-xs mr-1">0{i + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
