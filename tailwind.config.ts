import type { Config } from "tailwindcss";
import { createPreset } from "fumadocs-ui/tailwind-plugin";

const config: Config = {
  presets: [createPreset()],
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05080F",
        surface: {
          DEFAULT: "#0A1020",
          raised: "#0E1626",
          glass: "rgba(15, 23, 42, 0.55)",
        },
        border: {
          DEFAULT: "rgba(148, 163, 184, 0.12)",
          strong: "rgba(148, 163, 184, 0.22)",
        },
        foreground: "#E7ECF6",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "#7C8AA8",
        electric: {
          DEFAULT: "#3D7FFF",
          bright: "#5EA6FF",
          dim: "#1E3A6E",
          glow: "#00D4FF",
        },
        amber: {
          DEFAULT: "#E8B65C",
          bright: "#F5CC7F",
          dim: "#7A5A24",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-noto)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,8,15,0.9) 85%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(61, 127, 255, 0.45)",
        "glow-amber": "0 0 30px -8px rgba(232, 182, 92, 0.4)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        scan: "scan 6s linear infinite",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
