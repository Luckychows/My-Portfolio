import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#e5f3ff",
        cyan: {
          neon: "#22d3ee",
        },
        blue: {
          electric: "#2f7df6",
        },
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Satoshi", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.24)",
        purple: "0 0 48px rgba(168, 85, 247, 0.22)",
        red: "0 0 40px rgba(239, 68, 68, 0.24)",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(34,211,238,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.08) 1px, transparent 1px)",
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      keyframes: {
        "glitch-scan": {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-8px)" },
          "40%": { transform: "translateY(4px)" },
          "60%": { transform: "translateY(-2px)" },
          "80%": { transform: "translateY(6px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "glitch-scan": "glitch-scan 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
