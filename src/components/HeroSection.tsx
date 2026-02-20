import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            &gt; Hello, World_
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Naveen Karthik <span className="text-primary text-glow">B</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
            Python AI Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-secondary-foreground/70 leading-relaxed mb-10 text-base"
        >
          2+ years building production-grade REST APIs, serverless microservices, and AI-powered systems.
          Specializing in FastAPI, Azure, LangChain, and RAG pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href="/NaveenKarthik_AIDev.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <a href="mailto:nb2000karthik@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> nb2000karthik@gmail.com
          </a>
          <a href="tel:+918754621153" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={16} /> +91 8754621153
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Coimbatore
          </span>
          <a
            href="https://linkedin.com/in/naveen-karthik-b-37510a210/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
