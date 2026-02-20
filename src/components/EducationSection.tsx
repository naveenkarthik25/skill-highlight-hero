import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">BACKGROUND</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Education
          </h2>
          <div className="line-accent mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card-hover rounded-xl p-8 flex items-start gap-5 max-w-2xl"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="text-primary" size={26} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              B.E in Computer Science & Engineering
            </h3>
            <p className="text-primary font-mono text-sm mb-2">
              P.A. College of Engineering and Technology
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>2018 – 2022</span>
              <span className="text-border">|</span>
              <span>CGPA: <span className="text-foreground font-semibold">7.79</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
