"use client";

export function CyberBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      {/* Pure black base — blends with GIF edges */}
      <div className="absolute inset-0 bg-black" />

      {/* Layer 1 — fixed centred hacker GIF */}
      <img
        src="/BG.gif"
        alt=""
        className="fixed left-1/2 top-1/2 z-[1] h-auto w-[min(96vw,720px)] max-h-[min(88vh,920px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.72]"
        draggable={false}
      />

      {/* Layer 2 — subtle vignette for text contrast, stays black at edges */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_75%_at_50%_50%,transparent_0%,rgba(0,0,0,0.35)_65%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      {/* Minimal ambient */}
      <div className="absolute inset-0 z-[3] bg-cyber-grid bg-[size:80px_80px] opacity-[0.015]" />
    </div>
  );
}
