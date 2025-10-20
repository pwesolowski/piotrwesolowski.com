import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        brand: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f2f4f7",
          foreground: "#475467",
        },
        dark: {
          DEFAULT: "#0f172a",
          foreground: "#e2e8f0",
        },
      },
      boxShadow: {
        soft: "0 18px 40px -18px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

