import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Tailwind CSS",
  "Prompt Engineering", "AI Tools", "Vite", "Git",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider mb-2">01.</h2>
          <h3 className="text-3xl font-bold mb-8">About Me</h3>

          <div className="grid md:grid-cols-[3fr_2fr] gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm a developer and prompt engineer who builds digital 
                products using AI-powered tools. I leverage platforms like Lovable, 
                Google Gemini, and other AI assistants to rapidly prototype and 
                ship production-ready web applications.
              </p>
              <p>
                My approach combines strong prompt engineering skills with modern 
                web technologies to create polished, functional products in record 
                time. I'm passionate about exploring the intersection of AI and 
                development, turning ideas into reality faster than ever.
              </p>
            </div>

            <div>
              <p className="text-sm font-mono text-primary mb-4">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
