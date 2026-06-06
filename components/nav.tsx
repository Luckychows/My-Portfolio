"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Resume", "Contact"];

export function Nav() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 border-b border-white/[0.06] bg-black/25 backdrop-blur-md"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-xs font-semibold text-white transition hover:border-white/35"
        >
          LU
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/55 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 py-2 text-xs font-medium text-white transition hover:border-white/35 hover:bg-white/[0.04]"
        >
          Contact Me
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </motion.header>
  );
}
