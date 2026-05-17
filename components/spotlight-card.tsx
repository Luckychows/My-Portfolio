"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn("glass spotlight rounded-lg p-6", className)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
