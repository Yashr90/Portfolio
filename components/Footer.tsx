"use client";

import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-zinc-800 bg-zinc-950">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-1">Yash Rajpurohit</h2>
          <p className="text-sm text-zinc-500">Software Engineer • Full Stack • AI/ML</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/Yashr90" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yash-rajpurohit-71825a200/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:rajpurohityash902@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-sm text-zinc-600">
            © 2026 Yash Rajpurohit
          </span>
          <button 
            onClick={scrollToTop}
            className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
