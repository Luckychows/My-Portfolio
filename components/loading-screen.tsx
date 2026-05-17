"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto size-16 rounded-full border border-cyan-300/40 border-t-cyan-200"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p className="mt-6 font-mono text-sm text-cyan-100" animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 1.2, repeat: Infinity }}>
              initializing security console
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
