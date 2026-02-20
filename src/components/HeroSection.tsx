import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-display leading-[0.95] mb-6"
          >
            <span className="text-foreground">Naveen</span>
            <br />
            <span className="text-foreground">Karthik </span>
            <span className="gradient-text text-glow">B</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="line-accent" />
            <p className="text-xl md:text-2xl font-light text-secondary-foreground tracking-wide">
              Python AI Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-10"
          >
            2+ years crafting production-grade APIs, serverless systems, and intelligent AI pipelines 
            with FastAPI, Azure & LangChain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="/NaveenKarthik_AIDev.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg glass-card-hover text-foreground font-semibold text-sm"
            >
              <Mail size={18} /> Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
          >
            <a href="mailto:nb2000karthik@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> nb2000karthik@gmail.com
            </a>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Coimbatore, India
            </span>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="https://linkedin.com/in/naveen-karthik-b-37510a210/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
