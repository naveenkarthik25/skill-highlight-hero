import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Frameworks",
    skills: ["Python", "FastAPI", "Flask", "Django", "REST APIs", "OpenCV"],
  },
  {
    title: "Generative AI & LLMs",
    skills: ["LangChain", "LangGraph", "RAG", "FAISS", "HuggingFace", "Prompt Engineering", "Semantic Search"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Microsoft Azure", "Azure Functions", "Docker", "GitHub Actions", "Azure DevOps", "CI/CD", "SendGrid"],
  },
  {
    title: "Databases & ML",
    skills: ["PostgreSQL", "MongoDB", "Azure Cosmos DB", "Pinecone", "Facebook Prophet", "LightGBM"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary font-mono text-lg">02.</span> Skills
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-all duration-300 box-glow"
            >
              <h3 className="font-mono text-primary text-sm mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
