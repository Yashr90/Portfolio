export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Figma"],
  },
  {
    name: "Backend / Programming",
    skills: ["Python", "JavaScript", "SQL", "Node.js"],
  },
  {
    name: "AI / Machine Learning",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "NLTK", "Matplotlib", "Seaborn"],
  },
  {
    name: "Machine Learning Concepts",
    skills: ["NLP", "Feature Engineering", "Regression", "Classification", "Model Evaluation"],
  },
  {
    name: "Generative AI",
    skills: ["LLM APIs", "Prompt Engineering", "LangChain", "Vector Databases", "RAG"],
  },
  {
    name: "DevOps / Infrastructure",
    skills: ["Linux", "Docker", "Git", "GitHub", "GitHub Actions", "Jenkins (Fundamentals)", "AWS (Fundamentals)", "Terraform (Fundamentals)", "Ansible (Fundamentals)", "Kubernetes (Fundamentals)", "Bash"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "SQL", "Vector Databases"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Figma"],
  }
];
