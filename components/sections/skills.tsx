"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { resume } from "@/src/data/resume";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-200">Skills</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-6xl">Interactive security capability map.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {resume.skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.category} delay={index * 0.04}>
                <SpotlightCard className="h-full">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-md bg-red-300/10 p-3 text-red-200">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-sm text-slate-400">{group.level}%</span>
                  </div>
                  <h3 className="font-display text-xl text-white">{group.category}</h3>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-red-400 to-orange-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${group.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15 }}
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
