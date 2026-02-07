import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileDown, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const smoothScroll = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted))_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-4">
            Hi, I'm Mr Chuks 👋
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Uchechukwu<br className="hidden md:block" /> Godspower
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
            I build things for the web.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            A full-stack developer passionate about creating elegant, 
            performant applications. Currently focused on building accessible, 
            human-centered digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button size="lg" className="font-mono text-sm" asChild>
            <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>
              Get In Touch
            </a>
          </Button>
          <Button variant="outline" size="lg" className="font-mono text-sm border-border hover:border-primary hover:text-primary" asChild>
            <a href="/resume.pdf" download>
              <FileDown className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
          <div className="flex gap-2">
            <a href="https://github.com/MrChuksx" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                <Github />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/godspower-uchechukwu-69a200397" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                <Linkedin />
              </Button>
            </a>
            <a href="https://x.com/mrchuks_" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Button>
            </a>
            <a href="https://www.instagram.com/bluestoneon" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                <Instagram />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" onClick={(e) => smoothScroll(e, "#about")}>
            <ArrowDown className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
