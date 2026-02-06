import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button size="lg" className="font-mono text-sm">
            <Mail className="mr-2 h-4 w-4" /> Get In Touch
          </Button>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
              <Github />
            </Button>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
              <Linkedin />
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
