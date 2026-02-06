import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    // Open mail client with pre-filled fields
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:hello@mrchuks.com?subject=${subject}&body=${body}`, "_self");

    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-sm font-mono text-primary tracking-wider mb-2">03.</h2>
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently open to new opportunities. Drop me a message
              and I'll get back to you as soon as possible!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-mono text-muted-foreground">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-mono text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-mono text-muted-foreground">Message</Label>
              <Textarea
                id="message"
                placeholder="What's on your mind?"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full font-mono text-sm"
              disabled={sent}
            >
              {sent ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" /> Message Opened!
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Or email me directly at{" "}
            <a href="mailto:hello@mrchuks.com" className="text-primary hover:underline">
              hello@mrchuks.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
