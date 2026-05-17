"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { resume } from "@/src/data/resume";

export function TerminalSection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <Reveal>
        <div className="glass mx-auto max-w-5xl overflow-hidden rounded-lg">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-yellow-300" />
            <span className="size-3 rounded-full bg-green-400" />
            <span className="ml-3 font-mono text-xs text-slate-400">soc-playbook.sh</span>
          </div>
          <div className="space-y-4 p-6 font-mono text-sm text-slate-300">
            {resume.terminalLines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.18 }}
              >
                <span className="text-cyan-300">$</span> {line}
              </motion.p>
            ))}
            <motion.p className="text-emerald-300" animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 1.4, repeat: Infinity }}>
              analyst_output: ready
            </motion.p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
