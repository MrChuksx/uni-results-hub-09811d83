import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider mb-2">03.</h2>
          <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm currently open to new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll do my best 
            to get back to you!
          </p>
          <a href="mailto:hello@johndoe.com">
            <Button size="lg" className="font-mono text-sm">
              <Mail className="mr-2 h-4 w-4" /> Say Hello
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
