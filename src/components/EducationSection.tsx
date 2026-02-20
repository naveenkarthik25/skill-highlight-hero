import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary font-mono text-lg">04.</span> Education
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-lg p-6 flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              B.E in Computer Science and Engineering
            </h3>
            <p className="text-primary font-mono text-sm">
              P.A. College of Engineering and Technology
            </p>
            <p className="text-muted-foreground text-sm mt-1">2018 – 2022 · CGPA: 7.79</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
