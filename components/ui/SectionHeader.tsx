"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeader({ number, title, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("flex items-center gap-4 mb-12", className)}
    >
      <div className="flex items-baseline gap-2">
        <span className="text-zinc-500 font-mono text-sm tracking-wider">
          {number} /
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 uppercase">
          {title}
        </h2>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-zinc-800 to-transparent flex-grow ml-4" />
    </motion.div>
  );
}
