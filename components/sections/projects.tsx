"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers3, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { Button } from "@/components/ui/button";
import { resume } from "@/src/data/resume";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Projects</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold text-white sm:text-6xl">
            Built like products, explained like security work.
          </h2>
        </Reveal>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <Layers3 className="size-5 text-cyan-200" />
            <h3 className="font-display text-2xl text-white">Major Projects</h3>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {resume.majorProjects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.08}>
                <Dialog.Root>
                  <SpotlightCard className="group min-h-[520px] p-0">
                    <div className="relative overflow-hidden rounded-t-lg border-b border-white/10 p-7">
                      <div className={`absolute inset-0 opacity-35 ${project.accent === "cyan" ? "bg-cyan-400/20" : "bg-violet-500/20"}`} />
                      <motion.div
                        className="absolute -right-16 -top-16 size-56 rounded-full bg-cyan-300/20 blur-3xl"
                        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                      <div className="relative">
                        <p className="text-sm text-cyan-100">{project.period}</p>
                        <h3 className="mt-4 font-display text-4xl font-semibold text-white">{project.name}</h3>
                        <p className="mt-4 max-w-xl leading-7 text-slate-300">{project.summary}</p>
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-50">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                        {project.bullets.slice(0, 3).map((bullet) => (
                          <li key={bullet} className="border-l border-cyan-300/30 pl-4">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 flex flex-wrap gap-3">
                        <Button asChild variant="secondary">
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="size-4" />
                            GitHub
                          </a>
                        </Button>
                        <Button asChild variant="secondary">
                          <a href="#contact">
                            <ExternalLink className="size-4" />
                            Live demo soon
                          </a>
                        </Button>
                        <Dialog.Trigger asChild>
                          <Button variant="primary">Details</Button>
                        </Dialog.Trigger>
                      </div>
                    </div>
                  </SpotlightCard>
                  <ProjectModal project={project} />
                </Dialog.Root>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <Layers3 className="size-5 text-violet-200" />
            <h3 className="font-display text-2xl text-white">Minor Projects</h3>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {resume.minorProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.name} delay={index * 0.06}>
                  <SpotlightCard className="h-full">
                    <div className="rounded-md bg-violet-400/10 p-3 text-violet-200 w-fit">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-white">{project.name}</h3>
                    <p className="mt-4 min-h-28 text-sm leading-6 text-slate-300">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button asChild className="mt-7 w-full" variant="secondary">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="size-4" />
                        GitHub
                      </a>
                    </Button>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project }: { project: (typeof resume.majorProjects)[number] }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl" />
      <Dialog.Content className="glass fixed left-1/2 top-1/2 z-50 max-h-[86vh] w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Dialog.Title className="font-display text-3xl text-white">{project.name}</Dialog.Title>
            <Dialog.Description className="mt-3 text-slate-300">{project.summary}</Dialog.Description>
          </div>
          <Dialog.Close className="rounded-full border border-white/10 p-2 text-slate-300 hover:text-white" aria-label="Close project details">
            <X className="size-5" />
          </Dialog.Close>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-50">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-7 space-y-4">
          {project.bullets.map((bullet) => (
            <p key={bullet} className="rounded-md border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
              {bullet}
            </p>
          ))}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
