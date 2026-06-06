"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { resume } from "@/src/data/resume";

const technologies = ["AWS", "Python", "Splunk", "Sentinel", "Linux", "Docker"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col px-5 pb-28 pt-28 sm:px-8 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-start gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:pt-6"
        >
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-red-500" />
            </span>
            Cybersecurity Student
          </div>

          <h1 className="font-display text-[clamp(2.4rem,7vw,4.75rem)] font-semibold uppercase leading-[0.92] tracking-[-0.02em] text-white">
            Luckychowdary
            <span className="block">Uppalapati</span>
          </h1>

          <p className="mt-5 font-display text-base text-white/85 sm:text-lg">
            SOC Operations | Cloud Security | Automation
          </p>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-[15px] sm:leading-8">
            {resume.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resume.resumeFile}
              download
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              <Download className="size-4" />
              Resume
            </a>

            <a
              href="https://github.com/Luckychows"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 bg-black/50 px-6 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-black/70"
            >
              <Github className="size-4" />
              GitHub
            </a>

            <a
              href={resume.socials[1].href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 bg-black/50 px-6 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-black/70"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full lg:justify-self-end lg:pt-2"
        >
          <div className="terminal-panel w-full max-w-md lg:ml-auto">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>

              <span className="font-mono text-xs text-red-400">bash</span>
            </div>

            <div className="space-y-5 font-mono text-[13px] leading-relaxed text-white/75">
              <div>
                <p className="text-red-400/90">$ whoami</p>
                <p className="mt-1 text-white/80">
                  luckychowdary | Cybersecurity Student
                </p>
              </div>

              <div>
                <p className="text-red-400/90">$ focus --roles</p>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {resume.targets.map((target) => (
                    <span
                      key={target}
                      className="rounded-md border border-white/10 bg-black/45 px-3 py-2 text-[11px] text-white/70 transition hover:border-white/20 hover:text-white/90"
                    >
                      {target}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-red-400/90">$ status</p>
                <p className="mt-1 text-emerald-400">
                  available_for_internships=true
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-16 grid w-full max-w-7xl gap-8 lg:mt-auto lg:grid-cols-[1fr_auto] lg:items-end lg:gap-6">
        <div className="hidden lg:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
            Trusted by technologies
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[11px] text-white/45 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          className="mx-auto flex flex-col items-center gap-3 text-white/50 transition hover:text-white/80"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">
            Scroll
          </span>

          <span className="flex size-11 items-center justify-center rounded-full border border-red-500/35 bg-red-500/10 text-red-300 backdrop-blur-sm">
            <ArrowDown className="size-4" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}