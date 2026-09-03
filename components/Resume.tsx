"use client";

import { SectionHeader } from "./ui/SectionHeader";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container px-6 flex flex-col items-center">
        <SectionHeader number="06" title="Resume" className="w-full" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl w-full flex flex-col items-center text-center mt-8"
        >
          <div className="p-4 bg-zinc-900/50 rounded-full mb-6 border border-zinc-800">
            <FileText className="w-12 h-12 text-zinc-400" />
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Want the complete picture?
          </h3>
          <p className="text-lg text-zinc-400 mb-10 max-w-lg">
            Download my full resume to get a detailed overview of my professional experience, skills, and educational background.
          </p>

          <motion.a 
            href="/resumes/Software_Engineer.pdf"
            download="Yash_Rajpurohit_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
