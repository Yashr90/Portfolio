"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Code2, BrainCircuit, Database, Server } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

const cards = [
  {
    title: "Software Engineering",
    description: "Building robust, scalable frontend and full-stack applications with React, Next.js, and modern TypeScript architectures.",
    icon: Code2,
    number: "01"
  },
  {
    title: "AI / Machine Learning",
    description: "Developing intelligent models, NLP pipelines, and generative AI solutions using Python, Scikit-learn, and LangChain.",
    icon: BrainCircuit,
    number: "02"
  },
  {
    title: "Data & Analytics",
    description: "Cleaning, processing, and analyzing complex datasets to extract actionable insights and train predictive models.",
    icon: Database,
    number: "03"
  },
  {
    title: "Cloud / DevOps Fundamentals",
    description: "Deploying and managing applications using Linux, Docker, Git, and fundamental CI/CD practices.",
    icon: Server,
    number: "04"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <SectionHeader number="01" title="About" />
        
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight max-w-3xl"
          >
            Building products, not just projects.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
          >
            Currently pursuing a Master's in Computer Applications specializing in Generative AI. 
            My background spans frontend development, machine learning, data analysis, and DevOps fundamentals. 
            I focus on bridging the gap between complex AI models and intuitive user interfaces.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Card className="h-full group hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-zinc-900 text-zinc-300 group-hover:text-white group-hover:bg-zinc-800 transition-colors">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono text-zinc-600 font-medium">{card.number}</span>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-3">{card.title}</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
