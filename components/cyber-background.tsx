"use client";

import { useEffect, useState } from "react";

const BG_IMAGE = "/BG1.jpg";

export function CyberBackground() {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let glitchTimeoutId: ReturnType<typeof setTimeout>;

    const scheduleGlitch = () => {
      const delay = 2000 + Math.random() * 1000;
      timeoutId = setTimeout(() => {
        setGlitching(true);
        glitchTimeoutId = setTimeout(() => setGlitching(false), 480);
        scheduleGlitch();
      }, delay);
    };

    scheduleGlitch();
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(glitchTimeoutId);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Layer 1 — fixed centred figure with periodic glitch */}
      <div className={`glitch-figure ${glitching ? "is-glitching" : ""}`}>
        <img src={BG_IMAGE} alt="" className="glitch-figure__base" draggable={false} />
        <img src={BG_IMAGE} alt="" className="glitch-figure__hoodie-red" draggable={false} />
        <img src={BG_IMAGE} alt="" className="glitch-figure__channel glitch-figure__channel--red" draggable={false} />
        <img src={BG_IMAGE} alt="" className="glitch-figure__channel glitch-figure__channel--cyan" draggable={false} />
      </div>

      {/* Always-on scan lines + static */}
      <div className="bg-scanlines absolute inset-0 z-[2] opacity-[0.12]" />
      <div className="bg-static absolute inset-0 z-[2] opacity-[0.04]" />

      {/* Layer 2 — soft edge vignette only */}
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(ellipse_92%_78%_at_50%_50%,transparent_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.82)_100%)]" />
    </div>
  );
}
