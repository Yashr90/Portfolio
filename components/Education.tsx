"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { educationData } from "@/data/education";
import { certificationsData } from "@/data/certifications";
import { Card, CardContent } from "./ui/Card";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-zinc-950">
      <div className="container px-6">
        <SectionHeader number="05" title="Education & Certifications" />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-zinc-400" />
              <h3 className="text-2xl font-medium text-white">Education</h3>
            </div>
            
            <div className="relative border-l border-zinc-800 ml-3 md:ml-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-10 relative pl-8 md:pl-10 last:mb-0"
                >
                  <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-zinc-600 ring-4 ring-zinc-950" />
                  
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                  <div className="text-zinc-300 font-medium mb-2">{edu.institution}</div>
                  
                  {edu.specialization && (
                    <div className="text-sm text-zinc-400 mb-2">
                      Specialization: <span className="text-zinc-200">{edu.specialization}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 text-sm text-zinc-500 font-mono mt-3">
                    <span>{edu.date}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-zinc-400" />
              <h3 className="text-2xl font-medium text-white">Certifications</h3>
            </div>
            
            <div className="grid gap-4">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:border-zinc-700 transition-colors duration-300 bg-zinc-900/30">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <Award className="w-5 h-5 text-zinc-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{cert.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
