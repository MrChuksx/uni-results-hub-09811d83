import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js",
  "Python", "PostgreSQL", "Tailwind CSS", "Docker",
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
                Hello! I'm a developer who loves crafting digital experiences that live 
                on the internet. My interest in web development started back in 2016 
                when I decided to try building custom themes — turns out hacking 
                together HTML & CSS taught me a lot!
              </p>
              <p>
                Fast-forward to today, I've had the privilege of working at a startup, 
                a large corporation, and a student-led design studio. My main focus 
                these days is building accessible, inclusive products and digital 
                experiences.
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
