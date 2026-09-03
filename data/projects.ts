export type ProjectCategory = "All" | "Software" | "Frontend" | "AI/ML" | "GenAI" | "Data";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory[];
  shortDescription: string;
  technologies: string[];
  problem?: string;
  approach?: string;
  pipeline?: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "documind",
    number: "01",
    title: "DocuMind",
    category: ["All", "AI/ML", "GenAI", "Software"],
    shortDescription: "A retrieval-augmented generation system that allows users to upload documents and ask natural-language questions.",
    technologies: ["Python", "LangChain", "Vector Database", "LLM API", "React"],
    problem: "Users need a way to quickly extract verified information from large documents without reading them entirely, but traditional search is limited to exact keywords, and standard LLMs hallucinate or lack context.",
    approach: "Built a RAG pipeline that chunks documents, embeds them into a vector space, retrieves relevant context upon a user query, and synthesizes an accurate answer citing the source text.",
    pipeline: ["Document", "Chunking", "Embeddings", "Vector Search", "Retrieval", "LLM", "Cited Answer"],
    status: "In Progress"
  },
  {
    id: "spam-classifier",
    number: "02",
    title: "Email/SMS Spam Classifier",
    category: ["All", "AI/ML", "Data", "Software"],
    shortDescription: "Text classification pipeline for detecting spam messages using multiple ML models.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Pickle", "HTML", "CSS", "JavaScript"],
    problem: "Inboxes are often cluttered with spam and malicious messages that disrupt user experience and pose security risks.",
    approach: "Developed a text classification system that preprocesses text (tokenization, stemming, TF-IDF) and applies trained ML models to accurately classify messages as spam or ham, evaluating precision, recall, and accuracy.",
    pipeline: ["Raw Text", "Tokenization", "Stopword Removal", "Stemming", "TF-IDF", "Classification", "Prediction"]
  },
  {
    id: "laptop-price-predictor",
    number: "03",
    title: "Laptop Price Predictor",
    category: ["All", "AI/ML", "Data", "Software"],
    shortDescription: "Machine-learning regression application that estimates laptop prices from hardware specifications.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Pickle", "React"],
    problem: "Consumers and retailers struggle to accurately price laptops in a rapidly changing market with varying component configurations.",
    approach: "Trained a regression model on a cleaned and encoded dataset of laptop specifications. The model processes user inputs (brand, CPU, RAM, etc.) and provides an estimated price in real-time.",
    pipeline: ["Laptop Specs", "Data Cleaning", "Encoding", "Outlier Handling", "Regression Model", "Price Prediction"]
  },
  {
    id: "landing-page-suite",
    number: "04",
    title: "Modern Landing Page Template Suite",
    category: ["All", "Frontend", "Software"],
    shortDescription: "Collection of reusable landing-page templates with modular UI sections and a bubble-game to-do-list component.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    problem: "Developers and businesses need high-quality, customizable, and responsive landing pages to launch products quickly without starting from scratch.",
    approach: "Designed and developed a suite of modular, accessible, and responsive React templates that can be easily adapted for various business use cases."
  },
  {
    id: "streaming-platform-ui",
    number: "05",
    title: "Streaming Platform UI",
    category: ["All", "Frontend", "Software"],
    shortDescription: "Streaming platform interface designed in Figma and rebuilt in React using component-based architecture.",
    technologies: ["Figma", "HTML", "CSS", "Tailwind CSS", "React"],
    problem: "Modern streaming services require highly intuitive, fast, and visually engaging interfaces to retain users.",
    approach: "Prototyped a sleek user interface in Figma, then implemented it using React and Tailwind CSS, focusing on responsive design, component reusability, and modern styling."
  }
];
