"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 34 });
  const springY = useSpring(y, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
    };
    const over = (event: Event) => setHovered(Boolean((event.target as HTMLElement).closest("a,button,[data-cursor='hover']")));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden size-8 rounded-full border border-cyan-200/70 mix-blend-screen md:block"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovered ? 1.9 : 1, opacity: hovered ? 0.55 : 0.9 }}
      transition={{ duration: 0.18 }}
    />
  );
}
