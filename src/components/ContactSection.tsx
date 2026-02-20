import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="container mx-auto max-w-3xl relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">WHAT'S NEXT?</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            I'm actively looking for new opportunities. Whether you have a question or just want to say hi — I'll get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:nb2000karthik@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              <Mail size={18} /> Say Hello
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://linkedin.com/in/naveen-karthik-b-37510a210/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg glass-card-hover font-semibold text-sm text-foreground"
            >
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
            <a
              href="tel:+918754621153"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg glass-card-hover font-semibold text-sm text-foreground"
            >
              <Phone size={18} /> Call Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
