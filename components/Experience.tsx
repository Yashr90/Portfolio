"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { experienceData } from "@/data/experience";
import { Badge } from "./ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6">
        <SectionHeader number="03" title="Experience" />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-zinc-800 ml-4 md:ml-0">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 relative pl-8 md:pl-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-zinc-600 ring-4 ring-zinc-950" />
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                  <span className="text-zinc-500 font-mono text-sm mt-1 md:mt-0">{exp.date}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-zinc-300 font-medium">{exp.company}</span>
                  <span className="text-zinc-600 text-sm">•</span>
                  <span className="text-zinc-400 text-sm">{exp.location}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-zinc-400 text-sm md:text-base leading-relaxed flex items-start">
                      <span className="text-zinc-600 mr-3 mt-1.5">-</span>
                      {resp}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="border-zinc-800 text-zinc-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
