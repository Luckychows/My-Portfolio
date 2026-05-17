"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resume } from "@/src/data/resume";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 py-28 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
            SOC-ready cloud security portfolio
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {resume.name.split(" ")[0]}
            <span className="block text-gradient">{resume.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <div className="mt-6 h-8 overflow-hidden font-display text-xl text-cyan-100 sm:text-2xl">
            <motion.div animate={{ y: ["0%", "-33.33%", "-66.66%", "0%"] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
              <p>{resume.headline}</p>
              <p>Detection Engineering + AWS Security Automation</p>
              <p>Building AI-assisted security operations platforms</p>
            </motion.div>
          </div>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{resume.summary}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href={resume.resumeFile} download>
                <Download className="size-4" />
                Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="https://github.com/Luckychows" target="_blank" rel="noreferrer">
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={resume.socials[1].href} target="_blank" rel="noreferrer">
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="glass relative overflow-hidden rounded-lg p-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex gap-2">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-yellow-300" />
            <span className="size-3 rounded-full bg-green-400" />
          </div>
          <div className="space-y-4 font-mono text-sm text-slate-300">
            <p className="text-cyan-200">$ whoami</p>
            <p>{resume.headline}</p>
            <p className="text-cyan-200">$ focus --roles</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {resume.targets.map((target) => (
                <span key={target} className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
                  {target}
                </span>
              ))}
            </div>
            <p className="text-cyan-200">$ status</p>
            <p className="text-emerald-300">available_for_internships=true</p>
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/15 p-3 text-cyan-100"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
