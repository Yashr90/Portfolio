export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  technologies: string[];
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    id: "e-tech-intern",
    role: "Frontend Developer Intern",
    company: "E-Tech Services Pvt. Ltd.",
    location: "Gurugram, Haryana",
    date: "April 2026 – June 2026",
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "Git"],
    responsibilities: [
      "Converted UI/UX designs into responsive cross-device web interfaces.",
      "Debugged and optimized existing pages for performance and consistency.",
      "Collaborated with designers and backend developers.",
      "Worked in a small team environment.",
      "Used Git-based version control.",
      "Maintained modular and reusable code."
    ]
  }
];
