import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary font-mono text-lg">05.</span> Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-8 mx-auto" />
          <p className="text-muted-foreground mb-10">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:nb2000karthik@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} /> Email Me
            </a>
            <a
              href="https://linkedin.com/in/naveen-karthik-b-37510a210/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="tel:+918754621153"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Phone size={18} /> Call
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
