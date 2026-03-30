import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Database } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Backend & APIs",
    skills: ["Python", "FastAPI", "Flask", "Django", "RESTful APIs", "OpenCV", "JWT Auth", "CRUD & Pagination"],
  },
  {
    icon: Brain,
    title: "Generative AI & LLMs",
    skills: ["LangChain", "LangGraph", "RAG", "Agentic AI Workflows", "FAISS", "HuggingFace Embeddings", "Prompt Engineering", "Semantic Search", "Text Summarization", "Pinecone"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Microsoft Azure", "Azure Functions", "Azure API Management", "Azure Container Instances", "Azure Blob Storage", "Azure AD B2C", "Docker", "GitHub Actions", "Azure DevOps Pipelines", "SendGrid"],
  },
  {
    icon: Database,
    title: "Data, ML & Tools",
    skills: ["PostgreSQL", "MongoDB", "Azure Cosmos DB", "Facebook Prophet", "LightGBM", "Git", "GitHub", "VS Code", "Cursor"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">WHAT I WORK WITH</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Skills & Technologies
          </h2>
          <div className="line-accent mt-4" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={item}
                className="glass-card-hover rounded-xl p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-md bg-secondary/80 text-secondary-foreground border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
