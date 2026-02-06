import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with payment integration, product management, and a responsive storefront.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop boards, and team workspaces.",
    tech: ["TypeScript", "React", "Supabase", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Interface",
    description:
      "An AI-powered chat application with streaming responses, conversation history, and markdown rendering.",
    tech: ["Next.js", "OpenAI", "Prisma", "Vercel"],
    github: "#",
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
