"use client";

import { motion } from "framer-motion";

const links = ["about", "skills", "projects", "experience", "resume", "contact"];

export function Nav() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 px-4 py-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-3">
        <a href="#home" className="font-display text-sm font-semibold text-white">LU</a>
        <div className="hidden gap-1 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="rounded-full px-3 py-2 text-xs font-medium capitalize text-slate-300 transition hover:bg-white/[0.08] hover:text-cyan-100">
              {link}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950 shadow-glow">
          Hire signal
        </a>
      </nav>
    </motion.header>
  );
}
