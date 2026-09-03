export interface Education {
  id: string;
  degree: string;
  institution: string;
  specialization?: string;
  date: string;
  location: string;
}

export const educationData: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications",
    institution: "Alliance University",
    specialization: "Generative AI",
    date: "2024–2026",
    location: "Bengaluru, India"
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications",
    institution: "Lachoo Memorial College of Science (Autonomous)",
    date: "2021–2024",
    location: "Jodhpur, India"
  }
];
