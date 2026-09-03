"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Linkedin } from "@/components/icons";
import { Card, CardContent } from "./ui/Card";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative bg-zinc-950">
      <div className="container px-6">
        <SectionHeader number="07" title="Contact" />
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something useful.</h3>
            <p className="text-xl text-zinc-400 mb-12">
              Have a project, opportunity, or idea? Let's talk.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:rajpurohityash902@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="p-4 bg-zinc-900 rounded-full group-hover:bg-zinc-800 transition-colors">
                  <Mail className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg">rajpurohityash902@gmail.com</span>
              </a>
              
              <a href="tel:8302366862" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="p-4 bg-zinc-900 rounded-full group-hover:bg-zinc-800 transition-colors">
                  <Phone className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg">8302366862</span>
              </a>
              
              <a href="https://www.linkedin.com/in/yash-rajpurohit-71825a200/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="p-4 bg-zinc-900 rounded-full group-hover:bg-zinc-800 transition-colors">
                  <Linkedin className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg">LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                      placeholder="How can we work together?"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full h-12 bg-white text-black hover:bg-zinc-200 text-base font-medium"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : status === "success" ? (
                      <span className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        Message Sent
                      </span>
                    ) : status === "error" ? (
                      <span className="flex items-center gap-2 text-red-600">
                        <AlertCircle className="w-5 h-5" />
                        {errorMessage}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
