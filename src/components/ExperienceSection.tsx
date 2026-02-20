import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Associate Engineer – Python Backend Developer",
    company: "Yectra Technologies",
    location: "Coimbatore",
    period: "Apr 2024 – Present",
    bullets: [
      "Developed and deployed Python-based REST APIs using Azure Functions for scalable serverless backend services.",
      "Built a Face Attendance System using OpenCV and InsightFace, achieving 99% accuracy and reducing manual tracking by 80%.",
      "Designed a GST Calculator API using FastAPI and Docker for simplified deployment.",
      "Integrated Azure Cosmos DB and Azure Blob Storage for secure data storage and file management.",
      "Automated deployment of FastAPI microservices using GitHub Actions.",
    ],
    tech: ["Python", "Azure Functions", "FastAPI", "OpenCV", "Docker", "GitHub Actions"],
  },
];

const projects = [
  {
    name: "Groflex – Business Intelligence Platform",
    bullets: [
      "Built FastAPI-based microservices for business data extraction and CRUD operations with MongoDB.",
      "Developed time-series forecasting pipelines using Facebook Prophet for sales predictions.",
      "Implemented agentic AI routing with LangGraph and LangChain ReAct agents for dynamic chatbot tool selection.",
      "Created a RAG pipeline using LangChain, FAISS, and HuggingFace embeddings for semantic search.",
    ],
    tech: ["FastAPI", "MongoDB", "LangChain", "LangGraph", "FAISS", "HuggingFace"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary font-mono text-lg">03.</span> Experience
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-12" />
        </motion.div>

        {/* Work Experience */}
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 border-l-2 border-primary/30 pl-6 relative"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Briefcase size={16} className="text-primary" />
              <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
            </div>
            <p className="text-primary font-mono text-sm mb-1">{exp.company} · {exp.location}</p>
            <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
            <ul className="space-y-2 mb-4">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-secondary-foreground/80 text-sm flex gap-2">
                  <span className="text-primary mt-1 shrink-0">▹</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20">
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
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            <span className="text-primary font-mono text-base">03.1</span> Key Project
          </h3>
        </motion.div>

        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-all duration-300"
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">{proj.name}</h4>
            <ul className="space-y-2 mb-4">
              {proj.bullets.map((b, j) => (
                <li key={j} className="text-secondary-foreground/80 text-sm flex gap-2">
                  <span className="text-primary mt-1 shrink-0">▹</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20">
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
