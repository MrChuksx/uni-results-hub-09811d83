import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Guidora — Career Compass",
    description:
      "An AI-powered career guidance platform that helps users discover career paths, get personalized recommendations, and plan their professional journey with intelligent insights.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/MrChuksx/guidora-your-career-compass",
    live: "#",
  },
  {
    title: "UniResults Hub",
    description:
      "A university results management system for students to check grades, track academic performance, and access result breakdowns in a clean, organized interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/MrChuksx/uni-results-hub-09811d83",
    live: "#",
  },
  {
    title: "MrChuks Org — AI Studio",
    description:
      "An organizational hub built from Google Gemini's AI Studio template, showcasing AI integration capabilities and prompt engineering workflows.",
    tech: ["TypeScript", "React", "Google Gemini", "Vercel"],
    github: "https://github.com/MrChuksx/MrChuksx-s-Org",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider mb-2">02.</h2>
          <h3 className="text-3xl font-bold mb-10">Projects</h3>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/40 transition-colors group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-primary/80 bg-primary/10 px-2.5 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
