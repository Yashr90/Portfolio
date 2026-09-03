"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { projectsData, ProjectCategory, Project } from "@/data/projects";
import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";

const categories: ProjectCategory[] = ["All", "Software", "Frontend", "AI/ML", "GenAI", "Data"];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) =>
    project.category.includes(filter)
  );

  return (
    <section id="projects" className="py-24 relative min-h-screen">
      <div className="container px-6">
        <SectionHeader number="04" title="Selected Projects" />
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col group overflow-hidden border-zinc-800 hover:border-zinc-600 transition-colors duration-500">
                  <CardContent className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-4xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors">
                        {project.number}
                      </span>
                      {project.status && (
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 mb-6 flex-grow leading-relaxed text-sm">
                      {project.shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs font-mono text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs font-mono text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-zinc-800/50">
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center text-sm font-medium text-white group/btn"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </motion.button>
                    </div>
                  </CardContent>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col z-10"
            >
              <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/50">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-zinc-500 font-mono text-sm">{selectedProject.number}</span>
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    {selectedProject.problem && (
                      <div>
                        <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-3">The Problem</h4>
                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                          {selectedProject.problem}
                        </p>
                      </div>
                    )}
                    
                    {selectedProject.approach && (
                      <div>
                        <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-3">The Approach</h4>
                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                          {selectedProject.approach}
                        </p>
                      </div>
                    )}
                    
                    {selectedProject.pipeline && (
                      <div>
                        <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">Technical Pipeline</h4>
                        <div className="flex flex-wrap items-center gap-2">
                          {selectedProject.pipeline.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-md text-sm text-zinc-200 shadow-sm">
                                {step}
                              </div>
                              {idx < selectedProject.pipeline!.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-zinc-600" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="tech">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-zinc-800 flex flex-col gap-3">
                      {selectedProject.githubUrl && (
                        <Button variant="outline" className="w-full justify-start border-zinc-700" asChild>
                          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Source
                          </a>
                        </Button>
                      )}
                      
                      {selectedProject.liveUrl && (
                        <Button variant="default" className="w-full justify-start bg-white text-black hover:bg-zinc-200" asChild>
                          <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
