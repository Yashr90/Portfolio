"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { Download, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI/ML Engineer",
  "Generative AI Developer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-zinc-300 font-medium">Available for Opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Yash Rajpurohit
          </h1>
          
          <div className="h-12 md:h-16 mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed">
            I build scalable web experiences and intelligent applications at the intersection of software engineering, data, and AI.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild variant="premium" size="lg">
              <Link href="#projects">
                View Projects
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="premiumOutline" size="lg">
              <Link href="#resume">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-2 border border-zinc-800 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-6 border border-dashed border-zinc-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="absolute inset-10 rounded-full overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src="/images/yash-profile.jpg"
                alt="Yash Rajpurohit"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 glass px-4 py-2 rounded-full flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-mono text-zinc-200">React & Next.js</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-0 glass px-4 py-2 rounded-full flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-xs font-mono text-zinc-200">AI / ML</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
