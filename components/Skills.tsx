"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { Badge } from "./ui/Badge";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-zinc-950">
      <div className="container px-6">
        <SectionHeader number="02" title="Skills" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-6 pb-4 border-b border-zinc-800">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="tech" className="text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
