"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resume } from "@/src/data/resume";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 py-28 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass mb-6 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-200">
            Cybersecurity Professional
          </div>
          <h1 className="font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {resume.name}
          </h1>
          <div className="mt-6 h-8 overflow-hidden font-display text-lg text-red-100/80 sm:text-xl">
            <motion.div animate={{ y: ["0%", "-33.33%", "-66.66%", "0%"] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
              <p>SOC Operations &amp; Detection Engineering</p>
              <p>Cloud Security &amp; AWS Automation</p>
              <p>Open to Security Internships</p>
            </motion.div>
          </div>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{resume.summary}</p>
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

        {/* Right: Terminal — top aligned */}
        <motion.div
          className="w-full lg:pt-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass rounded-xl p-6">
            <div className="mb-4 flex gap-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-300" />
              <span className="size-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-200">
              <p className="text-red-300">$ whoami</p>
              <p>{resume.headline}</p>
              <p className="text-red-300">$ focus --roles</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {resume.targets.map((target) => (
                  <span key={target} className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-xs">
                    {target}
                  </span>
                ))}
              </div>
              <p className="text-red-300">$ status</p>
              <p className="text-emerald-300">available_for_internships=true</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/30 p-3 text-red-300 backdrop-blur-sm transition hover:text-red-200"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
