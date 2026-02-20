import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Associate Engineer – Python Backend Developer",
    company: "Yectra Technologies",
    location: "Coimbatore",
    period: "Apr 2024 – Present",
    bullets: [
      "Developed and deployed Python-based REST APIs using Azure Functions for scalable serverless backend services.",
      "Built a Face Attendance System using OpenCV and InsightFace — 99% accuracy, 80% reduction in manual tracking.",
      "Designed a GST Calculator API using FastAPI + Docker for simplified deployment.",
      "Integrated Azure Cosmos DB and Azure Blob Storage for secure backend data management.",
      "Automated CI/CD for FastAPI microservices using GitHub Actions.",
    ],
    tech: ["Python", "Azure Functions", "FastAPI", "OpenCV", "Docker", "GitHub Actions"],
  },
];

const projects = [
  {
    name: "Groflex",
    subtitle: "Business Intelligence Platform",
    bullets: [
      "Built FastAPI microservices for business data extraction with MongoDB CRUD operations.",
      "Developed time-series forecasting with Facebook Prophet for sales metric predictions.",
      "Implemented agentic AI routing using LangGraph + LangChain ReAct for dynamic chatbot tool selection.",
      "Created a RAG pipeline with FAISS and HuggingFace embeddings for semantic search over business data.",
    ],
    tech: ["FastAPI", "MongoDB", "LangChain", "LangGraph", "FAISS", "HuggingFace"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">WHERE I'VE WORKED</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Experience
          </h2>
          <div className="line-accent mt-4" />
        </motion.div>

        {/* Work */}
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card-hover rounded-xl p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={18} className="text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                </div>
                <p className="text-primary font-mono text-sm">{exp.company} · {exp.location}</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">{exp.period}</span>
            </div>
            <ul className="space-y-3 mb-6">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-secondary-foreground/80 text-sm flex gap-3 leading-relaxed">
                  <span className="text-primary mt-0.5 shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/15">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-10"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">WHAT I'VE BUILT</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Featured Project
          </h2>
          <div className="line-accent mt-4" />
        </motion.div>

        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card-hover rounded-xl p-8"
          >
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-2xl font-bold gradient-text">{proj.name}</h3>
              <ArrowUpRight size={20} className="text-primary" />
            </div>
            <p className="text-muted-foreground text-sm mb-6">{proj.subtitle}</p>
            <ul className="space-y-3 mb-6">
              {proj.bullets.map((b, j) => (
                <li key={j} className="text-secondary-foreground/80 text-sm flex gap-3 leading-relaxed">
                  <span className="text-primary mt-0.5 shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/15">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
